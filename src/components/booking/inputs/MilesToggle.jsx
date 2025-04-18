import React from 'react';

const MilesToggle = ({ usesMiles, setUsesMiles }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700">Buy a ticket with Miles</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={usesMiles}
          onChange={() => setUsesMiles(!usesMiles)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
      </label>
    </div>
  );
};

export default MilesToggle;