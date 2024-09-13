'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Hero3Props, HeroYogaCardProps } from '../../shared/types';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import HeroYogaCard from './HeroYogaCard';
import { heroYogaCard, yogaButtonData } from '../../shared/data';
import UtmHeading from './UtmHeading';
import FixedBottomBtn from './FixedBottomBtn';

const HeroYoga: React.FC<Hero3Props> = ({ HeroData }) => {
  const { titlePart1, titlePart2, subtitle, paymentButton, button2, image } = HeroData;
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState('');
  const headingContent = UtmHeading();

  let data = JSON.stringify({
    mobile: mobile,
    plan_id: 13,
    payment_source: 'Yoga Page',
    payment_reason: 'Yoga Payment',
    callback_url: 'https://babynama.com/thank-you-yoga',
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
    if (mobile.length < 7) {
      toast.error('Please enter the Correct mobile number!');
      console.log('Invalid Mobile');
      return;
    }
    setOpen(true);
    console.log(data);
    try {
      const response = await axios(config);
      console.log(response.data);

      const options: any = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        name: 'Babynama',
        order_id: `${response.data.id}`,
        description: 'Yoga Payment',
        image: 'https://babynama.com/assets/images/logo-new.webp',
        handler: function (response: any) {
          router.push('https://babynama.com/thank-you-yoga');
        },
        prefill: {
          name: '',
          email: '',
          contact: `${mobile}`,
        },
      };

      try {
        const paymentObject: any = new window.Razorpay(options);
        paymentObject.open();
        setIsPaymentModalOpen(false);
        setOpen(false);
      } catch (error) {
        toast.error("Couldn't create payment link. Please try again later.");

        console.log(error);
      }
    } catch (error) {
      toast.error("Couldn't create payment link. Please try again later.");

      console.log(error);
    }
  };

  return (
    <section id="hero-yoga" className="bg-primary-50 dark:bg-gray-800">
      <FixedBottomBtn buttonText={yogaButtonData.buttonText} onBookNowClicked={() => setIsPaymentModalOpen(true)} />
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50">
          <div
            role="alert"
            className="container mx-auto flex h-[100vh] w-11/12 max-w-lg items-center justify-center pt-[4vh] md:w-2/3 "
          >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

            <div className="relative z-10  w-full rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800   sm:w-8/12 sm:p-8 md:w-9/12">
              <div className=" flex items-center justify-center">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
                  {/* right side - start */}
                  <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
                    <h3 className="text-center text-xl font-semibold text-primary-600 dark:text-white">
                      Babynama Yoga Plan
                    </h3>
                  </div>
                  <div className="mb-4 space-x-2">
                    <span className="text-xl font-semibold text-primary-700">₹497</span>
                    <s className="text-xl font-bold text-red-600" style={{ textDecorationColor: 'red' }}>
                      ₹999
                    </s>
                    <span className="text-xl font-semibold text-primary-700">| For 1 Month</span>
                  </div>
                  <div>
                    <ul className="mb-6 space-y-2 text-base font-medium text-gray-700 dark:text-white">
                      {/* feat - start */}
                      <li className="flex items-center gap-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 shrink-0 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Every Mon Wed Fri | 8:00 AM & 4:00 PM</span>
                      </li>
                      {/* feat - end */}
                      {/* feat - start */}
                      <li className="flex items-center gap-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 shrink-0 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>After payment you will be added to the whatsapp yoga group</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-8 ">
                    <p className="mb-2 text-xl font-semibold ">Enter Your WhatsApp Number</p>
                    <PhoneInput
                      containerClass="w-full border-none focus:outline-none focus:border-none outline-none"
                      inputClass="!w-full border-none focus:outline-none focus:border-none outline-none"
                      country={'in'}
                      onChange={(phone) => setMobile(phone)}
                      countryCodeEditable={false}
                    />
                  </div>
                  {!open ? (
                    <button
                      onClick={makePayment}
                      className=" btn btn-primary mb-3 w-full cursor-pointer transition-all sm:mb-1"
                    >
                      Pay Now
                    </button>
                  ) : (
                    <p className="text-lg font-semibold text-black">Please Wait, Your Payment is under process</p>
                  )}

                  {/* right side - end */}
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
                {/* end */}
                {/* Close icon start*/}
                <div
                  className="absolute right-0 top-0 m-3 cursor-pointer text-black transition duration-150 ease-in-out dark:text-white"
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
        </div>
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 pt-16 md:grid-cols-2 md:pt-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:text-left">
            {titlePart1 && (
              <h1 className="font-heading leading-tighter mb-6 text-3xl font-bold tracking-normal ">
                {headingContent !== null ? headingContent : titlePart1}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && (
                <p className="mb-8 text-lg font-medium text-gray-600 dark:text-slate-400 sm:text-xl md:text-2xl">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="mt-4 flex max-w-none items-center justify-center gap-4 md:justify-start">
              <button
                className="w-full rounded-[2rem] bg-[#293BDB] py-4 text-center text-[1.2rem] tracking-wide text-white"
                onClick={() => setIsPaymentModalOpen(true)}
              >
                {paymentButton}
              </button>
            </div>
          </div>

          {image && (
            <div className="">
              <HeroYogaCard heroYogaCard={heroYogaCard} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroYoga;
