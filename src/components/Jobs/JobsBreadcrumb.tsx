'use client';
import React, { useState } from 'react';
import { LocationOn, Search, Category } from '@mui/icons-material';

const JobBreadcrumb = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [categoryQuery, setCategoryQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery, 'in location:', locationQuery, 'and category:', categoryQuery);
    // Implement the actual search functionality here
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg p-6 mb-8 shadow-xl h-72 flex items-center justify-center">

      {/* Search Bar with Location, Category, and Search Button */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0 items-center">
        {/* Job Title Input */}
        <div className="relative w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Search for job title or keywords"
            className="w-full p-4 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-lg hover:shadow-2xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-3 text-gray-500" />
        </div>

        {/* Location Dropdown */}
        <div className="relative w-full lg:w-1/4">
          <select
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="w-full p-4 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-lg hover:shadow-2xl"
          >
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
          <LocationOn className="absolute left-4 top-3 text-gray-500" />
        </div>

        {/* Category Dropdown */}
        <div className="relative w-full lg:w-1/4">
          <select
            value={categoryQuery}
            onChange={(e) => setCategoryQuery(e.target.value)}
            className="w-full p-4 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-lg hover:shadow-2xl"
          >
            <option value="">Select Category</option>
            <option value="Software Development">Software Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Finance">Finance</option>
          </select>
          <Category className="absolute left-4 top-3 text-gray-500" />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full lg:w-1/6 bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-xl hover:shadow-2xl"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default JobBreadcrumb;
