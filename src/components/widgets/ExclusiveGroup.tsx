'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { ExclusiveGroup } from '../../shared/types';
import { Exclusive } from '../../shared/data';

const Completionist: React.FC<ExclusiveGroup> = ({ groupLink, buttonText1 }) => (
  <Link href={groupLink}>
    <div className="cursor-pointer rounded-full bg-green-300 px-4 py-2 text-xl font-medium transition-all hover:bg-green-500 hover:text-white">
      {buttonText1}
    </div>
  </Link>
);

const renderer = ({ seconds, completed }: CountdownRenderProps) => {
  if (completed) {
    return <Completionist {...Exclusive} />;
  } else {
    return (
      <div className="flex items-center justify-center gap-4">
        <span className="text-lg font-medium">Whatsapp Link Available in</span>
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green-500 text-lg text-white">
          {seconds}
        </span>
      </div>
    );
  }
};

const ExclusiveGroup: React.FC<ExclusiveGroup> = ({
  title1,
  buttonText2,
  whatsappButtonText,
  planButtonText,
  otpTitle,
  otpButtonText,
  InfoTitle,
  title2,
  paragraph,
}) => {
  const [showPage, setShowPage] = useState(false);
  const [getNumber, setGetNumber] = useState<string | undefined>();

  const [alert, setAlert] = useState('');
  const [invalid, setInvalid] = useState('');
  const [checkOtp, setcheckOtp] = useState(false);
  const [getOtp, setgetOtp] = useState<string | undefined>();
  const [noUser, setnoUser] = useState(false);

  const [query, setQuery] = useState(false);

  let data = JSON.stringify({
    mobile: getNumber,
    otp_reason: 'exclusive_group',
  });

  let otp = JSON.stringify({
    mobile: getNumber,
    otp_reason: 'exclusive_group',
    otp_number: getOtp,
  });

  let config = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_API_URL + '/otpwd/create-otp/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },
    data: data,
  };

  let otpconfig = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_API_URL + '/otpwd/verify-otp/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },
    data: otp,
  };

  const verifyNumber = () => {
    setInvalid('');
    if (!getNumber || getNumber.length <= 10) {
      setInvalid('Please Enter Correct Mobile Number (10 digits)');
      return;
    }

    axios(config)
      .then((response) => {
        console.log(response.data);

        if (response.data.message === 'success') {
          setcheckOtp(true);
          setQuery(false);
          setnoUser(false);
        } else if (response.data.message === 'subs_expired_error') {
          setQuery(true);
          setnoUser(false);
          setcheckOtp(false);
          setAlert(
            'Your Subscription Expired. Entry to Exclusive group is restricted only to Babynama subscribers. Proceed to the following page to take a subscription.',
          );
        } else if (response.data.message === 'user_not_found_error') {
          setQuery(true);
          setnoUser(true);
          setcheckOtp(false);
          setAlert(
            'Sorry, we could not find your number in our database. Join our whatsapp group using the following link and then try.',
          );
        } else {
          setQuery(true);
          setnoUser(false);
          setcheckOtp(false);
          setAlert(
            'Looks like you do not have a PRIME/HOlistic subscription. This group is only for PRIME/Holistic plan members. Please take a care plan. If you believe we made a mistake please contact our support team',
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setAlert('Internal Error try after some time');
      });
  };

  const verifyOtp = () => {
    console.log(otp);
    setInvalid('');
    if (!getOtp || getOtp.length <= 3 || getOtp.length > 4) {
      setInvalid('Enter 4 Digit OTP');
      return;
    }

    axios(otpconfig)
      .then((response) => {
        console.log(response.data);

        if (response.data.message === 'success') {
          setShowPage(true);
        } else if (response.data.message === 'wrong_otp') {
          setInvalid('OTP is Wrong, Please Re-Enter OTP');
          setShowPage(false);
        } else if (response.data.message === 'expired_otp') {
          setShowPage(false);
          setInvalid('OTP Expired');
        }
      })
      .catch((error) => {
        console.log(error);
        setInvalid('Internal Error try after some time');
      });
  };

  return (
    <>
      <div className="flex items-center justify-center pt-10">
        <h2 className="text-center text-3xl font-bold text-black">
          Verify OTP to Join Our Exclusive Group with Permanent Access to Doctors
        </h2>
      </div>
      {!showPage ? (
        <>
          <div className="container mx-auto my-5 flex items-center justify-center">
            <div className="p-4 shadow-lg">
              <h1 className="mb-4 text-center text-[20px] font-semibold text-[#3286b3]">{title1}</h1>
              <div className="flex items-center justify-center">
                <PhoneInput
                  onChange={(phone) => setGetNumber(phone)}
                  country={'in'}
                  value={getNumber}
                  placeholder="Enter Your Mobile No."
                  inputClass="m-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={verifyNumber}
                  className="mt-3 w-3/4 rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  {buttonText2}
                </button>
              </div>

              <p className="mt-3 text-center text-red-500">{invalid}</p>

              {query && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, duration: 1 }}
                  className="fixed inset-0 z-[99] flex items-center justify-center bg-black/20 backdrop-blur-sm"
                >
                  <div onClick={() => setQuery(false)} className="fixed inset-0"></div>
                  <motion.div
                    className="relative mx-2 flex w-full max-w-[450px] flex-col items-center justify-center rounded bg-white p-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.3 }}
                  >
                    <p className="mt-3 text-center text-red-500">{alert}</p>
                    {noUser == true ? (
                      <Link href="http://babynama.in/invite">
                        <button className="btn btn-outline-success mt-3 w-3/4 bg-[#28a745]">
                          {whatsappButtonText}
                        </button>
                      </Link>
                    ) : (
                      <Link href="/care-plans">
                        <button className="btn btn-outline-success mt-3 w-3/4 bg-[#28a745]">{planButtonText}</button>
                      </Link>
                    )}
                  </motion.div>
                </motion.div>
              )}

              {checkOtp && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, duration: 1 }}
                  className="fixed inset-0 z-[99] flex items-center justify-center bg-black/20 backdrop-blur-sm"
                >
                  <div onClick={() => setcheckOtp(false)} className="fixed inset-0"></div>
                  <motion.div
                    className="relative mx-2 flex w-full max-w-[450px] flex-col items-center justify-center rounded bg-white p-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.3 }}
                  >
                    <div>
                      <h1 className="mb-4 text-center text-[20px] font-semibold text-[#3286b3]">{otpTitle}</h1>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter OTP"
                        onChange={(e) => setgetOtp(e.target.value)}
                      />
                      <div className="justify-content-center align-items-center btn-color flex">
                        <button
                          type="button"
                          className="btn btn-outline-success w-75 bg-color mt-3"
                          onClick={verifyOtp}
                        >
                          {otpButtonText}
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-red-500">{invalid}</p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-[100vh] w-full items-center justify-center">
          <div className="flex flex-col items-center gap-16 px-2">
            <h1 className="text-center text-3xl font-semibold text-red-600 sm:text-5xl">{InfoTitle}</h1>
            <div className="flex flex-col gap-2">
              <div className="flex w-full max-w-[500px] gap-4">
                <div className="mt-[10px] h-2 w-2 rounded-full bg-black" />
                <p className="w-full text-justify text-xl sm:text-2xl">{paragraph}</p>
                <p className="w-full text-justify text-xl sm:text-2xl">{title2}</p>
              </div>
            </div>
            <Countdown renderer={renderer} date={Date.now() + 0}>
              <Completionist {...Exclusive} />
            </Countdown>
          </div>
        </div>
      )}
    </>
  );
};

export default ExclusiveGroup;
