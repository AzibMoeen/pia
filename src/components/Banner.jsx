import { useState, useEffect } from "react";
import { Info, ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import {announcements} from "../data/index.js";


export default function RotatingBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [animateText, setAnimateText] = useState(true);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setAnimateText(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % announcements.length);
          setAnimateText(true);
        }, 300); 
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToPrevious = () => {
    setAnimateText(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
      );
      setAnimateText(true);
    }, 300);
  };

  const goToNext = () => {
    setAnimateText(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
      setAnimateText(true);
    }, 300);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#FAF8F1] text-black-50 py-3 px-4 flex items-center justify-between overflow-hidden">
      <div className="flex items-center flex-1 overflow-hidden">
        <Info className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
        <div className="overflow-hidden flex-1">
          <a
            href={announcements[currentIndex].link}
            className={`text-sm md:text-base font-medium hover:underline whitespace-nowrap block transition-opacity duration-300 ${
              animateText ? "animate-slide-in" : "opacity-0"
            }`}
          >
            {announcements[currentIndex].text}
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
        <button
          onClick={togglePause}
          className="p-1 hover:bg-gray-700 rounded-full"
          aria-label={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
        <button
          onClick={goToPrevious}
          className="p-1 hover:bg-gray-700 rounded-full"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={goToNext}
          className="p-1 hover:bg-gray-700 rounded-full"
          aria-label="Next announcement"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <button
          onClick={closeBanner}
          className="p-1 hover:bg-gray-700 rounded-full ml-2"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
