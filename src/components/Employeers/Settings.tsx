import React from "react";
import { TextField, Button, Typography, Grid, Box, Divider, Container } from "@mui/material";

export default function SettingsPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Update Profile Info
      </Typography>
      <Box component="section" sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Basic Info
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Company Name"
              defaultValue="Rubic Corner"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              defaultValue="rubiccorner@example.com"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Contact Number"
              defaultValue="+2 134 562 458"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Company Website"
              defaultValue="www.example.com"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Team Size"
              defaultValue="50 - 100"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Established"
              defaultValue="1990"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Primary Industry"
              defaultValue=""
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="About Company"
              defaultValue="There are many variations of passages of Lorem Ipsum available..."
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box component="section" sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Contact Info
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Country"
              defaultValue=""
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="City"
              defaultValue="New York"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="State"
              defaultValue="Arizona"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Zip Code"
              defaultValue="85001"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Address"
              defaultValue="25/B Milford Road, AZ 85001, New York, USA"
              multiline
              rows={2}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box component="section" sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Social Network
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Facebook URL"
              defaultValue="https://www.facebook.com/"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Twitter URL"
              defaultValue="https://www.twitter.com/"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="LinkedIn URL"
              defaultValue="https://www.linkedin.com/"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Pinterest URL"
              defaultValue="https://www.pinterest.com/"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="WhatsApp URL"
              defaultValue="https://www.whatsapp.com"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Update Profile Info
      </Button>

      <Divider sx={{ my: 3 }} />

      <Box component="section">
        <Typography variant="h6" gutterBottom>
          Change Password
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Old Password"
              type="password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="New Password"
              type="password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Re-Type Password"
              type="password"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          Change Password
        </Button>
      </Box>
    </Container>
  );
}
