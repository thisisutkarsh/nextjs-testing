'use client';
import React, { useState } from 'react';
import { CardProps } from '../../shared/types';

const FupCard: React.FC<CardProps> = ({ details, icon, summary, checkIcon, TicKIcon }) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleIconClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <div className="mt-4 flex items-center">
        <div className="text-black-700 ml-3 flex px-2 text-base leading-5 dark:text-gray-200">
          {/* {checkIcon && (
        <div className="flex-shrink-0 cursor-pointer">{checkIcon}</div>
      )} */}
          <p className="text-md font-medium">{summary}</p>
          {TicKIcon && <div className="flex-shrink-0 cursor-pointer">{TicKIcon}</div>}
          <p className="pl-5">{details}</p>
          {icon && (
            <div className="flex-shrink-0 cursor-pointer" onClick={handleIconClick}>
              {icon}
            </div>
          )}
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 z-50">
          <div
            role="alert"
            className="container mx-auto flex h-[100vh] w-11/12 max-w-lg items-center justify-center pt-[4vh] md:w-2/3 "
          >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-11/12 rounded bg-white pb-8 pt-10 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden px-5 md:px-12">
                <p>
                  Fair Usage Policy (FUP) stipulates that the plan would{' '}
                  <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies,
                  then kindly reach out to support using the WhatsApp link so that we can create a discounted plan that
                  covers all children of yours as per their individual needs.
                </p>
                <br />
                <p>
                  Furthermore, the{' '}
                  <span className="font-bold">free consultations need to be booked through support during the day</span>
                  , and for free night consultations (where applicable), we request you to use the feature only in case
                  of emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly
                  hope that you would not misuse the feature.
                </p>

                <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white" onClick={closePopup}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FupCard;
