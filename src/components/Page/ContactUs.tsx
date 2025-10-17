import React from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
} from '@mui/icons-material';

export default function ContactUs() {
  return (
    <Box sx={{ padding: 4, maxWidth: '1200px', mx: 'auto' }}>
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Get In Touch
        </Typography>
        <Typography color="textSecondary">
          It is a long established fact that a reader will be distracted by the readable content of a page.
        </Typography>
      </Box>

      {/* Content Section */}
      <Grid container spacing={4}>
        {/* Left Section (Form) */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Send Us a Message
            </Typography>
            <form>
              <TextField
                label="Your Name"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <TextField
                label="Your Email"
                fullWidth
                variant="outlined"
                margin="normal"
                type="email"
              />
              <TextField
                label="Your Subject"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <TextField
                label="Write Your Message"
                fullWidth
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Right Section (Contact Details + Map) */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
            {/* Contact Details */}
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Contact Information
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOn color="primary" sx={{ mr: 2 }} />
              <Typography>Plot No-HIG-42, Ground Floor, Gangadhar Meher Marg, Jayadev Vihar, Bhubaneswar, 751013</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Phone color="primary" sx={{ mr: 2 }} />
              <Typography>+91 9776666555</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Email color="primary" sx={{ mr: 2 }} />
              <Typography>info@myjob.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <AccessTime color="primary" sx={{ mr: 2 }} />
              <Typography>Mon - Sat (10.00AM - 05.30PM)</Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Map Section */}
            <Box
              sx={{
                width: '100%',
                height: '250px',
                backgroundColor: '#e0e0e0',
                borderRadius: 2,
               overflow: 'hidden',
              }}
            >
              <Typography variant="h6" color="textSecondary">
              <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.9488586684915!2d85.82384800033974!3d20.29794216863871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c2e0bca259%3A0x40a41333187f97c!2sGandhi%20Institute%20of%20Excellent%20Technocrats%2C%20GIET%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1738151701390!5m2!1sen!2sin"
    style={{ width: '100%', height: '250px', border: 'none' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
