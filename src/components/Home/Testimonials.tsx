'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { img19, img20, img21 } from "@/assets/Home";

const testimonials = [
  {
    id: 1,
    stars: 5,
    comment:
      "This service has been a game changer for our business. The team is professional, and the support is fantastic!",
    name: "Jiban Swain",
    designation: "CEO, Acme Inc.",
    image: img19,
  },
  {
    id: 2,
    stars: 4,
    comment:
      "Great experience! The team was very helpful and the results exceeded my expectations.",
    name: "Jane Cooper",
    designation: "Marketing Manager, Ammiy Corp.",
    image: img20,
  },
  {
    id: 3,
    stars: 5,
    comment:
      "Highly recommended! The quality of work and attention to detail were impressive.",
    name: "Sailaja Mallick",
    designation: "Project Manager, Tech Solutions",
    image: img21,
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-blue-700 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          See how we’ve made a difference in their journey
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div className="bg-white shadow-xl rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.stars)].map((_, index) => (
                    <svg
                      key={index}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.911c.969 0 1.371 1.24.588 1.81l-3.975 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.975-2.89a1 1 0 00-1.175 0l-3.975 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.06 10.1c-.783-.57-.38-1.81.588-1.81h4.911a1 1 0 00.95-.69l1.518-4.674z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-center italic mb-4 text-lg">
                  &quot;{testimonial.comment}&quot;
                </p>
                <div className="flex flex-col items-center mt-6">
                  <Image
                    src={testimonial.image.src}
                    alt={testimonial.name}
                    className="rounded-full border-4 border-blue-500 shadow-lg"
                    width={70}
                    height={70}
                  />
                  <div className="mt-4 text-center">
                    <p className="text-gray-800 font-semibold text-xl">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.designation}
                    </p>
                  </div>
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
