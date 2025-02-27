'use client';
import React from 'react';
import Image from 'next/image';
import { HeroYogaCardProps } from '../../shared/types';
const TestimonialMainCard: React.FC<HeroYogaCardProps> = ({ name,image }) => {
  return (
    <div className=" flex-col items-center  rounded-xl px-2  text-center text-base text-black ">
      <div className=" inline-block">
        <div className="mb-4 flex-col ">
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              className="h-full w-96 md:h-80 md:w-96 rounded-xl bg-white object-cover shadow-lg"
            />
          )}
          <div className="text-center py-2">
            <h3 className="dark:font-medium font-bold text-gray-800 dark:text-white  text-lg italic">{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialMainCard;
  

