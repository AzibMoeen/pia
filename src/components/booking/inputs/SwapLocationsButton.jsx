import React from 'react';
import { FaExchangeAlt } from "react-icons/fa";

const SwapLocationsButton = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-50 ${className}`}
    >
      <FaExchangeAlt className="text-green-600" />
    </button>
  );
};

export default SwapLocationsButton;