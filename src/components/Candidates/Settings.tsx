"use client";

import React, { useState } from 'react';
import { Button, TextField, Grid, Card, Typography, Box } from '@mui/material';

const SettingPage = () => {
  // Profile Info State
  const [profile, setProfile] = useState({
    fullName: 'Laura Packer',
    email: 'laurapacker@example.com',
    contactNumber: '+2 134 562 458',
    personalWebsite: 'www.example.com',
    age: 35,
    gender: 'Female',
    educationLevel: 'Master Degree',
    language: 'English, German',
    jobCategory: 'Experience',
    experience: '04',
    dateOfBirth: '21 August, 1986',
    currentSalary: '$50k - $60k',
    expectedSalary: '$70k - $85k',
    keySkills: 'Figma, Adobe XD, Next Js, React Js, App, Node Js',
    bio: 'There are many variations of passages of Lorem Ipsum available...',
    country: 'USA',
    city: 'New York',
    state: 'Arizona',
    zipCode: '85001',
    fullAddress: '25/B Milford Road, AZ 85001, New York, USA',
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://www.twitter.com/',
      linkedin: 'https://www.linkedin.com/',
      pinterest: 'https://www.pinterest.com/',
      whatsapp: 'https://www.whatsapp.com'
    }
  });

  // Change Password State
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    reTypePassword: ''
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle profile update logic here
    console.log('Profile Updated:', profile);
  };

  const handleChangePassword = () => {
    // Handle change password logic here
    console.log('Password Changed:', password);
  };

  return (
    <section className="p-6 main-container">
      <Card sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>Update Profile Info</Typography>

        {/* Basic Info Section */}
        <Typography variant="h6" gutterBottom>Basic Info</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              value={profile.fullName}
              name="fullName"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              value={profile.email}
              name="email"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contact Number"
              value={profile.contactNumber}
              name="contactNumber"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Personal Website"
              value={profile.personalWebsite}
              name="personalWebsite"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Age"
              value={profile.age}
              name="age"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Gender"
              value={profile.gender}
              name="gender"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Education Level"
              value={profile.educationLevel}
              name="educationLevel"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Language"
              value={profile.language}
              name="language"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Contact Info Section */}
        <Typography variant="h6" gutterBottom>Contact Info</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Country"
              value={profile.country}
              name="country"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              value={profile.city}
              name="city"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              value={profile.state}
              name="state"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Zip Code"
              value={profile.zipCode}
              name="zipCode"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Full Address"
              value={profile.fullAddress}
              name="fullAddress"
              onChange={handleProfileChange}
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Social Links Section */}
        <Typography variant="h6" gutterBottom>Social Network</Typography>
        <Grid container spacing={2}>
          {Object.entries(profile.socialLinks).map(([platform, url], index) => (
            <Grid item xs={12} sm={6} key={index}>
              <TextField
                label={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                value={url}
                name={platform}
                onChange={handleProfileChange}
                fullWidth
              />
            </Grid>
          ))}
        </Grid>

        {/* Bio Section */}
        <Typography variant="h6" gutterBottom>Bio</Typography>
        <TextField
          label="About You"
          value={profile.bio}
          name="bio"
          onChange={handleProfileChange}
          multiline
          rows={4}
          fullWidth
        />

        {/* Update Profile Button */}
        <Box mt={3}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Update Profile Info</Button>
        </Box>

        {/* Change Password Section */}
        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>Change Password</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Old Password"
              type="password"
              value={password.oldPassword}
              name="oldPassword"
              onChange={handlePasswordChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="New Password"
              type="password"
              value={password.newPassword}
              name="newPassword"
              onChange={handlePasswordChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Re-Type Password"
              type="password"
              value={password.reTypePassword}
              name="reTypePassword"
              onChange={handlePasswordChange}
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Change Password Button */}
        <Box mt={3}>
          <Button variant="contained" color="secondary" onClick={handleChangePassword}>Change Password</Button>
        </Box>
      </Card>
    </section>
  );
};

export default SettingPage;
