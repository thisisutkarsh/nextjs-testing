'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { StatsApiData, ThankYouData } from '../../shared/types';
import { usePathname, useSearchParams } from 'next/navigation';
import { ImArrowDown2 } from 'react-icons/im';
import { statsInitialApiData } from '../../shared/data';
import axios from 'axios';
import ThankYouRedirect from './ThankYouRedirect';
import { generateRandomGroupLink } from '../../utils/generateRandomGroupLink';
import { toast } from 'react-toastify';

const ThankYouBreastfeedingWebinar: React.FC<ThankYouData> = ({ groupLink, title1, title2, buttonText, paragraph }) => {
  const [countdown, setCountdown] = useState(4);
  const [statsApiData, setStatsApiData] = useState<StatsApiData>(statsInitialApiData);
  const [generatedGroupLink, setGeneratedGroupLink] = useState<string>('');
  const pathname = usePathname();
  const handleCountdownChange = (newCountdown: number) => {
    setCountdown(newCountdown);
  };

  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');

  const planName = searchParams.get('planName');
  const planPrice = searchParams.get('planPrice');
  const planDuration = searchParams.get('planDuration');
  const planSource = searchParams.get('planSource');
  const page_pathname = searchParams.get('page_pathname');
  //   patient data passed from URL
  const mobile = searchParams.get('mobile');
  const DOB = searchParams.get('DOB');
  const dueDate = searchParams.get('due_date');
  const email = searchParams.get('email') || '';
  const PlanData = {
    event: 'planSelected',
    planName: planName as string,
    planPrice: Number(planPrice),
    planDuration: planDuration as string,
    planSource: planSource as string,
  };
  const languageSelected = searchParams.get('lang') || '';
  const consultationCharge = searchParams.get('consultationcharge') || '';
  const lactationWebinarLanguage = searchParams.get('lactationWebinarLanguage') || '';
  const monthDiff = searchParams.get('monthDiff') || '';
  const passedUrlData = [languageSelected, consultationCharge, monthDiff, lactationWebinarLanguage];

  /*
  if (typeof window !== 'undefined' && PlanData.planPrice !== 0) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(PlanData);
  }
  */

  const getStatsDataFromSessionStorage = (): StatsApiData => {
    if (typeof window !== 'undefined') {
      return {
        utm_campaign: sessionStorage.getItem('utm_campaign'),
        utm_source: sessionStorage.getItem('utm_source'),
        utm_medium: sessionStorage.getItem('utm_medium'),
        utm_heading: sessionStorage.getItem('utm_heading'),
        page_pathname: sessionStorage.getItem('page_pathname'),
        adset_name: sessionStorage.getItem('adset_name'),
        ad_name: sessionStorage.getItem('ad_name'),
        mobile: sessionStorage.getItem('mobile'),
      };
    }
    return {};
  };

  const statsDataFromSessionStorage = getStatsDataFromSessionStorage();
  const originPath = statsDataFromSessionStorage.page_pathname || '';

  useEffect(() => {
    setStatsApiData({
      mobile: mobile || statsDataFromSessionStorage.mobile,
      utm_source: statsDataFromSessionStorage.utm_source,
      utm_medium: statsDataFromSessionStorage.utm_medium,
      utm_campaign: statsDataFromSessionStorage.utm_campaign,
      utm_heading: statsDataFromSessionStorage.utm_heading,
      page_pathname: statsDataFromSessionStorage.page_pathname,
      adset_name: statsDataFromSessionStorage.adset_name,
      ad_name: statsDataFromSessionStorage.ad_name,
    });
  }, []);

  let statsData = JSON.stringify({
    mobile: statsApiData.mobile,
    utm_campaign: statsApiData.utm_campaign,
    utm_source: statsApiData.utm_source,
    utm_medium: statsApiData.utm_medium,
    utm_heading: statsApiData.utm_heading,
    page_pathname: statsApiData.page_pathname,
    adset_name: statsApiData.adset_name,
    ad_name: statsApiData.ad_name,
  });

  let statsConfig = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_API_URL + '/others/consultation-data/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },
    data: statsData,
  };

  const sendStatsData = async () => {
    console.log(statsData);
    if (statsApiData.mobile === null || statsApiData.mobile === undefined || statsApiData.mobile === '') {
      return;
    }
    try {
      const response = await axios(statsConfig);
      console.log(response);
      if (response.data.messages === 'success') {
        console.log('data successfully sent');
      } else {
        console.log('error has occured');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (statsApiData.mobile != null || statsApiData.mobile != undefined) {
      sendStatsData();
    }
  }, [statsApiData]);

  useEffect(() => {
    setGeneratedGroupLink(
      generateRandomGroupLink(
        groupLink,
        languageSelected,
        consultationCharge,
        monthDiff,
        lactationWebinarLanguage,
        pathname,
        originPath,
      ),
    );
  }, [groupLink, languageSelected, consultationCharge, monthDiff, lactationWebinarLanguage, pathname]);

  const submitLactationWebinarForm = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/patients/create-lactation-patient/`,
        {
          mobile,
          due_date: DOB,
          email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
          },
        },
      );
      console.log(response);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    if (mobile && DOB) {
      submitLactationWebinarForm();
    }
  }, []);

  return (
    <>
      <div className="mx-auto flex w-full items-center justify-center px-4 py-12">
        {buttonText.length > 0 && (
          <ThankYouRedirect
            groupLink={groupLink}
            initialCountdown={4}
            onCountdownChange={handleCountdownChange}
            passedUrlData={passedUrlData}
            currentPath={pathname}
            originPath={originPath}
          />
        )}

        <div className="btn flex h-auto w-[500px] items-center justify-center rounded-2xl px-6 shadow-2xl md:h-[500px] md:w-[800px]">
          <div className="flex w-full max-w-[640px] flex-col gap-4 rounded-lg py-4 sm:px-4 sm:py-8">
            <div className="flex items-center justify-between">
              <h1 className="mx-auto px-6 text-center text-xl  font-bold md:text-3xl">{title1}</h1>
            </div>
            <div className="flex flex-col gap-[12px] text-lg font-medium text-black dark:text-white xl:gap-4 2xl:gap-[20px]">
              {buttonText.length > 0 && (
                <div>
                  <p className=" text-center font-medium">
                    Redirecting you to the WhatsApp group in
                    <span className="text-lg  font-bold text-green-700">{` ${countdown} second${
                      countdown !== 1 ? 's' : ''
                    }`}</span>
                  </p>
                  <p className="text-center font-bold">OR</p>
                </div>
              )}

              <div className="mx-auto text-center">
                <ImArrowDown2 size={36} color="#454545" />
              </div>
              <p className="text-center font-medium">{title2}</p>
              {buttonText.length > 0 && (
                <Link href={generatedGroupLink}>
                  <div className=" btn mx-auto flex w-fit  cursor-pointer items-center justify-center rounded-lg bg-[#2eb771] px-4 py-3 text-[15px] font-medium text-white transition-all hover:bg-transparent hover:text-[#2eb771] dark:bg-green-600 sm:px-4 sm:text-lg 2xl:text-xl">
                    {buttonText}
                  </div>
                </Link>
              )}
              <div className="flex flex-col gap-2">
                <p className="text-center text-base text-black dark:text-white sm:text-lg 2xl:text-xl">{paragraph}</p>
              </div>
              <div className="flex items-center justify-center">
                {pathname === '/thank-you-weaning-1500' && (
                  <Link href="http://babynama.in/agent">
                    <div className="flex w-fit cursor-pointer items-center justify-center rounded-lg bg-green-300 px-2 py-2 text-[15px] font-medium transition-all hover:bg-green-500 hover:text-white dark:bg-green-600 sm:px-4 sm:text-lg 2xl:text-xl">
                      Chat With Agent
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouBreastfeedingWebinar;
