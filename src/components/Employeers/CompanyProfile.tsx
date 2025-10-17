import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

export default function CompanyProfiles() {
  return (
    <div className="flex  bg-gray-100 h-full main-container ">
      <div className=" bg-white shadow-md rounded-lg p-6">
        {/* Company Basic Info */}
        <h1 className="text-2xl font-bold mb-4">Company Basic Info</h1>
        <div className="space-y-2 grid grid-cols-2">
          <p><span className="font-semibold">Company Name:</span> Rubic Corner</p>
          <p><span className="font-semibold">Email:</span> rubiccorner@example.com</p>
          <p><span className="font-semibold">Contact Number:</span> +2 134 562 458</p>
          <p>
            <span className="font-semibold">Company Website:</span>{' '}
            <Link href="http://www.example.com" passHref>
              <span className="text-blue-600 hover:underline cursor-pointer">
                www.example.com
              </span>
            </Link>
          </p>
          <p><span className="font-semibold">Team Size:</span> 50 - 100</p>
          <p><span className="font-semibold">Established:</span> 1990</p>
          <p><span className="font-semibold">Primary Industry:</span> IT & Software</p>
          <p><span className="font-semibold">Join Date:</span> 21 August, 2024</p>
        </div>

        {/* About Company */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">About Company</h2>
          <p className="text-gray-700">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration 
            in some form, by injected humour, or randomised words which do not look even slightly believable. If you 
            are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden 
            in the middle of text.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Contact Info</h2>
          <div className="space-y-2">
            <p><span className="font-semibold">Country:</span> United States</p>
            <p><span className="font-semibold">City:</span> New York</p>
            <p><span className="font-semibold">State:</span> Arizona</p>
            <p><span className="font-semibold">Zip Code:</span> 85001</p>
            <p><span className="font-semibold">Full Address:</span> 25/B Milford Road, AZ 85001, New York, USA</p>
          </div>
        </div>

        {/* Social Network */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Social Network</h2>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" passHref>
              <span className="text-blue-700 hover:text-blue-800 cursor-pointer">
                <Facebook fontSize="large" />
              </span>
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                <Twitter fontSize="large" />
              </span>
            </Link>
            <Link href="https://www.linkedin.com" passHref>
              <span className="text-blue-700 hover:text-blue-800 cursor-pointer">
                <LinkedIn fontSize="large" />
              </span>
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <span className="text-pink-600 hover:text-pink-700 cursor-pointer">
                <Instagram fontSize="large" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
