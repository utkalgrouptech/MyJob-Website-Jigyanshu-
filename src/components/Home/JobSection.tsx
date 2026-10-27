"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import LocationOn from '@mui/icons-material/LocationOn';
import AttachMoney from '@mui/icons-material/AttachMoney';
import { apiBaseURL } from "../../../config/route.config";

const JobSection: React.FC = () => {
  const [jobList, setJobList] = useState([]);
  const [filteredJobList, setFilteredJobList] = useState([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDegName, setSearchDegName] = useState("");
  const [searchSalary, setSearchSalary] = useState("");
  const [searchOrganization, setSearchOrganization] = useState("");
  const [view] = useState("grid");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${apiBaseURL}/postedjob/getAll`);
        setJobList(response.data.data);
        setFilteredJobList(response.data.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  interface Job {
    jobId: string;
    degName: string;
    jobLocation?: string;
    salary?: string;
    organization?: {
      organizationName?: string;
      logo?: string;
    };
  }

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setResume(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedJob || !resume) return alert("Please select a job and upload a resume.");

    const formData = new FormData();
    formData.append("userId", "1");
    formData.append("compId", selectedJob.organization?.organizationName || "");
    formData.append("jobId", selectedJob.jobId);
    formData.append("type", "application");
    formData.append("resume", resume);

    try {
      await axios.post(`${apiBaseURL}/requestApplication/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Application submitted successfully!");
      setSelectedJob(null);
      setResume(null);
      setOpen(false);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting application. Please try again.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJob(null);
    setResume(null);
  };

  const handleFilter = () => {
    const filtered = jobList.filter((job: Job) => {
      return (
        (searchLocation === "" || job.jobLocation?.toLowerCase().includes(searchLocation.toLowerCase())) &&
        (searchDegName === "" || job.degName.toLowerCase().includes(searchDegName.toLowerCase())) &&
        (searchSalary === "" || job.salary?.toLowerCase().includes(searchSalary.toLowerCase())) &&
        (searchOrganization === "" || job.organization?.organizationName?.toLowerCase().includes(searchOrganization.toLowerCase()))
      );
    });
    setFilteredJobList(filtered);
  };

  return (
    <section className="py-12">
      <div className="main-container mx-auto py-8 px-4 sm:px-6 md:px-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Find Your Dream Job</h1>
        <div className="flex space-x-4 mb-6">
          <TextField
            label="Search by Location"
            variant="outlined"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            fullWidth
          />
          <TextField
            label="Search by Degree Name"
            variant="outlined"
            value={searchDegName}
            onChange={(e) => setSearchDegName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Search by Salary"
            variant="outlined"
            value={searchSalary}
            onChange={(e) => setSearchSalary(e.target.value)}
            fullWidth
          />
          <TextField
            label="Search by Organization Name"
            variant="outlined"
            value={searchOrganization}
            onChange={(e) => setSearchOrganization(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleFilter}>
            Filter
          </Button>
        </div>
        <div className={`w-full grid ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {filteredJobList.map((job: Job, index) => (
            <div key={index} className="p-6 border rounded-lg bg-white shadow-md transition hover:shadow-xl hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src={`${apiBaseURL}/photo/${job.organization?.logo}`}
                  alt={job.degName}
                  className="w-16 h-16 rounded-full border"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-lg text-gray-800">{job.degName}</h3>
                  <p className="text-sm text-gray-500">{job.organization?.organizationName || 'Unknown Company'}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <LocationOn className="mr-2" /> {job.jobLocation || 'Location Not Provided'}
              </p>
              <p className="text-lg font-semibold text-blue-600 mb-4">
                <AttachMoney className="mr-2" /> {job.salary || 'Not Specified'}
              </p>
              <button onClick={() => handleApply(job)} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
        {selectedJob && (
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Applying for {selectedJob.degName}</DialogTitle>
            <DialogContent>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                className="mt-2"
              />
              <input type="file" onChange={handleFileChange} className="mt-2 p-2 border rounded w-full" />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">
                Submit Application
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default JobSection;