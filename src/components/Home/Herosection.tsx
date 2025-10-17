import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CodeIcon from "@mui/icons-material/Code";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";
import BrushIcon from "@mui/icons-material/Brush";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const categoryData = [
  { name: "Marketing & Sale", jobs: 280, icon: <WorkOutlineIcon fontSize="medium" /> },
  { name: "Finance", jobs: 150, icon: <AttachMoneyIcon fontSize="medium" /> },
  { name: "Human Resource", jobs: 350, icon: <PeopleAltIcon fontSize="medium" /> },
  { name: "Customer Service", jobs: 420, icon: <HeadsetMicIcon fontSize="medium" /> },
  { name: "Management", jobs: 170, icon: <SupervisorAccountIcon fontSize="medium" /> },
  { name: "Software", jobs: 520, icon: <CodeIcon fontSize="medium" /> },
  { name: "Retail & Products", jobs: 210, icon: <StoreMallDirectoryIcon fontSize="medium" /> },
  { name: "Security Analyst", jobs: 160, icon: <SecurityIcon fontSize="medium" /> },
  { name: "Market Research", jobs: 230, icon: <BarChartIcon fontSize="medium" /> },
  { name: "Design", jobs: 280, icon: <BrushIcon fontSize="medium" /> },
  { name: "Development", jobs: 270, icon: <DeveloperModeIcon fontSize="medium" /> },
  { name: "Health And Care", jobs: 190, icon: <LocalHospitalIcon fontSize="medium" /> },
];

const OurCategory = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Explore Our Categories</h2>
          <p className="text-gray-500 text-lg mt-2">
            Find your next career opportunity in various fields
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {categoryData.map((category, index) => (
            <div
              key={index}
              className="border-2 border-blue-500 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center 
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative"
            >
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-2 shadow-md">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mt-8 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.jobs} Jobs Available</p>
              <div className="mt-4 w-full">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
                  View Jobs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCategory;
