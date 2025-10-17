'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderArr } from "@/utils/layouts";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  arrows: false,
};

export default function Breadcrumb() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {sliderArr.map((item, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.img.src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={90}
                className="brightness-75"
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="container px-6 sm:px-12 lg:px-20 text-center text-white">
                {/* Subheading */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-12 h-1 bg-blue-500"></span>
                  <h2 className="text-lg md:text-xl font-semibold text-blue-400 uppercase">
                    {item.subheading}
                  </h2>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
                  {item.heading}
                </h1>

                {/* Description */}
                <p className="mt-4 text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
                  {item.description}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg">
                    Get Started
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-500 transition-all duration-300 py-3 px-8 rounded-full shadow-lg">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
