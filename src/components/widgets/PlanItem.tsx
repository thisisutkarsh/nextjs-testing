import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PaymentDetail, PaymentMap, UpdatedPlan, UpdatedPlanItemProps } from '../../shared/types';
import { ApiData, StatsApiData, Duration } from '../../shared/types';
import Card from './Card';
import { initialApiData, statsInitialApiData } from '../../shared/data';
import Link from 'next/link';
import '../../assets/styles/Ribbon.css';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { updatedGetPriceFromCoupon } from '../../utils/updatedGetPriceFromCoupon';
import { planDurationAtom } from '../../components/state/atoms/planDurationAtom';
import GeoPhoneInput from './GeoPhoneInput';

const PlanItem: React.FC<UpdatedPlanItemProps> = ({ plan }) => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  // API Data config
  const [apiData, setApiData] = useState<ApiData>(initialApiData);
  const [statsApiData, setStatsApiData] = useState<StatsApiData>(statsInitialApiData);
  const [modalOpen, setModalOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState('GET20');
  const [isCouponValid, setIsCouponValid] = useState(true);
  const [timerDuration, setTimerDuration] = useState(5);
  const planDuration = useRecoilValue(planDurationAtom);
  const [mobile, setMobile] = useState('');
  const [coupon, setCoupon] = useState('GET20');
  const [discountedPrice, setDiscountedPrice] = useState(plan.prices[planDuration]);
  const [isCouponAppliedButtonClicked, setIsCouponAppliedButtonClicked] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

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

  // payment start

  let data = JSON.stringify({
    mobile: apiData.mobile,
    plan_id: apiData.plan_id,
    offer_name: apiData.offer_name,
    total_count: apiData.total_count,
    payment_source: `Babynama ${pathname.split('-').join(' ').replace('/', '').trim()} Page`,
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

  useEffect(() => {
    setDiscountedPrice(plan.prices[planDuration]);
    setCoupon('GET20');
    setAppliedCoupon('GET20');
    setIsCouponValid(false);
    handleCouponApply(getPlanId(plan, planDuration), plan, planDuration, 'GET20');
    setIsFirstLoad(false);
  }, [planDuration]);

  // useEffect(() => {
  //   handleCouponApply(getPlanId(plan, planDuration), plan, planDuration, 'GET20');
  // }, []);

  const handleCouponApply = async (
    planId: number,
    plan: UpdatedPlan,
    duration: Duration,
    coupon: string,
    isUserInitiated = false,
  ) => {
    try {
      setIsCouponAppliedButtonClicked(true);
      const response = await updatedGetPriceFromCoupon(planId, plan, duration, coupon);

      if (response.is_coupon_valid) {
        setIsCouponValid(true);
        setAppliedCoupon(coupon);
        setDiscountedPrice(response.discounted_price / 100);
        if (isUserInitiated) {
          // Only show toast if user initiated the action
          toast.success('Coupon Applied Successfully!');
        }
      } else {
        setIsCouponValid(false);
        setAppliedCoupon('');
        setDiscountedPrice(plan.prices[planDuration]);
        if (isUserInitiated) {
          // Only show toast if user initiated the action
          toast.error('Invalid Coupon!');
        }
      }
    } catch (error) {
      console.error('Error applying coupon:', error);
      setIsCouponValid(false);
      setAppliedCoupon('');
      if (isUserInitiated) {
        // Only show toast if user initiated the action
        toast.error('An error occurred while applying the coupon.');
      }
    } finally {
      setIsCouponAppliedButtonClicked(false);
    }
  };
  const makePayment = async (): Promise<void> => {
    const res: boolean = (await initializeRazorpay()) as boolean;
    if (!res) {
      alert('Razorpay SDK Failed to load');
      return;
    }
    const PlanData: {
      planName: string;
      planPrice: number;
      planDuration: string;
      planSource: string;
      page_pathname: string;
      mobile: string;
    } = {
      planName: apiData.payment_reason.split('-')[1].trim().split(' ')[0].trim(),
      planPrice: planDuration === 'threeMonthly' ? plan.prices.threeMonthly : plan.prices.monthly,
      planDuration: planDuration === 'threeMonthly' ? '3 Months' : '1 Month',
      planSource: 'Babynama Subscription Page',
      page_pathname: page_pathname,
      mobile: apiData.mobile,
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
    setIsCouponAppliedButtonClicked(true);
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

      console.log(error);
    } finally {
      setIsDisabled(false);
      changeTimerDuration(0);
      setIsCouponAppliedButtonClicked(false);
    }
  };

  useEffect(() => {
    if (apiData.plan_id != 0 && apiData.callback_url && apiData.payment_reason) {
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
      offer_name: appliedCoupon.toUpperCase().replace(/\s+/g, ''),
    });
  };

  const paymentMap: PaymentMap = {
    33: {
      monthly: {
        id: 33,
        months: 1,
        url: 'https://babynama.com/thank-you-prime-essential',
        description: 'Subscription - Essential (1 Month)',
      },
      threeMonthly: {
        id: 34,
        months: 3,
        url: 'https://babynama.com/thank-you-prime-essential',
        description: 'Subscription - Essential (3 Months)',
      },
    },
    34: {
      monthly: {
        id: 33,
        months: 1,
        url: 'https://babynama.com/thank-you-prime-essential',
        description: 'Subscription - Essential (1 Month)',
      },
      threeMonthly: {
        id: 34,
        months: 3,
        url: 'https://babynama.com/thank-you-prime-essential',
        description: 'Subscription - Essential (3 Months)',
      },
    },
    35: {
      monthly: {
        id: 35,
        months: 1,
        url: 'https://babynama.com/thank-you-holistic',
        description: 'Subscription - Holistic_New (1 Month)',
      },
      threeMonthly: {
        id: 36,
        months: 3,
        url: 'https://babynama.com/thank-you-holistic',
        description: 'Subscription - Holistic_New (3 Months)',
      },
    },
    36: {
      monthly: {
        id: 35,
        months: 1,
        url: 'https://babynama.com/thank-you-holistic',
        description: 'Subscription - Holistic_New (1 Month)',
      },
      threeMonthly: {
        id: 36,
        months: 3,
        url: 'https://babynama.com/thank-you-holistic',
        description: 'Subscription - Holistic_New (3 Months)',
      },
    },
  };

  const handlePayNowClick = (plan: UpdatedPlan, duration: Duration) => {
    const planId = getPlanId(plan, duration);
    console.log(planId);
    const paymentDetails = getPaymentDetails(planId, duration);

    if (paymentDetails) {
      preparePaymentData(
        paymentDetails.id,
        mobile,
        paymentDetails.months,
        paymentDetails.url,
        paymentDetails.description,
      );
    } else {
      console.error('Invalid plan ID or duration');
    }
  };

  const getPlanId = (plan: UpdatedPlan, duration: Duration): number => {
    return duration === 'threeMonthly' ? plan.planIds.threeMonthly : plan.planIds.monthly;
  };

  const getPaymentDetails = (planId: number, duration: Duration): PaymentDetail | null => {
    return paymentMap[planId]?.[duration] || null;
  };
  const handleRemoveCoupon = () => {
    setCoupon('');
    setIsCouponValid(false);
    setAppliedCoupon('');
    setDiscountedPrice(plan.prices[planDuration]);
  };

  return (
    <div
      className=" relative mt-2 rounded-xl border-4 border-primary-700 bg-white shadow-lg dark:bg-slate-700 md:mt-0 lg:pb-5
      lg:pt-5"
    >
      <div className={`${plan.id === 2 ? 'ribbon-2 dark:text-white' : 'hidden'}`}> Most popular</div>

      <div className="flex h-full flex-col px-3 pt-3">
        <h2 className="text-black-800 text-xl font-semibold dark:text-white">{plan.name}</h2>
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
                  terms={feature.terms}
                  TicKIcon={feature.TickIcon}
                />
              ))}
            </div>
          </div>
          {/* end of Plan benefits */}
          {planDuration === 'threeMonthly' ? (
            <div className="flex flex-row items-center justify-end p-2">
              <div className="text-black-500 dark:text-black-400 text-xs font-medium">
                <p>
                  <span className="text-red-500">*</span> {plan.refundPolicy} days Refund Policy
                  <span
                    className="ml-1 inline-flex cursor-pointer items-center"
                    onClick={() => {
                      setIsRefundModalOpen(true);
                    }}
                  >
                    <BsFillInfoCircleFill className="text-primary-600 dark:text-primary-500" />
                  </span>
                </p>
              </div>
            </div>
          ) : null}
        </div>
        {/* Plan button */}
        <div className="flex flex-col items-center justify-between gap-1 pt-2 md:gap-2 md:pt-2">
          <button
            className="btn focus:none mb-2 w-full cursor-pointer rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-white transition-all hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 sm:mb-0"
            onClick={() => setModalOpen(true)}
          >
            {planDuration === 'threeMonthly' ? (
              <>
                {`Buy@ ₹${discountedPrice}`}
                <span className="pl-1 text-sm text-yellow-300 line-through">{plan.prices[planDuration]}</span>
              </>
            ) : (
              <>
                {`Buy@ ₹${discountedPrice}`}
                {isCouponValid && (
                  <span className="pl-1 text-sm text-yellow-300 line-through">{plan.prices.monthly}</span>
                )}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card modal section */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 py-8">
          <div role="alert" className="container mx-auto flex w-11/12 max-w-lg justify-center pt-[20vh] md:w-2/3">
            <div className="absolute inset-0 bg-gray-900 opacity-75 dark:bg-gray-200"></div>
            <div className="relative z-10 w-11/12 rounded border-2 border-solid border-primary-500 bg-white pb-8 pt-10 shadow dark:bg-slate-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col px-3 md:px-12">
                <h3 className="text-center text-base font-medium text-black dark:text-white">
                  Pay{' '}
                  <span className="text-primary-500">
                    ₹{discountedPrice}{' '}
                    {isCouponValid && (
                      <span className="pr-1 text-sm text-red-500 line-through">{plan.prices[planDuration]}</span>
                    )}
                  </span>
                  and give your baby a healthy start with Babynama <span className="text-primary-600">{plan.name}</span>{' '}
                  for <span className="text-primary-600">{planDuration === 'threeMonthly' ? '3' : '1'} Month</span>
                </h3>
                <div className="mt-4 sm:mt-6">
                  {/* Form start */}
                  <form className="flex flex-col space-y-4 px-1">
                    {/* Mobile number input */}
                    <label className="flex flex-col">
                      <GeoPhoneInput mobile={mobile} setMobile={setMobile} isDisabled={isDisabled} />
                    </label>

                    {/* Coupon Code Input */}
                    {!isCouponValid ? (
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
                          onClick={() =>
                            handleCouponApply(getPlanId(plan, planDuration), plan, planDuration, coupon, true)
                          }
                          disabled={isCouponAppliedButtonClicked}
                        >
                          {isCouponAppliedButtonClicked ? 'Applying...' : 'Apply'}
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between rounded border border-green-500 bg-green-50 p-2">
                        <div className=" text-green-500">
                          <span className="border border-dashed border-green-500 bg-white px-6 py-1 font-semibold">
                            {appliedCoupon}
                          </span>{' '}
                          <span className="text-small px-4">Applied</span>
                        </div>

                        <button type="button" className="block text-green-500" onClick={() => handleRemoveCoupon()}>
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
                        </button>
                      </div>
                    )}

                    <div className="w-full">
                      <button
                        type="button"
                        className="btn btn-primary mb-3 w-full cursor-pointer transition-all sm:mb-1"
                        onClick={() => handlePayNowClick(plan, planDuration)}
                        disabled={isDisabled}
                      >
                        {isDisabled ? `Please Wait ${timerDuration}...` : 'Pay Now'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Stuck */}
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
              {/* end */}
              {/* Close icon start*/}
              <div
                className="dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer text-black transition duration-150 ease-in-out"
                onClick={() => setModalOpen(false)}
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

      {/* end card modal section */}

      {isRefundModalOpen && (
        <div className="fixed inset-0 z-50">
          <div
            role="alert"
            className="container mx-auto flex h-[100vh] w-11/12 max-w-lg items-center justify-center pt-[4vh] md:w-2/3 "
          >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-11/12 rounded bg-white pb-8 pt-10 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden px-5 md:px-12">
                <div>
                  <p>Valid only on 3 month plans</p>
                </div>
                <button
                  className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
                  onClick={() => {
                    setIsRefundModalOpen(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
  );
};
export default PlanItem;
