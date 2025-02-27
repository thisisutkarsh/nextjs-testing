'use client';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FooterFixedButtonData } from '../../shared/types';
const FixedBottomButton: React.FC<FooterFixedButtonData> = ({
  discountedPrice,
  originalPrice,
  onBookNowClicked,
  buttonText,
  text,
  buttonTextWidth,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [translateX, setTranslateX] = useState(1);
  const [glareInterverId, setGlareIntervalId] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/doctors' || pathname === '/testimonials') {
      setIsVisible(true);
    } else {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition >= 450);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Effect to update the glare animation
  // useEffect(() => {
  //   if (isVisible) {
  //     const intervalId = setInterval(() => {
  //       setTranslateX((prevTranslateX) => {
  //         const nextValue = prevTranslateX + (2 * 3 + 0.4);
  //         return nextValue <= 30.0 ? parseFloat(nextValue.toFixed(3)) : 1.0;
  //       });
  //     }, 250);

  //     setGlareIntervalId(intervalId);
  //   } else {
  //     if (glareInterverId) {
  //       clearInterval(glareInterverId);
  //     }
  //   }

  //   // Cleanup the interval on component unmount
  //   if (glareInterverId) {
  //     return () => clearInterval(glareInterverId);
  //   }
  // }, [isVisible]);

  return (
    <div
      className={`fixed bottom-[-1px] z-[100] flex w-full items-center justify-center bg-transparent p-2 ${
        isVisible ? 'block md:hidden' : 'hidden'
      }`}
    >
      <button
        className={`text-md relative rounded-md bg-cta-600 font-semibold text-white ${buttonTextWidth} w-full px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-purple-200 sm:text-lg md:w-auto md:text-xl`}
        onClick={onBookNowClicked}
      >
        {buttonText}
        <div className="glare"></div>
      </button>
    </div>
  );
};

export default FixedBottomButton;
