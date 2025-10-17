import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "What Are The Charges Of Services ?",
    answer: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desirente odio dignissim quam."
  },
  {
    question: "How Can I Become A Member ?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "What Payment Gateway You Support ?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }
];

export default function FAQSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="aspect-square rounded-full overflow-hidden border-[24px] border-blue-500">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Business meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-blue-500 font-medium text-lg tracking-wide">
              F A Q 
            </h3>
            <h2 className="text-4xl font-bold">
              General <span className="text-blue-500">Frequently</span> Asked Questions
            </h2>
            <p className="text-gray-600">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form by injected.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} className="shadow-lg rounded-md">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{
                    backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff',
                    borderRadius: '8px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 30,
                      height: 30,
                      backgroundColor: 'blue',
                      color: 'white',
                      borderRadius: '50%',
                      marginRight: 2
                    }}
                  >
                    ?
                  </Box>
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingLeft: '32px', paddingRight: '32px' }}>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
