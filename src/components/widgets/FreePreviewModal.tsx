import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Hero3FormApiData } from '../../shared/types';
import { initialHero3FormApiData } from '../../shared/data';
import axios from 'axios';
import PayNowButton from './PayNowButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DatePicker from '../../components/atoms/DateOfBirthPicker';
import { usePathname } from 'next/navigation';
import GeoPhoneInput from './GeoPhoneInput';
// import {useNavigate} from 'react-router-dom'
type FreePreviewModalProps = {
  isFreePreviewModalOpen: boolean;
  setIsFreePreviewModalOpen: (isOpen: boolean) => void;
};

const FreePreviewModal: React.FC<FreePreviewModalProps> = ({ isFreePreviewModalOpen, setIsFreePreviewModalOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isDisabled, setIsDisabled] = useState(false);
  const [formApiValues, setFormApiValues] = useState<Hero3FormApiData>(initialHero3FormApiData);
  const [mobileNumber, setMobileNumber] = useState('');
  // const [babyName, setBabyName] = useState('');
  // const [motherName, setMotherName] = useState('');
  const [isLegendVisible, setIsLegendVisible] = useState(false);
  const [babyDOB, setBabyDOB] = useState<Date | null>(null);
  const [preferredLanguage, setPreferredLanguage] = useState('');
  // const [pediatricianCharge, setPediatricianCharge] = useState('');
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const formattedDOB = babyDOB ? babyDOB.toLocaleDateString('en-GB') : '';
  const [showPopup, setShowPopup] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [infoVisible, setIsInfoVisible] = useState(false);
  const [isMetaDataAvailable, setIsMetaDataAvailable] = useState(false);

  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');

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
  // Comment out to check in development
  // useEffect(() => {
  //   console.log('adset_name', adset_name);
  //   console.log('ad_name', ad_name);
  //   console.log('utm_source', utm_source);
  //   console.log('utm_medium', utm_medium);
  //   console.log('utm_campaign', utm_campaign);
  //   console.log('utm_heading', utm_heading);
  // }, [ad_name, adset_name, utm_campaign, utm_heading, utm_medium, utm_source]);

  // URLS to check
  // localhost:3000/dr-sumitra?utm_source=meta_ads&utm_medium=Facebook_Right_Column&utm_campaign=Sales%2BOmni%2BCampaign%2BBangalore%2B%2526%2BPune&adset+name=Sales%2BOmni%2BMay%2BAd%2BSet%2BBangalore&ad+name=Traffic%2BOmni%2BMay%2BSumitra%2BVideo
  // localhost:3000/?utm_source=facebook&utm_medium=Facebook_Right_Column&utm_campaign=GM%2B%257C%2BTesting%2B%257C%2BABO&adset+name=NS%2B%257C%2BBroad%2B%257C%2B25%2B-%2B35&ad+name=VDO%2B%257C%2BTraffic%2BOmni%2BMay%2BSumitra%2BVideo

  useEffect(() => {
    if (utm_source || utm_medium || utm_campaign || utm_heading || adset_name || ad_name) {
      setIsMetaDataAvailable(true);
    }
  }, []);

  useEffect(() => {
    if (page_pathname !== undefined && page_pathname !== null) {
      sessionStorage.setItem('page_pathname', page_pathname);
    }
  }, [page_pathname]);

  const passedUrlParameters = `consultationcharge=${formApiValues.pediatrician_charge}&lang=${formApiValues.language}`;

  const handleIconClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  // For due date calculation for lactation webinar
  function calculateMonthDifference(dueDate: string): number {
    // Get the current date
    const currentDate: Date = new Date();

    // Parse the due date string in the format dd/mm/yy
    const [dueDay, dueMonth, dueYear]: number[] = dueDate.split('/').map(Number);
    const parsedDueDate: Date = new Date(dueYear, dueMonth - 1, dueDay); // Months are 0-indexed in JavaScript

    // Check if the due date is in the future
    if (parsedDueDate > currentDate) {
      // Calculate the difference in months
      const diffYears: number = parsedDueDate.getFullYear() - currentDate.getFullYear();
      const diffMonths: number = diffYears * 12 + (parsedDueDate.getMonth() - currentDate.getMonth());

      return diffMonths;
    } else {
      return 0; // If the due date is not in the future, return 0
    }
  }

  let data = JSON.stringify({
    mobile: formApiValues.mobile,
    dob: formApiValues.dob,
    language: formApiValues.language,
    utm_source: utm_source,
    utm_medium: utm_medium,
    utm_campaign: utm_campaign,
    utm_heading: utm_heading,
    adset_name: adset_name,
    ad_name: ad_name,
    page_pathname: isMetaDataAvailable ? pathname : '',
  });

  let config = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_API_URL + '/subscription/free-preview-access/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },
    data: data,
  };

  const freeAccess = async () => {
    console.log(formApiValues);
    console.log(data);
    // BUG Mobile check not working
    // FIX Mobile check working only for indian numbers
    const dueDate: string = formattedDOB;
    console.log(formattedDOB);

    const monthDifference: number = calculateMonthDifference(dueDate);
    console.log('Difference in months:', monthDifference);
    if (formApiValues.mobile.length < 7) {
      toast.error('Please enter the Correct mobile number!');
      console.log('Invalid Mobile');
      return;
    }

    setIsDisabled(true);
    //  API call

    try {
      const response = await axios(config);
      console.log('api call start');
      console.log(response.data);

      if (response?.data?.messages === 'success_new') {
        if (babyDOB && babyDOB > new Date()) {
          router.push(`/thank-you-lactation-webinar?monthDiff=${monthDifference}`);
        } else {
          router.push(`/thank-you-free-preview?${passedUrlParameters}`);
        }
      } else if (response?.data?.messages === 'success_welcomeback') {
        if (babyDOB && babyDOB > new Date()) {
          router.push(`/thank-you-lactation-webinar?monthDiff=${monthDifference}`);
        } else {
          router.push(`/thank-you-welcome-back?${passedUrlParameters}`);
        }
      } else if (response?.data?.messages === 'success_alreadyavailed') {
        setIsErrorModalOpen(true);
        // Clear the fields
        setBabyDOB(null);
        setMobileNumber('');
        setIsDisabled(false);
      } else if (response?.data?.messages === 'wrong_input') {
        toast.error('Wrong Input please enter the correct info.');
        setIsDisabled(false);
      }
    } catch (error) {
      toast.error('Something went wrong.');
      console.log(error);
      setIsDisabled(false);
    } finally {
      setIsDisabled(false);
    }
  };
  useEffect(() => {
    if (formApiValues.mobile && formApiValues.dob && babyDOB !== null) {
      freeAccess();
    }
  }, [formApiValues]);

  const handleJoinNowClick = () => {
    if (mobileNumber === '') {
      toast.error('Please Enter Your Mobile Number!');
    }
    if (babyDOB === null) {
      toast.error('Please Enter Your Baby DOB!');
    }
    if (!preferredLanguage) {
      return toast.error('Please select a preferred language for Whatsapp!');
    }
    setFormApiValues({
      ...formApiValues,
      mobile: mobileNumber.replace(/\D/g, ''),
      dob: formattedDOB,
      language: preferredLanguage,
    });
    //  set mobile number in local storage
    localStorage.setItem('mobileNumber', mobileNumber);
    // remove after 10 minutes
    setTimeout(() => {
      localStorage.removeItem('mobileNumber');
    }, 10 * 60 * 1000);
  };

  // const handleBabyNameInputChange = (e: any) => {
  //   const inputValue = e.target.value;
  //   setBabyName(inputValue);
  //   setIsLegendVisible(inputValue !== '' || (e.key && e.key !== 'Backspace'));
  // };
  // const handleMotherNameInputChange = (e: any) => {
  //   const inputValue = e.target.value;
  //   setIsLegendVisible(inputValue !== '' || (e.key && e.key !== 'Backspace'));
  //   setMotherName(inputValue);
  // };

  const handleDateChange = (day: number, month: number, year: number) => {
    const selectedDate = new Date(year, month - 1, day);

    if (babyDOB !== null) {
      // Set time to 00:00:00 for selected date and current babyDOB
      selectedDate.setHours(0, 0, 0, 0);
      babyDOB.setHours(0, 0, 0, 0);

      if (selectedDate.getTime() !== babyDOB.getTime()) {
        setBabyDOB(selectedDate);
        const formattedDate = selectedDate.toLocaleDateString('en-GB');
      }
    } else {
      setBabyDOB(selectedDate);
      const formattedDate = selectedDate.toLocaleDateString('en-GB');
    }
    console.log(formattedDOB);
    // console.log(new Date().toLocaleDateString('en-GB'));
    if (babyDOB && babyDOB > new Date()) {
      console.log('Expecting Mother');
    }
  };

  // Redirect to welcome-back-plans
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isErrorModalOpen) {
      timeoutId = setTimeout(() => {
        router.push('/welcome-back-plans?utm_source=welcome-back');
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isErrorModalOpen]);

  return (
    <>
      {isFreePreviewModalOpen && (
        <div className="fixed inset-0 z-50 h-full overflow-y-auto">
          <div role="alert" className="container mx-auto flex w-11/12 max-w-lg justify-center pt-[4vh] md:w-2/3">
            <div className="fixed inset-0  bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-11/12 rounded bg-white pb-2 pt-2  dark:bg-gray-800 sm:w-8/12 md:w-11/12">
              <div className="flex flex-col items-center overflow-hidden px-4  md:px-12">
                <div className="mt-3 flex flex-col items-center rounded-2xl bg-[#FDF5E6]  p-1 dark:bg-gray-700">
                  <h3 className="pt-2 text-center text-base font-semibold text-primary-600 dark:text-white">
                    Enjoy 1 day free trial
                  </h3>
                  {showPopup && (
                    <div className="fixed inset-0 z-50">
                      <div
                        role="alert"
                        className="container mx-auto flex h-[100vh] w-11/12 max-w-lg items-center justify-center pt-[4vh] md:w-2/3 "
                      >
                        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                        <div className="relative z-10 w-11/12 rounded bg-white pb-8 pt-10 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12">
                          <div className="flex flex-col items-center overflow-hidden px-5 md:px-12">
                            <p className="pt-1 text-center">
                              You may ask any general query related to feeding approaches, sleep pattern, tummy time,
                              age appropriate weight etc. General Queries do not include
                              <span className="font-bold"> medical consultations </span> or any medicine prescription
                            </p>
                            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white" onClick={closePopup}>
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <ul className="flex flex-col">
                    <li className="pb-1 pt-1">
                      <div className="flex gap-3">
                        {/* <FaCheckCircle size={22} color="green" /> */}
                        <span className="text-center text-sm font-medium text-gray-700 dark:text-white sm:text-sm">
                          Immediate support from trusted pediatricians via WhatsApp within 15 minutes.
                          <span className="mx-1 cursor-pointer">
                            <BsFillInfoCircleFill
                              color="royalBlue"
                              size={14}
                              style={{ display: 'inline-block' }}
                              onMouseEnter={handleIconClick}
                            />
                          </span>
                        </span>
                      </div>
                    </li>
                    {/* <li className=" pb-1 pt-1">
                      <div className="flex gap-3">
                        <FaCheckCircle size={22} color="green" />
                        <span className="text-sm font-medium text-gray-700 dark:text-white sm:text-base ">
                          Trusted & convenient Consultation(paid) with <br/>qualified pediatricians anytime
                        </span>
                      </div>
                    </li>
                    <li className=" pb-1 pt-1">
                      <div className="flex gap-3">
                        <FaCheckCircle size={20} color="green" />
                        <span className="text-sm font-medium text-gray-700 dark:text-white sm:text-base ">
                         Personalised care for your child&apos;s health
                        </span>
                      </div>
                    </li> */}
                  </ul>
                </div>

                <div className="mt-3 flex w-full flex-col items-center sm:mt-6">
                  {/* Form start */}
                  <form className="flex w-[100%] flex-col space-y-2.5">
                    <label className="flex w-full flex-col">
                      <span className="mb-1 block text-sm font-medium text-gray-900 dark:text-white md:text-sm">
                        Enter your WhatsApp Number <span className="text-red-600">*</span>
                      </span>
                      <GeoPhoneInput mobile={mobileNumber} setMobile={setMobileNumber} isDisabled={isDisabled} />
                    </label>

                    <label className="flex w-full flex-col">
                      <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white md:text-sm">
                        Baby&apos;s DOB (or your due date) <span className="text-red-600">*</span>
                      </span>
                      <div className="text-sm">
                        <DatePicker onDateChange={handleDateChange} />
                      </div>
                      {babyDOB && babyDOB > new Date() && (
                        <p className="text-xs text-red-600 md:text-sm">
                          {`You've`} entered a future date and as Babynama is a pediatric care service you can explore
                          it after your baby is born. Instead we are redirecting you to our
                          <span className="text-blue-500"> Lactation Webinar Group </span>
                          where you can attend our live session on <span className="text-blue-500">
                            {' '}
                            Thursday 5PM
                          </span>{' '}
                          to prepare for Breastfeeding Journey ahead. If this is wrong, please correct the entered date.
                        </p>
                      )}
                    </label>
                    {/* Prefered languagw */}
                    <div className="">
                      <label className=" block text-sm font-medium text-gray-900 dark:text-white md:text-sm">
                        Preferred Language on WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center rounded  dark:border-gray-700">
                          <input
                            id="bordered-checkbox-1"
                            type="checkbox"
                            value="hindi"
                            checked={preferredLanguage === 'hindi' ? true : false}
                            onChange={() => setPreferredLanguage('hindi')}
                            name="bordered-checkbox"
                            className="h-3 w-3 rounded border-gray-300 bg-gray-100 p-2 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                          />
                          <label
                            htmlFor="bordered-checkbox-1"
                            className="ms-2 w-full py-2 text-sm font-normal text-gray-900 dark:text-gray-300 md:text-sm"
                          >
                            Hindi
                          </label>
                        </div>
                        <div className="flex items-center rounded ps-3 dark:border-gray-700">
                          <input
                            id="bordered-checkbox-2"
                            type="checkbox"
                            value="english"
                            checked={preferredLanguage === 'english' ? true : false}
                            onChange={() => setPreferredLanguage('english')}
                            name="bordered-checkbox"
                            className="h-3 w-3 rounded border-gray-300 bg-gray-100 p-2 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                          />
                          <label
                            htmlFor="bordered-checkbox-2"
                            className="ms-2 w-full py-2 text-sm font-normal text-gray-900 dark:text-gray-300 md:text-sm"
                          >
                            English
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Pediatrician charge */}
                    {/* <div className="">
                      <label className="block text-sm font-medium text-gray-900 dark:text-white md:text-sm">
                        {' '}
                        Your pediatrician charges per visit (INR) <span className="text-red-600">*</span>
                      </label>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center rounded  dark:border-gray-700">
                          <input
                            id="charge-bordered-checkbox-1"
                            type="checkbox"
                            value="less_than_300"
                            checked={pediatricianCharge === 'less_than_300' ? true : false}
                            onChange={() => setPediatricianCharge('less_than_300')}
                            name="bordered-checkbox"
                            className="h-3 w-3 rounded border-gray-300 bg-gray-100 p-2 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                          />
                          <label
                            htmlFor="charge-bordered-checkbox-1"
                            className="ms-2 w-full py-2 text-sm font-normal text-gray-900 dark:text-gray-300 md:text-sm"
                          >
                            {'< 300'}
                          </label>
                        </div>
                        <div className="flex items-center rounded ps-3 dark:border-gray-700">
                          <input
                            id="charge-bordered-checkbox-2"
                            type="checkbox"
                            value="between_300_to_600"
                            checked={pediatricianCharge === 'between_300_to_600' ? true : false}
                            onChange={() => setPediatricianCharge('between_300_to_600')}
                            name="bordered-checkbox"
                            className="h-3 w-3 rounded border-gray-300 bg-gray-100 p-2 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                          />
                          <label
                            htmlFor="charge-bordered-checkbox-2"
                            className="ms-2 w-full py-2 text-sm font-normal text-gray-900 dark:text-gray-300 md:text-sm"
                          >
                            {'300 to 600'}
                          </label>
                        </div>
                        <div className="flex items-center rounded ps-3 dark:border-gray-700">
                          <input
                            id="charge-bordered-checkbox-3"
                            type="checkbox"
                            value="more_than_600"
                            checked={pediatricianCharge === 'more_than_600' ? true : false}
                            onChange={() => setPediatricianCharge('more_than_600')}
                            name="bordered-checkbox"
                            className="h-3 w-3 rounded border-gray-300 bg-gray-100 p-2 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                          />
                          <label
                            htmlFor="charge-bordered-checkbox-3"
                            className="ms-2 w-full py-2 text-sm font-normal text-gray-900 dark:text-gray-300 md:text-sm"
                          >
                            {'> 600'}
                          </label>
                        </div>
                      </div>
                    </div> */}

                    {/* baby's name */}
                    {/* {babyDOB && babyDOB > new Date() ? (
                      <div className="relative mb-2">
                        <span className="color-[#94969f] pb-1 pl-1 text-sm dark:text-white">
                          Your Name <span className="text-red-600">*</span>
                        </span>

                        <label className="flex  flex-col">
                          <input
                            type="text"
                            value={motherName}
                            onChange={handleMotherNameInputChange}
                            autoComplete="on" // Enable autocomplete
                            className={`w-full rounded-md border-2 ${
                              babyName ? ' border-blue-200' : 'border-gray-200'
                            } border-gray-200 p-2 capitalize`}
                          />
                        </label>
                      </div>
                    ) : (
                      <div className="relative mb-2">
                        <span className="color-[#94969f] pb-1 text-sm font-medium dark:text-white md:text-sm">
                          Baby&apos;s Name{' '}
                          <BsFillInfoCircleFill
                            color="royalBlue"
                            size={14}
                            onClick={() => setIsInfoVisible(!infoVisible)}
                            className="inline-block cursor-pointer"
                          />
                          <span className="text-red-600">*</span>
                        </span>
                        <br></br>
                        {infoVisible && <div className="text-xs">(For twins, separate names by comma)</div>}
                        <label className="flex flex-col">
                          <input
                            type="text"
                            name="babyName"
                            value={babyName}
                            onChange={handleBabyNameInputChange}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            autoComplete={babyDOB ? 'on' : 'off'}
                            // BUG: not working in mobile depreceted . Fix it
                            onKeyPress={(e) => {
                              if (!babyDOB) {
                                e.preventDefault();
                                // Prevent input if babyDOB is not filled
                              }
                            }}
                            className={`w-full rounded-md border-2 ${
                              babyName ? ' border-blue-200' : 'border-gray-200'
                            } p-1.5 text-sm capitalize`}
                          />
                          {hovered && !babyDOB && (
                            <p className="text-sm text-red-600">Please Enter Your Baby&apos;s DOB First</p>
                          )}
                        </label>
                      </div>
                    )} */}

                    {/* end */}

                    {/* Logic start for seperate payment call */}
                    <div className="w-full">
                      <PayNowButton
                        onClick={() => handleJoinNowClick()}
                        buttonText={isDisabled ? 'Please Wait...' : 'Join the Trial Now'}
                        isDisabled={isDisabled}
                      />
                    </div>
                  </form>
                </div>
              </div>

              {/* end */}
              {/* Close icon start*/}
              <div
                className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-1 cursor-pointer transition duration-150 ease-in-out"
                onClick={() => {
                  setIsFreePreviewModalOpen(false);
                  setBabyDOB(null);
                  setMobileNumber('');
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Close"
                  className="icon icon-tabler icon-tabler-x"
                  width={16}
                  height={16}
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
      )}
      {isErrorModalOpen && (
        <div className="fixed inset-0 z-50">
          <div role="alert" className="container mx-auto flex w-11/12 max-w-lg justify-center pt-[4vh] md:w-2/3">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-11/12 rounded bg-white pb-8 pt-10 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden px-4 text-center md:px-12">
                <h2 className="pb-2 text-center text-xl font-semibold text-primary-500">Hey there! Welcome back!</h2>
                <p className="description">Seems like you have already aviled our free trial.</p>
                <p className="description pt-2 font-semibold">
                  Click below to access Our Special Basic Plan: One month of unlimited chat support, PLUS a free
                  pediatric consultation!
                </p>
                <br />
                <button
                  onClick={() => {
                    router.push('/welcome-back-plans?utm_source');
                  }}
                  className="mt-2 w-full rounded-md bg-blue-500 px-10 py-2 text-center text-white hover:bg-blue-800"
                >
                  Access Special Plan
                </button>
              </div>
              {/* end */}
              {/* Close icon start*/}
              <div
                className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer transition duration-150 ease-in-out"
                onClick={() => {
                  console.log('clicked on cancel');
                  setIsErrorModalOpen(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Close"
                  className="icon icon-tabler icon-tabler-x"
                  width={18}
                  height={18}
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

export default FreePreviewModal;
