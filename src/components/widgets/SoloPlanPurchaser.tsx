import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PaymentDetail, PaymentMap, UpdatedPlan, UpdatedPlanPurchaserProps, Duration } from '../../shared/types';
import { ApiData, StatsApiData } from '../../shared/types';
import { initialApiData, statsInitialApiData } from '../../shared/data';
import '../../assets/styles/Ribbon.css';
import SpinnerLoader from '../../components/widgets/SpinnerLoader';
import { planDurationAtom } from '../state/atoms/planDurationAtom';
import { useRecoilValue } from 'recoil';
import { updatedGetPriceFromCoupon } from '../../utils/updatedGetPriceFromCoupon';
import GeoPhoneInput from './GeoPhoneInput';

const SoloPlanPurchaser: React.FC<UpdatedPlanPurchaserProps> = ({ plan }) => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  // API Data config
  const [apiData, setApiData] = useState<ApiData>(initialApiData);
  const [statsApiData, setStatsApiData] = useState<StatsApiData>(statsInitialApiData);
  const [modalOpen, setModalOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [isCouponValid, setIsCouponValid] = useState(false);
  const [timerDuration, setTimerDuration] = useState(5);
  const planDuration = useRecoilValue(planDurationAtom);
  const [mobile, setMobile] = useState('');
  const [coupon, setCoupon] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(plan.prices[planDuration]);
  const [isCouponAppliedButtonClicked, setIsCouponAppliedButtonClicked] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const pathname = usePathname();
  const couponCode = searchParams.get('coupon');
  // console.log('Coupon Code from URL:', couponCode);

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
    setIsFirstLoad(false);
    if (pathname !== '/baby-care-plan') {
      setDiscountedPrice(plan.prices[planDuration]);
      setCoupon('GET20');
      setAppliedCoupon('GET20');
      setIsCouponValid(false);
      handleCouponApply(getPlanId(plan, planDuration), plan, planDuration, 'GET20');
    }
  }, [planDuration, pathname]);

  useEffect(() => {
    if (couponCode) {
      setCoupon(couponCode.toUpperCase());
      handleCouponApply(getPlanId(plan, planDuration), plan, planDuration, couponCode);
    }
  }, [couponCode]);

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
      } finally {
        setIsDisabled(false);
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
    console.log(plan);
    console.log(duration);
    const planId = getPlanId(plan, duration);
    console.log(planId);
    const paymentDetails = getPaymentDetails(planId, duration);
    console.log(paymentDetails);

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
    <div className="">
      {isDisabled && <SpinnerLoader />}
      {/* Form start */}
      <div className="flex flex-col flex-wrap space-y-4">
        <p className="text-left text-lg font-[400] text-black">Enter your Whatsapp number:</p>
        <form className="">
          {/* Mobile number input */}

          <label className="">
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
                onClick={() => handleCouponApply(getPlanId(plan, planDuration), plan, planDuration, coupon, true)}
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
        </form>
        <button
          className="btn btn-primary w-auto text-base font-medium sm:mb-0 sm:w-full sm:text-lg md:text-xl"
          onClick={() => handlePayNowClick(plan, planDuration)}
          disabled={isDisabled}
        >
          {isDisabled ? (
            `Processing${timerDuration}...`
          ) : planDuration === 'threeMonthly' ? (
            <>
              {`Get 3 Month Access @ ₹${discountedPrice}`}
              {isCouponValid && (
                <span className="pl-1 text-sm text-yellow-300 line-through">{plan.prices[planDuration]}</span>
              )}
            </>
          ) : (
            <>
              {`Get 1 Month Access @ ₹${discountedPrice}`}
              {isCouponValid && (
                <span className="pl-1 text-sm text-yellow-300 line-through">{plan.prices[planDuration]}</span>
              )}
            </>
          )}
        </button>
      </div>

      <ToastContainer
        position="top-center"
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
export default SoloPlanPurchaser;
