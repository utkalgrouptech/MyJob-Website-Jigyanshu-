// Add the 'use client' directive at the top
'use client';

import React from 'react';
import Swal from 'sweetalert2';
import { Button, Typography, Card } from '@mui/material';
import { useRouter } from 'next/navigation'; // Import from next/navigation

const CandidateLogoutPage = () => {
  const router = useRouter(); // Use the router from next/navigation

  const handleLogout = async () => {
    // Show SweetAlert confirmation
    const result = await Swal.fire({
      title: 'Are you sure you want to logout?',
      text: 'You will be redirected to the login page.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      // Logout action (e.g., clear local storage, cookies, etc.)
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      
      // Redirect to login page
      router.push('/login');
    }
  };

  return (
    <section className="p-6">
      <Card sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
        <Typography variant="h4" gutterBottom>
          Logout from Your Account
        </Typography>
        <Typography variant="body1" gutterBottom>
          Are you sure you want to log out? You will need to log in again to access your profile.
        </Typography>

        {/* Logout Button */}
        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
          fullWidth
        >
          Logout
        </Button>
      </Card>
    </section>
  );
};

export default CandidateLogoutPage;
