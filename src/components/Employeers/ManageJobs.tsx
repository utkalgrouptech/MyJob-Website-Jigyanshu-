// "use client";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   IconButton,
//   Pagination,
//   InputAdornment,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Button,
// } from '@mui/material';
// import { Visibility, Edit, Delete } from '@mui/icons-material';
// import SearchIcon from '@mui/icons-material/Search';
// import { apiBaseURL } from '../../../config/route.config';
// import Swal from 'sweetalert2';

// interface Job {
//   jobId: string;
//   degName: string;
//   secName: string;
//   jobLocation: string;
//   skills: string;
//   jobDescription: string;
//   yearsOfExperience: number;
//   requirements: string;
//   jobType: string;
//   status: string;
//   createdAt: string;
//   organization: {
//     organizationName: string;
//     logo: string;
//     address: string;
//     email: string;
//     phoneNo: string;
//     website: string;
//     description: string;
//   };
// }

// const ManageJobs: React.FC = () => {
//   const [search, setSearch] = useState('');
//   const [jobData, setJobData] = useState<Job[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const jobsPerPage = 5;
//   const [openEditDialog, setOpenEditDialog] = useState(false);
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//   const [editedJob, setEditedJob] = useState<Job | null>(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get(`${apiBaseURL}/postedjob/getAll`);
//         if (response.data.message === 'Jobs and Company details retrieved successfully') {
//           setJobData(response.data.data);
//         }
//       } catch (error) {
//         console.error('Error fetching job data:', error);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//   };

//   const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
//     setCurrentPage(value);
//   };

//   const filteredJobs = jobData.filter((job) =>
//     job.degName.toLowerCase().includes(search.toLowerCase())
//   );

//   const paginatedJobs = filteredJobs.slice(
//     (currentPage - 1) * jobsPerPage,
//     currentPage * jobsPerPage
//   );

//   const handleEditClick = (job: Job) => {
//     setSelectedJob(job);
//     setEditedJob({ ...job }); // Make a copy of the job for editing
//     setOpenEditDialog(true);
//   };

//   const handleEditJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (editedJob) {
//       setEditedJob((prev) => prev ? { ...prev, [name]: value } : null);
//     }
//   };

// const handleSubmitEdit = async () => {
//   if (editedJob && selectedJob) {
//     try {
//       const response = await axios.put(`${apiBaseURL}/postedjob/update/${selectedJob.jobId}`, editedJob);
      
//       console.log('Response:', response); // Add this to log the full response object

//       if (response.data && response.data.success) {
//         // If the response contains success: true
//         setJobData((prev) =>
//           prev.map((job) => (job.jobId === selectedJob.jobId ? { ...job, ...editedJob } : job))
//         );
        
//          // Close the modal
//         Swal.fire({
//           icon: 'success',
//           title: 'Job Updated Successfully',
//           text: 'The job details have been updated!',
//         });
        
//         setOpenEditDialog(false);
//       } else {
//         // Handle any response indicating failure or no success flag
//         Swal.fire({
//           icon: 'success',
//           title: 'Job Updated Successfully',
//           text: response.data?.message || 'There was an error updating the job details!',
//         });
//       }
//     } catch (error) {
//       console.error('Error updating job:', error);

//       // In case of an error, show an error swal
//       Swal.fire({
//         icon: 'error',
//         title: 'Update Failed',
//         text: 'There was an error updating the job details!',
//       });
//     }
//   }
// };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="bg-white shadow-md rounded-md p-6">
//         <h1 className="text-2xl font-bold mb-4">Manage Jobs</h1>

//         {/* Search Bar */}
//         <div className="mb-4">
//           <TextField
//             fullWidth
//             variant="outlined"
//             placeholder="Search..."
//             value={search}
//             onChange={handleSearchChange}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </div>

//         {/* Job Table */}
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Job Title</TableCell>
//                 <TableCell>Company</TableCell>
//                 <TableCell>Location</TableCell>
//                 <TableCell>Experience</TableCell>
//                 <TableCell>Job Type</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedJobs.map((job) => (
//                 <TableRow key={job.jobId}>
//                   <TableCell>{job.degName}</TableCell>
//                   <TableCell>
//                     <div className="flex items-center space-x-2">
//                       <img
//                         src={`${apiBaseURL}/photo/${job.organization.logo}`}
//                         alt={job.organization.organizationName}
//                         className="w-8 h-8 rounded-full object-cover shadow-lg shadow-gray-400"
//                       />
//                       <div>{job.organization.organizationName}</div>
//                     </div>
//                   </TableCell>
//                   <TableCell>{job.jobLocation}</TableCell>
//                   <TableCell>{job.yearsOfExperience} years</TableCell>
//                   <TableCell>{job.jobType}</TableCell>
//                   <TableCell>
//                     <span
//                       className={`px-3 py-1 rounded-md text-white ${
//                         job.status === 'Active'
//                           ? 'bg-green-500'
//                           : job.status === 'Pending'
//                           ? 'bg-yellow-500'
//                           : 'bg-red-500'
//                       }`}
//                     >
//                       {job.status}
//                     </span>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex space-x-2">
//                       <IconButton color="primary">
//                         <Visibility />
//                       </IconButton>
//                       <IconButton color="secondary" onClick={() => handleEditClick(job)}>
//                         <Edit />
//                       </IconButton>
//                       <IconButton color="error">
//                         <Delete />
//                       </IconButton>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* Pagination */}
//         <div className="mt-6 flex justify-center">
//           <Pagination
//             count={Math.ceil(filteredJobs.length / jobsPerPage)}
//             color="primary"
//             page={currentPage}
//             onChange={handlePageChange}
//           />
//         </div>
//       </div>

//       {/* Edit Job Modal */}
//       <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
//         <DialogTitle>Edit Job</DialogTitle>
//         <DialogContent>
//           {editedJob && (
//             <div className="space-y-4">
//               <TextField
//                 fullWidth
//                 label="Job Title"
//                 variant="outlined"
//                 value={editedJob.degName}
//                 name="degName"
//                 onChange={handleEditJobChange}
//               />
//               <TextField
//                 fullWidth
//                 label="Location"
//                 variant="outlined"
//                 value={editedJob.jobLocation}
//                 name="jobLocation"
//                 onChange={handleEditJobChange}
//               />
//               <TextField
//                 fullWidth
//                 label="Experience (Years)"
//                 variant="outlined"
//                 value={editedJob.yearsOfExperience}
//                 name="yearsOfExperience"
//                 onChange={handleEditJobChange}
//               />
//               <TextField
//                 fullWidth
//                 label="Job Type"
//                 variant="outlined"
//                 value={editedJob.jobType}
//                 name="jobType"
//                 onChange={handleEditJobChange}
//               />
//               <TextField
//                 fullWidth
//                 label="Job Description"
//                 variant="outlined"
//                 value={editedJob.jobDescription}
//                 name="jobDescription"
//                 onChange={handleEditJobChange}
//                 multiline
//                 rows={4}
//               />
//             </div>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenEditDialog(false)} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmitEdit} color="primary">
//             Save Changes
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default ManageJobs;


"use client"
import type React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Pagination,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material"
import { Visibility, Edit, Delete, LocationOn } from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search"
import { apiBaseURL } from "../../../config/route.config"
import Swal from "sweetalert2"

interface Job {
  jobId: string
  degName: string
  secName: string
  jobLocation: string
  skills: string
  jobDescription: string
  yearsOfExperience: number
  requirements: string
  jobType: string
  status: string  | number
  createdAt: string
  organization: {
    organizationName: string
    logo: string
    address: string
    email: string
    phoneNo: string
    website: string
    description: string
  }
}
interface Organization {
  compId: string;
  organizationName: string;
}

const ManageJobs: React.FC = () => {
  const [search, setSearch] = useState("")
  const [jobData, setJobData] = useState<Job[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 5
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [editedJob, setEditedJob] = useState<Job | null>(null)
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

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${apiBaseURL}/postedjob/getAll`)
        console.log("Full Response:", response.data.data) // Log the full response object
        if (response.data.message === "Jobs and Company details retrieved successfully") {
          setJobData(response.data?.data)
        }
      } catch (error) {
        console.error("Error fetching job data:", error)
      }
    }

    fetchJobs()
  }, [])

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
        
      } catch (error:unknown) {
        // Log the error in detail
        console.error('Error fetching organizations:', error);
        if (axios.isAxiosError(error) && error.response) {
    console.error("Response Error Data:", error.response.data);
    console.error("Response Status:", error.response.status);
  }
      }
    };
  
    fetchOrganizations();
  }, []);
  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Log organization details when a Company ID is selected
    if (name === 'compId') {
      const selectedOrg = organizationData.find((org) => org.compId === value);
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
    }  catch (error: unknown) {
  Swal.fire({
    icon: "error",
    title: "Error Posting Job",
    text: axios.isAxiosError(error)
      ? error.response?.data?.message || "Something went wrong!"
      : "Something went wrong!",
      });
    }
  };

  const handleRowClick = (job: Job) => {
    setSelectedJob(job);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
    setSelectedJob(null);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  }

  const filteredJobs = jobData.filter((job) => job.degName.toLowerCase().includes(search.toLowerCase()))

  const paginatedJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)

  const handleEditClick = (job: Job) => {
    setSelectedJob(job)
    setEditedJob({ ...job }) // Make a copy of the job for editing
    setOpenEditDialog(true)
  }

  const handleEditJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (editedJob) {
      setEditedJob((prev) => (prev ? { ...prev, [name]: value } : null))
    }
  }

  const handleSubmitEdit = async () => {
    if (editedJob && selectedJob) {
      try {
        const response = await axios.put(`${apiBaseURL}/postedjob/update/${selectedJob.jobId}`, editedJob)

        console.log("Response:", response) // Log the full response object

        if (response.data && response.data.success) {
          // If the response contains success: true
          setJobData((prev) => prev.map((job) => (job.jobId === selectedJob.jobId ? { ...job, ...editedJob } : job)))

          // Close the modal first
          setOpenEditDialog(false)

          // Then show the success message
          await Swal.fire({
            icon: "success",
            title: "Job Updated Successfully",
            text: "The job details have been updated!",
          })
        } else {
          // Handle any response indicating failure or no success flag
          await Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: response.data?.message || "There was an error updating the job details!",
          })
        }
      } catch (error) {
        console.error("Error updating job:", error)

        // In case of an error, show an error swal
        await Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "There was an error updating the job details!",
        })
      }
    }
  }

      const handleStatusChange = async (compId: string, value: number) => {
        try {
          const response = await fetch(
            `${apiBaseURL}/postedjob/update/${compId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: value }),
            }
          );
    
          const result = await response.json();
    
          if (result.success) {
            setJobData((prev) =>
              prev.map((job) =>
                job.jobId === compId ? { ...job, status: value } : job
              )
            );
    
            Swal.fire({
              icon: "success",
              title: "Status Updated Successfully",
              text: result.message || "The organization status has been updated.",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Failed to Update Status",
              text: result.message || "An error occurred while updating the status.",
            });
          }
        } catch (error: unknown) {
          Swal.fire({
            icon: "error",
            title: "Error Updating Status",
           text: error instanceof Error
      ? error.message
      : "Something went wrong!",
          });
        }
      };

  return (
    <div className=" p-6 bg-gray-100 h-screen overflow-y-auto ">
      <div className="bg-white shadow-md rounded-md p-6 overflow-y-auto">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Manage Jobs</h1>
        <Button variant="contained" color="primary" onClick={handleOpen}>
                  Post a Job
                </Button>
                </div>
          

        {/* Search Bar */}
        <div className="flex-1 mb-4 overflow-y-auto">
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

        {/* Job Table */}
        <TableContainer style={{ maxHeight: "calc(100vh - 20rem)", overflow: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job Title</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Job Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedJobs.map((job) => (
                <TableRow key={job?.jobId}>
                  <TableCell>{job?.degName}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <img
                        src={`${apiBaseURL}/photo/${job.organization?.logo}`}
                        alt={job.organization.organizationName}
                        className="w-8 h-8 rounded-full object-cover shadow-lg shadow-gray-400"
                      />
                      <div>{job?.organization.organizationName}</div>
                    </div>
                  </TableCell>
                  <TableCell>{job?.jobLocation}</TableCell>
                  <TableCell>{job?.yearsOfExperience} years</TableCell>
                  <TableCell>{job?.jobType}</TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-md text-white ${
                        job.status === "Active"
                          ? "bg-green-500"
                          : job.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    >
                      {job.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <IconButton color="primary" onClick={() => handleRowClick(job)} style={{ cursor: 'pointer' }}>
                        <Visibility />
                      </IconButton>
                      <IconButton color="secondary" onClick={() => handleEditClick(job)}>
                        <Edit />
                      </IconButton>
                      <IconButton color="error">
                        <Delete />
                      </IconButton>
                      <FormControl variant="outlined" size="small">
    <InputLabel>Status</InputLabel>
    <Select
      value={job.status} // Assuming org.status is 0 or 1
      onChange={(e) => handleStatusChange(job.jobId,  Number(e.target.value))}
      label="Status"
    >
      <MenuItem value={1}>Active</MenuItem>
      <MenuItem value={0}>Inactive</MenuItem>
    </Select>
  </FormControl>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {selectedJob && (
        <Dialog open={detailsOpen} onClose={handleCloseDetails}>
          <DialogTitle>Job Details</DialogTitle>
          <DialogContent>
            <p><strong>Degree Name:</strong> {selectedJob.degName}</p>
            <p><strong>Organization:</strong> {selectedJob.organization.organizationName}</p>
            <p><strong>Job Location:</strong> {selectedJob.jobLocation}</p>
            <p><strong>Years of Experience:</strong> {selectedJob.yearsOfExperience} years</p>
            <p><strong>Job Type:</strong> {selectedJob.jobType}</p>
            <p><strong>Status:</strong> {selectedJob.status}</p>
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
          <Pagination
            count={Math.ceil(filteredJobs.length / jobsPerPage)}
            color="primary"
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>

      {/* Edit Job Modal */}
      <Dialog
        open={openEditDialog}
        onClose={() => {
          setOpenEditDialog(false)
          setSelectedJob(null)
          setEditedJob(null)
        }}
      >
        <DialogTitle>Edit Job</DialogTitle>
        <DialogContent>
          {editedJob && (
            <div className="space-y-4">
              <TextField
                fullWidth
                label="Job Title"
                variant="outlined"
                value={editedJob.degName}
                name="degName"
                onChange={handleEditJobChange}
              />
              <TextField
                fullWidth
                label="Location"
                variant="outlined"
                value={editedJob.jobLocation}
                name="jobLocation"
                onChange={handleEditJobChange}
              />
              <TextField
                fullWidth
                label="Experience (Years)"
                variant="outlined"
                value={editedJob.yearsOfExperience}
                name="yearsOfExperience"
                onChange={handleEditJobChange}
              />
              <TextField
                fullWidth
                label="Job Type"
                variant="outlined"
                value={editedJob.jobType}
                name="jobType"
                onChange={handleEditJobChange}
              />
              <TextField
                fullWidth
                label="Job Description"
                variant="outlined"
                value={editedJob.jobDescription}
                name="jobDescription"
                onChange={handleEditJobChange}
                multiline
                rows={4}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmitEdit} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
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
  )
}

export default ManageJobs

