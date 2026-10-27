"use client";
import Image from "next/image";
import { MapPin, Briefcase, Building } from "lucide-react";
import { img1, img3,  img7, img8,  } from "@/assets/Home";

const jobLocations = [
  {
    city: "Berlin, Germany",
    image: img1,
    vacancies: 50,
    companies: 120,
  },
  {
    city: "San Francisco, CA",
    image: img3,
    vacancies: 80,
    companies: 320,
  },
  {
    city: "Los Angeles, CA",
    image: img7,
    vacancies: 60,
    companies: 250,
  },
  {
    city: "New York, USA",
    image: img7,
    vacancies: 70,
    companies: 200,
  },
  {
    city: "Paris, France",
    image: img8,
    vacancies: 90,
    companies: 260,
  },
  {
    city: "London, UK",
    image: img1,
    vacancies: 110,
    companies: 350,
  },
];

const JobsByLocation: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-6">
          Explore Jobs by Location
        </h2>
        <p className="text-center text-gray-600 text-lg mb-10">
          Find your next career move in the world&apos;s best cities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobLocations.map((location, index) => (
            <div
              key={index}
              className="group bg-white/50 backdrop-blur-md border border-gray-200 shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                {typeof location.image === "string" ? (
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                ) : (
                  <Image
                    src={location.image}
                    alt={location.city}
                    className="rounded-t-xl"
                    layout="responsive"
                    width={400}
                    height={200}
                  />
                )}
                <div className="absolute inset-0 bg-black/30 rounded-t-xl"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                  <MapPin className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-semibold">{location.city}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span className="text-md font-medium">
                      {location.vacancies} Vacancies
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="w-5 h-5 text-purple-600" />
                    <span className="text-md font-medium">
                      {location.companies} Companies
                    </span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 hover:bg-blue-700">
                  Explore Jobs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsByLocation;
