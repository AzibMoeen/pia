import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ from, to, price, currency, imageSrc, size = "normal" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-md group cursor-pointer ${
        size === "large" ? "h-[530px]" : "h-[250px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="w-full h-full overflow-hidden">
        <img 
          src={imageSrc || "/placeholder.svg"} 
          alt={`${from || ''} ${to ? 'to ' + to : ''}`} 
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Top Left Info Box */}
      {(from || to || price) && (
        <div className="absolute top-2 left-2 bg-amber-600/90 text-white px-3 py-2 rounded-md shadow-md z-10">
          {from && <div className="text-sm font-medium">{from}</div>}
          {to && <div className="text-sm font-medium">→ {to}</div>}
          {price && <div className="text-base font-bold mt-1">{currency}{price}</div>}
        </div>
      )}

      {/* Bottom Hover Section */}
      <div 
        className={`absolute left-0 right-0 transition-all duration-700 ease-in-out z-20 ${
          isHovered ? 'bottom-4 opacity-100' : '-bottom-20 opacity-0'
        }`}
      >
        <div className="mx-4 bg-green-700 text-white rounded-full h-[40px] flex items-center justify-center text-sm font-medium hover:bg-green-800 transition duration-300">
          Book Now
        </div>
        <Link 
          to="/more-details" 
          className="text-white text-center block mt-2 text-sm underline"
        >
          More details
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
