/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface PopupAfterDelayProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const PopupAfterDelay: React.FC<PopupAfterDelayProps> = ({ isVisible, setIsVisible }) => {
  const router = useRouter();

  if (!isVisible) {
    return null;
  }

  const handleBookNowClicked = () => {
    router.push(
      'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20need%20help%20choosing%20the%20right%20Care%20Plan%20for%20my%20baby',
    );
    setIsVisible(false);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        role="alert"
        className="container mx-auto flex h-[100vh] w-11/12 max-w-lg items-center justify-center pt-[4vh] md:w-2/3 "
      >
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="relative z-10 w-11/12 rounded bg-white pb-8 pt-10 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12">
          <div className="flex flex-col items-center overflow-hidden px-4 md:px-6">
            <h2 className="mb-3 text-xl font-bold md:text-2xl">Need Help with our Plans?</h2>

            <p className="pt-1 text-center">
              Our team can help you choose the <span className="font-bold text-primary-500">Right Plan</span> for you as
              per your <span className="font-bold text-primary-500">Baby's Needs</span>.
            </p>

            <p className="pt-1 text-center text-gray-700">Just click the button below and initiate a chat with us!</p>
            <button
              className="mt-4 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              onClick={() => {
                handleBookNowClicked();
              }}
            >
              Chat with Support
            </button>
          </div>
          <div
            className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer transition duration-150 ease-in-out"
            onClick={() => setIsVisible(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Close"
              className="icon icon-tabler icon-tabler-x"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAfterDelay;
