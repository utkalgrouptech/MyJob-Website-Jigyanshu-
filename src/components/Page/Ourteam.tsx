'use client';

import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, IconButton, Grid } from '@mui/material';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { backend, cmd, cto, Frontend } from '@/assets/Home';

const OurTeamPage = () => {
  // Team members' data
  const teamMembers = [
    {
      name: 'Malaya Kumar Rath',
      role: 'Project Manager',
      image: cto,
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/'
    },
    {
      name: 'Suresh Mishra',
      role: 'CEO & Founder',
      image: cmd,
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/'
    },
    {
      name: 'Jigyanshu Nayak',
      role: 'Frontend Developer',
      image: Frontend,
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/'
    },
    {
      name: 'Shiva Swain',
      role: 'Backend Developer',
      image: backend,
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500">
      <Box className="text-center text-white mb-12">
        <Typography variant="h3" className="font-semibold text-4xl">
          Meet Our Team
        </Typography>
        <Typography variant="body1" className="mt-4 text-lg max-w-3xl mx-auto">
          We are a team of experienced professionals dedicated to helping companies and candidates find the right fit.
        </Typography>
      </Box>

      {/* Team Members Grid */}
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
                borderRadius: 4,
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 10,
                },
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={member.image.src}
                alt={member.name}
                sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" className="text-white font-semibold">
                  {member.name}
                </Typography>
                <Typography variant="body2" className="text-gray-300">
                  {member.role}
                </Typography>

                {/* Social Media Links */}
                <Box className="mt-4 flex justify-center">
                  <IconButton
                    href={member.linkedin}
                    target="_blank"
                    color="primary"
                    aria-label="LinkedIn"
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    href={member.twitter}
                    target="_blank"
                    color="primary"
                    aria-label="Twitter"
                  >
                    <Twitter />
                  </IconButton>
                  <IconButton
                    href={member.github}
                    target="_blank"
                    color="primary"
                    aria-label="GitHub"
                  >
                    <GitHub />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default OurTeamPage;
