"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  TextField,
  IconButton,
  Pagination,
  Modal,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material"
import { Edit, Delete, Visibility, Add } from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search"
import { InputAdornment } from "@mui/material"
import Swal from "sweetalert2"
import { apiBaseURL } from "../../../config/route.config"
import axios from "axios"

interface Candidate {
  userId: string
  fullName: string
  email: string
  permanentAddress: string
  primaryJobPreference: string
  phone: string
  coverImage: string
  status: number
}

const AllCandidates: React.FC = () => {
  const [search, setSearch] = useState("")
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [, setCoverImage] = useState<File | null>(null)
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([])
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [selectedCandidates, setSelectedCandidates] = useState<Candidate | null>(null)
  const [updatedCandidate, setUpdatedCandidate] = useState<Candidate | null>(null)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isCreating] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
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

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`${apiBaseURL}/personalDetails/get`)
        const result = await response.json()
        if (result.success) {
          setCandidates(result.data)
          setFilteredCandidates(result.data)
        } else {
          console.error("Failed to fetch candidates")
        }
      } catch (error) {
        console.error("Error fetching candidates:", error)
      }
    }

    fetchCandidates()
  }, [])

  const handleRowClick = (candidate: Candidate) => {
    setSelectedCandidates(candidate)
    setDetailsOpen(true)
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCoverImage(e.target.files[0])
    }
  }

  const handleCloseDetails = () => {
    setDetailsOpen(false)
    setSelectedCandidates(null)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase()
    setSearch(searchValue)
    setFilteredCandidates(candidates.filter((candidate) => candidate.fullName.toLowerCase().includes(searchValue)))
  }

  const handleEditClick = (candidate: Candidate) => {
    setSelectedCandidates(candidate)
    setUpdatedCandidate({ ...candidate })
    setOpenEditDialog(true)
  }

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false)
    setSelectedCandidates(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (updatedCandidate) {
      setUpdatedCandidate({
        ...updatedCandidate,
        [name]: value,
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleUpdate = async () => {
    if (!updatedCandidate) return

    try {
      const response = await fetch(`${apiBaseURL}/personalDetails/update/${updatedCandidate?.userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCandidate),
      })
      const result = await response.json()

      if (result.success) {
        setCandidates((prevCandidates) =>
          prevCandidates.map((candidate) =>
            candidate.userId === updatedCandidate.userId ? updatedCandidate : candidate,
          ),
        )
        setFilteredCandidates((prevCandidates) =>
          prevCandidates.map((candidate) =>
            candidate.userId === updatedCandidate.userId ? updatedCandidate : candidate,
          ),
        )
        Swal.fire({
          icon: "success",
          title: "Candidate Profile Updated Successfully",
          text: result.message || "The organization details have been updated.",
        })

        setOpenEditDialog(false)
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Update Candidate Profile",
          text: result.message || "An error occurred while updating the organization.",
        })
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error Updating Candidate Profile",
        text: error.message || "Something went wrong!",
      })
    }
  }

  const handleStatusChange = async (userId: string, value: any) => {
    try {
      const response = await fetch(`${apiBaseURL}/personalDetails/update/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: value }),
      })

      const result = await response.json()

      if (result.success) {
        setCandidates((prev) =>
          prev.map((candidates) =>
            candidates.userId === updatedCandidate?.userId ? { ...candidates, status: value } : candidates,
          ),
        )
        setFilteredCandidates((prev) =>
          prev.map((candidates) =>
            candidates.userId === updatedCandidate?.userId ? { ...candidates, status: value } : candidates,
          ),
        )

        Swal.fire({
          icon: "success",
          title: "Status Updated Successfully",
          text: result.message || "The Candidates status has been updated.",
        })
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Update Status",
          text: result.message || "An error occurred while updating the status.",
        })
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error Updating Status",
        text: error.message || "Something went wrong!",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
  
    const formDataToSend = new FormData();
    const coverImage = fileInputRef.current?.files?.[0] || null;
  
    // Append form data fields
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key as keyof typeof formData]);
    });
  
    // Append cover image if exists
    if (coverImage) {
      formDataToSend.append("coverImage", coverImage);
    }
  
    console.log("Submitting Form Data:", Object.fromEntries(formDataToSend.entries()));
  
    try {
      const response = await axios.post(`${apiBaseURL}/personaldetails/create`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      console.log("Create Personal Details Response:", response.data);
  
      setSuccess("User created successfully!");
      
      // Success Alert
      Swal.fire({
        icon: "success",
        title: "User Created Successfully",
        text: response.data.message || "The user details have been saved.",
      });
  
      // Reset Form Data (optional)
      setFormData({
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
      });
  
      fileInputRef.current!.value = ""; // Clear file input
  
    } catch (err: any) {
      console.error("Create Personal Details Error:", err);
  
      setError("Error creating user. Please try again.");
  
      // Error Alert
      Swal.fire({
        icon: "error",
        title: "Error Creating User",
        text: err.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };
  

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4">All Candidates</h1>

        {/* Search Bar */}
        <div className="mb-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        {/* Create Candidate Button */}
        <div className="mb-4 flex justify-end">
          <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleSubmit} />
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => handleOpen()}
            disabled={isCreating}
          >
            {isCreating ? "Creating..." : "Create Candidate"}
          </Button>
        </div>

        {/* Candidates List */}
        <div className="space-y-4">
          {filteredCandidates.map((candidate, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full shadow-lg shadow-gray-400">
                  <img
                    src={`${apiBaseURL}/userlogo/${candidate.coverImage}`}
                    alt="User Logo"
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    }}
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">{candidate.fullName}</div>
                  <div className="text-sm text-gray-500">{candidate.primaryJobPreference}</div>
                  <div className="text-sm text-gray-400">{candidate.permanentAddress}</div>
                  <div className="text-sm text-gray-400">Phone: {candidate.phone}</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <IconButton color="primary" onClick={() => handleRowClick(candidate)} style={{ cursor: "pointer" }}>
                  <Visibility />
                </IconButton>
                <IconButton color="primary" title="Edit" onClick={() => handleEditClick(candidate)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" title="Delete">
                  <Delete />
                </IconButton>
                <FormControl variant="outlined" size="small">
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={candidate.status} // Assuming org.status is 0 or 1
                    onChange={(e) => handleStatusChange(candidate.userId, e.target.value)}
                    label="Status"
                  >
                    <MenuItem value={1}>Active</MenuItem>
                    <MenuItem value={0}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          ))}
        </div>
        {selectedCandidates && (
          <Dialog open={detailsOpen} onClose={handleCloseDetails}>
            <DialogTitle>Candidates Details</DialogTitle>
            <DialogContent>
              <p>
                <strong>Full Name:</strong> {selectedCandidates.fullName}
              </p>
              <p>
                <strong>Email:</strong> {selectedCandidates.email}
              </p>
              <p>
                <strong>Permanent Address:</strong> {selectedCandidates.permanentAddress}
              </p>
              <p>
                <strong>Primary Job Preference:</strong> {selectedCandidates.primaryJobPreference}{" "}
              </p>
              <p>
                <strong>Pone:</strong> {selectedCandidates.phone}{" "}
              </p>
              <p>
                <strong> User Id:</strong> {selectedCandidates.userId}{" "}
              </p>
              {/* Add more job details as needed */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDetails} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        )}

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <Pagination count={3} color="primary" />
        </div>
      </div>

      {/* Edit Candidate Modal */}
      <Modal open={openEditDialog} onClose={handleCloseEditDialog}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: 400,
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Edit Candidate</h2>
          {updatedCandidate && (
            <div>
              <TextField
                label="Full Name"
                name="fullName"
                value={updatedCandidate.fullName}
                onChange={handleInputChange}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Email"
                name="email"
                value={updatedCandidate.email}
                onChange={handleInputChange}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Phone"
                name="phone"
                value={updatedCandidate.phone}
                onChange={handleInputChange}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Permanent Address"
                name="permanentAddress"
                value={updatedCandidate.permanentAddress}
                onChange={handleInputChange}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Job Preference"
                name="primaryJobPreference"
                value={updatedCandidate.primaryJobPreference}
                onChange={handleInputChange}
                fullWidth
                className="mb-4"
              />

              <div className="flex justify-end">
                <Button onClick={handleCloseEditDialog} color="secondary" className="mr-2">
                  Cancel
                </Button>
                <Button onClick={handleUpdate} variant="contained" color="primary">
                  Update
                </Button>
              </div>
            </div>
          )}
        </Box>
      </Modal>

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
  )
}

export default AllCandidates

