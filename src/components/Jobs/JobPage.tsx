// 'use client';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Code, Work, History, LocationOn, AttachMoney } from '@mui/icons-material';
// import { apiBaseURL } from '../../../config/route.config';

// interface Job {
  
//   degName: string;
//   company?: string;
//   jobLocation?: string;
//   organization?: {
//     organizationName?: string;
//     logo?: string;
//   };
//   jobDescription?: string;
//   yearsOfExperience?: string;
//   requirements?: string;
//   jobType?: string;
//   salary?: string;
// }

// const JobPage = () => {
//   const [view, setView] = useState<'grid' | 'list'>('grid');
//   const [sortBy, setSortBy] = useState<string>('Default');
//   const [jobList, setJobList] = useState<Job[]>([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get(
//           'http://192.168.29.66:6200/api/v1/postedjob/getAll'
//         );
//         console.log('Fetched Jobs:', response.data.data);
//         setJobList(response.data.data);
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//       }
//     };
//     fetchJobs();
//   }, []);

//   return (
//     <div className="flex main-container">
//       <main className="w-full p-6">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-6">
//           <p className="text-lg font-medium">{jobList.length} Results Found</p>
//           <div className="flex space-x-4">
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="border p-2 rounded text-sm"
//             >
//               <option value="Default">Sort By Default</option>
//               <option value="Newest">Newest</option>
//               <option value="Salary">Salary</option>
//               <option value="Location">Location</option>
//             </select>
//             <div className="flex border p-2 rounded">
//               <button
//                 onClick={() => setView('grid')}
//                 className={`p-2 ${view === 'grid' ? 'bg-blue-500 text-white' : ''}`}
//               >
//                 Grid
//               </button>
//               <button
//                 onClick={() => setView('list')}
//                 className={`p-2 ${view === 'list' ? 'bg-blue-500 text-white' : ''}`}
//               >
//                 List
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Job Cards */}
//         <div
//           className={`w-full grid ${
//             view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
//           } gap-6`}
//         >
//           {jobList.map((job, index) => (
//             <div
//               key={index}
//               className="p-6 border rounded-lg bg-white shadow-md transition hover:shadow-xl hover:scale-105"
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={`${apiBaseURL}/photo/${job.organization?.logo}`}
//                   alt={job.degName}
//                   className="w-16 h-16 rounded-full border"
//                 />
//                 <div className="ml-4">
//                   <h3 className="font-bold text-lg text-gray-800">{job.degName}</h3>
//                   <p className="text-sm text-gray-500">{job.organization?.organizationName || 'Unknown Company'}</p>
//                 </div>
//               </div>
              // <p className="text-sm text-gray-600 mb-2">
              //   <LocationOn className="mr-2" /> {job.jobLocation || 'Location Not Provided'}
              // </p>
              
              // <p className="text-sm text-gray-600 mb-2">
              //   <LocationOn className="mr-2" /> {job.yearsOfExperience || 'Location Not Provided'}YEARS
              // </p>
              // <p className="text-sm text-gray-600 mb-2">
              //   <LocationOn className="mr-2" /> {job.jobType || 'Location Not Provided'}
              // </p>
              // <p className="text-sm text-gray-600 mb-2">
              //   <LocationOn className="mr-2" /> {job.requirements || 'Location Not Provided'}
              // </p>
              // <p className="text-sm text-gray-600 mb-2">
              //   <LocationOn className="mr-2" /> {job.jobDescription || 'Location Not Provided'}
              // </p>
              // <p className="text-lg font-semibold text-blue-600 mb-4">
              //   <AttachMoney className="mr-2" /> {job.salary || 'Not Specified'}
              // </p>
//               <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//                 Apply Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default JobPage;

'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocationOn, AttachMoney } from '@mui/icons-material';
import { apiBaseURL } from '../../../config/route.config';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, } from '@mui/material';

interface Job {
  jobId: string;
  degName: string;
  company?: string;
  jobLocation?: string;
  organization?: {
    organizationName?: string;
    logo?: string;
  };
  jobDescription?: string;
  yearsOfExperience?: string;
  requirements?: string;
  jobType?: string;
  salary?: string;
}

const JobPage = () => {
   const view: 'grid' | 'list' = 'grid';
  const [jobList, setJobList] = useState<Job[]>([]);
  const [filteredJobList, setFilteredJobList] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const [searchLocation, setSearchLocation] = useState('');
  const [searchDegName, setSearchDegName] = useState('');
  const [searchSalary, setSearchSalary] = useState('');
  const [searchOrganization, setSearchOrganization] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${apiBaseURL}/postedjob/getAll`
        );
        console.log('Fetched Jobs:', response.data.data);
        setJobList(response.data.data);
        setFilteredJobList(response.data.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

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
    if (!selectedJob || !resume) return alert('Please select a job and upload a resume.');
    
    const formData = new FormData();
    formData.append('userId', '1'); // Replace with dynamic user ID
    formData.append('compId', selectedJob.organization?.organizationName || ''); // Replace with dynamic company ID
    formData.append('jobId', selectedJob.jobId); // Replace with selected job ID
    formData.append('type', 'application');
    formData.append('resume', resume);
    
    console.log('Form Data:', {
      userId: '1',
      compId: selectedJob.organization?.organizationName || '',
      jobId: selectedJob.jobId,
      type: 'application',
      resume: resume.name,
    });
    
    try {
      await axios.post(`${apiBaseURL}/requestApplication/create`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Application submitted successfully!');
      setSelectedJob(null);
      setResume(null);
      setOpen(false);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJob(null);
    setResume(null);
  };

  const handleFilter = () => {
    const filtered = jobList.filter(job => {
      return (
        (searchLocation === '' || job.jobLocation?.toLowerCase().includes(searchLocation.toLowerCase())) &&
        (searchDegName === '' || job.degName.toLowerCase().includes(searchDegName.toLowerCase())) &&
        (searchSalary === '' || job.salary?.toLowerCase().includes(searchSalary.toLowerCase())) &&
        (searchOrganization === '' || job.organization?.organizationName?.toLowerCase().includes(searchOrganization.toLowerCase()))
      );
    });
    setFilteredJobList(filtered);
  };

  return (
    <div className="flex main-container">
      <main className="w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-medium">{filteredJobList.length} Results Found</p>
        </div>
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
          {filteredJobList.map((job, index) => (
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
              <p className="text-sm text-gray-600 mb-2">
                <LocationOn className="mr-2" /> {job.yearsOfExperience || 'Location Not Provided'} YEARS
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <LocationOn className="mr-2" /> {job.jobType || 'Location Not Provided'}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <LocationOn className="mr-2" /> {job.requirements || 'Location Not Provided'}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <LocationOn className="mr-2" /> {job.jobDescription || 'Location Not Provided'}
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
      </main>
    </div>
  );
};

export default JobPage;