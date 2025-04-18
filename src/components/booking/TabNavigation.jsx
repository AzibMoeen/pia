import React from 'react';
import {
  FaPlane,
  FaCheckSquare,
  FaBookmark,
  FaClipboardCheck,
  FaCalendarDay,
} from "react-icons/fa";
import { navigationTabs } from "../../data";

const iconMap = {
  FaPlane,
  FaCheckSquare,
  FaBookmark,
  FaClipboardCheck,
  FaCalendarDay,
};

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center -mt-24 mx-4 md:mx-8 lg:mx-16 relative z-20">
      <div className="flex flex-wrap md:flex-nowrap gap-1 rounded-t-lg overflow-hidden w-full max-w-6xl">
        {navigationTabs.map(({ id, icon, label }) => {
          const Icon = iconMap[icon];
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center cursor-pointer justify-center px-4 py-3 font-medium text-sm md:text-base transition-colors ${
                activeTab === id ? "bg-white text-green-700" : "bg-amber-100 text-gray-700 hover:bg-amber-200"
              }`}
            >
              <Icon className="mr-2" />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabNavigation;