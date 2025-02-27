import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface WeaningDoctorCardProps {
  imageSrc: string | StaticImageData;
  name: string;
  qualification: string;
  description: string;
}

const WeaningDoctorCard: React.FC<WeaningDoctorCardProps> = ({ imageSrc, name, qualification, description }) => {
  return (
    <div className="h-[283px] w-[28vw] overflow-hidden rounded-xl bg-purple-50 shadow-lg dark:bg-slate-800 md:w-[22vw]">
      <div className="flex h-[130px] w-full items-center justify-center rounded-t-xl">
        <Image
          width={100}
          height={100}
          className="h-25 w-25 rounded-xl object-contain shadow-lg"
          src={imageSrc}
          alt="Person"
        />
      </div>
      <div className="flex flex-col px-2 pb-3 md:h-[230px]">
        <p className="text-center text-sm font-bold">{name}</p>
        <p className="mb-4 text-center text-xs font-medium text-gray-800 dark:text-white">{qualification}</p>
        <p className="mb-4 text-left text-xs tracking-wide text-gray-800 dark:text-white">
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default WeaningDoctorCard;
