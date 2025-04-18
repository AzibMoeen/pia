import React from 'react';

const ImageCarousel = ({ images, current, handlePrev, handleNext }) => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <img
        src={images[current] || "/placeholder.svg"}
        alt="carousel"
        className="w-full h-full object-cover transition-all duration-800 ease-in-out"
      />

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8592;
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageCarousel;