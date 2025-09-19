'use client';

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// I have updated the data to separate the title and date for better display
const videoData = [
  {
    type: 'youtube',
    url: 'https://www.youtube.com/embed/b-bzT9WbjL0',
    videoId: 'b-bzT9WbjL0',
    title: 'POSH (Prevention of Sexual Harassment) Training at CurePlus Hospitals',
    date: '18-09-2025',
    description: 'CurePlus Hospitals hosted POSH training with Rtn. Col. Ravi Shirahatti (Retd.), engaging 238 plus employees and reinforcing our commitment to a safe, respectful, and inclusive workplace where everyone feels empowered.',
  },
  {
    type: 'youtube',
    url: 'https://www.youtube.com/embed/fE77gCpSnPM',
    videoId: 'fE77gCpSnPM',
    title: 'CurePlus Blood Centre | Our First Blood Donation Camp',
    date: '17-09-2025',
    description: ' CurePlus Blood Centre and ARC Sportzone Hebbal, with Terapanth Yuvak Parishad Mysuru, hosted our first Blood Donation Camp under Raktadan Amrit Mahotsav 2.0. Donors gave the gift of life, supported by Sudofer Syrup for community health. More than an event it’s the start of a movement. Together, we save lives.',
  },
//   {
//     type: 'youtube',
//     url: 'https://www.youtube.com/embed/TkLjQyNti78',
//     videoId: 'TkLjQyNti78',
//     title: 'A New Chapter for CurePlus Hospitals',
//     date: '04-09-2025',
//     description: 'Construction of our new CurePlus Hospital has begun, reinforcing our commitment to advanced, compassionate healthcare for generations to come.',
//   },
//     {
//     type: 'youtube',
//     url: 'https://www.youtube.com/embed/TNoydh6wszw',
//     videoId: 'TNoydh6wszw',
//     title: 'CurePlus Hospitals – Stories of Healing & Hope',
//     date: null, // No date for this video
//     description: 'CurePlus Hospitals is transforming rural healthcare in Karnataka with accessible, quality care that changes lives.',
//   },
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videoData.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videoData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentVideo = videoData[currentIndex];

  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-red-800 mb-6">
          Our Stories & Highlights
        </h2>

        {/* New container for video and arrows */}
        <div className="relative flex items-center justify-center gap-x-2 sm:gap-x-4">
          {/* Previous Button - Moved Outside */}
          <button
            onClick={goToPrevious}
            className="bg-red-100 hover:bg-red-200 text-red-700 p-3 rounded-full transition z-10"
            aria-label="Previous video"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Video Player Area */}
          <div className="relative w-full aspect-video rounded-2xl shadow-xl overflow-hidden bg-black">
            <AnimatePresence initial={false}>
              <motion.iframe
                key={currentIndex}
                src={`${currentVideo.url}?autoplay=1&mute=1&loop=1&playlist=${currentVideo.videoId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AnimatePresence>
          </div>

          {/* Next Button - Moved Outside */}
          <button
            onClick={goToNext}
            className="bg-red-100 hover:bg-red-200 text-red-700 p-3 rounded-full transition z-10"
            aria-label="Next video"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* DYNAMIC TEXT AREA (Reduced Top Margin) */}
        <div className="mt-6 min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-red-800">
                {currentVideo.title}
              </h3>
              {/* This new part renders the date only if it exists */}
              {currentVideo.date && (
                <p className="text-lg text-red-700 mt-1">
                  {currentVideo.date}
                </p>
              )}
              <p className="text-md text-gray-600 mt-3 max-w-2xl mx-auto">
                {currentVideo.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;