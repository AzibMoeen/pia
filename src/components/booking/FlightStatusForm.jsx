import React from 'react';
import { FaClipboardCheck, FaCalendarAlt } from "react-icons/fa";

const FlightStatusForm = () => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-semibold mb-4">Flight Status</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="flightNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Flight Number
          </label>
          <input
            type="text"
            id="flightNumber"
            placeholder="e.g. PK123"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="flightDate" className="block text-sm font-medium text-gray-700 mb-1">
            Flight Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="flightDate"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaCalendarAlt className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors"
        >
          <FaClipboardCheck className="mr-2" />
          <span>Check Status</span>
        </button>
      </div>
    </div>
  );
};

export default FlightStatusForm;