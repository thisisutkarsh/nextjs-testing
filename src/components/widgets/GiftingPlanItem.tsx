import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlanItemProps } from '../../shared/types';
import PayNowButton from './PayNowButton';
import Card from './Card';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getPriceWithCoupon } from '../../utils/getPriceWithCoupon';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

import { ReferralApiData } from '../../shared/types';
import { referralInitialApiData } from '../../shared/data';

const GiftingPlanItem: React.FC<PlanItemProps> = ({ plan, isSixMonthly }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isDisabled, setIsDisabled] = useState(false);
  // API Data config
  const [apiData, setApiData] = useState<ReferralApiData>(referralInitialApiData);

  let data = JSON.stringify({
    mobile: apiData.mobile,
    plan_id: apiData.plan_id,
    total_count: apiData.total_count,
    payment_source: 'Babynama Gifting Page',
    callback_url: apiData.callback_url,
    payment_reason: apiData.payment_reason,
    friend_mobile: apiData.friend_mobile,
    offer_name: 'NEWMOMGIFT',
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
    try {
      const response = await axios(config);
      console.log(response.data);
      if (response.data.message !== undefined) {
        toast.error(response.data.message);
        setIsDisabled(false);
        return;
      }
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
        setIsDisabled(false);
        setIsModalOpen(false);
      } catch (error) {
        toast.error("Couldn't create payment link. Please try again later.");
        setIsDisabled(false);
        setIsModalOpen(false);
        console.log(error);
      }
    } catch (error) {
      toast.error("Couldn't create payment link. Please try again later.");
      setIsDisabled(false);
      console.log(error);
    }
  };

  // Modal logic  section for number input
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleStartNowClick = () => {
    setIsModalOpen(true);
  };
  //  end modal logic section

  // for phone input
  const [mobile, setMobile] = useState('');
  const [friendMobile, setFriendMobile] = useState('');
  // end phone input

  // For expanding card details
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  // end expanding card details

  useEffect(() => {
    if (
      apiData.plan_id != 0 &&
      apiData.mobile &&
      apiData.friend_mobile &&
      apiData.callback_url &&
      apiData.payment_reason
    ) {
      makePayment();
    }
  }, [apiData]);

  const preparePaymentData = (
    planId: number,
    mobile: string,
    friendMobile: string,
    totalCount: number,
    callbackUrl: string,
    paymentReason: string,
  ) => {
    setApiData({
      ...apiData,
      mobile: mobile.replace(/\D/g, ''),
      friend_mobile: friendMobile.replace(/\D/g, ''),
      plan_id: planId,
      total_count: totalCount,
      callback_url: callbackUrl,
      payment_reason: paymentReason,
    });
  };

  const handlePayNowClick = (planId: number, isSixMonthly: boolean) => {
    if (planId === 1) {
      if (isSixMonthly) {
        makePrimeSixMonthlyPayment();
      } else {
        makePrimeMonthlyPayment();
      }
    } else if (planId === 2) {
      if (isSixMonthly) {
        makeHolisticSixMonthlyPayment();
      } else {
        makeHolisticMonthlyPayment();
      }
    } else {
      // Handle invalid planId
      console.log('Invalid planId');
    }
  };

  const makePrimeMonthlyPayment = () => {
    preparePaymentData(15, mobile, friendMobile, 5, 'https://babynama.com/thank-you-prime', 'Subscription - Prime (1)');
  };
  const makePrimeSixMonthlyPayment = () => {
    preparePaymentData(14, mobile, friendMobile, 5, 'https://babynama.com/thank-you-prime', 'Subscription - Prime (3)');
  };
  const makeHolisticMonthlyPayment = () => {
    preparePaymentData(
      11,
      mobile,
      friendMobile,
      5,
      'https://babynama.com/thank-you-holistic',
      'Subscription - Holistic_Old (1)',
    );
  };
  const makeHolisticSixMonthlyPayment = () => {
    preparePaymentData(
      10,
      mobile,
      friendMobile,
      5,
      'https://babynama.com/thank-you-holistic',
      'Subscription - Holistic_Old (3)',
    );
  };

  // end payment logic

  // coupon code pass to apiDAta
  const [coupon, setCoupon] = useState('');

  return (
    <div className="rounded-xl bg-white shadow-lg dark:bg-slate-800 lg:pb-5 lg:pt-5">
      {/* Modal code */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 py-8">
          <div role="alert" className="container mx-auto flex w-11/12 max-w-lg justify-center pt-[20vh] md:w-2/3">
            <div className="absolute inset-0 bg-gray-900 opacity-75 dark:bg-gray-200"></div>
            <div className="relative z-10 w-11/12 rounded bg-white pb-8 pt-10 shadow  dark:bg-slate-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden px-4 md:px-12">
                {isSixMonthly ? (
                  <h2 className="text-black-900 text-center text-xl font-medium dark:text-white">
                    Pay{' '}
                    <span className="text-xl font-bold text-primary-600">
                      ₹{getPriceWithCoupon(plan, 'sixMonth', 'NEWMOMGIFT')}
                    </span>
                    {getPriceWithCoupon(plan, 'sixMonth') && (
                      <span className="text-red-500 line-through">₹{plan.prices.sixMonth}</span>
                    )}{' '}
                    and get your baby a healthy start
                  </h2>
                ) : (
                  <h2 className="text-black-900 text-center text-xl font-medium dark:text-white">
                    Pay{' '}
                    <span className="text-xl font-bold text-primary-600">
                      ₹{getPriceWithCoupon(plan, 'monthly', 'NEWMOMGIFT')}
                    </span>
                    {getPriceWithCoupon(plan, 'monthly') && (
                      <span className="text-red-500 line-through">₹{plan.prices.monthly}</span>
                    )}{' '}
                    and get your baby a healthy start
                  </h2>
                )}

                <div className="mt-4 flex items-center sm:mt-6">
                  {/* Form start */}
                  <form className="flex flex-col space-y-4 px-1">
                    {/* For self */}
                    <h3 className="text-black-900 text-left text-lg font-medium dark:text-white">
                      Enter your WhatsApp Number
                    </h3>
                    {/* Mobile number input */}
                    <label className="flex flex-col">
                      <PhoneInput
                        country={'in'}
                        onChange={(phone) => setMobile(phone)}
                        countryCodeEditable={false}
                        value={mobile}
                        placeholder="Enter your whatsApp number"
                        disabled={isDisabled}
                      />
                    </label>
                    {/* end */}

                    {/* For friend */}
                    <h3 className="text-black-900 text-left text-lg font-medium dark:text-white">
                      {`Enter your ${pathname === '/gifting-father' ? 'partner' : 'friend'}'s number`}
                    </h3>
                    {/* Mobile number input */}
                    <label className="flex flex-col">
                      <PhoneInput
                        country={'in'}
                        onChange={(phone2) => setFriendMobile(phone2)}
                        countryCodeEditable={false}
                        value={friendMobile}
                        placeholder="Enter your friend's mobile number"
                        disabled={isDisabled}
                      />
                    </label>
                    {/* end */}
                    <ToastContainer
                      position="bottom-right"
                      autoClose={3000}
                      hideProgressBar={false}
                      newestOnTop
                      closeOnClick={false}
                      rtl={false}
                      pauseOnFocusLoss={false}
                      draggable
                      pauseOnHover
                      theme="light"
                    />
                    {/* end */}

                    {/* Logic start for seperate payment call */}
                    <div className="w-full">
                      <PayNowButton
                        onClick={() => handlePayNowClick(plan.id, isSixMonthly)}
                        buttonText={isDisabled ? 'Please Wait...' : 'Pay Now'}
                        isDisabled={isDisabled}
                      />
                    </div>
                  </form>
                </div>
              </div>
              {/* Stuck */}
              <div className=" text-black-500 dark:text-white-300 mt-4 px-4 text-base font-medium md:px-12">
                <p>Stuck?</p>
                <br></br>
                <Link
                  href="{`https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20Need%20Help%20in%20Making%20Payment%20(${pathname
            .split('-')
            .join(' ')
            .replace('/', '')
            .trim()})`}"
                  className="text-primary-700 hover:underline dark:text-primary-500"
                >
                  Chat with an agent Now
                </Link>
              </div>
              {/* end */}
              {/* Close icon start*/}
              <div
                className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer transition duration-150 ease-in-out"
                onClick={() => setIsModalOpen(false)}
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
      {/* end modal section */}
      <div className="flex h-full flex-col space-y-4 px-3 pt-3">
        <h2 className="text-black-800 text-2xl font-semibold dark:text-white">{plan.name}</h2>
        <div className="flex-1">
          {/* Plan benefits */}
          <div>
            <Card summary={plan.summary.text} checkIcon={plan.summary.icon} details={''} />
            <div>
              {plan.features.map((feature, index) => (
                <Card
                  key={index}
                  details={feature.text}
                  icon={feature.icon}
                  summary={''}
                  TicKIcon={feature.TickIcon}
                  present={index === plan.features.length - 1 && plan.id === 3}
                />
              ))}
            </div>
          </div>
          {/* end of Plan benefits */}
          <div className="flex flex-row items-center justify-between pt-2">
            <div className="flex flex-col">
              {!isSixMonthly ? (
                <div className="text-base font-medium text-black dark:text-white">
                  <span className="text-base font-medium text-black dark:text-white">
                    ₹{getPriceWithCoupon(plan, 'monthly', 'NEWMOMGIFT')}
                  </span>
                  {getPriceWithCoupon(plan, 'monthly') && (
                    <span className="text-red-500 line-through">₹{plan.prices.monthly}</span>
                  )}
                </div>
              ) : (
                <div className="text-base font-medium text-black dark:text-white">
                  <span className="text-base font-medium text-black dark:text-white">
                    ₹{getPriceWithCoupon(plan, 'sixMonth', 'NEWMOMGIFT')}
                  </span>
                  {getPriceWithCoupon(plan, 'sixMonth') && (
                    <span className="text-red-500 line-through">₹{plan.prices.sixMonth}</span>
                  )}
                </div>
              )}

              <div className="pb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                {isSixMonthly ? 'Per 3 Month' : 'Per Month'}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="btn btn-primary mb-2 w-full cursor-pointer rounded-md px-4 py-2 transition-all sm:mb-0"
            onClick={handleStartNowClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default GiftingPlanItem;
