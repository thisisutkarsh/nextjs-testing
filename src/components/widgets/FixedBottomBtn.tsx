'use client';
import { useEffect, useState } from 'react';
import { FixedBtnData } from '../../shared/types';
import { LazyMotion, m, domAnimation } from 'framer-motion';

function FixedBottomBtn({ onBookNowClicked, buttonText, fontSize }: FixedBtnData) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition >= 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const lineAnimation = {
    initial: { x: '-100px', rotate: 25 },
    animate: { x: '400px', transition: { duration: 1.5, repeat: Infinity, repeatDelay: 2 } },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={`fixed bottom-[-1px] z-[100] flex w-full items-center justify-center bg-transparent p-4 ${
          isVisible ? 'block md:hidden' : 'hidden'
        }`}
        variants={buttonAnimation}
        initial="initial"
        animate="animate"
        viewport={{ once: false, amount: 0.1 }}
      >
        <button
          onClick={onBookNowClicked}
          className="relative w-full overflow-hidden rounded-[2rem] bg-[#293BDB] py-4 text-center text-[1.2rem] tracking-wide text-white"
          style={fontSize ? { fontSize } : {}}
        >
          <m.div
            variants={lineAnimation}
            initial="initial"
            animate="animate"
            className="absolute -top-[8px] z-[1000] flex h-[150%] gap-x-[6px]"
          >
            <div className="h-full w-[4px] bg-white opacity-[0.3]"></div>
            <div className="h-full w-[10px] bg-white opacity-[0.3]"></div>
          </m.div>
          {buttonText}
        </button>
      </m.div>
    </LazyMotion>
  );
}

export default FixedBottomBtn;
