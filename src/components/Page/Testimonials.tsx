'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    stars: 5,
    comment:
      "This service has been a game changer for our business. The team is professional, and the support is fantastic!",
    name: "John Doe",
    designation: "CEO, Acme Inc.",
    image: "/images/client1.jpg",
  },
  {
    id: 2,
    stars: 4,
    comment:
      "Great experience! The team was very helpful and the results exceeded my expectations.",
    name: "Jane Smith",
    designation: "Marketing Manager, XYZ Corp.",
    image: "/images/client2.jpg",
  },
  {
    id: 3,
    stars: 5,
    comment:
      "Highly recommended! The quality of work and attention to detail were impressive.",
    name: "Emily Johnson",
    designation: "Project Manager, Tech Solutions",
    image: "/images/client3.jpg",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-8 text-lg">
          See how we’ve made a difference in their journey
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-xl p-6 mx-4 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.stars)].map((_, index) => (
                  <svg
                    key={index}
                    className="h-5 w-5 text-blue-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.911c.969 0 1.371 1.24.588 1.81l-3.975 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.975-2.89a1 1 0 00-1.175 0l-3.975 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.06 10.1c-.783-.57-.38-1.81.588-1.81h4.911a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-center italic mb-4">
                &quot;{testimonial.comment}&quot;
              </p>
              <div className="flex items-center justify-center mt-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full border-4 border-blue-500"
                  width={60}
                  height={60}
                />
                <div className="ml-4 text-center">
                  <p className="text-gray-800 font-bold text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
