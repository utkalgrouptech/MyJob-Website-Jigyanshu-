"use client";

import React from "react";
import { Container, Typography, Button, Box, TextField } from "@mui/material";

export default function DeleteAccountPage() {
  const handleDelete = () => {
    // Logic to handle account deletion
    alert("Account deletion process initiated.");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Delete Account
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Deleting your account is permanent and will erase all your data from our servers. 
        This action cannot be undone. Please confirm your decision by entering your password below.
      </Typography>
      <Box component="form" sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button
          fullWidth
          variant="contained"
          color="error"
          size="large"
          onClick={handleDelete}
        >
          Delete My Account
        </Button>
      </Box>
      <Typography variant="body2" color="text.secondary">
        If you have any questions or need help, please contact our support team.
      </Typography>
    </Container>
  );
}
