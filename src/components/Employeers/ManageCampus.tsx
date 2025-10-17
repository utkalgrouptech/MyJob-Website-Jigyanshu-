'use client';
import React, { useState, useEffect } from 'react';
import {
  TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Pagination, Modal, Box, Button, MenuItem, Typography, FormControl, Select, InputLabel,
} from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';
import { apiBaseURL } from '../../../config/route.config';

interface CampusEvent {
  eventId: string;
  degName: string;
  strength: number;
  startingDate: string;
  endingDate: string;
  eventDescription: string;
  requirements: string;
  jobType: string;
  workPlaceType: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  organization: {
    organizationName: string;
    logo: string;
    address: string;
    email: string;
    phoneNo: string;
    website: string;
    description: string;
  };
}

const ManageCampus: React.FC = () => {
  const [search, setSearch] = useState('');
  const [eventData, setEventData] = useState<CampusEvent[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CampusEvent | null>(null);
    const [detailsOpen, setDetailsOpen] = useState(false);
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

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(`${apiBaseURL}/event/getAll`);
      const data = await response.json();
      if (data.message === 'Events and Company details retrieved successfully') {
        setEventData(data.data);
      }
    };

    fetchEvents();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredEvents = eventData.filter((event) =>
    event.degName.toLowerCase().includes(search.toLowerCase())
  );

  const handleRowClick = (event: unknown) => {
    setSelectedEvent(event as CampusEvent);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
    setSelectedEvent(null);
  };

  const handleOpenModal = (event: CampusEvent) => {
    setSelectedEvent(event);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedEvent(null);
  };
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

  const handleUpdateEvent = async (event: CampusEvent) => {
    try {
      console.log('Updating event:', event); // Log the event data
      const response = await axios.put(
        `${apiBaseURL}/event/update/${event.eventId}`,
        event,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('Server Response:', response.data); // Log server response
  
      if (response.data.success) {
        Swal.fire('Success', 'Event updated successfully!', 'success');
        handleCloseModal();
        setEventData((prevData) =>
          prevData.map((e) => (e.eventId === event.eventId ? event : e))
        );
      } else {
        Swal.fire('Error', 'Something went wrong!', 'error');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('AxiosError:', error.response?.data || error.message);
      } else {
        console.error('Error:', error);
      }
      Swal.fire('Error', 'Failed to update event. Please try again.', 'error');
    }
  };
  
    const handleStatusChange = async (compId: string, value: unknown) => {
      try {
        const response = await fetch(
          `${apiBaseURL}/event/update/${compId}`,
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
          setEventData((prev) =>
            prev.map((event) =>
              event.eventId === compId ? { ...event, status: String(value) } : event
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
          text: error instanceof Error ? error.message : "Something went wrong!",
        });
      }
    };

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedEvent) {
      setSelectedEvent({
        ...selectedEvent,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-md p-6">
       <div className='flex justify-between items-center mb-4'>
        <h1 className="text-2xl font-bold mb-4">Manage Campus Events</h1>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                Create Campus Event
              </Button>
              </div>
        {/* Search Bar */}
        <div className="mb-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for a job title..."
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

        {/* Event Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job Title</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Strength</TableCell>
                <TableCell>Job Type</TableCell>
                <TableCell>Workplace</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.eventId} >
                  <TableCell>{event.degName}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <img
                        src={`${apiBaseURL}/photo/${event.organization.logo}`}
                        alt={event.organization.organizationName}
                        className="w-8 h-8 rounded-full object-cover shadow-lg shadow-gray-400"
                      />
                      <div>{event.organization.organizationName}</div>
                    </div>
                  </TableCell>
                  <TableCell>{event.organization.address}</TableCell>
                  <TableCell>{event.strength} roles</TableCell>
                  <TableCell>{event.jobType}</TableCell>
                  <TableCell>{event.workPlaceType}</TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-md text-white ${
                        event.status === 'Active'
                          ? 'bg-green-500'
                          : event.status === 'Pending'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                    >
                      {event.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <IconButton color="primary" onClick={() => handleRowClick(event)} style={{ cursor: 'pointer' }}>
                        <Visibility />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => handleOpenModal(event)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton color="error">
                        <Delete />
                      </IconButton>
                      <FormControl variant="outlined" size="small">
    <InputLabel>Status</InputLabel>
    <Select
      value={event.status} // Assuming org.status is 0 or 1
      onChange={(e) => handleStatusChange(event.eventId, e.target.value)}
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
        {selectedEvent && (
                        <Dialog open={detailsOpen} onClose={handleCloseDetails}>
                          <DialogTitle>Campus Details</DialogTitle>
                          <DialogContent>
                          <p><strong> Event Id:</strong> {selectedEvent.eventId} </p>
                          <p><strong> Designation Name:</strong> {selectedEvent.degName} </p>
                          <p><strong>Strength:</strong> {selectedEvent.strength} </p>
                          <p><strong>Starting Date:</strong> {selectedEvent.startingDate} </p>
                          <p><strong>Ending Date:</strong> {selectedEvent.endingDate} </p>
                          <p><strong>Event Description:</strong> {selectedEvent.eventDescription} </p>
                          <p><strong>Requirements:</strong> {selectedEvent.requirements} </p>
                            <p><strong>Full Name:</strong> {selectedEvent.organization.organizationName}</p>
                            <p><strong>Permanent Address:</strong> {selectedEvent.organization.address}</p>
                            <p><strong>Strength:</strong> {selectedEvent.strength}</p>
                            <p><strong>Job Types:</strong> {selectedEvent.jobType} </p>
                            <p><strong>Work Place Type:</strong> {selectedEvent.workPlaceType} </p>
                            

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
          <Pagination count={3} color="primary" />
        </div>
      </div>

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

      {/* Modal for Editing Event */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Edit Event</DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <form onSubmit={(e) => { e.preventDefault(); handleUpdateEvent(selectedEvent); }}>
              <TextField
                fullWidth
                label="Job Title"
                name="degName"
                value={selectedEvent.degName}
                onChange={handleChangeField}
                className="mb-4"
              />
              <TextField
                fullWidth
                label="Strength"
                name="strength"
                value={selectedEvent.strength}
                onChange={handleChangeField}
                className="mb-4"
              />
              <TextField
                fullWidth
                label="Job Type"
                name="jobType"
                value={selectedEvent.jobType}
                onChange={handleChangeField}
                className="mb-4"
              />
              <TextField
                fullWidth
                label="Workplace Type"
                name="workPlaceType"
                value={selectedEvent.workPlaceType}
                onChange={handleChangeField}
                className="mb-4"
              />
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => { if (selectedEvent) handleUpdateEvent(selectedEvent); }}
          >
            Update Event
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ManageCampus;
