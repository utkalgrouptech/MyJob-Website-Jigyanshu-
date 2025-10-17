"use client";
import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography, MenuItem } from "@mui/material";
import axios from "axios";
import { apiBaseURL } from "../../../config/route.config";

const PostCampusEvent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    compId: "",
    degName: "",
    strength: "",
    startingDate: "",
    endingDate: "",
    eventDescription: "",
    requirements: "",
    jobType: "",
    workPlaceType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${apiBaseURL}/event/create`, formData);
      alert(response.data.message);
      setOpen(false);
    } catch (error) {
      console.error("Error creating event:", error);
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "An error occurred");
      } else {
        alert("An error occurred");
      }
    }
  };

  return (
    <div className="p-4">
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Create Campus Event
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="create-campus-event">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            maxHeight: "80vh", // Restrict height
            overflowY: "auto", // Add vertical scrolling
          }}
        >
          <Typography variant="h6" marginBottom={2}>
            Create Campus Event
          </Typography>
          <form>
            <TextField
              label="Company ID"
              name="compId"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
            <TextField
              label="Degree Name"
              name="degName"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
            <TextField
              label="Strength"
              name="strength"
              fullWidth
              margin="normal"
              onChange={handleChange}
              type="number"
            />
            <TextField
              label="Starting Date"
              name="startingDate"
              fullWidth
              margin="normal"
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Ending Date"
              name="endingDate"
              fullWidth
              margin="normal"
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Event Description"
              name="eventDescription"
              fullWidth
              margin="normal"
              multiline
              rows={3}
              onChange={handleChange}
            />
            <TextField
              label="Requirements"
              name="requirements"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
            <TextField
              label="Job Type"
              name="jobType"
              select
              fullWidth
              margin="normal"
              onChange={handleChange}
            >
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </TextField>
            <TextField
              label="Workplace Type"
              name="workPlaceType"
              select
              fullWidth
              margin="normal"
              onChange={handleChange}
            >
              <MenuItem value="Onsite">Onsite</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
            </TextField>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default PostCampusEvent;
