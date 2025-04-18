import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import LocationInput from './inputs/LocationInput';
import DateInput from './inputs/DateInput';
import Dropdown from './dropdowns/Dropdown';
import MilesToggle from './inputs/MilesToggle';
import SwapLocationsButton from './inputs/SwapLocationsButton';
import TripTypeSelector from './inputs/TripTypeSelector';
import { passengerOptions, classOptions, currencyOptions } from '../../data';

const FlightSearchForm = () => {
  const [tripType, setTripType] = useState("roundtrip");
  const [usesMiles, setUsesMiles] = useState(false);
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(passengerOptions[0]);
  const [travelClass, setTravelClass] = useState(classOptions[0]);
  const [currency, setCurrency] = useState(currencyOptions[0]);
  const [isPassengerDropdownOpen, setIsPassengerDropdownOpen] = useState(false);
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  const swapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  return (
    <>
      <div className="flex flex-wrap items-center mb-6 gap-4 justify-between">
        <TripTypeSelector tripType={tripType} setTripType={setTripType} />
        <MilesToggle usesMiles={usesMiles} setUsesMiles={setUsesMiles} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <LocationInput
          label="From"
          value={fromLocation}
          onChange={setFromLocation}
          placeholder="Select origin"
        />

        <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-y-6 z-10 hidden md:block">
          <SwapLocationsButton onClick={swapLocations} />
        </div>

        <LocationInput
          label="To"
          value={toLocation}
          onChange={setToLocation}
          placeholder="Select destination"
        />
      </div>

      <div className="flex justify-center -mt-2 mb-4 md:hidden">
        <SwapLocationsButton onClick={swapLocations} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DateInput
          label="Departure Date"
          value={departureDate}
          onChange={setDepartureDate}
        />
        <DateInput
          label="Return Date"
          value={returnDate}
          onChange={setReturnDate}
          disabled={tripType === "oneway"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Dropdown
          label="Passengers"
          value={passengers}
          isOpen={isPassengerDropdownOpen}
          setIsOpen={setIsPassengerDropdownOpen}
          options={passengerOptions}
          onChange={setPassengers}
        />

        <Dropdown
          label="Class"
          value={travelClass}
          isOpen={isClassDropdownOpen}
          setIsOpen={setIsClassDropdownOpen}
          options={classOptions}
          onChange={setTravelClass}
        />

        <Dropdown
          label="Currency"
          value={currency}
          isOpen={isCurrencyDropdownOpen}
          setIsOpen={setIsCurrencyDropdownOpen}
          options={currencyOptions}
          onChange={setCurrency}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors"
        >
          <FaSearch className="mr-2" />
          <span>Search</span>
        </button>
      </div>
    </>
  );
};

export default FlightSearchForm;