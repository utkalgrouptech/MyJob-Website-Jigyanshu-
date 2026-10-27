"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Pagination,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import { apiBaseURL } from "../../../config/route.config";

interface Job {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  appliedDate: string;
  resume: string;
  status: string;
}

const AppliedJobsPage = () => {
  const storedUserId= localStorage.getItem('userData');

  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);
  const [userId]= useState(storedUserId); // Replace with actual user ID
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchAppliedJobs();
  }, [page]);

  const fetchAppliedJobs = async () => {
    try {
      const response = await axios.get(`${apiBaseURL}/RequestApplication/get/${userId}`);
      setAppliedJobs(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching applied jobs", error);
    }
  };



  const updateApplicationStatus = async (id: string, status: string): Promise<void> => {
    try {
      await axios.put(`${apiBaseURL}/RequestApplication/update/${id}`, { status });
      fetchAppliedJobs();
    } catch (error) {
      console.error("Error updating application status", error);
    }
  };

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Applied Jobs
      </Typography>

      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
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
            {appliedJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell>
                  <Box>
                    <Typography variant="body1" fontWeight="bold">
                      {job.jobTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {job.company} | {job.location}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{job.appliedDate}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    startIcon={<Download />}
                    color="primary"
                    href={job.resume}
                    target="_blank"
                  >
                    Download CV
                  </Button>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color={job.status === "Active" ? "green" : "red"}
                  >
                    {job.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => updateApplicationStatus(job.id, "Reviewed")}
                  >
                    Mark as Reviewed
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={4} display="flex" justifyContent="center">
        <Pagination count={totalPages} page={page} onChange={(e, value) => setPage(value)} color="primary" />
      </Box>
    </Box>
  );
};

export default AppliedJobsPage;
