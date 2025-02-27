'use client';

import axios from 'axios';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const YogaLive: React.FC = () => {
  const [mobile, setMobile] = useState('');
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [load, setLoad] = useState(false);
  const [query, setQuery] = useState(false);
  const [checkOtp, setcheckOtp] = useState(false);
  const [invalid, setInvalid] = useState('');
  const [getOtp, setgetOtp] = useState('');
  const [alert, setAlert] = useState(false);
  const [trials, setTrials] = useState(0);
  const [used, setUsed] = useState(false);
  const router = useRouter();
  var currentTime = new Date();

  var currentOffset = currentTime.getTimezoneOffset();

  var ISTOffset = 330; // IST offset UTC +5:30

  var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

  // ISTTime now represents the time in IST coordinates

  var hoursIST = ISTTime.getHours();
  var minutesIST = ISTTime.getMinutes();
  var dayIST = ISTTime.getDay();

  let data = JSON.stringify({
    mobile: mobile,
    otp_reason: 'yoga',
  });

  let otp = JSON.stringify({
    mobile: mobile,
    otp_reason: 'yoga',
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
          if (
            dayIST === 1 ||
            dayIST === 3 ||
            (dayIST === 5 &&
              ((hoursIST === 15 && minutesIST >= 45) ||
                (hoursIST === 16 && minutesIST <= 30) ||
                (hoursIST === 7 && minutesIST >= 45) ||
                (hoursIST === 8 && minutesIST <= 15)))
          ) {
            setShow2(true);
            setShow(true);
            MySwal.fire({
              title: 'Congratulations',
              html:
                'OTP Verified successfully. You can now join the live session.' +
                ' Use passcode <strong className="text-primary-600">YOGA</strong> to join the live session',
              icon: 'success',
              showCancelButton: true,
              confirmButtonColor: '#a855f7',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Join Live Session',
            }).then((result) => {
              if (result.isConfirmed) {
                router.push('https://us02web.zoom.us/j/84674819871');
              }
            });
            setcheckOtp(false);
            setQuery(false);
            setUsed(false);
          } else {
            setShow(false);
            setcheckOtp(false);
            setQuery(false);
            setUsed(false);
            setShow2(false);
          }
        } else if (response.data.message === 'second_success') {
          if (
            (dayIST === 1 || dayIST === 3 || dayIST === 5) &&
            ((hoursIST === 15 && minutesIST >= 45) ||
              (hoursIST === 16 && minutesIST <= 30) ||
              (hoursIST === 7 && minutesIST >= 45) ||
              (hoursIST === 8 && minutesIST <= 15))
          ) {
            setShow2(true);
            setShow(true);
            setcheckOtp(false);
            setQuery(false);
            let trial = Number(response.data.used);
            setTrials(trial + 1);
            setUsed(true);
          } else {
            setShow(false);
            setcheckOtp(false);
            setQuery(false);
            setUsed(false);
            setShow2(false);
          }
        } else if (response.data.message === 'wrong_otp') {
          setInvalid('OTP is Wrong, Please Re-Enter OTP');
          setShow2(false);
        } else if (response.data.message === 'expired_otp') {
          setShow2(false);
          setInvalid('OTP Expired');
        }
      })
      .catch((error) => {
        console.log(error);
        setInvalid('Internal Error try after some time');
      });
  };

  const sendOtp = (e: React.MouseEvent) => {
    console.log(data);
    e.preventDefault();
    if (mobile.length < 7) {
      toast.error('Please enter the Correct mobile number!');
      return;
    } else {
      if (
        dayIST === 1 ||
        dayIST === 3 ||
        (dayIST === 5 &&
          ((hoursIST === 15 && minutesIST >= 45) ||
            (hoursIST === 16 && minutesIST <= 30) ||
            (hoursIST === 7 && minutesIST >= 45) ||
            (hoursIST === 8 && minutesIST <= 15)))
      ) {
        setLoad(true);
        axios(config)
          .then((response) => {
            console.log(response.data);

            if (response.data.message === 'success' || response.data.message === 'subs_expired_error') {
              setcheckOtp(true);
              setQuery(false);
              setAlert(false);
              setShow2(false);
              setLoad(false);
            } else if (response.data.message === 'user_not_found_error') {
              setQuery(true);
              setcheckOtp(false);
              setAlert(false);
              setShow2(false);
              setLoad(false);
            } else if (response.data.message === 'more_than_2') {
              setcheckOtp(false);
              setAlert(true);
              setQuery(false);
              setShow2(false);
              setLoad(false);
            }
          })
          .catch((error) => {
            console.log(error);
            setLoad(false);
            setAlert(false);
          });
      } else {
        setShow(false);
        setLoad(false);
      }
    }
  };

  function handleCloseOtp(): void {
    setcheckOtp(false);
    setLoad(false);
  }

  return (
    <div className="flex justify-center rounded-lg bg-white py-16 dark:bg-slate-800 sm:py-24">
      <div className="container flex w-full max-w-7xl flex-col justify-start gap-2 px-4 pt-3 sm:gap-4 sm:px-6">
        <h1 className="text-left text-3xl font-bold text-primary-600 sm:text-5xl">Yoga for Moms</h1>
        <h2 className="text-xl font-semibold text-primary-600 sm:text-3xl">With Kavita Grover</h2>
        <div className="mt-4 flex flex-col gap-2 sm:mt-0">
          <p className="text-xl font-bold text-black dark:text-white sm:text-lg">
            Join Live at 8 AM and 4 PM every Mon-Wed-Fri
          </p>
          <label htmlFor="Phone Number" className="mb-2 text-lg font-semibold text-black dark:text-white sm:text-base">
            Enter your phone number to join this session :
          </label>
          <div className="btn-color flex flex-wrap gap-4 sm:gap-8">
            <div>
              <PhoneInput
                containerClass="w-full border-none focus:outline-none focus:border-none outline-none"
                inputClass="!w-full border-none focus:outline-none focus:border-none outline-none"
                country={'in'}
                onChange={(phone) => setMobile(phone)}
                countryCodeEditable={false}
              />
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
            <button
              className="btn btn-primary mb-2 cursor-pointer rounded-md px-4 py-2 transition-all sm:mb-0"
              onClick={sendOtp}
              disabled={load}
            >
              {load ? 'Please Wait...' : 'Join Live Session'}
            </button>
          </div>

          {used && (
            <motion.p
              className="text-base font-semibold text-red-500 sm:text-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {`You have used ${trials} of 2 free trial sessions for Yoga. Post 2 sessions you will have to take a subscription plan. Join the session using the following link.`}
            </motion.p>
          )}
          {show && show2 && (
            <>
              <h1 className="text-base  font-semibold sm:text-lg">
                Use passcode <strong className="text-primary-600">YOGA</strong> to join the live session
              </h1>

              <Link href="https://us02web.zoom.us/j/84674819871">
                <motion.div
                  className="btn btn-primary text-base font-semibold sm:mb-0 sm:text-lg md:text-xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'tween', duration: 0.3 }}
                >
                  Join Live Session
                </motion.div>
              </Link>
            </>
          )}
          {!show && (
            <motion.p
              className="text-base font-semibold text-red-500 sm:text-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              Live Session happens 8 AM and 4 PM every Mon-Wed-Fri. There is no live session Now
            </motion.p>
          )}

          {alert && (
            <>
              <h1 className="text-base font-semibold text-red-500 sm:text-lg">
                Sorry, but you have used the 2 free trial sessions allowed. If you wish to continue, kindly take a
                subscription plan using the following link. In order to talk to a customer care agent to know more about
                our plans, use the button at the bottom right corner of plans page.
              </h1>
              <Link href="http://babynama.com/care-plans">
                <motion.div
                  className="bg-color flex w-fit cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-lg font-semibold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'tween', duration: 0.3 }}
                >
                  Take Babynama Subscription
                </motion.div>
              </Link>
            </>
          )}

          {checkOtp && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, duration: 1 }}
              className="fixed bottom-0 left-0 right-0 top-0 z-[99] flex items-center justify-center bg-black/20 backdrop-blur-sm"
            >
              <motion.div
                className="relative mx-2 flex w-full max-w-[450px] flex-col items-center justify-center rounded bg-white p-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <div>
                  <h1 className="mb-4 text-center font-semibold text-primary-600" style={{ fontSize: '20px' }}>
                    Enter OTP Sent on WhatsApp
                  </h1>
                  <input
                    type="number"
                    className="form-control block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Enter OTP"
                    onChange={(e) => setgetOtp(e.target.value)}
                  />
                  <p className="mt-3 text-center font-bold text-red-500">{invalid}</p>
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      className="btn btn-primary mt-5 text-base font-medium sm:mb-0 sm:text-lg md:text-xl"
                      onClick={verifyOtp}
                    >
                      Verify OTP
                    </button>
                  </div>
                </div>
                <div
                  className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer transition duration-150 ease-in-out"
                  onClick={() => handleCloseOtp()}
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
              </motion.div>
            </motion.div>
          )}

          {query && (
            <>
              <h1 className="text-base font-semibold text-red-500 sm:text-lg">
                Sorry, we could not find your number in our database. Join our whatsapp group using the following link
                and then try joining this session again.
              </h1>
              <Link href="http://babynama.in/invite">
                <motion.div
                  className="bg-color flex w-fit cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-lg font-semibold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'tween', duration: 0.3 }}
                >
                  Join Our WhatsApp Group
                </motion.div>
              </Link>
            </>
          )}
          <p className="mt-2 text-base sm:text-lg">
            <strong>Missed the YOGA session? </strong>Please download the Google invite and save the invite to your
            calendar so that you never miss another session.{' '}
            <a href="/invite.ics" className="cursor-pointer font-bold text-primary-500 hover:text-primary-600" download>
              Download Invite
            </a>
          </p>
          <br />
          <p className="mt-2 text-base sm:text-lg">
            Note: Avoid workout for 3 months post pregnancy. Please consult a gynecologist if you are unsure whether to
            join or not. To consult our gynecologist,{' '}
            <a href="http://babynama.in/gyne" className="font-bold text-primary-500 hover:text-primary-600">
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default YogaLive;
