"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Corrected import for Next.js 13+
import { Container, Typography, Button, Box } from "@mui/material";

const LogoutPage = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Perform logout actions (e.g., clearing tokens)
    localStorage.removeItem("authToken"); // Example token removal
    alert("You have been logged out.");
    router.push("/login"); // Redirect to login page
  };

  const handleCancel = () => {
    router.push("/dashboard"); // Redirect to dashboard
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Logout
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Are you sure you want to log out? You will need to log in again to access your account.
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default LogoutPage;
