import React from 'react';
import VideoPlayer from './VideoPlayer';

const NewsCard = ({
  item,
  index,
  videoRef,
  isPlaying,
  isHovered,
  onVideoToggle,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div className="p-3">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {item.type === 'image' && (
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-56 object-cover"
          />
        )}

        {item.type === 'video' && (
          <VideoPlayer
            item={item}
            index={index}
            videoRef={videoRef}
            isPlaying={isPlaying}
            isHovered={isHovered}
            onToggle={onVideoToggle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        )}

        <div className="p-4">
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            {item.title}
          </h2>
          <p className="text-gray-700 mb-4">{item.description}</p>
          <button className="border border-green-800 text-green-800 px-4 py-1 rounded hover:bg-green-800 hover:text-white transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;