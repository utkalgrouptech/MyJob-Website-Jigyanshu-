'use client';
import React, { useState } from 'react';
import { TextField, IconButton, Pagination, Card, CardContent, Typography, CardActions } from '@mui/material';
import { Visibility, Delete, Cancel, CheckCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

const shortlistedResumesData = [
  {
    name: 'Laura Packer',
    title: 'Product Designer',
    location: '5/B Milford Road, New York',
    skills: 'Figma, App PSD, Adobe XD, Digital',
    rate: '$80 /Hour',
  },
  {
    name: 'Shirley Grigsby',
    title: 'Product Designer',
    location: '5/B Milford Road, New York',
    skills: 'Figma, App PSD, Adobe XD, Digital',
    rate: '$80 /Hour',
  },
  {
    name: 'Marie Choate',
    title: 'Product Designer',
    location: '5/B Milford Road, New York',
    skills: 'Figma, App PSD, Adobe XD, Digital',
    rate: '$80 /Hour',
  },
  {
    name: 'William Hess',
    title: 'Product Designer',
    location: '5/B Milford Road, New York',
    skills: 'Figma, App PSD, Adobe XD, Digital',
    rate: '$80 /Hour',
  },
  {
    name: 'Robert Powell',
    title: 'Product Designer',
    location: '5/B Milford Road, New York',
    skills: 'Figma, App PSD, Adobe XD, Digital',
    rate: '$80 /Hour',
  },
  {
    name: 'Joseph Wood',
    title: 'Product Designer',
    location: '5/B Milford Road, New York',
    skills: 'Figma, App PSD, Adobe XD, Digital',
    rate: '$80 /Hour',
  },
];

const ShortlistedResumes: React.FC = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredResumes = shortlistedResumesData.filter((resume) =>
    resume.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4">Shortlisted Resumes</h1>

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

        {/* Shortlisted Resumes Card View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResumes.map((resume, index) => (
            <Card key={index} className="shadow-lg rounded-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div> {/* Placeholder for image */}
                  <div>
                    <Typography variant="h6" className="font-bold">{resume.name}</Typography>
                    <Typography variant="body2" className="text-gray-500">{resume.title}</Typography>
                    <Typography variant="body2" className="text-gray-400">{resume.location}</Typography>
                  </div>
                </div>
                <Typography variant="body2" className="mt-2 text-sm text-gray-600">{resume.skills}</Typography>
                <Typography variant="body2" className="mt-2 text-sm text-gray-600">{resume.rate}</Typography>
              </CardContent>
              <CardActions className="justify-end p-4">
                <IconButton color="primary" title="View">
                  <Visibility />
                </IconButton>
                <IconButton color="error" title="Delete">
                  <Delete />
                </IconButton>
                <IconButton color="default" title="Cancel">
                  <Cancel />
                </IconButton>
                <IconButton color="success" title="Approve">
                  <CheckCircle />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <Pagination count={3} color="primary" />
        </div>
      </div>
    </div>
  );
};

export default ShortlistedResumes;
