'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs';

const TestimonialMainCard = ({ videoUrl, thumbnailUrl, review, reviewer, position }) => {
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
    <div className=" h-full w-full  rounded-xl border-2 border-dashed border-gray-800 bg-pink-100 text-black md:h-full md:w-96">
      <div
        className={`${
          isPlaying ? 'h-[400px] w-full md:h-[500px] md:w-96' : ' h-[400px] w-full md:h-[500px] md:w-[380px]'
        } relative overflow-hidden rounded-t-xl`}
      >
        {isPlaying ? (
          hasWindow && (
            <div className="">
              <video id="player" autoPlay controls>
                <source src={youtubeUrl} type="video/webm" />
              </video>
            </div>
          )
        ) : (
          <Image src={thumbnailUrl} alt="Video Thumbnail" width={500} height={500} className="rounded-md" />
        )}
        <button
          className={`absolute ${
            isPlaying ? 'right-1 top-[360px] md:bottom-4 md:left-80' : ' left-28 top-48 md:left-36  md:top-60'
          }`}
          id="player-btn"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <BsPauseCircleFill size={40} className="rounded-full bg-black text-[rgb(255,255,247)]" />
          ) : (
            <BsPlayCircleFill size={60} className="rounded-full bg-black text-white" />
          )}
        </button>
      </div>
      <div className="rounded-xl px-4 pb-4 pt-5 font-semibold text-black md:pt-5">
        <h2 className="text-center text-sm md:text-base ">&quot;{review}&quot;</h2>
        <p className=" flex flex-col">
          <span className=" pt-2 text-xs font-medium md:text-sm">{reviewer}</span>
          <span className="pt-1 text-xs font-medium italic md:text-sm ">{position}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialMainCard;
