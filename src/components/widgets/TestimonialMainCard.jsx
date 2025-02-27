'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
const TestimonialMainCard = ({ thumbnailUrl, videoUrl, mp4VideoUrl, review, reviewer, position }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [hasWindow, setHasWindow] = useState(false);
  const [expand, setExpand] = useState(false);

  const isIOS = typeof window !== 'undefined' && /iPad|iPhone|iPod/i.test(window.navigator.userAgent);

  useEffect(() => {
    if (videoUrl || mp4VideoUrl) {
      setYoutubeUrl(isIOS ? mp4VideoUrl : videoUrl);
    }
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    } else {
      setIsPlaying(false);
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
    <div className="relative mx-6 mt-6 h-[360px] rounded-lg border-2 border-dashed border-gray-800 bg-pink-100 text-white md:ml-36 md:mt-12 md:h-[570px] lg:h-[450px]">
      <div className="">
        <div
          className={` ${
            isPlaying ? 'h-80 w-72 md:h-full md:w-full ' : ' h-40 w-40 md:h-64 md:w-64'
          } absolute left-[-22px] top-[-22px] overflow-hidden rounded-xl border-b-8 border-r-8 border-gray-800 md:left-[-40px] md:top-[-40px]`}
        >
          {isPlaying ? (
            hasWindow && (
              <div>
                <video id="player" autoPlay controls playsInline>
                  <source src={youtubeUrl} type={isIOS ? 'video/mp4' : 'video/webm'} />
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
          isPlaying
            ? 'left-[230px] top-[260px] md:left-[300px] md:top-[310px]'
            : ' left-[100px] top-[100px] md:left-[177px] md:top-[11rem]'
        }`}
        id="player-btn"
        onClick={handlePlayPause}
      >
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
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

      <div className="mt-6 px-4 pb-4 font-normal md:mt-28">
        <div className="pt-[120px] text-lg text-black">
          <svg className="" width="41" height="28" viewBox="0 0 41 28" fill="none">
            <path
              opacity="0.12"
              d="M8.772 0.399995L3.156 10.984C1.428 14.332 0.672 16.6 0.672 19.3C0.672 24.376 4.452 27.94 9.528 27.94C14.28 27.94 18.276 24.376 18.276 19.3C18.276 15.304 15.036 12.064 11.148 12.064H10.932L17.412 0.399995H8.772ZM30.696 0.399995L25.08 10.984C23.352 14.332 22.596 16.6 22.596 19.3C22.596 24.376 26.376 27.94 31.452 27.94C36.204 27.94 40.2 24.376 40.2 19.3C40.2 15.304 36.96 12.064 33.072 12.064H32.856L39.336 0.399995H30.696Z"
              fill="#0055FF"
            ></path>
          </svg>
          <h2 className="text-center text-sm font-semibold md:text-base">{review}</h2>
          <div className="mt-4">
            <p className="flex flex-col">
              <span className="text-sm font-medium md:text-base">{reviewer},</span>
              <span className="text-xs font-normal italic md:text-sm">{position}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialMainCard;
