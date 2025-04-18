import React from 'react';
import { Play, Pause } from 'lucide-react';

const VideoPlayer = ({ item, index, videoRef, isPlaying, isHovered, onToggle, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="relative w-full h-56 bg-black cursor-pointer group"
      onClick={() => onToggle(index)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={item.video}
        muted
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {!isPlaying && (
          <div className="bg-white bg-opacity-70 rounded-full p-3">
            <Play className="h-8 w-8 text-green-800" />
          </div>
        )}

        {isPlaying && isHovered && (
          <div className="bg-white bg-opacity-70 rounded-full p-3">
            <Pause className="h-8 w-8 text-green-800" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;