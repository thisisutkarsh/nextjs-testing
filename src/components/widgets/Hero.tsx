import Image from 'next/image';
import { HeroProps } from '../../shared/types';
import React, { useState } from 'react';
import Link from 'next/link';
import UtmHeading from './UtmHeading';

const Hero: React.FC<HeroProps> = ({ title, subtitle, callToAction, callToAction2, image }) => {
  const headingContent = UtmHeading();

  return (
    <section id="heroOne" className="bg-primary-50 dark:bg-gray-800">
      {/* <FreePreviewModal isFreePreviewModalOpen={isPaymentModalOpen} setIsFreePreviewModalOpen={setIsPaymentModalOpen} /> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 pt-4 md:grid-cols-2 md:pt-8">
          <div className="mx-auto max-w-4xl pb-10 text-center md:text-left">
            {title && (
              <h1 className="font-heading leading-tighter mb-6 text-3xl font-bold tracking-normal">
                {headingContent !== null ? headingContent : title}
              </h1>
            )}

            <div className="mx-auto max-w-3xl">
              {subtitle && (
                <p className="mb-8 text-lg font-medium text-gray-600 dark:text-slate-400 sm:text-xl md:text-2xl">
                  {subtitle}
                </p>
              )}
              <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                {callToAction && callToAction.text && callToAction.href && (
                  <Link
                    className="w-full rounded-[2rem] bg-[#293BDB] py-4 text-center text-[1.1rem] tracking-wide text-white"
                    href={callToAction.href}
                  >
                    {callToAction.text}
                  </Link>
                )}
                {callToAction2 && callToAction2.text && (
                  <Link
                    className="btn w-full border-secondary bg-secondary text-base font-medium text-white shadow-lg transition-all duration-200 ease-in-out hover:border-secondary hover:bg-transparent hover:text-secondary focus:ring-secondary sm:text-lg md:w-auto md:text-xl"
                    href={callToAction2.href}
                  >
                    {callToAction2.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
          {image && (
            <div className="md:col-span-1/2 relative col-span-1 m-auto max-w-5xl">
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full rounded-md"
                placeholder="blur"
                priority={true}
                width={400}
                height={400}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
