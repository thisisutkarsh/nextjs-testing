'use client';
import dynamic from 'next/dynamic';
import { IconArrowDown, IconCheck } from '@tabler/icons-react';

import HeaderWidget from '../common/HeaderWidget';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { StepsProps } from '../../shared/types';
import ViewBrochureModal from './ViewBrochureModal';
import FreePreviewModal from './FreePreviewModal';
import { usePathname, useRouter } from 'next/navigation';
import './ReactPlayer.css';
import StepsImage from '../../assets/images/image-steps-section.webp';
import Image from 'next/image';
import GiftingFatherModal from 'app/(babynama)/gifting-father/GiftingFatherModal';
import BTPPricingModal from 'app/(ads)/breastfeeding-training-program/BTPPaymentModal/BTPPricingModal';
import { btpPlan } from '../../shared/data';
const LactationModal = dynamic(() => import('app/(babynama)/lactation-consultation/LactationModal'));

const Steps: React.FC<StepsProps> = ({ header, title, items, image, videoUrl, mp4VideoUrl, callToAction }) => {
  // Render video section on reaching the section
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });
  const isIOS = typeof window !== 'undefined' && /iPad|iPhone|iPod/i.test(window.navigator.userAgent);

  // end

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isGiftingFatherModalOpen, setIsGiftingFatherModalOpen] = useState(false);
  const [isLactationModalOpen, setIsLactationModalOpen] = useState(false);
  const [isPrimePricingModalOpen, setIsPrimePricingModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  let showBtn = true;
  if (pathname === '/baby-care-plan') showBtn = false;

  function handleButtonClick(): void {
    if (pathname === '/' || pathname === '') {
      router.push('/#pricing');
    } else if (pathname === '/solids-food-start-workshop') {
      setIsBrochureModalOpen(true);
    } else if (pathname === '/gifting') {
      router.push('/gifting/#gifting-pricing');
    } else if (pathname === '/yoga') {
      router.push('/yoga/#hero-yoga');
    } else if (pathname === '/gifting-father') {
      setIsGiftingFatherModalOpen(true);
    } else if (pathname === '/lactation-consultation') {
      setIsLactationModalOpen(true);
    } else if (pathname === '/lactation-program') {
      setIsPrimePricingModalOpen(true);
    } else {
      router.push(`${pathname}/#pricing`);
    }
  }
  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <FreePreviewModal isFreePreviewModalOpen={isPaymentModalOpen} setIsFreePreviewModalOpen={setIsPaymentModalOpen} />
      <ViewBrochureModal isBrochureModalOpen={isBrochureModalOpen} setIsBrochureModalOpen={setIsBrochureModalOpen} />
      <GiftingFatherModal
        isGiftingFatherModalOpen={isGiftingFatherModalOpen}
        setIsGiftingFatherModalOpen={setIsGiftingFatherModalOpen}
      />
      <LactationModal isLactationModalOpen={isLactationModalOpen} setIsLactationModalOpen={setIsLactationModalOpen} />
      {isPrimePricingModalOpen && (
        <div className=" fixed inset-0 z-50 overflow-y-auto  ">
          <div
            role="alert"
            className="container mx-auto flex w-11/12 max-w-lg items-center justify-center pt-[4vh] md:w-2/3 "
          >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-[370px] rounded bg-white px-2 pb-8 pt-10 shadow dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden">
                <div className="mt-4 flex w-full flex-col items-center sm:mt-6 ">
                  <BTPPricingModal plans={btpPlan} />
                </div>
              </div>
              <div
                className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer transition duration-150 ease-in-out"
                onClick={() => setIsPrimePricingModalOpen(false)}
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
              {/* close icon end */}
            </div>
          </div>
        </div>
      )}

      <div className="relative mx-auto -mb-12 max-w-7xl px-4 sm:px-6">
        {header && <HeaderWidget header={header} titleClassname="text-3xl md:text-5xl" />}
        <div className={`row-gap-10 grid gap-6  ${videoUrl ? `md:grid-cols-2` : `md:grid-cols-1`}`}>
          <div className="mb-4 md:mb-0 md:py-4 md:pr-16">
            {title && <h2 className="font-heading mb-8 text-3xl font-bold lg:text-3xl">{title}</h2>}
            {items &&
              items.length &&
              items.map(({ title, description, icon: Icon }, index) => (
                <div key={`item-steps-${index}`} className="flex">
                  {/* Render steps */}
                  <div className="mr-4 flex flex-col items-center">
                    {/* Step icon */}
                    <div>
                      {index !== items.length - 1 ? (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                          {Icon ? (
                            <Icon className="h-6 w-6 text-primary-800 dark:text-slate-200" />
                          ) : (
                            <IconArrowDown className="h-6 w-6 text-primary-800 dark:text-slate-200" />
                          )}
                        </div>
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                          {Icon ? (
                            <Icon className="h-6 w-6 text-white dark:text-slate-200" />
                          ) : (
                            <IconCheck className="h-6 w-6 text-white dark:text-slate-200" />
                          )}
                        </div>
                      )}
                    </div>
                    {index !== items.length - 1 && <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                  </div>
                  <div className={`pt-1 ${index !== items.length - 1 ? 'mb-4 pb-8' : ''}`}>
                    {title && <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                    {description && (
                      <p className="text-base text-gray-600 dark:text-slate-400 md:text-lg">{description}</p>
                    )}
                  </div>
                </div>
              ))}
          </div>
          {/* Render the video section */}
          <div>
            {videoUrl && (
              <div ref={ref}>
                {!inView && (
                  <div className="flex h-[400px] w-full items-center justify-center">
                    {StepsImage && (
                      <Image src={StepsImage} alt="steps" className="max-h-full max-w-full" width={400} height={400} />
                    )}
                  </div>
                )}
                {inView && hasWindow && (
                  <div className="relative">
                    <video
                      id="player"
                      autoPlay
                      muted
                      playsInline
                      loop
                      controlsList="nodownload"
                      disablePictureInPicture
                      disableRemotePlayback
                    >
                      {isIOS ? (
                        <source src={mp4VideoUrl} type="video/mp4" />
                      ) : (
                        <source src={videoUrl} type="video/webm" />
                      )}
                    </video>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {callToAction && callToAction.text && showBtn && (
          <button
            className={`btn btn-primary text-base font-medium sm:mb-0 sm:text-lg md:text-xl ${
              videoUrl ? `w-[100%] md:w-[50%]` : `w-[100%]`
            } mt-8 sm:mb-0`}
            onClick={() => handleButtonClick()}
          >
            {callToAction.text}
          </button>
        )}
      </div>
    </section>
  );
};

export default Steps;
