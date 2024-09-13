'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { LactationTestimonialSingleCardProps } from '../..//shared/types';
import playBtn from '../../assets/images/breastfeeding-webinar/testimonialcardplaybtn.svg';
import dynamic from 'next/dynamic';
const DivAnimationWrapper = dynamic(() => import('../../components/common/DivAnimationWrapper'), {
  ssr: false,
});

function TestimonialCard({
  thumbnailUrl,
  videoUrl,
  mp4VideoUrl,
  review,
  reviewer,
  position,
}: LactationTestimonialSingleCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [hasWindow, setHasWindow] = useState(false);

  const isIOS = typeof window !== 'undefined' && /iPad|iPhone|iPod/i.test(window.navigator.userAgent);

  useEffect(() => {
    if (videoUrl || mp4VideoUrl) {
      setYoutubeUrl(isIOS ? mp4VideoUrl : videoUrl);
    }
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, [videoUrl, mp4VideoUrl]);

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
    <DivAnimationWrapper>
      <div className="mx-auto mb-4 mt-3 h-[500px] w-[90%] overflow-hidden rounded-[0.7rem] bg-white px-7 py-6 text-[#1D3860] shadow-md shadow-[#AFC1EF]">
        <div className="relative overflow-hidden rounded-[0.6rem]">
          <div
            className={`mx-auto h-[200px] w-[250px] overflow-hidden rounded-lg transition-[height] duration-300 ${
              isPlaying && 'h-[300px] w-[200px]'
            }`}
          >
            {isPlaying ? (
              hasWindow && (
                <div>
                  <video id="player" autoPlay controls playsInline className="h-full w-full">
                    <source src={youtubeUrl} type={isIOS ? 'video/mp4' : 'video/webm'} />
                  </video>
                </div>
              )
            ) : (
              <Image src={thumbnailUrl} alt="Video Thumbnail" width={500} height={300} />
            )}
          </div>
          <button
            className={`absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform ${
              isPlaying && 'top-[90%]'
            }`}
            id="player-btn"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="26" fill="rgba(128, 128, 128, 0.5)"></circle>
                <circle cx="26" cy="26" r="18" fill="#0055FF"></circle>
                <>
                  <rect x="19" y="15" width="5" height="22" rx="1" fill="white"></rect>
                  <rect x="28" y="15" width="5" height="22" rx="1" fill="white"></rect>
                </>
              </svg>
            ) : (
              <Image src={playBtn} alt="play button" width={50} height={50} />
            )}
          </button>
        </div>
        <div className="mt-4">
          <h1 className="text-[1.6rem] font-[600]">{reviewer}</h1>
          <p className="-mt-1 text-base font-[600]">{position}</p>
        </div>
        <div className="mt-2">
          <p>{isPlaying ? review.slice(0, 60) + '...' : review}</p>
        </div>
      </div>
    </DivAnimationWrapper>
  );
}

export default TestimonialCard;
