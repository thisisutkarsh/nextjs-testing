'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { StatsApiData, WeaningHeroProps, WeaningWorkshopApiData } from '../../shared/types';
import {
  WeaningWorkshopButtonData,
  initialWeaningWorkshopApiData,
  InfoContentWeaningWorkshop,
  statsInitialApiData,
} from '../../shared/data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewBrochureModal from './ViewBrochureModal';
import './HeroWeaning.css';
import Link from 'next/link';
import UtmHeading from './UtmHeading';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import GeoPhoneInput from './GeoPhoneInput';
import { RiLiveLine } from 'react-icons/ri';
import { BiVideoRecording } from 'react-icons/bi';
import FixedBottomBtn from './FixedBottomBtn';

const HeroWeaning: React.FC<WeaningHeroProps> = ({ weaningHeroData }) => {
  const router = useRouter();
  const { titlePart1, titlePart2, subtitle, paymentButton, image, callToAction } = weaningHeroData;
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [mobile, setMobile] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [apiData, setApiData] = useState<WeaningWorkshopApiData>(initialWeaningWorkshopApiData);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [weaningPackage, setWeaningPackage] = useState('primaryPackage');
  const [coupon, setCoupon] = useState('SOLIDS50');
  const [primaryPackagePrice, setPrimaryPackagePrice] = useState(750);
  const [secondaryPackagePrice, setSecondaryPackagePrice] = useState(250);
  const [appliedCouponPrimary, setAppliedCouponPrimary] = useState(false);
  const [appliedCouponSecondary, setAppliedCouponSecondary] = useState(false);
  const headingContent = UtmHeading();
  const [infoModal, setInfoModal] = useState(false);
  const [infoModalContent, setInfoModalContent] = useState('');
  const [timerDuration, setTimerDuration] = useState(5);

  const [statsApiData, setStatsApiData] = useState<StatsApiData>(statsInitialApiData);
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const pathname = usePathname();

  // For stats api

  const utm_source = searchParams.get('utm_source');
  const utm_medium = searchParams.get('utm_medium');
  const utm_campaign = searchParams.get('utm_campaign');
  const utm_heading = searchParams.get('utm_heading');
  const page_pathname = pathname;

  /*below code works with multiple versions of adset names space, _ */
  let adset_name = searchParams.get('adset_name');
  let ad_name = searchParams.get('ad_name');

  if (!adset_name) {
    adset_name = searchParams.get('adset+name');

    if (!adset_name) {
      adset_name = searchParams.get('adset name');
    }
  }
  if (!ad_name) {
    ad_name = searchParams.get('ad+name');

    if (!ad_name) {
      ad_name = searchParams.get('ad name');
    }
  }

  useEffect(() => {
    setStatsApiData({
      ...statsApiData,
      utm_source: utm_source,
      utm_medium: utm_medium,
      utm_campaign: utm_campaign,
      utm_heading: utm_heading,
      page_pathname: page_pathname,
      adset_name: adset_name,
      ad_name: ad_name,
    });
  }, []);

  // Comment out to check in development
  // useEffect(() => {
  //   console.log('adset_name', adset_name);
  //   console.log('ad_name', ad_name);
  //   console.log('utm_source', utm_source);
  //   console.log('utm_medium', utm_medium);
  // }, [ad_name, adset_name, utm_medium, utm_source]);

  // Add stats api data to sessionstorage

  useEffect(() => {
    if (statsApiData) {
      if (statsApiData.utm_campaign !== undefined && statsApiData.utm_campaign !== null) {
        sessionStorage.setItem('utm_campaign', statsApiData.utm_campaign);
      }
      if (statsApiData.utm_source !== undefined && statsApiData.utm_source !== null) {
        sessionStorage.setItem('utm_source', statsApiData.utm_source);
      }
      if (statsApiData.utm_medium !== undefined && statsApiData.utm_medium !== null) {
        sessionStorage.setItem('utm_medium', statsApiData.utm_medium);
      }
      if (statsApiData.utm_heading !== undefined && statsApiData.utm_heading !== null) {
        sessionStorage.setItem('utm_heading', statsApiData.utm_heading);
      }
      if (page_pathname !== undefined && page_pathname !== null) {
        sessionStorage.setItem('page_pathname', page_pathname);
      }
      if (statsApiData.adset_name !== undefined && statsApiData.adset_name !== null) {
        sessionStorage.setItem('adset_name', statsApiData.adset_name);
      }
      if (statsApiData.ad_name !== undefined && statsApiData.ad_name !== null) {
        sessionStorage.setItem('ad_name', statsApiData.ad_name);
      }
    }
  }, [statsApiData]);

  const changeTimerDuration = (duration: number) => {
    // reduce timer duration by 1 till it reaches 0
    const interval = setInterval(() => {
      if (duration > 0) {
        duration = duration - 1;
        setTimerDuration(duration);
      } else {
        clearInterval(interval);
        setIsDisabled(false);
      }
    }, 1000);
  };

  let data = JSON.stringify({
    mobile: apiData.mobile,
    plan_id: apiData.plan_id,
    offer_name: apiData.offer_name,
    total_count: apiData.total_count,
    payment_source: apiData.payment_source,
    callback_url: apiData.callback_url,
    payment_reason: apiData.payment_reason,
  });

  let config = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_API_URL + '/payments/create-subscription-order/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },
    data: data,
  };

  // end of API Data config
  // For razorpay
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async (): Promise<void> => {
    const res: boolean = (await initializeRazorpay()) as boolean;
    if (!res) {
      alert('Razorpay SDK Failed to load');
      return;
    }

    console.log(apiData);
    console.log(data);
    // BUG Mobile check not working
    // FIX Mobile check working only for indian numbers
    if (apiData.mobile.length < 7) {
      toast.error('Please enter the Correct mobile number!');
      console.log('Invalid Mobile');
      return;
    }
    setIsDisabled(true);
    changeTimerDuration(5);
    try {
      const response = await axios(config);
      console.log(response.data);

      const options: any = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        name: 'Babynama',
        order_id: `${response.data.id}`,
        description: `${apiData.payment_reason}`,
        image: 'https://babynama.com/assets/images/logo-new.webp',
        handler: function (response: any) {
          router.push(`${apiData.callback_url}`);
        },
        prefill: {
          name: '',
          email: '',
          contact: `${apiData.mobile}`,
        },
      };

      try {
        const paymentObject: any = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        toast.error("Couldn't create payment link. Please try again later.");
        setIsDisabled(false);

        console.log(error);
      }
    } catch (error) {
      toast.error("Couldn't create payment link. Please try again later.");

      console.log(error);
    } finally {
      setIsDisabled(false);
      changeTimerDuration(0);
    }
  };

  useEffect(() => {
    if (apiData.plan_id != 0 && apiData.mobile && apiData.callback_url && apiData.payment_reason) {
      makePayment();
    }
  }, [apiData]);

  const handlePayNowClick = () => {
    const primaryPackageDiscountedPrice = 750;
    const secondaryPackageDiscountedPrice = 250;
    const isCouponValid = coupon.toUpperCase().replace(/\s+/g, '') === apiData.offer_name.toUpperCase();
    const newPrimaryPackagePrice = weaningPackage === 'primaryPackage' ? primaryPackageDiscountedPrice : 1500;
    const newSecondaryPackagePrice = weaningPackage === 'secondaryPackage' ? secondaryPackageDiscountedPrice : 500;
    const finalPrimaryPackagePrice = isCouponValid ? primaryPackageDiscountedPrice : newPrimaryPackagePrice;
    const finalSecondaryPackagePrice = isCouponValid ? secondaryPackageDiscountedPrice : newSecondaryPackagePrice;

    setPrimaryPackagePrice(finalPrimaryPackagePrice);
    setSecondaryPackagePrice(finalSecondaryPackagePrice);

    setApiData({
      ...apiData,
      mobile: mobile.replace(/\D/g, ''),
      plan_id: weaningPackage === 'primaryPackage' ? 9 : 8,
      callback_url:
        weaningPackage === 'primaryPackage'
          ? 'https://babynama.com/thank-you-weaning-1500'
          : 'https://babynama.com/thank-you-weaning-500',
      payment_reason: 'Weaning Workshop Payment',
      payment_source: 'Weaning Workshop Page',
      offer_name: 'SOLIDS50',
    });
  };

  // For radio button
  const onOptionChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setWeaningPackage(e.target.value);
    console.log(weaningPackage);
  };

  // For weaning video+hero section

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);
  const videoUrl =
    'https://gh-public-contents.s3.ap-south-1.amazonaws.com/Weaning+Workshop+Trailer+_+Check+description+to+pay+for+full+recording+or+book+seat+in+live+session(720P_HD).webm';
  const mp4VideoUrl =
    'https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Weaning+Workshop+Trailer+_+Check+description+to+pay+for+full+recording+or+book+seat+in+live+session(720P_HD).mp4';

  const isIOS = typeof window !== 'undefined' && /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const handlePlayPause = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleInfoModal = (id: number) => {
    const info = InfoContentWeaningWorkshop.find((data) => id === data.id);

    if (info) {
      // Check if content is a string or a React element
      if (typeof info.content === 'string') {
        // If content is a string, set it directly
        setInfoModalContent(info.content);
      } else {
        // If content is a React element, extract its text content
        // Here you need to replace this with actual logic to extract text content from the React element
        // For example, if it's a <div>, you can use info.content.props.children
        // Replace 'textContent' with the appropriate property/method to extract text content
        const textContent = info.content.props.children;
        setInfoModalContent(textContent);
      }
    }

    setInfoModal(true);
  };

  return (
    <section id="hero-weaning" className="bg-primary-50 dark:bg-gray-800">
      <ViewBrochureModal isBrochureModalOpen={isBrochureModalOpen} setIsBrochureModalOpen={setIsBrochureModalOpen} />
      {/* welcome pop-up start */}

      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50">
          <div
            role="alert"
            className="container mx-auto flex h-auto w-11/12 max-w-lg justify-center pt-[6vh] md:w-2/3 "
          >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

            <div className="relative z-10 w-11/12 rounded bg-white pb-4 pt-6 shadow dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden px-4 md:px-12">
                <div className="mt-4 flex w-full flex-col items-center sm:mt-6">
                  {/* Form start */}
                  <form className="flex w-[100%] flex-col space-y-2">
                    {/* <p className="text-center text-base font-bold text-black">

                      <strong className="text-base text-blue-500"> SOLIDS50</strong>
                    </p> */}
                    {/* <h3 className="text-center text-lg font-bold text-blue-500">Choose your package</h3> */}
                    <div className="wrapper ">
                      <fieldset className="">
                        {infoModal && (
                          <div>
                            <div className="absolute inset-0 z-20 bg-gray-900 opacity-75"></div>
                            <div className="info-modal absolute left-0 right-0 top-20  z-50 mx-auto flex h-auto w-4/5 flex-col rounded-md border-2 bg-white px-2 py-5 text-sm shadow-md">
                              <p className=" px-4 py-2 text-justify leading-5">{infoModalContent}</p>
                              <button
                                onClick={() => setInfoModal(false)}
                                className="btn btn-primary cursor-pointer rounded-md px-1 py-1 transition-all sm:mb-0"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="relative  my-2 flex flex-col items-center rounded-2xl bg-[#FAEBD7] dark:bg-gray-700">
                          <ul className="flex w-full flex-col p-2">
                            <li className=" pb-1 pt-1">
                              <div className="flex gap-3">
                                <RiLiveLine size={22} />
                                <span className="text-sm font-medium text-gray-700 dark:text-white sm:text-base ">
                                  Live Session with Experts
                                </span>
                                <BsFillInfoCircleFill
                                  className="cursor-pointer text-blue-500"
                                  onClick={() => handleInfoModal(3)}
                                />
                              </div>
                            </li>
                            <li className="pb-1 pt-1">
                              <div className="flex gap-3">
                                <FaWhatsapp size={22} />
                                <span className="text-left text-sm font-medium text-gray-700 dark:text-white sm:text-base">
                                  1 Week WhatsApp Support
                                </span>
                                <BsFillInfoCircleFill
                                  className="cursor-pointer text-blue-500"
                                  onClick={() => handleInfoModal(2)}
                                />
                              </div>
                            </li>
                            <li className="pb-1 pt-1">
                              <div className="flex gap-3">
                                <BiVideoRecording size={22} />
                                <span className="text-left text-sm font-medium text-gray-700 dark:text-white sm:text-base">
                                  Lifetime Access to Recordings
                                </span>
                                <BsFillInfoCircleFill
                                  className="cursor-pointer text-blue-500"
                                  onClick={() => handleInfoModal(1)}
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="form__group grid grid-cols-[8%_54%_1fr] gap-x-1"> */}
                        {/* <div className="col-span-1 m-auto"> */}
                        <div className="flex w-full flex-row gap-2 pt-4">
                          {' '}
                          <p className="font-bold">Charges:</p>
                          <p>
                            <span className="text-lg font-bold text-primary-600">
                              ₹{appliedCouponPrimary ? 750 : primaryPackagePrice}
                            </span>
                            <span className="pl-1 text-sm text-red-600 line-through">₹1500</span>
                          </p>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                        <div className="form__group hidden grid-cols-[8%_54%_1fr] gap-x-1">
                          <input
                            type="radio"
                            id="delivery_1"
                            value="secondaryPackage"
                            name="weaningPackage"
                            className="col-span-1 self-center accent-primary-600"
                            disabled={isDisabled}
                            checked={weaningPackage === 'secondaryPackage'}
                            onChange={onOptionChange}
                          />
                          <label htmlFor="delivery_1">Only Lifetime Recording</label>
                          <div className="col-span-1 m-auto">
                            <span className="px-1 text-lg font-bold text-primary-600">
                              ₹{appliedCouponSecondary ? 250 : secondaryPackagePrice}
                            </span>
                            <span className="text-base text-red-600 line-through">₹500</span>
                          </div>
                        </div>
                        {weaningPackage === 'secondaryPackage' && (
                          <div>
                            <p className="text-left text-sm text-red-600 ">
                              You can upgrade to the live session and whatsapp support anytime by contacting the{' '}
                              <Link
                                className="font-bold underline"
                                href="https://api.whatsapp.com/send/?phone=YOUR_PHONE_NUMBER&text=Hi,%20I also%20need%20to%20attend%20live%20session%20for%20the%20next%20Weaning%20workshop"
                              >
                                SUPPORT
                              </Link>{' '}
                              and paying the difference amount of ₹1000
                            </p>
                          </div>
                        )}
                      </fieldset>
                    </div>
                    {/* Mobile number input */}
                    <h4 className="font-base  text-left font-normal text-black dark:text-white">Whatsapp Number:</h4>
                    <label className=" flex w-full flex-col">
                      <GeoPhoneInput mobile={mobile} setMobile={setMobile} isDisabled={isDisabled} />
                    </label>
                    <h4 className="text-left text-base  font-normal text-black dark:text-white">Enter Coupon Code:</h4>
                    <div className="flex items-center">
                      <div className="mr-2 h-10 flex-1 rounded border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-700">
                        <input
                          className="h-full  w-full bg-transparent py-3 pl-4 text-sm leading-none text-black placeholder-gray-600 focus:rounded focus:border-[2px] focus:border-solid focus:border-primary-600 focus:outline-none dark:placeholder-gray-100"
                          placeholder="Enter Coupon Code"
                          value={coupon}
                          disabled={isDisabled}
                          onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary cursor-pointer rounded-md px-3 py-2 transition-all sm:mb-0"
                        disabled={isDisabled}
                        onClick={() => {
                          console.log(coupon);
                          if (coupon.toUpperCase().replace(/\s+/g, '') === 'SOLIDS50') {
                            if (weaningPackage === 'primaryPackage') {
                              setAppliedCouponPrimary(true);
                              setAppliedCouponSecondary(false);

                              toast.success('Coupon applied successfully!');
                            } else if (weaningPackage === 'secondaryPackage') {
                              setAppliedCouponSecondary(true);
                              setAppliedCouponPrimary(false);
                              toast.success('Coupon applied successfully!');
                            } else {
                              toast.error('Invalid package type for coupon');
                            }
                          } else {
                            toast.error('Invalid coupon code');
                          }
                        }}
                      >
                        Apply Code
                      </button>
                    </div>

                    <div className="w-full ">
                      <button
                        type="button"
                        className="btn btn-primary mb-3 w-full cursor-pointer transition-all sm:mb-1"
                        onClick={() => handlePayNowClick()}
                        disabled={isDisabled}
                      >
                        {isDisabled ? `Please Wait ${timerDuration}...` : 'Pay Now'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* end */}
              {/* Close icon start*/}
              <div
                className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer transition duration-150 ease-in-out"
                onClick={() => setIsPaymentModalOpen(false)}
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
      <FixedBottomBtn
        buttonText={WeaningWorkshopButtonData.buttonText}
        onBookNowClicked={() => setIsPaymentModalOpen(true)}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-2 pt-4 md:grid-cols-2 md:gap-8 md:pt-20 ">
          <div className="mx-auto max-w-4xl pb-4 text-center md:pb-8 md:text-left">
            {titlePart1 && (
              <div>
                <h1 className="font-heading leading-tighter mb-4 text-2xl font-bold tracking-normal md:mb-8">
                  {headingContent !== null ? headingContent : titlePart1}
                </h1>
              </div>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && (
                <p className="mb-4 text-lg font-medium text-gray-600 dark:text-slate-400 sm:text-xl md:mb-8 md:text-2xl">
                  {subtitle}
                </p>
              )}
              <div className="m-auto flex max-w-xs flex-col flex-nowrap justify-center gap-4 sm:max-w-md sm:flex-row md:m-0 md:justify-start">
                {paymentButton && (
                  <div className="flex w-full sm:w-auto">
                    <button
                      className="w-full rounded-[2rem] bg-[#293BDB] py-4 text-center text-[1.2rem] tracking-wide text-white"
                      onClick={() => setIsPaymentModalOpen(true)}
                    >
                      {paymentButton}
                    </button>
                  </div>
                )}

                {callToAction && callToAction.text && (
                  <button
                    className="btn border-secondary bg-secondary px-3 text-white shadow-lg transition-all hover:border-secondary hover:bg-transparent hover:text-secondary focus:ring-secondary md:text-xl"
                    onClick={() => setIsBrochureModalOpen(true)}
                  >
                    {callToAction.text}
                  </button>
                )}
              </div>
              {/* </div> */}
            </div>
          </div>
          <div
            className={`md:col-span-1/2 relative col-span-1 m-auto max-w-5xl ${
              isPlaying ? 'h-36 w-[20rem] md:h-[100%] md:w-full ' : 'h-[13rem] w-[20rem] md:h-[28rem] md:w-full'
            }  overflow-hidden rounded-xl border-b-8 border-r-8 border-gray-800 `}
          >
            {isPlaying ? (
              hasWindow && (
                <video id="player" autoPlay controls playsInline>
                  <source src={isIOS ? mp4VideoUrl : videoUrl} type={isIOS ? 'video/mp4' : 'video/webm'} />
                </video>
              )
            ) : (
              <div>
                {image && (
                  <div className=" m-auto max-w-5xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="mx-auto h-auto w-full rounded-md"
                      placeholder="blur"
                      priority={true}
                      width={500}
                      height={500}
                    />
                  </div>
                )}
              </div>
            )}
            <button
              title="Click to play video"
              className={`justify-space-between absolute flex items-center rounded-md bg-blue-500 px-2 py-1 font-semibold text-white opacity-90 shadow-md ${
                isPlaying
                  ? 'left-[16.3rem] top-[5.5rem] md:left-[34rem] md:top-56'
                  : 'left-16 top-24 md:left-56 md:top-48'
              }`}
              id="player-btn"
              onClick={handlePlayPause}
            >
              {' '}
              {!isPlaying ? 'Watch Trailer' : ''}
              <svg width="30" height="30" viewBox="0 0 52 52" fill="none">
                <circle cx="24" cy="24" r="24" fill="#0055FF"></circle>
                {isPlaying ? (
                  <>
                    <rect x="16" y="14" width="4" height="20" rx="2" fill="white"></rect>
                    <rect x="27" y="14" width="4" height="20" rx="2" fill="white"></rect>
                  </>
                ) : (
                  <path
                    d="M17.3137 24L17.3137 16.3608C17.3137 14.7762 19.0688 13.8209 20.3995 14.6813L32.2158 22.3204C33.4346 23.1084 33.4346 24.8916 32.2158 25.6796L20.3995 33.3187C19.0688 34.1791 17.3137 33.2238 17.3137 31.6392V24Z"
                    fill="white"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWeaning;
