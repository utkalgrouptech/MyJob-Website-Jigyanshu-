
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material"
import axios from "axios"
import { Eye, EyeOff } from "lucide-react"
import { apiBaseURL } from "../../../config/route.config"

export default function AdminAuthPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  })
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    bio: "",
    maritalStatus: "",
    gender: "",
    phone: "",
    permanentAddress: "",
    pin: "",
    primaryJobPreference: "",
    degreeType: "",
    specialization: "",
    collegeName: "",
    university: "",
    graduationYear: "",
    passingCGPA: "",
    passingPercentage: "",
    achievements: "",
    jobRole: "",
    companyName: "",
    experience: "",
    ctc: "",
    skill: "",
  })
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [organizationData, setOrganizationData] = useState({
    organizationName: "",
    email: "",
    password: "",
    address: "",
    description: "",
    phoneNo: "",
    website: "",
    socialMediaLink: "",
    industry: "",
    since: "",
    specialization: "",
  })
  const [logo, setLogo] = useState<File | null>(null)

  const [open, setOpen] = useState(false)
  const [loginType, setLoginType] = useState<"admin" | "user" | "Org">("admin")
  const [registerType, setRegisterType] = useState<"admin" | "organization" | "user">("admin")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCoverImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    const formDataToSend = new FormData()
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key as keyof typeof formData])
    })
    if (coverImage) {
      formDataToSend.append("coverImage", coverImage)
    }
    try {
      const response = await axios.post(`${apiBaseURL}/personaldetails/create`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      setSuccess("User created successfully!")
      console.log("Create Personal Details response:", response.data)
    } catch (err) {
      setError("Error creating user. Please try again.")
      console.error("Create Personal Details error:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterData((prev) => ({ ...prev, [name]: value }))
  }

  const handleOrganizationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setOrganizationData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLogo(e.target.files[0])
    }
  }

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const endpoint =
        loginType === "admin"
          ? `${apiBaseURL}/admin/login`
          : loginType === "user"
            ? `${apiBaseURL}/personalDetails/login`
            : `${apiBaseURL}/organizationDetails/login`

      console.log("loginType", loginType)
      const response = await axios.post(endpoint, loginData)
      console.log(`Login response:`, response.data)

      if (response.data.accessToken) {
        localStorage.setItem(`accessToken`, response.data.accessToken)
        localStorage.setItem(`userData`, JSON.stringify(response.data.data))
        setSuccess(`${loginType} login successful`)
        router.push(
          loginType === "admin"
            ? "/Employers/dashboard"
            : loginType === "user"
              ? "/Candidates/dashboard"
              : "/Employers/dashboard",
        )
      } else {
        throw new Error(`Invalid ${loginType} login response`)
      }
    } catch (error) {
      setError(`${loginType} login failed. Please check your credentials.`)
      console.error(`${loginType} Login error:`, error)
    } finally {
      setLoading(false)
    }
  }

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      if (registerType === "admin") {
        const response = await axios.post(`${apiBaseURL}/admin/create`, registerData)
        setSuccess("Admin account created successfully")
        console.log("Register response:", response.data)
      } else {
        const formData = new FormData()
        Object.entries(organizationData).forEach(([key, value]) => {
          formData.append(key, value)
        })
        if (logo) {
          formData.append("logo", logo)
        }
        const response = await axios.post(`${apiBaseURL}/organizationDetails/create`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        setSuccess("Organization created successfully")
        console.log("Create Organization response:", response)
      }
      setIsLogin(true)
    } catch (error) {
      setError(`${registerType} registration failed. Please try again.`)
      console.error(`${registerType} Register error:`, error)
    } finally {
      setLoading(false)
    }
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105">
        {/* <Button variant="contained" color="primary" onClick={handleOpen}>
          Open Form
        </Button> */}
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            {isLogin ? "Login" : "Create Account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <button
              onClick={() => {
                setIsLogin(!isLogin)
                setError("")
                setSuccess("")
              }}
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              {isLogin ? "create a new account" : "login to your account"}
            </button>
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{success}</span>
          </div>
        )}

        {isLogin ? (
          <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="loginType"
                    value="admin"
                    checked={loginType === "admin"}
                    onChange={() => setLoginType("admin")}
                  />
                  <span className="ml-2">Admin</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="loginType"
                    value="user"
                    checked={loginType === "user"}
                    onChange={() => setLoginType("user")}
                  />
                  <span className="ml-2">Candidate</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="loginType"
                    value="organization"
                    checked={loginType === "Org"}
                    onChange={() => setLoginType("Org")}
                  />
                  <span className="ml-2">Organization</span>
                </label>
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="login-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
                  placeholder="Email address"
                  value={loginData.email}
                  onChange={handleLoginChange}
                />
              </div>
              <div className="relative">
                <label htmlFor="login-password" className="sr-only">
                  Password
                </label>
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150 transform hover:scale-105 disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="registerType"
                    value="admin"
                    checked={registerType === "admin"}
                    onChange={() => setRegisterType("admin")}
                  />
                  <span className="ml-2">Admin</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="registerType"
                    value="organization"
                    checked={registerType === "organization"}
                    onChange={() => setRegisterType("organization")}
                  />
                  <span className="ml-2">Organization</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="registerType"
                    value="organization"
                    checked={registerType === "user"}
                    onChange={() => setRegisterType("user")}
                    onClick={handleOpen}
                  />
                  <span className="ml-2">User</span>
                </label>
              </div>
            </div>
            {registerType === "admin" ? (
              <form className="mt-8 space-y-6" onSubmit={handleRegisterSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                  {Object.entries(registerData).map(([key, value], index) => (
                    <div
                      key={key}
                      className={
                        index === 0
                          ? "rounded-t-md"
                          : index === Object.entries(registerData).length - 1
                            ? "rounded-b-md"
                            : ""
                      }
                    >
                      <label htmlFor={`register-${key}`} className="sr-only">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        id={`register-${key}`}
                        name={key}
                        type={
                          key === "email" ? "email" : key === "password" ? (showPassword ? "text" : "password") : "text"
                        }
                        autoComplete={key === "email" ? "email" : key === "password" ? "new-password" : "off"}
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={value}
                        onChange={handleRegisterChange}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150 transform hover:scale-105 disabled:opacity-50"
                  >
                    {loading ? "Creating Account..." : "Create Admin Account"}
                  </button>
                </div>
              </form>
            ) : (
              <form className="mt-8 space-y-6" onSubmit={handleRegisterSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                  {Object.entries(organizationData).map(([key, value], index) => (
                    <div
                      key={key}
                      className={
                        index === 0
                          ? "rounded-t-md"
                          : index === Object.entries(organizationData).length - 1
                            ? "rounded-b-md"
                            : ""
                      }
                    >
                      <label htmlFor={`org-${key}`} className="sr-only">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        id={`org-${key}`}
                        name={key}
                        type={
                          key === "email"
                            ? "email"
                            : key === "password"
                              ? showPassword
                                ? "text"
                                : "password"
                              : key === "since"
                                ? "date"
                                : "text"
                        }
                        autoComplete={key === "email" ? "email" : key === "password" ? "new-password" : "off"}
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
                        placeholder={
                          key.charAt(0).toUpperCase() +
                          key
                            .slice(1)
                            .replace(/([A-Z])/g, " $1")
                            .trim()
                        }
                        value={value}
                        onChange={handleOrganizationChange}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
                    Logo
                  </label>
                  <input
                    type="file"
                    id="logo"
                    name="logo"
                    onChange={handleLogoChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150 transform hover:scale-105 disabled:opacity-50"
                  >
                    {loading ? "Creating Organization..." : "Create Organization"}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
        <div>
          <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>Create Personal Details</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Middle Name"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                />
                <TextField
                  label="Marital Status"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Permanent Address"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="PIN"
                  name="pin"
                  value={formData.pin}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Primary Job Preference"
                  name="primaryJobPreference"
                  value={formData.primaryJobPreference}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Degree Type"
                  name="degreeType"
                  value={formData.degreeType}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="College Name"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="University"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Graduation Year"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Passing CGPA"
                  name="passingCGPA"
                  value={formData.passingCGPA}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Passing Percentage"
                  name="passingPercentage"
                  value={formData.passingPercentage}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Achievements"
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                />
                <TextField
                  label="Job Role"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="CTC"
                  name="ctc"
                  value={formData.ctc}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Skill"
                  name="skill"
                  value={formData.skill}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <input type="file" onChange={handleFileChange} className="mt-2 p-2 border rounded w-full" />
                <DialogActions>
                  <Button onClick={handleClose} color="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" color="primary" disabled={loading}>
                    Submit
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>
          {success && <p>{success}</p>}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  )
}


