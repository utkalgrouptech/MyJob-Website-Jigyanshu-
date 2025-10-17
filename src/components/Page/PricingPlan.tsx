'use client';

import React from 'react';
import { Box, Button, Grid, Card, CardContent, Typography, Divider } from '@mui/material';

const PricingPlanPage = () => {
  // Pricing Plan data
  const plans = [
    {
      name: 'Basic',
      price: '$30',
      description: 'It is a long established fact that a reader will be distracted',
      features: [
        '15 Featured Job',
        '30 Job Post Monthly',
        'Displayed For 30 Days',
        'Premium Support 24/7',
        'Full Premium Service'
      ],
      buttonLabel: 'Get Started',
    },
    {
      name: 'Standard',
      price: '$50',
      description: 'It is a long established fact that a reader will be distracted',
      features: [
        '15 Featured Job',
        '30 Job Post Monthly',
        'Displayed For 30 Days',
        'Premium Support 24/7',
        'Full Premium Service'
      ],
      buttonLabel: 'Get Started',
    },
    {
      name: 'Premium',
      price: '$90',
      description: 'It is a long established fact that a reader will be distracted',
      features: [
        '15 Featured Job',
        '30 Job Post Monthly',
        'Displayed For 30 Days',
        'Premium Support 24/7',
        'Full Premium Service'
      ],
      buttonLabel: 'Get Started',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$150',
      description: 'It is a long established fact that a reader will be distracted',
      features: [
        '15 Featured Job',
        '30 Job Post Monthly',
        'Displayed For 30 Days',
        'Premium Support 24/7',
        'Full Premium Service'
      ],
      buttonLabel: 'Get Started',
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <Box className="text-center mb-12">
        <Typography variant="h3" className="font-semibold text-4xl">
          Choose Pricing Plan
        </Typography>
        <Typography variant="body1" className="mt-4 text-lg max-w-3xl mx-auto">
          We Provide Global Standard Pricing Packages
        </Typography>
      </Box>

      {/* Pricing Grid */}
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: 4,
                boxShadow: plan.highlight ? 10 : 3,
                border: plan.highlight ? '2px solid #1976d2' : 'none',
                background: plan.highlight ? 'linear-gradient(to bottom, rgba(25,118,210,0.2), rgba(25,118,210,0.1))' : 'white',
                '&:hover': {
                  boxShadow: 10,
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', padding: 3 }}>
                <Typography variant="h6" className="text-gray-900 font-semibold">
                  {plan.name}
                </Typography>
                <Typography variant="h4" className="font-semibold mt-2 text-primary">
                  {plan.price} <span className="text-sm text-gray-500">/Monthly</span>
                </Typography>
                <Typography variant="body2" className="text-gray-500 mt-2">
                  {plan.description}
                </Typography>
                <Divider sx={{ my: 2 }} />

                {/* Plan Features */}
                <Box>
                  {plan.features.map((feature, idx) => (
                    <Typography key={idx} variant="body2" className="text-gray-700">
                      - {feature}
                    </Typography>
                  ))}
                </Box>

                {/* Get Started Button */}
                <Button
                  variant="contained"
                  color={plan.highlight ? 'primary' : 'secondary'}
                  sx={{ marginTop: 3, borderRadius: 2, padding: '10px 20px' }}
                >
                  {plan.buttonLabel}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default PricingPlanPage;
