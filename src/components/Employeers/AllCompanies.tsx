'use client';

import React, { useState, useEffect } from 'react';
import { TextField, IconButton, Pagination, Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Edit, Delete, Visibility, Add } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import Swal from 'sweetalert2';
import { apiBaseURL } from '../../../config/route.config';

interface Organization {
  compId: string;
  organizationName: string;
  logo?: string;
  address: string;
  description: string;
  phoneNo: string;
  email: string;
  website: string;
  socialMediaLink: string;
  industry: string;
  since: string;
  specialization: string;
  status: number;
}

const AllCompanies: React.FC = () => {
  const [search, setSearch] = useState('');
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [filteredOrganizations, setFilteredOrganizations] = useState<Organization[]>([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [newOrganization, setNewOrganization] = useState({
    organizationName: '',
    email: '',
    password: '',
    address: '',
    description: '',
    phoneNo: '',
    website: '',
    socialMediaLink: '',
    industry: '',
    since: '',
    specialization: '',
  });

  // Fetch organizations
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await fetch(`${apiBaseURL}/organizationDetails/getAll`);
        const result = await response.json();
        if (result.data) {
          setOrganizations(result.data);
          setFilteredOrganizations(result.data);
        } else {
          console.error('Failed to fetch organizations');
        }
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };
    fetchOrganizations();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    setFilteredOrganizations(
      organizations.filter((org) =>
        org.organizationName.toLowerCase().includes(searchValue)
      )
    );
  };

  const handleRowClick = (org: unknown) => {
    setSelectedOrganization(org as Organization);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
    setSelectedOrganization(null);
  };

  const handleEditClick = (organization: Organization) => {
    setSelectedOrganization(organization);
    setOpenEditDialog(true);
  };

  const handleUpdate = async () => {
    if (!selectedOrganization) return;

    try {
      const response = await fetch(
        `${apiBaseURL}/organizationDetails/update/${selectedOrganization?.compId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedOrganization),
        }
      );

      const result = await response.json();

      if (result.success) {
        setOrganizations((prev) =>
          prev.map((org) =>
            org.compId === selectedOrganization.compId ? selectedOrganization : org
          )
        );
        setFilteredOrganizations((prev) =>
          prev.map((org) =>
            org.compId === selectedOrganization.compId ? selectedOrganization : org
          )
        );

        Swal.fire({
          icon: "success",
          title: "Organization Updated Successfully",
          text: result.message || "The organization details have been updated.",
        });

        setOpenEditDialog(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Update Organization",
          text: result.message || "An error occurred while updating the organization.",
        });
      }
    } catch (error: unknown) {
      Swal.fire({
        icon: "error",
        title: "Error Updating Organization",
        text: error instanceof Error ? error.message : "Something went wrong!",
      });
    }
  };

  const handleStatusChange = async (compId: string, value: unknown) => {
    try {
      const response = await fetch(
        `${apiBaseURL}/organizationDetails/update/${selectedOrganization?.compId}`,
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
        setOrganizations((prev) =>
          prev.map((org) =>
            org.compId === compId ? { ...org, status: Number(value) } : org
          )
        );
        setFilteredOrganizations((prev) =>
          prev.map((org) =>
            org.compId === compId ? { ...org, status: Number(value) } : org
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

  const handleCreateOrganization = async () => {
    try {
      const response = await fetch(`${apiBaseURL}/organizationDetails/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrganization),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        console.error("Server Response:", result);
        Swal.fire({
          icon: "error",
          title: "Failed to Create Organization",
          text: result.message || `Error: ${response.status} - ${response.statusText}`,
        });
        return; // Stop further execution if API call fails
      }
  
      // If successful
      setOrganizations([...organizations, result.data]);
      setFilteredOrganizations([...filteredOrganizations, result.data]);
      setOpenCreateDialog(false);
  
      setNewOrganization({
        organizationName: "",
        email: "",
        password: "",
        address: "",
        description: "",
        phoneNo: "",
        website: "",
        socialMediaLink: "",
        industry: "",
        since: "",
        specialization: "",
      });
  
      Swal.fire({
        icon: "success",
        title: "Organization Created Successfully",
        text: result.message || "The new organization has been created.",
      });
    } catch (error: unknown) {
      console.error("Fetch Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error Creating Organization",
        text: error instanceof Error ? error.message : "Something went wrong!",
      });
    }
  };
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4">All Organizations</h1>

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

        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => setOpenCreateDialog(true)}
          className="mb-4"
        >
          Create Company
        </Button>

        {/* Organizations List */}
        <div className="space-y-4">
          {filteredOrganizations.map((org) => (
            <div key={org.compId} className="bg-white p-4 rounded-md shadow-md flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg shadow-gray-400">
                  <img
                    src={`${apiBaseURL}/photo/${org.logo}`}
                    alt="Organization Logo"
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';
                    }}
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">{org.organizationName}</div>
                  <div className="text-sm text-gray-500">{org.address}</div>
                  <div className="text-sm text-gray-400">Industry: {org.industry}</div>
                  <div className="text-sm text-gray-400">Phone: {org.phoneNo}</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <IconButton color="primary" onClick={() => handleRowClick(org)} style={{ cursor: 'pointer' }}>
                  <Visibility />
                </IconButton>
                <IconButton color="primary" title="Edit" onClick={() => handleEditClick(org)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" title="Delete">
                  <Delete />
                </IconButton>

                <FormControl variant="outlined" size="small">
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={org.status}
                    onChange={(e) => handleStatusChange(org.compId, e.target.value)}
                    label="Status"
                  >
                    <MenuItem value={1}>Active</MenuItem>
                    <MenuItem value={0}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          ))}
        </div>
        {selectedOrganization && (
          <Dialog open={detailsOpen} onClose={handleCloseDetails}>
            <DialogTitle>Company Details</DialogTitle>
            <DialogContent>
              <p><strong>Organization Name:</strong> {selectedOrganization.organizationName}</p>
              <p><strong>Organization Address:</strong> {selectedOrganization.address}</p>
              <p><strong>Job Industry:</strong> {selectedOrganization.industry}</p>
              <p><strong>Phone Number:</strong> {selectedOrganization.phoneNo} </p>
              <p><strong>Email:</strong> {selectedOrganization.email} </p>
              <p><strong> Website:</strong> {selectedOrganization.website} </p>
              <p><strong> Since:</strong> {selectedOrganization.since} </p>
              <p><strong> Specilization:</strong> {selectedOrganization.specialization} </p>
              <p><strong>Description:</strong> {selectedOrganization.description} </p>
              <p><strong>Social Media Link:</strong> {selectedOrganization.socialMediaLink} </p>
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
          <Pagination count={1} color="primary" />
        </div>
      </div>

      {/* Edit Dialog */}
      {selectedOrganization && (
        <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)} fullWidth>
          <h1 className='text-xl font-bold  flex items-center justify-center'>Edit Organization</h1>
          <DialogContent>
            <div className="space-y-4">
              <TextField
                fullWidth
                label="Organization Name"
                value={selectedOrganization.organizationName}
                onChange={(e) =>
                  setSelectedOrganization({
                    ...selectedOrganization,
                    organizationName: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                label="Address"
                value={selectedOrganization.address}
                onChange={(e) =>
                  setSelectedOrganization({
                    ...selectedOrganization,
                    address: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                label="Description"
                value={selectedOrganization.description}
                onChange={(e) =>
                  setSelectedOrganization({
                    ...selectedOrganization,
                    description: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                label="Phone No"
                value={selectedOrganization.phoneNo}
                onChange={(e) =>
                  setSelectedOrganization({
                    ...selectedOrganization,
                    phoneNo: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                label="Email"
                value={selectedOrganization.email}
                onChange={(e) =>
                  setSelectedOrganization({
                    ...selectedOrganization,
                    email: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                label="Website"
                value={selectedOrganization.website}
                onChange={(e) =>
                  setSelectedOrganization({
                    ...selectedOrganization,
                    website: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                label="Industry"
                value={selectedOrganization.industry}
                onChange={(e) =>
                  setSelectedOrganization({
                    ...selectedOrganization,
                    industry: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                label="Social Media Link"
                value={selectedOrganization.socialMediaLink}
                onChange={(e) =>
                  setSelectedOrganization({
                    ...selectedOrganization,
                    socialMediaLink: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                label="Since"
                value={selectedOrganization.since}
                onChange={(e) =>
                  setSelectedOrganization({
                    ...selectedOrganization,
                    since: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                label="Specialization"
                value={selectedOrganization.specialization}
                onChange={(e) =>
                  setSelectedOrganization({
                    ...selectedOrganization,
                    specialization: e.target.value,
                  })
                }
              />
              {/* Add other fields as necessary */}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenEditDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleUpdate} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Dialog open={openCreateDialog} onClose={() => setOpenCreateDialog(false)} fullWidth>
        <DialogTitle>Create New Organization</DialogTitle>
        <DialogContent>
          <div className="space-y-4 mt-4">
            <TextField
              fullWidth
              label="Organization Name"
              value={newOrganization.organizationName}
              onChange={(e) => setNewOrganization({ ...newOrganization, organizationName: e.target.value })}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={newOrganization.email}
              onChange={(e) => setNewOrganization({ ...newOrganization, email: e.target.value })}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={newOrganization.password}
              onChange={(e) => setNewOrganization({ ...newOrganization, password: e.target.value })}
            />
            <TextField
              fullWidth
              label="Address"
              value={newOrganization.address}
              onChange={(e) => setNewOrganization({ ...newOrganization, address: e.target.value })}
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={3}
              value={newOrganization.description}
              onChange={(e) => setNewOrganization({ ...newOrganization, description: e.target.value })}
            />
            <TextField
              fullWidth
              label="Phone Number"
              value={newOrganization.phoneNo}
              onChange={(e) => setNewOrganization({ ...newOrganization, phoneNo: e.target.value })}
            />
            <TextField
              fullWidth
              label="Website"
              value={newOrganization.website}
              onChange={(e) => setNewOrganization({ ...newOrganization, website: e.target.value })}
            />
            <TextField
              fullWidth
              label="Social Media Link"
              value={newOrganization.socialMediaLink}
              onChange={(e) => setNewOrganization({ ...newOrganization, socialMediaLink: e.target.value })}
            />
            <TextField
              fullWidth
              label="Industry"
              value={newOrganization.industry}
              onChange={(e) => setNewOrganization({ ...newOrganization, industry: e.target.value })}
            />
            <TextField
              fullWidth
              label="Since"
              value={newOrganization.since}
              onChange={(e) => setNewOrganization({ ...newOrganization, since: e.target.value })}
            />
            <TextField
              fullWidth
              label="Specialization"
              value={newOrganization.specialization}
              onChange={(e) => setNewOrganization({ ...newOrganization, specialization: e.target.value })}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCreateDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleCreateOrganization} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllCompanies;
