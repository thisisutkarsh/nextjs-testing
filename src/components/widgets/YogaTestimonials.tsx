'use client';

import { testimonialData } from '../../shared/data';
import HeaderWidget from '../common/HeaderWidget';
import React, { useEffect, useState } from 'react';
const youtubeUrlStructure = 'https://www.youtube.com/embed/';
const trailingUrl = typeof window !== 'undefined' ? `?showinfo=0&enablejsapi=1&origin=${window.location.origin}` : '';
const YogaTestimonial = () => {
  const { header, testimonials } = testimonialData;
  const [youtubeUrl, setyoutubeUrl] = useState('');
  const [hasWindow, setHasWindow] = useState(false);
  const videoUrl = `${youtubeUrlStructure}jdgXRHmLXBA${trailingUrl}`;
  useEffect(() => {
    if (videoUrl) {
      setyoutubeUrl(videoUrl);
    }
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, [videoUrl]);
  return (
    <section id="testimonials" className="bg-primary-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}
        <div className="m-3 flex transform flex-col gap-10 rounded-xl bg-primary-400 px-4  py-4   shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-800 md:mx-auto md:my-0 md:py-8">
          <div>
            {hasWindow && (
              <div className="h-full w-full">
                <video id="player" autoPlay controls>
                  <source src={youtubeUrl} type="video/webm" />
                </video>
              </div>
            )}
          </div>
          <div className=" text-lg text-white md:text-center ">
            <h1 className="text-xl font-bold underline ">Rupali</h1>
            <h2 className="font-medium text-gray-100 ">Mother of 6 month old baby👶</h2>
            <p className="mt-8 pb-2 italic text-gray-200">
              I started my Postpartum Yoga journey 3 months ago, <br /> and I have really benefited from the postpartum
              yoga classes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaTestimonial;
