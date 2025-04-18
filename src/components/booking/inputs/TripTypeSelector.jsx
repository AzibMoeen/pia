import React from 'react';

const TripTypeSelector = ({ tripType, setTripType }) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          name="tripType"
          value="oneway"
          checked={tripType === "oneway"}
          onChange={() => setTripType("oneway")}
          className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
        />
        <label htmlFor="oneway" className="text-gray-700">
          Oneway
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="roundtrip"
          name="tripType"
          value="roundtrip"
          checked={tripType === "roundtrip"}
          onChange={() => setTripType("roundtrip")}
          className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
        />
        <label htmlFor="roundtrip" className="text-gray-700">
          Roundtrip
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="multicity"
          name="tripType"
          value="multicity"
          checked={tripType === "multicity"}
          onChange={() => setTripType("multicity")}
          className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
        />
        <label htmlFor="multicity" className="text-gray-700">
          Multicity
        </label>
      </div>
    </div>
  );
};

export default TripTypeSelector;