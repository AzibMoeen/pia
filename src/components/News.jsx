import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { newsData } from '../data'
import NewsCard from './news/NewsCard'
import { settings } from '../data'

const News = () => {
  const videoRefs = useRef([])
  const [playingIndex, setPlayingIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleVideoToggle = (index) => {
    const video = videoRefs.current[index]
    if (!video) return

    try {
      if (video.paused) {
        videoRefs.current.forEach((v, i) => {
          if (v && i !== index) {
            v.pause()
          }
        })
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setPlayingIndex(index)
            })
            .catch(error => {
              console.log("Video playback error:", error)
            })
        }
      } else {
        video.pause()
        setPlayingIndex(null)
      }
    } catch (error) {
      console.log("Video control error:", error)
    }
  }



  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-semi-bold text-green-800 mb-8 ml-2">
        OUR NEWS
      </h1>

      <Slider {...settings}>
        {newsData.map((item, index) => (
          <NewsCard
            key={index}
            item={item}
            index={index}
            videoRef={(el) => (videoRefs.current[index] = el)}
            isPlaying={playingIndex === index}
            isHovered={hoveredIndex === index}
            onVideoToggle={handleVideoToggle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </Slider>
    </div>
  )
}

export default News
