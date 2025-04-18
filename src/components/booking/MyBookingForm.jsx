import React from 'react';
import { FaBookmark } from "react-icons/fa";

const MyBookingForm = () => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-semibold mb-4">Manage My Booking</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="bookingRef" className="block text-sm font-medium text-gray-700 mb-1">
            Booking Reference
          </label>
          <input
            type="text"
            id="bookingRef"
            placeholder="Enter your booking reference"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors"
        >
          <FaBookmark className="mr-2" />
          <span>Retrieve Booking</span>
        </button>
      </div>
    </div>
  );
};

export default MyBookingForm;