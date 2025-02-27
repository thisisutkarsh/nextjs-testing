'use client';
import React, { useState } from 'react';
import { CardProps } from '../../shared/types';

const Card: React.FC<CardProps> = ({
  details,
  icon,
  summary,
  checkIcon,
  TicKIcon,
  present,
  expanded,
  expandedText,
  terms,
  fontSize,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [expand, setExpand] = useState(false);
  const handleIconClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="mt-2 flex items-center">
      <div className={`text-black-700 flex text-sm leading-5 dark:text-gray-200`}>
        {/* {checkIcon && (
        <div className="flex-shrink-0 cursor-pointer">{checkIcon}</div>
      )} */}
        <p className={`text-sm ${fontSize}`}>{summary}</p>
        <div className="mt-2 flex">
          {TicKIcon && <div className="flex-shrink-0 cursor-pointer">{TicKIcon}</div>}

          {expanded ? (
            <div>
              <p className={`text-sm inline pl-2 ${fontSize} md:pr-1`}>{!expand ? details : expandedText}</p>
              <span className="cursor-pointer border-none">
                <span
                  className={`text-[12px] text-[#a9a9a9] transition-all dark:text-gray-700`}
                  onClick={() => {
                    setExpand(!expand);
                  }}
                >
                  {!expand ? ' more' : ''}
                </span>
              </span>
            </div>
          ) : (
            <p className={`text-sm pl-2 ${fontSize} md:pr-1`}>{details} </p>
          )}
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
                {present ? (
                  <div>
                    <p>We continuously add new services to enhance the value we provide to you.</p>
                    <br />
                  </div>
                ) : (
                  <>{terms}</>
                )}

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

export default Card;
