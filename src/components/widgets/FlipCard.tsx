import './flipCard.css';
import Image from 'next/image';
import { FeatureItem } from '../../shared/types';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const FlipCard: React.FC<FeatureItem> = ({ title, image, icon, description, callToAction, subtitle }) => {
  const pathname = usePathname();
  const [newHeight, setNewHeight] = useState<number>(300);
  return (
    <div className="card-wrapper flip-left rounded-xl bg-white shadow-lg  dark:bg-slate-800">
      <div className={`card h-[${newHeight}px]`}>
        {/* <div className=" card h-[300px]"> */}
        <div className="front">
          {/* If border needs to be changed according to the passed colors from data.tsx add the class name accordingly */}
          {image && (
            <div className={` mb-5 w-20 rounded-full border-[5px] border-primary-300 `}>
              <Image src={image.src} width={100} height={100} alt="icon" />
            </div>
          )}
          {icon && (
            <div className="h-15 m-auto mb-5 w-20 rounded-full border-[5px] border-primary-300 ">
              <span className="text-3xl text-white">{icon}</span>
            </div>
          )}
          <h3 className="mb-2 text-center text-lg font-semibold">{title}</h3>
          <div>
            <p className="text-center text-gray-500 dark:text-gray-400">{subtitle}</p>
          </div>
        </div>
        {/* <div className="back">
          {description && (
            <div>
              <p className="text-gray-500 dark:text-gray-400">{description}</p>
            </div>
          )}
          {callToAction && callToAction.text && callToAction.href && (
            <div className="mt-8 flex w-full sm:w-auto">
              <Link
                className="w-full rounded-[2rem] bg-[#293BDB] py-4 text-center text-[1.2rem] tracking-wide text-white"
                href={callToAction.href}
              >
                {callToAction.icon && <callToAction.icon className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />} {callToAction.text}
              </Link>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};
export default FlipCard;
