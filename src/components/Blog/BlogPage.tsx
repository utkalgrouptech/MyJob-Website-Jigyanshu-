"use client";

import { useState } from "react";
import Image from "next/image";
import { Slide1 } from "@/assets/Home";

export default function BlogPost() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, comment });
  };

  return (
    <section className="mx-auto px-4 py-8 bg-gray-50">
      <div className="main-container ">
      {/* Header Section */}
      <header className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
            Blog Post Title
          </h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md px-4 py-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Search"
            />
            <select
              className="border rounded-md px-4 py-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Category"
            >
              <option>Category</option>
              {/* Add more options */}
            </select>
          </div>
        </div>
      </header>

      {/* Main Content & Sidebar */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Section */}
        <main className="md:w-2/3">
          <Image
            src={Slide1.src}
            alt="People at a table"
            width={800}
            height={400}
            className="w-full h-auto mb-6 rounded-lg shadow-lg"
          />
          <article className="prose lg:prose-xl text-gray-800 leading-relaxed">
            <h2 className="text-3xl font-semibold text-gray-700">
              It is a long established fact that a reader
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* Add more content */}
          </article>

          {/* Gallery Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={Slide1.src}
              alt="Collaboration 1"
              width={400}
              height={200}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <Image
              src={Slide1.src}
              alt="Collaboration 2"
              width={400}
              height={200}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Author Section */}
          <div className="mt-8 bg-gray-100 p-6 rounded-lg flex items-center space-x-6 shadow-md">
            <Image
              src="/placeholder.svg"
              alt="Author"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Author Name
              </h3>
              <p className="text-gray-600">Author bio goes here...</p>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Comments (6)
            </h3>
            <div className="space-y-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex space-x-4">
                  <Image
                    src="/placeholder.svg"
                    alt={`Commenter ${index + 1}`}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-700">
                      Commenter {index + 1}
                    </h4>
                    <p className="text-gray-600">
                      This is a placeholder comment for the blog post.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Form */}
          <div className="mt-8 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Leave A Comment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md bg-white shadow-md text-gray-800"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md bg-white shadow-md text-gray-800"
                  required
                />
              </div>
              <textarea
                placeholder="Your Comment*"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-4 py-2 border rounded-md bg-white shadow-md h-32 text-gray-800"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors"
              >
                Post Comment
              </button>
            </form>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="md:w-1/3 space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              Recent Posts
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline text-lg">
                  Recent post title 1
                </a>
              </li>
              {/* Add more recent posts */}
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-800 cursor-pointer hover:bg-gray-300">
                Tag 1
              </span>
              {/* Add more tags */}
            </div>w
          </div>
        </aside>
      </div>
      </div>
    </section>
  );
}
