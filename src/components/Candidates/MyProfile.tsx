"use client"

import type React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Email, Phone, Cake, Person, Favorite, Home, LocationOn, Work } from "@mui/icons-material"
import { Card, CardContent, Typography, CircularProgress, Grid, TextField, Button } from "@mui/material"
import { apiBaseURL } from "../../../config/route.config"

interface Profile {
  id: string
  firstName: string
  middleName?: string
  lastName: string
  email: string
  dob: string
  bio?: string
  maritalStatus: string
  gender: string
  phone: string
  permanentAddress: string
  pin: string
  primaryJobPreference: string
  image?: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    github?: string
    instagram?: string
  }
  educationalDetails: {
    degreeType: string
    specialization: string
    collegeName: string
    university: string
    graduationYear: string
    passingCGPA: number
    passingPercentage: number
    achievements?: string[]
  }
  professionalDetails: {
    jobRole: string
    companyName: string
    experience: number
    ctc: number
    skill: string[]
  }
}

const UserProfile = () => {

  const storedUserData = localStorage.getItem('userData');
  const storedUserId = storedUserData ? JSON.parse(storedUserData).userId : null;
  console.log("storedUserId", storedUserId);

  // const params = useParams()
  // const userId = params?.id as string | undefined
  const [id]= useState(storedUserId);
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [updatedProfile, setUpdatedProfile] = useState<Partial<Profile>>({})

  useEffect(() => {
    fetchProfile()
  }, []) // Removed userId from dependencies

  const fetchProfile = async () => {
    if (!id) {
      setError("No user ID provided")
      setLoading(false)
      return
    }

    try {
      const response = await axios.get(`${apiBaseURL}/personalDetails/get/${id}`)
      console.log("response", response);
      console.log("userId", id);
      
      
      if (response.data.success && response.data.data) {
        setProfile(response.data.data)
        console.log("profile", profile);
        setUpdatedProfile(response.data.data)
      } else {
        setError("Failed to fetch profile details: " + (response.data.msg || "Unknown error"))
      }
    } catch (err) {
      console.error("Error fetching profile:", err)
      setError("Failed to fetch profile details: " + (err instanceof Error ? err.message : String(err)))
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.put(`${apiBaseURL}/personalDetails/update/${id}`, updatedProfile)
      if (response.data.success) {
        setProfile(response.data.data)
        setIsEditing(false)
      } else {
        setError("Failed to update profile: " + (response.data.msg || "Unknown error"))
      }
    } catch (err) {
      console.error("Error updating profile:", err)
      setError("Failed to update profile: " + (err instanceof Error ? err.message : String(err)))
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </div>
    )
  }

  if (error) {
    return (
      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "#ffebee",
          borderRadius: "8px",
        }}
      >
        <Typography color="error" variant="h6">
          Error
        </Typography>
        <Typography>{error}</Typography>
      </div>
    )
  }

  if (!profile) {
    return (
      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "#e3f2fd",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6">No Profile Found</Typography>
        <Typography>The requested profile could not be found.</Typography>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Image
                src={profile.image || "/placeholder.svg?height=96&width=96"}
                alt={`${profile.firstName} ${profile.lastName}`}
                width={96}
                height={96}
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item xs>
              <Typography variant="h4">
                {profile.firstName} {profile.middleName} {profile.lastName}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {profile.professionalDetails?.jobRole || "No job role specified"}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {isEditing ? (
        <Card style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Edit Profile
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={updatedProfile.firstName || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={updatedProfile.lastName || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={updatedProfile.email || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={updatedProfile.phone || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    name="bio"
                    multiline
                    rows={4}
                    value={updatedProfile.bio || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <InfoItem icon={<Email />} label="Email" value={profile.email} />
              <InfoItem icon={<Phone />} label="Phone" value={profile.phone} />
              <InfoItem icon={<Cake />} label="Date of Birth" value={profile.dob} />
              <InfoItem icon={<Person />} label="Gender" value={profile.gender} />
              <InfoItem icon={<Favorite />} label="Marital Status" value={profile.maritalStatus} />
              <InfoItem icon={<Home />} label="Address" value={profile.permanentAddress} />
              <InfoItem icon={<LocationOn />} label="PIN" value={profile.pin} />
              <InfoItem icon={<Work />} label="Primary Job Preference" value={profile.primaryJobPreference} />
            </Grid>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

const InfoItem = ({ icon, label, value }: { icon?: React.ReactNode; label: string; value?: string }) => (
  <Grid item xs={12} sm={6}>
    <Typography>
      {icon && <span style={{ marginRight: "8px", verticalAlign: "middle" }}>{icon}</span>}
      <strong>{label}:</strong> {value || "N/A"}
    </Typography>
  </Grid>
)

export default UserProfile

