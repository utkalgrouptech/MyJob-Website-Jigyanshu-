import React from "react";
import Image from "next/image";
import { img1, img2, img3 } from "@/assets/Home";

const CareerTips = () => {
  return (
    <section className="container mx-auto px-6 py-16 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-xl">
      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div className="grid grid-cols-2 gap-6">
          <div className="hover:scale-110 transition-transform duration-500 ease-in-out">
            <Image
              src={img2.src}
              alt="Presentation"
              width={300}
              height={200}
              className="rounded-xl object-cover shadow-xl hover:shadow-2xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="hover:scale-110 transition-transform duration-500 ease-in-out">
              <Image
                src={img1.src}
                alt="Team discussion"
                width={300}
                height={200}
                className="rounded-xl object-cover shadow-xl hover:shadow-2xl"
              />
            </div>
            <div className="hover:scale-110 transition-transform duration-500 ease-in-out">
              <Image
                src={img3.src}
                alt="Meeting discussion"
                width={300}
                height={200}
                className="rounded-xl object-cover shadow-xl hover:shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-blue-600 font-semibold mb-2 uppercase tracking-wider">
            Career Tips
          </h4>
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Quick Career Tips to Get 
            <span className="text-blue-500"> The Best Job </span> 
            That Fits You
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Discover career-enhancing strategies and unlock top job opportunities.
            Elevate your professional journey with expert guidance tailored just for you.
          </p>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center">
              <span className="text-blue-500 text-2xl mr-2">✓</span> Explore top industry insights and trends.
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 text-2xl mr-2">✓</span> Enhance your resume and professional skills.
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 text-2xl mr-2">✓</span> Master the art of job interviews and networking.
            </li>
          </ul>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Find Your Job
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16">
        {[
          { icon: "👥", value: "20M", label: "Daily Users" },
          { icon: "📄", value: "50K", label: "Job Positions" },
          { icon: "😊", value: "30M", label: "Happy Clients" },
          { icon: "🏢", value: "50K", label: "Total Employers" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:scale-110 transition-transform duration-500 ease-in-out border border-gray-200"
          >
            <div className="text-blue-600 text-6xl mb-4">{item.icon}</div>
            <h3 className="text-4xl font-extrabold text-gray-800">{item.value}</h3>
            <p className="text-gray-600 text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerTips;
