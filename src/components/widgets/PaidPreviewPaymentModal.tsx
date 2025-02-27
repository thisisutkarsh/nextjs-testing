'use client';

import React, { useState, useEffect } from 'react';
import { FaPlayCircle, FaCheckCircle } from 'react-icons/fa';
import PayNowButton from './PayNowButton';
import { initialHero3ApiData } from '../../shared/data';
import { Hero3ApiData } from '../../shared/types';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GeoPhoneInput from './GeoPhoneInput';

type PaymentModalProps = {
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (isOpen: boolean) => void;
};

const PaidPreviewPaymentModal: React.FC<PaymentModalProps> = ({ isPaymentModalOpen, setIsPaymentModalOpen }) => {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [apiData, setApiData] = useState<Hero3ApiData>(initialHero3ApiData);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  let data = JSON.stringify({
    mobile: apiData.mobile,
    plan_id: apiData.plan_id,
    payment_source: apiData.payment_source,
    callback_url: apiData.callback_url,
    payment_reason: apiData.payment_reason,
  });

  let config = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_API_URL + '/payments/get-preview-paylink/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },
    data: data,
  };

  const makePayment = async () => {
    if (apiData.mobile.length < 7) {
      toast.error('Please enter the Correct mobile number!');
      console.log('Invalid Mobile');
      return;
    }

    setIsDisabled(true);
    //  API call
    try {
      const response = await axios(config);
      console.log(response.data);
      if (response?.data?.ALREADY_AVAILED) {
        setIsErrorModalOpen(true);
      } else {
        router.push(response.data.url);
      }
    } catch (error) {
      toast.error("Couldn't create payment link. Please try again later.");
      console.log(error);
    }
  };

  useEffect(() => {
    if (apiData.plan_id != 0 && apiData.mobile && apiData.callback_url && apiData.payment_reason) {
      makePayment();
    }
  }, [apiData]);

  const handlePayNowClick = () => {
    setApiData({
      ...apiData,
      mobile: mobile.replace(/\D/g, ''),
      plan_id: 12,
      callback_url: 'http://babynama.com/thank-you-preview-access',
      payment_reason: 'Paid Preview',
      payment_source: 'Preview Access',
    });
  };

  return (
    <>
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50">
          <div role="alert" className="container mx-auto flex w-11/12 max-w-lg justify-center pt-[4vh] md:w-2/3">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-11/12 rounded bg-white pb-8 pt-10 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden px-4 md:px-12">
                <h3 className="text-center text-xl font-semibold text-primary-600 dark:text-white">
                  Your Preview Access Includes
                </h3>
                <ul className="flex flex-col">
                  <li className=" pb-1 pt-1">
                    <div className="flex gap-3">
                      <FaCheckCircle size={28} color="green" />
                      <span className="text-base font-medium text-gray-700">
                        3 days preview access to our group with MD Pediatricians
                      </span>
                    </div>
                  </li>
                  <li className=" pb-1 pt-1">
                    <div className="flex gap-3">
                      <FaCheckCircle size={28} color="green" />
                      <span className="text-base font-medium text-gray-700">
                        All general queries<span className=" text-red-600">*</span> resolved on chat by our doctors
                      </span>
                    </div>
                  </li>
                  <li className=" pb-1 pt-1">
                    <div className="flex gap-3">
                      <FaCheckCircle size={28} color="green" />
                      <span className="text-base font-medium text-gray-700">
                        24X7 access to paid consultations, within 15 minutes
                      </span>
                    </div>
                  </li>
                  <li className=" pb-1 pt-1">
                    <button
                      className="font-medium text-primary-600 underline"
                      onClick={() => setIsRefundModalOpen(true)}
                    >
                      24 Hour Hassle Free Refund Policy
                    </button>
                  </li>
                </ul>

                <div className="mt-4 flex w-full flex-col items-center sm:mt-6">
                  {/* Form start */}
                  <form className="flex w-[100%] flex-col space-y-4">
                    {/* Mobile number input */}
                    <h2 className="text-center">Enter your Whatsapp number to continue</h2>
                    <label className="flex w-full flex-col">
                      <GeoPhoneInput mobile={mobile} setMobile={setMobile} isDisabled={isDisabled} />
                    </label>
                    {/* end */}

                    {/* Logic start for seperate payment call */}
                    <div className="w-full">
                      <PayNowButton
                        onClick={() => handlePayNowClick()}
                        buttonText={isDisabled ? 'Please Wait...' : 'Pay Now'}
                        isDisabled={isDisabled}
                      />
                    </div>
                  </form>
                  <p className="pt-1 text-left">
                    <span className="text-red-600">*</span>General Queries may include opinions about feeding
                    approaches, sleep patterns, tummy time, age appropriate weight etc. General Queries do not include
                    medical consultations or any medicine prescription
                  </p>
                </div>
              </div>
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
      {isRefundModalOpen && (
        <div className="fixed inset-0 z-50">
          <div role="alert" className="container mx-auto flex w-11/12 max-w-lg justify-center pt-[4vh] md:w-2/3">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-11/12 rounded bg-white pb-8 pt-10 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden px-4 md:px-12">
                <h3 className="text-center text-xl font-semibold text-primary-600 dark:text-white">Refund Policy</h3>
                <p className="description text-left">
                  In case you feel that your basic query has not been addressed by us, just drop a mail to{' '}
                  <a className="text-primary-600" href="mailto: payments@gagahealth.com">
                    payments@gagahealth.com
                  </a>{' '}
                  within 24 hours of purchase we will offer you a <strong>full refund</strong> .
                </p>
                <br />
                <p className="text-left">
                  This is <strong>risky for us</strong> as someone might claim refund even after using our service, but
                  in our experience so far, no mother has misused this. And we know you are{' '}
                  <strong>as honest as all our other mothers</strong>. But in those rare cases that we havve been unable
                  to help, we have always refunded in full.
                </p>
              </div>
              {/* end */}
              {/* Close icon start*/}
              <div
                className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer transition duration-150 ease-in-out"
                onClick={() => setIsRefundModalOpen(false)}
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
      {isErrorModalOpen && (
        <div className="fixed inset-0 z-50">
          <div role="alert" className="container mx-auto flex w-11/12 max-w-lg justify-center pt-[4vh] md:w-2/3">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-11/12 rounded bg-white pb-8 pt-10 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden px-4 md:px-12">
                <p className="description text-left">
                  Seems like you have already availed the preview once. Since you are here again, you must have liked
                  the service. So we request you to take a plan from the following link.
                </p>
                <br />
                <p className="description text-left">
                  Only for you: Use coupon code GET20 and avail 20% discount on all 3 month plans. Valid for 24 hours.
                </p>
                <p className="description pt-5 text-left">
                  <Link href="/care-plans" className="text-left text-primary-600">
                    Click Here to see all the plans
                  </Link>
                </p>
              </div>
              {/* end */}
              {/* Close icon start*/}
              <div
                className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer transition duration-150 ease-in-out"
                onClick={() => setIsErrorModalOpen(false)}
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
    </>
  );
};

export default PaidPreviewPaymentModal;
