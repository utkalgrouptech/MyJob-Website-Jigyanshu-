import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Pagination, Box, Typography } from '@mui/material';
import { CloudDownload } from '@mui/icons-material';

const shortlistedJobs = [
  { title: 'Senior Product Designer', company: 'Circle Pixel', location: 'New York, USA', date: 'Aug 05, 2024', status: 'Active' },
  { title: 'Finance Manager', company: 'Circle Pixel', location: 'New York, USA', date: 'Aug 05, 2024', status: 'Active' },
  { title: 'Digital Marketing Manager', company: 'Circle Pixel', location: 'New York, USA', date: 'Aug 05, 2024', status: 'Active' },
  { title: 'Product Manager', company: 'Circle Pixel', location: 'New York, USA', date: 'Aug 05, 2024', status: 'Active' },
  { title: 'Full Stack Engineer', company: 'Circle Pixel', location: 'New York, USA', date: 'Aug 05, 2024', status: 'Expired' },
];

export default function ShortlistedJobsPage() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Shortlisted Jobs
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Job Info</strong></TableCell>
              <TableCell><strong>Applied Date</strong></TableCell>
              <TableCell><strong>Download CV</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shortlistedJobs.map((job, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.company} | {job.location}
                  </Typography>
                </TableCell>
                <TableCell>{job.date}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    startIcon={<CloudDownload />}
                    size="small"
                  >
                    Download
                  </Button>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: job.status === 'Active' ? 'green' : 'red',
                      fontWeight: 'bold',
                    }}
                  >
                    {job.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination count={3} color="primary" />
      </Box>
    </Box>
  );
}
