"use client";
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Card, Box } from '@mui/material';

const CandidateDeleteProfilePage = () => {
  // State for dialog visibility
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeleteProfile = () => {
    setLoading(true);
    // Simulate profile deletion (e.g., making an API call)
    setTimeout(() => {
      setLoading(false);
      alert('Profile deleted successfully.');
      // You can redirect the user to a different page, e.g., homepage or login page
      // window.location.href = '/home';
    }, 2000);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <section className="p-6">
      <Card sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
        <Typography variant="h4" gutterBottom>Delete Your Profile</Typography>
        <Typography variant="body1" gutterBottom>
          Are you sure you want to delete your profile? This action cannot be undone.
        </Typography>
        
        {/* Delete Profile Button */}
        <Box mt={2}>
          <Button
            variant="contained"
            color="error"
            onClick={handleDialogOpen}
            fullWidth
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete Profile'}
          </Button>
        </Box>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete your profile?"}</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            Deleting your profile will remove all your information permanently. This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleDeleteProfile}
            color="error"
            autoFocus
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default CandidateDeleteProfilePage;
