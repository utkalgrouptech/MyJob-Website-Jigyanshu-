'use client';

import React, { useState, useEffect } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import {LocationOn } from '@mui/icons-material';
import axios from 'axios';
import Swal from 'sweetalert2';
import { apiBaseURL } from '../../../config/route.config';

interface Organization {
  compId: string;
  organizationName: string;
}

const PostJobModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    compId: '',
    degName: '',
    secName: '',
    jobLocation: '',
    skills: '',
    jobDescription: '',
    yearsOfExperience: '',
    requirements: '',
    jobType: '',
    workPlaceType: '',
  });
  const [organizationData, setOrganizationData] = useState<Organization[]>([]);

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
  const workPlaceTypes = ['On-site', 'Remote', 'Hybrid'];

  // Fetch organization data
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get(
          `${apiBaseURL}/organizationDetails/getAll`
        );
  
        // Log the full response to inspect the structure
        
        // Log the specific data you're using
        console.log('Organization Data:', response.data.data);
        
        
        // Update the organizationData state
        setOrganizationData(response.data.data); // Ensure response.data is an array
        
      } catch (error: unknown) {
  console.error('Error fetching organizations:', error);

  if (axios.isAxiosError(error) && error.response) {
    console.error('Response Error Data:', error.response.data);
    console.error('Response Status:', error.response.status);
        }
      }
    };
  
    fetchOrganizations();
  }, []);
  console.log('Full Response:', organizationData);

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));

  if (name === 'compId') {
    const selectedOrg = organizationData.find(
      (org) => org.compId === value
    );
    console.log('Selected Organization Details:', selectedOrg);
  }
};

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${apiBaseURL}/postedjob/create`,
        formData
      );
      Swal.fire({
        icon: 'success',
        title: 'Job Posted Successfully',
        text: response.data.message,
      });
      setOpen(false); // Close the modal on success
      setFormData({
        compId: '',
        degName: '',
        secName: '',
        jobLocation: '',
        skills: '',
        jobDescription: '',
        yearsOfExperience: '',
        requirements: '',
        jobType: '',
        workPlaceType: '',
      });
    } catch (error: unknown) {
  Swal.fire({
    icon: 'error',
    title: 'Error Posting Job',
    text: axios.isAxiosError(error)
      ? error.response?.data?.message || 'Something went wrong!'
      : 'Something went wrong!',
      });
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="p-8 bg-gray-100">
      <div className="text-center">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Post a Job
        </Button>
      </div>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle>Post Job</DialogTitle>
        <DialogContent>
          <form className="space-y-4">
          <TextField
  label="Company ID"
  variant="outlined"
  fullWidth
  select
  name="compId"
  value={formData.compId}
  onChange={handleChange}
>
  {organizationData.length > 0 ? (
    organizationData.map((org) => (
      <MenuItem key={org?.compId} value={org?.compId}>
        {org?.organizationName}
      </MenuItem>
    ))
  ) : (
    <MenuItem value="" disabled>
      No organizations available
    </MenuItem>
  )}
</TextField>


            <TextField
              label="Degree Name"
              variant="outlined"
              fullWidth
              name="degName"
              value={formData.degName}
              onChange={handleChange}
              placeholder="Enter Degree Name"
            />

            <TextField
              label="Section Name"
              variant="outlined"
              fullWidth
              name="secName"
              value={formData.secName}
              onChange={handleChange}
              placeholder="Enter Section Name"
            />

            <TextField
              label="Job Location"
              variant="outlined"
              fullWidth
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              placeholder="Enter Job Location"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Required Skills"
              variant="outlined"
              fullWidth
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Enter Skills (e.g., Figma, Adobe XD)"
            />

            <TextField
              label="Job Description"
              variant="outlined"
              fullWidth
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              multiline
              rows={4}
              placeholder="Enter Job Description"
            />

            <TextField
              label="Years of Experience"
              variant="outlined"
              fullWidth
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              placeholder="Enter Required Years of Experience"
            />

            <TextField
              label="Requirements"
              variant="outlined"
              fullWidth
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Enter Requirements"
            />

            <TextField
              label="Job Type"
              variant="outlined"
              fullWidth
              select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              {jobTypes.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Work Place Type"
              variant="outlined"
              fullWidth
              select
              name="workPlaceType"
              value={formData.workPlaceType}
              onChange={handleChange}
            >
              {workPlaceTypes.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Publish Job
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PostJobModal;
