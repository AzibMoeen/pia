import React from 'react';
import { FaCalendarDay, FaCalendarAlt, FaChevronDown } from "react-icons/fa";

const SchedulesForm = () => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-semibold mb-4">Flight Schedules</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="relative">
          <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
            From
          </label>
          <div className="relative">
            <input
              type="text"
              id="from"
              placeholder="Select origin"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="relative">
          <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
            To
          </label>
          <div className="relative">
            <input
              type="text"
              id="to"
              placeholder="Select destination"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="scheduleDate" className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <div className="relative">
          <input
            type="date"
            id="scheduleDate"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaCalendarAlt className="text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors"
        >
          <FaCalendarDay className="mr-2" />
          <span>View Schedules</span>
        </button>
      </div>
    </div>
  );
};

export default SchedulesForm;