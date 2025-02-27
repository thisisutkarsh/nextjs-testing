'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsPlayCircle } from 'react-icons/bs';
import otherImage from '../../assets/images/gifting/thumbnailGift.webp';

const WeaningVideoPlayer = () => {
  const thumbnail = `https://gh-public-contents.s3.ap-south-1.amazonaws.com/GiftingThumbnail.webp`;
  const videoUrl = `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Babynama+Care+plan(720P_HD).webm`;
  const mp4VideoUrl = 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Babynama+Care+plan(720P_HD).mp4';

  const isIOS = typeof window !== 'undefined' && /iPad|iPhone|iPod/i.test(window.navigator.userAgent);

  const [isPlaying, setIsPlaying] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (videoUrl && mp4VideoUrl) {
      setYoutubeUrl(isIOS ? mp4VideoUrl : videoUrl);
    }
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    } else {
      setIsPlaying(false);
    }
  }, [videoUrl, mp4VideoUrl]);

  const handlePlayPause = () => {
    setIsPlaying((prevPlay) => !prevPlay);
  };

  return (
    <div className="relative mx-auto -mb-12 max-w-7xl px-4 sm:px-6  lg:px-8">
      <div className="relative h-full w-full rounded-xl border-b-8  border-r-8 border-gray-800">
        {isPlaying ? (
          hasWindow && (
            <div>
              <video id="player" autoPlay controls playsInline>
                <source src={youtubeUrl} type={isIOS ? 'video/mp4' : 'video/webm'} />
              </video>
            </div>
          )
        ) : (
          <>
            <div className="hidden md:block">
              <Image src={otherImage} alt="Other Image" width={1500} height={500} />
            </div>
            <div className="md:hidden">
              <Image src={thumbnail} alt="Video Thumbnail" width={500} height={300} />
            </div>
          </>
        )}
      </div>
      <div className="absolute left-[150px] top-[36px] flex items-center md:left-[580px]  md:top-[180px]">
        <button
          className="mt-4 inline-flex items-center    justify-center bg-transparent px-8 py-3 "
          id="player-btn"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            ''
          ) : (
            <>
              <BsPlayCircle style={{ color: 'darkblue' }} size={56} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default WeaningVideoPlayer;
