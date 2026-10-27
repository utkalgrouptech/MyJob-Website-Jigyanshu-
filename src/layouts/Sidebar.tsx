import React from 'react';
import Link from 'next/link';
import { navigationItems } from '@/utils/layouts';


const Sidebar: React.FC = () => {

  return (
    <section className="bg-blue-700 text-white w-56 h-screen flex flex-col justify-between py-4 px-6 main-container">
      {/* Sidebar Header */}
      <div>
        <div className="text-2xl font-bold mb-10">Rubic Corner</div>
        <ul className="space-y-2">
          {navigationItems.map((item, index) => (
            <li key={index} className="hover:bg-blue-600 transition-all duration-300 p-3 rounded-md cursor-pointer text-sm font-medium">
              {/* Link without explicit <a> */}
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Footer */}
      <div className="text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Rubic Corner
      </div>
    </section>
  );
};

export default Sidebar;
