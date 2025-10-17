"use client";
import React from "react";
import Image from "next/image";
import { img22, img23, img24 } from "@/assets/Home";

const blogs = [
  {
    id: 1,
    title: "The Secrets to a Successful Career Growth",
    author: "Alicia Davis",
    date: "August 30, 2024",
    description:
      "Discover the top career tips that can accelerate your professional journey and help you land your dream job.",
    image: img22,
  },
  {
    id: 2,
    title: "How to Ace Your Next Job Interview",
    author: "John Carter",
    date: "July 18, 2024",
    description:
      "Master the essential interview techniques to impress recruiters and secure your desired position with confidence.",
    image: img23,
  },
  {
    id: 3,
    title: "Top 10 In-Demand Skills for 2025",
    author: "Sophia Lee",
    date: "June 10, 2024",
    description:
      "Stay ahead in the job market with these must-have skills that are shaping the future of work and employment.",
    image: img24,
  },
];

const BlogPage: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Our Latest Blog
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Stay updated with fresh job-related news, career tips, and insights
            that will help you in your professional journey.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-60">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  By <span className="font-semibold">{blog.author}</span> •{" "}
                  {blog.date}
                </p>
                <p className="text-gray-700 mb-6">{blog.description}</p>

                {/* Read More Button */}
                <a
                  href="#"
                  className="inline-block bg-blue-600 text-white py-2 px-5 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
