'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import Image from 'next/image';
import { WeaningHeroProps, LactationWebinarFormApiData, StatsApiData } from '../../shared/types';
import { LactationFormApiData, statsInitialApiData, LactationWebinarTimerData } from '../../shared/data';
import { toast } from 'react-toastify';
import PayNowButton from '../../components/widgets/PayNowButton';
import DatePicker from '../../components/atoms/DateOfBirthPicker';
import UtmHeading from '../../components/widgets/UtmHeading';
import GetNextWorkshopDate from '../../components/widgets/GetNextWorkshopDate';
import UtmSubTitle from '../../components/widgets/UtmSubTitle';
import GeoPhoneInput from '../../components/widgets/GeoPhoneInput';
import { isPaymentModalOpenState } from '../../components/state/atoms/modalState';
import playBtn from '../../assets/images/breastfeeding-webinar/Button.svg';

const HeroLactationWebinar: React.FC<WeaningHeroProps> = ({ weaningHeroData }) => {
  const router = useRouter();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useRecoilState(isPaymentModalOpenState);
  const { titlePart1, subtitle, paymentButton, image } = weaningHeroData;
  const [isDisabled, setIsDisabled] = useState(false);
  const [formApiValues, setFormApiValues] = useState<LactationWebinarFormApiData>(LactationFormApiData);
  const [mobile, setMobile] = useState('');
  const [DOB, setDOB] = useState<Date | null>(null);
  const formattedDOB = DOB ? DOB.toLocaleDateString('en-GB') : '';
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [timerDuration, setTimerDuration] = useState<number>(4);

  const headingContent = UtmHeading();
  const subHeading = UtmSubTitle();

  // For tracking
  const [statsApiData, setStatsApiData] = useState<StatsApiData>(statsInitialApiData);
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const pathname = usePathname();

  const utm_source = searchParams.get('utm_source');
  const utm_medium = searchParams.get('utm_medium');
  const utm_campaign = searchParams.get('utm_campaign');
  const utm_heading = searchParams.get('utm_heading');
  const page_pathname = pathname;

  let adset_name = searchParams.get('adset_name');
  let ad_name = searchParams.get('ad_name');

  if (!adset_name) {
    adset_name = searchParams.get('adset+name') || searchParams.get('adset name');
  }
  if (!ad_name) {
    ad_name = searchParams.get('ad+name') || searchParams.get('ad name');
  }

  useEffect(() => {
    setStatsApiData({
      ...statsApiData,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_heading,
      page_pathname,
      adset_name,
      ad_name,
      mobile,
    });
  }, [mobile]);

  useEffect(() => {
    if (statsApiData) {
      sessionStorage.setItem('utm_campaign', statsApiData?.utm_campaign || '');
      sessionStorage.setItem('utm_source', statsApiData?.utm_source || '');
      sessionStorage.setItem('utm_medium', statsApiData?.utm_medium || '');
      sessionStorage.setItem('utm_heading', statsApiData?.utm_heading || '');
      sessionStorage.setItem('page_pathname', page_pathname || '');
      sessionStorage.setItem('adset_name', statsApiData?.adset_name || '');
      sessionStorage.setItem('ad_name', statsApiData?.ad_name || '');
      sessionStorage.setItem('mobile', statsApiData?.mobile || '');
    }
  }, [statsApiData]);

  const submitLactationWebinarForm = async () => {
    setIsDisabled(true);
    startCountdown(5);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/patients/create-lactation-patient/`,
        {
          mobile: formApiValues.mobile,
          due_date: formApiValues.DOB,
          language: formApiValues.language,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
          },
        },
      );

      const monthsUntilDueDate = calculateMonthsUntilDueDate(formattedDOB);
      const isFormSubmissionSuccessful = response?.data === 'success' || response?.data === 'record updated';

      const redirectUrl =
        isFormSubmissionSuccessful && monthsUntilDueDate > 0
          ? `/thank-you-lactation-webinar?monthDiff=${monthsUntilDueDate}`
          : `/thank-you-lactation-webinar?lactationWebinarLanguage=${formApiValues.language}`;

      router.push(redirectUrl);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsDisabled(false);
      startCountdown(0);
    }
  };

  useEffect(() => {
    if (formApiValues.mobile && formApiValues.DOB && formApiValues.language) {
      submitLactationWebinarForm();
    }
  }, [formApiValues]);

  const validateAndSubmitForm = () => {
    if (!mobile || !formattedDOB || !preferredLanguage) {
      toast.error('Please fill in all required fields!');
      return;
    }
    setFormApiValues({
      mobile: mobile.replace(/\D/g, ''),
      DOB: formattedDOB,
      language: preferredLanguage,
    });
  };

  const handleDateSelection = (day: number, month: number, year: number) => {
    const selectedDate = new Date(year, month - 1, day);
    selectedDate.setHours(0, 0, 0, 0); // Normalize date time to 00:00:00

    if (DOB?.getTime() !== selectedDate.getTime()) {
      setDOB(selectedDate);
    }
  };

  const calculateMonthsUntilDueDate = (dueDateString: string): number => {
    const currentDate = new Date();
    const [day, month, year] = dueDateString.split('/').map(Number);
    const dueDate = new Date(year, month - 1, day);

    if (dueDate > currentDate) {
      return (dueDate.getFullYear() - currentDate.getFullYear()) * 12 + (dueDate.getMonth() - currentDate.getMonth());
    }
    return 0;
  };

  const startCountdown = (duration: number) => {
    const interval = setInterval(() => {
      if (duration > 0) {
        setTimerDuration(--duration);
      } else {
        clearInterval(interval);
        setIsDisabled(false);
      }
    }, 1000);
  };

  // Remove unnecessary or unused code for cleanliness
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);
  const videoUrl = `https://gh-public-contents.s3.ap-south-1.amazonaws.com/lactation-webinar-video.mp4`;
  const mp4VideoUrl = 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/lactation-webinar-video.mp4';
  const isIOS = typeof window !== 'undefined' && /iPad|iPhone|iPod/i.test(window.navigator.userAgent);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <section id="hero-weaning" className="bg-[#F0F8FF] dark:bg-gray-800">
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
          <div className="relative z-10 w-11/12 max-w-md rounded-lg bg-white shadow-lg dark:bg-gray-800">
            <div className="flex flex-col items-center p-2 pb-4 pt-8">
              <h3 className="text-center text-sm font-semibold text-primary-600 dark:text-white md:text-xl">
                Introductory Offer: FREE
                <span className="px-1 font-bold text-red-600 line-through md:text-xl">₹999</span> Only for this Week
              </h3>
              <h5 className="blink pt-2 text-sm font-semibold text-black">
                Next Session <GetNextWorkshopDate eventTiming={LactationWebinarTimerData} />
              </h5>
              <form className="w-full space-y-4 pt-2">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                    Enter your WhatsApp Number <span className="text-red-600">*</span>
                  </label>
                  <GeoPhoneInput mobile={mobile} setMobile={setMobile} isDisabled={isDisabled} />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                    {`Baby's`} DOB (or due date) <span className="text-red-600">*</span>
                  </label>
                  <DatePicker onDateChange={handleDateSelection} />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                    Preferred Language on WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="hindi"
                        checked={preferredLanguage === 'hindi'}
                        onChange={() => setPreferredLanguage('hindi')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 dark:bg-gray-700"
                      />
                      <span className="text-sm text-gray-900 dark:text-gray-300">Hindi</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="english"
                        checked={preferredLanguage === 'english'}
                        onChange={() => setPreferredLanguage('english')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 dark:bg-gray-700"
                      />
                      <span className="text-sm text-gray-900 dark:text-gray-300">English</span>
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary mb-3 w-full cursor-pointer transition-all sm:mb-1"
                  onClick={() => validateAndSubmitForm()}
                  disabled={isDisabled}
                >
                  {isDisabled ? `Please Wait ${timerDuration}...` : 'Register Now'}
                </button>
              </form>
            </div>
            <button
              onClick={() => {
                setIsPaymentModalOpen(false);
                setDOB(null);
                setMobile('');
                setPreferredLanguage('hindi');
              }}
              className="absolute right-4 top-3 text-gray-700 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 md:pt-12">
        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2 md:gap-8">
          <div className="mx-auto max-w-4xl pb-4 text-center md:pb-8 md:text-left">
            {titlePart1 && (
              <div>
                <h1 className="font-heading leading-tighter mb-4 text-4xl font-bold tracking-normal md:mb-8">
                  {headingContent !== null ? headingContent : titlePart1}
                </h1>
              </div>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && (
                <p className="mb-4 text-lg font-medium text-gray-600 dark:text-slate-400 sm:text-xl md:mb-8 md:text-2xl">
                  {subHeading !== null ? subHeading : subtitle}
                </p>
              )}
              <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                {paymentButton && (
                  <button
                    className="w-full rounded-[2rem] bg-[#293BDB] py-4 text-[1.2rem] tracking-wide text-white md:block"
                    onClick={() => setIsPaymentModalOpen(true)}
                  >
                    {paymentButton}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="w-full space-y-4 md:w-[45vw] md:px-6">
            {isPlaying ? (
              hasWindow && (
                <div className="relative h-full w-full">
                  <button
                    title="Click to pause video"
                    className="xl:top-[12rem]'
                        absolute left-[17.3rem] top-[7rem] z-[100] md:left-[14rem] lg:left-[22rem] lg:top-[10rem] xl:left-[26rem]
                    "
                    id="player-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isPlaying);
                    }}
                  >
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                      <circle cx="26" cy="26" r="26" fill="rgba(128, 128, 192, 0.5)"></circle>
                      <circle cx="26" cy="26" r="18" fill="#0055FF"></circle>
                      <>
                        <rect x="19" y="15" width="5" height="22" rx="1" fill="white"></rect>
                        <rect x="28" y="15" width="5" height="22" rx="1" fill="white"></rect>
                      </>
                    </svg>
                  </button>
                  <video id="player" autoPlay controls playsInline className="h-full w-full">
                    <source src={isIOS ? mp4VideoUrl : videoUrl} type={isIOS ? 'video/mp4' : 'video/webm'} />
                  </video>
                </div>
              )
            ) : (
              <div className="relative shrink-0">
                {image && (
                  <Image src={image.src} alt={image.alt} className="w-full" priority={true} width={800} height={800} />
                )}
                <button
                  title="Click to play video"
                  className={`absolute ${
                    isPlaying
                      ? 'left-[16.3rem] top-[7rem] md:left-[42rem] md:top-[17.8rem]'
                      : 'left-[10rem] top-[5.5rem] md:left-[7.5rem] md:top-[3.5rem] lg:left-[13rem] lg:top-[7.5rem] xl:left-[17rem] xl:top-[10rem]'
                  }`}
                  id="player-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                >
                  <Image src={playBtn} alt="play button" width={60} height={60} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLactationWebinar;
