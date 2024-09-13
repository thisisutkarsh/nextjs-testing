import Image from 'next/image';
import { StaticImageData } from 'next/image';
import React from 'react';

interface WeaningDoctorCardProps {
  imageSrc: string | StaticImageData;
  name: string;
  qualification: string;
  description: string;
}

const DoctorCardSingle: React.FC<WeaningDoctorCardProps> = ({ imageSrc, name, qualification, description }) => {
  const avatarSrc = typeof imageSrc === 'string' ? imageSrc : imageSrc.src;

  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-lg  bg-purple-100 shadow-lg dark:bg-slate-800">
      <div className="flex justify-center py-1 dark:bg-slate-700">
        <Image
          src={avatarSrc}
          alt="Doctor's Image"
          className="rounded-full border-4 border-purple-200 shadow-lg"
          width={100}
          height={100}
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-center text-2xl font-bold text-slate-900 dark:text-slate-100">{name}</div>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300">{qualification}</p>
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

export default DoctorCardSingle;
