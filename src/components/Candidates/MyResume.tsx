"use client";

import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import { Add, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const MyResumePage = () => {
  const [educationFields, setEducationFields] = useState([
    { title: '', degree: '', institute: '', year: '', description: '' },
  ]);
  const [experienceFields, setExperienceFields] = useState([
    { title: '', degree: '', institute: '', year: '', description: '' },
  ]);

  const handleAddEducation = () => {
    setEducationFields([
      ...educationFields,
      { title: '', degree: '', institute: '', year: '', description: '' },
    ]);
  };

  const handleAddExperience = () => {
    setExperienceFields([
      ...experienceFields,
      { title: '', degree: '', institute: '', year: '', description: '' },
    ]);
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        My Resume
      </Typography>

      {/* Resume Heading */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Resume Heading
        </Typography>
        <TextField fullWidth label="Enter Heading" variant="outlined" />
      </Box>

      {/* Upload CV */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Your CV
        </Typography>
        <Button variant="contained" component="label">
          Choose Your CV
          <input hidden accept=".pdf,.doc,.docx" type="file" />
        </Button>
      </Box>

      {/* Key Skills */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Key Skills
        </Typography>
        <TextField
          fullWidth
          label="Enter Skills (e.g., Figma, Adobe XD)"
          variant="outlined"
        />
      </Box>

      {/* Working Preferences */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Working Preferences
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Job Category" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Job Type" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Job Level" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Enter Current Salary" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Enter Expected Salary" variant="outlined" />
          </Grid>
        </Grid>
      </Box>

      {/* Personal Information */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Personal Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Enter Age" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Enter Experience" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Enter Language (e.g., English, German)" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Enter Date of Birth" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Marital Status" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Write Description"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Education */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Education
        </Typography>
        {educationFields.map((field, index) => (
          <Grid container spacing={2} key={index} mb={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Enter Title" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Enter Degree" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Enter Institute" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Enter Year (e.g., 2002-2005)" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Write Description"
                variant="outlined"
              />
            </Grid>
          </Grid>
        ))}
        <Button variant="outlined" startIcon={<Add />} onClick={handleAddEducation}>
          Add More
        </Button>
      </Box>

      {/* Experience */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Experience
        </Typography>
        {experienceFields.map((field, index) => (
          <Grid container spacing={2} key={index} mb={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Enter Title" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Enter Degree" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Enter Institute" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Enter Year (e.g., 2002-2005)" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Write Description"
                variant="outlined"
              />
            </Grid>
          </Grid>
        ))}
        <Button variant="outlined" startIcon={<Add />} onClick={handleAddExperience}>
          Add More
        </Button>
      </Box>

      {/* Job Location */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Job Location
        </Typography>
        <TextField fullWidth label="Enter Location" variant="outlined" />
      </Box>

      {/* Social Links */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Social Links
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Facebook URL" variant="outlined" defaultValue="https://www.facebook.com/" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Twitter URL" variant="outlined" defaultValue="https://www.twitter.com/" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="LinkedIn URL" variant="outlined" defaultValue="https://www.linkedin.com/" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Instagram URL" variant="outlined" defaultValue="https://www.instagram.com/" />
          </Grid>
        </Grid>
        <Box mt={2} display="flex" gap={2}>
          <IconButton color="primary">
            <Facebook />
          </IconButton>
          <IconButton color="primary">
            <Twitter />
          </IconButton>
          <IconButton color="primary">
            <LinkedIn />
          </IconButton>
          <IconButton color="secondary">
            <Instagram />
          </IconButton>
        </Box>
      </Box>

      {/* Submit */}
      <Box>
        <Button variant="contained" color="primary" size="large">
          Submit Your Resume
        </Button>
      </Box>
    </Box>
  );
};

export default MyResumePage;
