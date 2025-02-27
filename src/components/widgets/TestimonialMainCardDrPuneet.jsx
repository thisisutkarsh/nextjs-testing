'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const TestimonialMainCard = ({ thumbnailUrl, videoUrl, review, reviewer, position }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (videoUrl) {
      setYoutubeUrl(videoUrl);
    }
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    } else {
      setIsPlaying(false);
    }
  }, [videoUrl]);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => {
      if (!prevIsPlaying) {
        // Pausing previously playing videos
        const videos = document.querySelectorAll('video');
        videos.forEach((video) => {
          if (!video.paused) {
            video.pause();
          }
        });
      }
      return !prevIsPlaying;
    });
  };
  return (
    <div className="relative mx-6 mt-20 rounded-lg border-2 border-dashed border-gray-800 bg-pink-100 text-white md:ml-36 md:h-full">
      <div className="">
        <div
          className={` ${
            isPlaying ? 'h-52 w-80 md:h-[80%] md:w-full ' : 'h-36 w-60 md:h-56 md:w-96'
          } absolute left-[-20px] top-[-48px] overflow-hidden rounded-xl border-b-8 border-r-8 border-gray-800 md:left-[-128px] md:top-[-52px]`}
        >
          {isPlaying ? (
            hasWindow && (
              <div>
                <video id="player" autoPlay controls>
                  <source src={youtubeUrl} type="video/mp4" />
                </video>
              </div>
            )
          ) : (
            <Image src={thumbnailUrl} alt="Video Thumbnail" width={500} height={300} />
          )}
        </div>
      </div>
      <button
        className={`absolute ${
          isPlaying ? 'left-64 top-28 md:left-64 md:top-48' : 'left-44 top-16 md:left-56 md:top-32'
        }`}
        id="player-btn"
        onClick={handlePlayPause}
      >
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="28" cy="28" r="24" fill="#333333"></circle>
          <circle cx="24" cy="24" r="24" fill="#0055FF"></circle>
          {isPlaying ? (
            <>
              <rect x="16" y="14" width="4" height="20" rx="2" fill="white"></rect>
              <rect x="27" y="14" width="4" height="20" rx="2" fill="white"></rect>
            </>
          ) : (
            <path
              d="M17.3137 24L17.3137 16.3608C17.3137 14.7762 19.0688 13.8209 20.3995 14.6813L32.2158 22.3204C33.4346 23.1084 33.4346 24.8916 32.2158 25.6796L20.3995 33.3187C19.0688 34.1791 17.3137 33.2238 17.3137 31.6392V24Z"
              fill="white"
            ></path>
          )}
        </svg>
      </button>

      <div className="mt-12 px-4 pb-4 md:mt-28  ">
        <div className=" pt-16 text-lg font-bold text-black ">
          <svg className="" width="41" height="28" viewBox="0 0 41 28" fill="none">
            <path
              opacity="0.12"
              d="M8.772 0.399995L3.156 10.984C1.428 14.332 0.672 16.6 0.672 19.3C0.672 24.376 4.452 27.94 9.528 27.94C14.28 27.94 18.276 24.376 18.276 19.3C18.276 15.304 15.036 12.064 11.148 12.064H10.932L17.412 0.399995H8.772ZM30.696 0.399995L25.08 10.984C23.352 14.332 22.596 16.6 22.596 19.3C22.596 24.376 26.376 27.94 31.452 27.94C36.204 27.94 40.2 24.376 40.2 19.3C40.2 15.304 36.96 12.064 33.072 12.064H32.856L39.336 0.399995H30.696Z"
              fill="#0055FF"
            ></path>
          </svg>
          <h2 className="text-md text-center font-semibold">{review}</h2>
          <div className="mt-6 flex items-center">
            <p className="flex items-center">
              <span className="pr-2 font-bold">
                <span className="pr-1 text-green-500">|</span>
                {reviewer},
              </span>
              <span className="pl-2 italic"> {position}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialMainCard;
