"use client";

import React from "react";
import { NotificationsActive, Message, PersonAdd, Settings } from "@mui/icons-material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const profileViewsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Profile Views",
        data: [220, 340, 300, 400, 450, 380, 500],
        borderColor: "rgba(79, 70, 229, 1)",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const profileViewsOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div className="h-full bg-gray-100 flex flex-col main-container p-8 space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        {[
          { title: "Applied Jobs", value: 620 },
          { title: "Profile Views", value: "25k" },
          { title: "Shortlisted Jobs", value: 150 },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
            <div className="text-gray-500 mt-1">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Profile Views Graph */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-2xl font-semibold mb-4">Your Profile Views</div>
        <Line data={profileViewsData} options={profileViewsOptions} />
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-2xl font-semibold mb-4">Notifications</div>
        <ul className="space-y-4">
          {[
            {
              icon: <NotificationsActive />,
              text: "You Have New Application For Web Designer!",
              time: "just now",
              color: "text-green-500",
            },
            {
              icon: <Message />,
              text: "Tesla Jonsin Has Sent You Private Message!",
              time: "15 min ago",
              color: "text-blue-500",
            },
            {
              icon: <PersonAdd />,
              text: "Henry Wilson Applied For A Job Senior Product Designer",
              time: "2 months ago",
              color: "text-orange-500",
            },
            {
              icon: <Settings />,
              text: "You Have New Review For #53454 This List",
              time: "15 days ago",
              color: "text-yellow-500",
            },
          ].map((notif, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className={`${notif.color} text-lg`}>{notif.icon}</div>
              <div className="flex-1">
                <div>{notif.text}</div>
                <div className="text-gray-400 text-sm">{notif.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Recently Applied Jobs */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-2xl font-semibold mb-4">Jobs Applied Recently</div>
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              title: "Application Developer",
              company: "Circle Pixel",
              category: "Development",
              type: "Full Time",
              time: "2 Hours Ago",
              location: "25/B Milford Road, New York",
              skills: "Figma Photoshop Adobe XD",
              rate: "$150 - $180 /Hour",
            },
            {
              title: "Marketing Manager",
              company: "Azutine Growths",
              category: "Marketing",
              type: "Freelance",
              time: "2 Hours Ago",
              location: "25/B Milford Road, New York",
              skills: "Figma Photoshop Adobe XD",
              rate: "$150 - $180 /Hour",
            },
            {
              title: "Product Designer",
              company: "Larana Inc",
              category: "Design",
              type: "Internship",
              time: "2 Hours Ago",
              location: "25/B Milford Road, New York",
              skills: "Figma Photoshop Adobe XD",
              rate: "$150 - $180 /Hour",
            },
            {
              title: "Creative Director",
              company: "Rubic Corner",
              category: "Design",
              type: "Full Time",
              time: "2 Hours Ago",
              location: "25/B Milford Road, New York",
              skills: "Figma Photoshop Adobe XD",
              rate: "$150 - $180 /Hour",
            },
          ].map((job, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md space-y-2">
              <div className="font-bold text-xl">{job.title}</div>
              <div className="text-gray-500">{job.company}</div>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>{job.category}</span>
                <span>{job.type}</span>
              </div>
              <div className="text-gray-400">{job.time}</div>
              <div className="text-gray-400">{job.location}</div>
              <div className="text-gray-400">{job.skills}</div>
              <div className="text-indigo-600 text-lg font-semibold">{job.rate}</div>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
