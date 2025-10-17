'use client';

import React, { useState } from 'react';
import { Button, Typography, Card, CardContent, Avatar, Box } from '@mui/material';
import Star from '@mui/icons-material/Star';
import { Slider } from '@mui/material';
import { backend, cmd, cto, Frontend } from '@/assets/Home';

const AboutUsPage = () => {
  const [rating, setRating] = useState(0);

  return (
    <section className="p-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
      {/* Header Section */}
      <div className="text-center py-12">
        <Typography variant="h3" className="text-4xl font-semibold mb-4">
          About Us
        </Typography>
        <Typography variant="h6" className="text-lg max-w-2xl mx-auto">
          Get the Best Job That Fits You And We Create Unique Experiences.
        </Typography>
        <Typography variant="body1" className="text-gray-100 mt-6 max-w-3xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </Typography>
      </div>

      {/* Statistics Section */}
      <div className="text-center py-12">
        <Typography variant="h4" className="font-semibold mb-6">Our Impact</Typography>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { number: '20M', text: 'Daily Users' },
            { number: '50K', text: 'Job Positions' },
            { number: '30M', text: 'Happy Clients' },
            { number: '50K', text: 'Total Employers' },
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all w-40">
              <Typography variant="h5" className="text-blue-500 font-bold">{item.number}</Typography>
              <Typography variant="body1">{item.text}</Typography>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-800 py-12 text-center text-white">
        <Typography variant="h4" className="font-semibold mb-6">What Our Clients Say</Typography>
        <Typography variant="body1" className="text-gray-200 max-w-2xl mx-auto mt-4 mb-8">
          We collect reviews from our users so you can get an honest opinion about our services.
        </Typography>

        {/* Slider for reviews */}
        <Box className="w-full max-w-xl mx-auto mb-8 bg-white p-6 rounded-xl shadow-lg">
      {/* Heading */}
      <Typography variant="h5" className="text-center font-semibold text-gray-800 mb-4">
        Rate Our Services
      </Typography>

      {/* Star Icons */}
      <div className="flex justify-center gap-2 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`transition-all ${index < rating ? 'text-yellow-500 scale-110' : 'text-gray-300'}`}
          />
        ))}
      </div>

      {/* Slider */}
      <Slider
        value={rating}
        step={1}
        marks
        min={1}
        max={5}
        onChange={(e, newValue) => setRating(newValue as number)}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => `${value} Stars`}
        sx={{
          color: '#FFD700',
          height: 10,
          '& .MuiSlider-thumb': {
            backgroundColor: '#FFD700',
            width: 22,
            height: 22,
          },
          '& .MuiSlider-track': {
            backgroundColor: 'linear-gradient(to right, #FFB800, #FFD700)',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#e0e0e0',
          },
        }}
      />
    </Box>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'Yamini Pati', role: 'CEO at Moodyy.com', quote: 'Myjob has been the industry standard Job Provides for over 12 years.' },
            { name: 'Sheya Ghosh', role: 'HR Manager at Utkal Facility Ltd.', quote: 'It has survived not only five centuries, but also the leap into electronic typesetting.' },
          ].map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-lg bg-white text-center rounded-xl hover:shadow-2xl transition-all w-72">
              <CardContent>
                <Typography variant="body1" className="italic text-gray-800">
                  {testimonial.quote}
                </Typography>
                <Typography variant="body2" className="mt-4 font-semibold text-gray-800">{testimonial.name}</Typography>
                <Typography variant="body2" className="text-gray-500">{testimonial.role}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Team Section */}
      <div className="text-center py-12">
        <Typography variant="h4" className="font-semibold mb-6">Meet Our Experts</Typography>
        <Typography variant="body1" className="text-gray-600 mb-8">
          We help companies and candidates find the right fit.
        </Typography>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'Malaya Kumar Rath', role: 'Project Manager', img:cto },
            { name: 'Suresh Mishra', role: 'CEO & Founder', img: cmd },
            { name: 'Jigyanshu Nayak', role: 'Frontend Developer', img:Frontend },
            { name: 'Shiva Swain', role: 'Backend Developer', img: backend },
          ].map((member, index) => (
            <Card key={index} className="p-4 shadow-lg text-center bg-white rounded-xl w-56">
              <Avatar src={member.img.src} alt={member.name} sx={{ width: 80, height: 80, margin: '0 auto' }} />
              <Typography variant="h6" className="mt-4 font-bold text-gray-800">{member.name}</Typography>
              <Typography variant="body2" className="text-gray-500">{member.role}</Typography>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-blue-700 text-white">
        <Typography variant="h4" className="font-semibold mb-4">
          Join Us Today and Get the Best Job That Fits You!
        </Typography>
        <Button variant="contained" color="primary" href="/signup" size="large">
          Sign Up Now
        </Button>
      </div>
    </section>
  );
};

export default AboutUsPage;
