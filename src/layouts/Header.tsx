import React from 'react';
import Link from 'next/link';
import { menuData } from '@/utils/layouts';
import { logo } from '@/assets/layouts';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-300 to-indigo-500 shadow-lg relative z-50 w-full">
      <div className="main-container mx-auto flex items-center justify-between h-20 px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo.src} alt="Logo" className="h-10" />
        </div>

        {/* Centered Menu */}
        <nav className="flex-grow flex h-20 justify-center items-center space-x-6">
          {menuData.map((item, index) => (
            <div key={index} className="relative h-full w-fit  center group">
              <Link
                href={item.link || '#'}
              >
                {item.title} {
                  item.submenu &&
                 <KeyboardArrowDownOutlinedIcon/>
                }
              </Link>
              {item.submenu && (
                <div className="absolute left-0 top-16 w-48 bg-white shadow-lg rounded  z-50 group-hover:block hidden">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.link}
                      className="block px-4 py-2 h-full text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Sign In and Post Job Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/signin"
            className="flex items-center text-white hover:text-gray-200 transition-all duration-200"
          >
            <UserCircleIcon className="h-6 w-6 mr-1" />
            Sign In
          </Link>
          <Link
            href="/post-job"
            className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            <BriefcaseIcon className="h-5 w-5 mr-2" />
            Post Job
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
