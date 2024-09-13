/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiData, ComparisonPlan } from '../../shared/types';
import PayNowButton from './PayNowButton';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { initialApiData } from '../../shared/data';
import comparisonCouponValidation from '../../utils/comparisonCouponValidation';
import { ComparisonGetPriceWithCoupon } from '../../utils/comparisonGetPriceWithCoupon';
import Link from 'next/link';

interface PlanItemProps {
  plan: ComparisonPlan;
  isThreeMonthly: boolean;
}

const ComparisonTable: React.FC<PlanItemProps> = ({ plan, isThreeMonthly }) => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);
  const [apiData, setApiData] = useState<ApiData>(initialApiData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobile, setMobile] = useState('');
  const [coupon, setCoupon] = useState('');

  const handleStartNowClick = () => {
    setIsModalOpen(true);
  };

  let data = JSON.stringify({
    mobile: apiData.mobile,
    plan_id: apiData.plan_id,
    offer_name: apiData.offer_name,
    total_count: apiData.total_count,
    payment_source: 'BabyNama Subscription Page',
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
      toast('Razorpay SDK Failed to load');
      return;
    }
    const PlanData: {
      planName: string;
      planPrice: number;
      planDuration: string;
      planSource: string;
    } = {
      planName: apiData.payment_reason.split('-')[1].trim().split(' ')[0].trim(),
      planPrice: isThreeMonthly ? plan.prices.sixMonth : plan.prices.monthly,
      planDuration: isThreeMonthly ? '3 Months' : '1 Month',
      planSource: 'BabyNama Subscription Page',
    };
    const handleRazorpayResponse = (response: any) => {
      const queryString = Object.keys(PlanData)
        .map((key) => key + '=' + encodeURIComponent((PlanData as any)[key]))
        .join('&');
      router.push(`${apiData.callback_url}?${queryString}`);
    };
    console.log(apiData);
    console.log(data);

    if (apiData.mobile.length < 7) {
      toast.error('Please enter the Correct mobile number!');
      console.log('Invalid Mobile');
      return;
    }
    setIsDisabled(true);
    data;
    try {
      const response = await axios(config);
      console.log(response.data);

      const options: any = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        name: 'Babynama',
        order_id: `${response.data.id}`,
        description: `${apiData.payment_reason}`,
        image: 'https://babynama.com/assets/images/logo-new.webp',
        handler: handleRazorpayResponse,
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
      setIsDisabled(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (apiData.plan_id != 0 && apiData.mobile && apiData.callback_url && apiData.payment_reason) {
      makePayment();
    }
  }, [apiData]);

  const preparePaymentData = (
    planId: number,
    mobile: string,
    totalCount: number,
    callbackUrl: string,
    paymentReason: string,
  ) => {
    setApiData({
      ...apiData,
      mobile: mobile.replace(/\D/g, ''),
      plan_id: planId,
      total_count: totalCount,
      callback_url: callbackUrl,
      payment_reason: paymentReason,
      offer_name: coupon.toUpperCase().replace(/\s+/g, ''),
    });
  };

  const handlePayNowClick = (planId: number, isThreeMonthly: boolean) => {
    if (planId === 1) {
      if (isThreeMonthly) {
        makeBasicSixMonthlyPayment();
      } else {
        makeBasicMonthlyPayment();
      }
    } else if (planId === 2) {
      if (isThreeMonthly) {
        makePrimeSixMonthlyPayment();
      } else {
        makePrimeMonthlyPayment();
      }
    } else {
      if (isThreeMonthly) {
        makeHolisticSixMonthlyPayment();
      } else {
        makeHolisticMonthlyPayment();
      }
    }
  };

  const makeBasicMonthlyPayment = () => {
    preparePaymentData(5, mobile, 6, 'https://babynama.com/thank-you-basic', 'Subscription - Basic (1)');
  };

  const makeBasicSixMonthlyPayment = () => {
    preparePaymentData(4, mobile, 6, 'https://babynama.com/thank-you-basic', 'Subscription - Basic (3)');
  };

  const makePrimeMonthlyPayment = () => {
    preparePaymentData(15, mobile, 6, 'https://babynama.com/thank-you-prime', 'Subscription - Prime (1)');
  };

  const makePrimeSixMonthlyPayment = () => {
    preparePaymentData(14, mobile, 6, 'https://babynama.com/thank-you-prime', 'Subscription - Prime (3)');
  };

  const makeHolisticMonthlyPayment = () => {
    preparePaymentData(11, mobile, 12, 'https://babynama.com/thank-you-holistic', 'Subscription - Holistic_Old (1)');
  };

  const makeHolisticSixMonthlyPayment = () => {
    preparePaymentData(10, mobile, 12, 'https://babynama.com/thank-you-holistic', 'Subscription - Holistic_Old (3)');
  };

  return (
    <>
      <div>
        <div className="text-center text-xs md:text-sm" key={`price-${plan.name}`} onClick={handleStartNowClick}>
          Buy @ ₹{isThreeMonthly ? plan.prices.sixMonth : plan.prices.monthly}
        </div>
      </div>

      <div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 py-8">
            <div role="alert" className="container mx-auto flex w-11/12 max-w-lg justify-center pt-[20vh] md:w-2/3">
              <div className="absolute inset-0 bg-gray-900 opacity-75 dark:bg-gray-200"></div>
              <div className="relative z-10 w-full rounded bg-white pb-8 pt-10 shadow dark:bg-slate-800 sm:w-8/12 md:w-9/12">
                <div className="flex flex-col items-center overflow-hidden px-6 md:px-12">
                  <h3 className="text-center text-base font-medium text-black dark:text-white">
                    Pay{' '}
                    {coupon !== '' &&
                      comparisonCouponValidation(plan, isThreeMonthly, coupon) &&
                      plan.prices.sixMonth !== ComparisonGetPriceWithCoupon(plan, 'sixMonth', coupon) && (
                        <span className="text-red-500 line-through">
                          {isThreeMonthly ? `Buy@ ₹${plan.prices.sixMonth}` : `Buy@ ₹${plan.prices.monthly}`}
                        </span>
                      )}{' '}
                    <span className=" text-primary-600">
                      {isThreeMonthly
                        ? ` ₹${ComparisonGetPriceWithCoupon(plan, 'sixMonth', coupon)} `
                        : ` ₹${ComparisonGetPriceWithCoupon(plan, 'monthly', coupon)} `}
                    </span>
                    and give your baby a healthy start with Babynama{' '}
                    <span className=" text-primary-600">{plan.name}</span>  for {' '}
                    <span className="text-primary-600">{isThreeMonthly ? `3 Month` : `1 Month`}</span>
                  </h3>
                  <div className="mt-4 flex items-center sm:mt-6">
                    <form className="flex flex-col space-y-4 px-1">
                      <label className="flex flex-col">
                        <PhoneInput
                          country={'in'}
                          onChange={(phone) => setMobile(phone)}
                          countryCodeEditable={false}
                          value={mobile}
                          placeholder="Enter your mobile number"
                          disabled={isDisabled}
                          inputClass="text-black"
                        />
                      </label>

                      <div className="flex items-center">
                        <div className="mr-2 h-10 flex-1 rounded border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-700">
                          <input
                            className="text-black-600 dark:text-black-100 h-full w-full bg-transparent py-3 pl-4 text-sm leading-none placeholder-gray-600 focus:rounded focus:border-[2px] focus:border-solid focus:border-primary-600 focus:outline-none dark:placeholder-gray-100"
                            placeholder="Enter Coupon Code"
                            value={coupon}
                            disabled={isDisabled}
                            onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary cursor-pointer rounded-md px-3 py-2 transition-all sm:mb-0"
                          onClick={() => {
                            comparisonCouponValidation(plan, isThreeMonthly, coupon)
                              ? toast.success('Coupon Applied Successfully!')
                              : toast.error('Invalid Coupon!');
                          }}
                          disabled={isDisabled}
                        >
                          Apply
                        </button>
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
                      </div>
                      {coupon === 'EXTRA' && isThreeMonthly && (
                        <div className="text-base font-semibold text-[#ff5349]">
                          Congratulations 🎉 You will get additional 1 month at no extra cost!!
                        </div>
                      )}
                      {coupon.toUpperCase().replace(/\s+/g, '') === 'WORRYFREE' && isThreeMonthly && (
                        <div className="text-base font-semibold text-[#ff5349]">
                          Congratulations 🎉 You will get additional 1 month and 30% off at no extra cost!!
                        </div>
                      )}

                      {/* end */}

                      {/* Logic start for separate payment call */}

                      <div className="w-full">
                        <PayNowButton
                          onClick={() => handlePayNowClick(plan.id, isThreeMonthly)}
                          buttonText={isDisabled ? 'Please Wait...' : 'Pay Now'}
                          isDisabled={isDisabled}
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="mt-3 flex px-4 text-base font-medium text-black dark:text-white md:px-12">
                  <p className="pr-4">Stuck?</p>
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

                <div
                  className="dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer text-black transition duration-150 ease-in-out dark:text-white"
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
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ComparisonTable;
