import React from 'react';
import JobPage from '@/components/Jobs/JobPage'; // Ensure capitalization matches the export
import JobBreadcrumb from '@/components/Jobs/JobsBreadcrumb';

export default function page() {
  return (
    <>
    <JobBreadcrumb/>
      <JobPage />
      
    </>
  );
}
