import { useEffect, useState } from "react";
import { tabs } from "../data";

export default function SectionTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleTabChange((prevIndex) => (prevIndex + 1) % tabs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (index) => {
    setFade(false);
    setActiveIndex(index);
    setTimeout(() => {
      setFade(true);
    }, 500);
  };

  return (
    <div className="w-full mt-5">
      <div className="hidden md:block">
        <div className="flex justify-center py-4 space-x-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`min-w-[180px] text-2xl px-4 py-2 cursor-pointer font-semibold transition-all duration-300 ${
                activeIndex === index ? "text-green-800" : "text-green-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="w-full transition-all duration-500">
          <img
            src={tabs[activeIndex].image}
            alt={tabs[activeIndex].label}
            className={`w-full h-auto object-cover image-fade ${fade ? "fade-in" : "fade-out"}`}
          />
        </div>
      </div>

      
      <div className="flex flex-col md:hidden">
        {tabs.map((tab, index) => (
          <div key={index} className="mb-4">
              <p
              className={`text-center text-xl font-semibold mt-2 transition-all duration-500 ${
                activeIndex === index ? "text-green-800" : "text-green-400"
              }`}
            >
              {tab.label}
            </p>
            <img
              src={tab.image}
              alt={tab.label}
              className="w-full h-auto object-cover"
            />
          
          </div>
        ))}
      </div>
    </div>
  );
}
