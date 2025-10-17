'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { img14, img15, img16, img17, img18 } from "@/assets/Home";

// Company Logos Array
const companyLogos = [
  { id: 1, logo: img14 },
  { id: 2, logo: img15 },
  { id: 3, logo: img16 },
  { id: 4, logo: img17 },
  { id: 5, logo: img18 },
  { id: 6, logo: img14 },
  { id: 7, logo: img15 },
  { id: 8, logo: img16 },
];

const CompanyLogoSlider: React.FC = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
          Trusted by Leading Companies
        </h2>
        <Slider {...settings}>
          {companyLogos.map((company) => (
            <div key={company.id} className="px-3">
              <div className="bg-white p-6 shadow-xl rounded-xl transform hover:scale-105 transition duration-300 flex justify-center items-center">
                <Image
                  src={company.logo}
                  alt={`Company Logo ${company.id}`}
                  width={180}
                  height={180}
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompanyLogoSlider;
