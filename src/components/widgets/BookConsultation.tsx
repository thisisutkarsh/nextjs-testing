'use client';
import { useState } from 'react';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import dynamic from 'next/dynamic';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

/*TODO auth token config in both emergency consultation and this page */
// Completed
/*TODO test corretly */
/*Change name and redirect towards plans if user has no care plan */

const BookConsultation = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [openOtp, setOpenOtp] = useState(false);
  const [loading, setloading] = useState(false);
  const [loading2, setloading2] = useState(false);
  const consultationTypeOption = ['Choose an option', 'lactation', 'nutrition', 'gyne', 'derma', 'pediatric'];
  const [selectedConsultation, setSelectedConsultation] = useState(consultationTypeOption[0]);

  // For Booking
  let data = JSON.stringify({
    mobile: mobile,
    consultation_type: selectedConsultation,
  });

  let config = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_API_URL + '/subscription/book-call/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },

    data: data,
  };

  const handleClick = () => {
    setloading(true);
    console.log(data);
    if (selectedConsultation === consultationTypeOption[0]) {
      setloading(false);
      MySwal.fire({
        title: 'Error',
        icon: 'error',
        text: 'Please Select a Consultation Type',
        showConfirmButton: true,
      });
      return;
    }
    setloading(true);
    if (mobile.length >= 10) {
      axios(config)
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            MySwal.fire({
              title: 'Congratulations!',
              icon: 'success',
              text: 'OTP Sent Successfully',
              showConfirmButton: true,
            });
            setOpenOtp(true);
            setloading(false);
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
          if (error.response.data.message.includes('No active subscriptions found for the user')) {
            MySwal.fire({
              title: 'Error',
              icon: 'error',
              html:
                'It seems like you do not have access to book this consultation. Kindly take a plan or upgrade to a plan from the ' +
                '<a style="color:primary; text-decoration:underline" href="https://babynama.com/care-plans">Care Plans</a> page.',
              showConfirmButton: true,
            });
            setloading(false);
          } else {
            MySwal.fire({
              title: 'Error',
              icon: 'error',
              text: error.response.data.message,
              showConfirmButton: true,
            });
          }
          setloading(false);
        });
    } else {
      MySwal.fire({
        title: 'Error',
        icon: 'error',
        text: 'Please Enter a Valid Mobile Number',
        showConfirmButton: true,
      });
      setloading(false);
    }
  };

  // For OTP
  let dataOTP = JSON.stringify({
    mobile: mobile,
    otp_number: otp,
    remark: selectedConsultation,
    consultation_type: selectedConsultation,
  });

  let configOTP = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_API_URL + '/otpwd/get-otp/',
    headers: {
      'Content-Type': 'application/json',
      //      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },
    data: dataOTP,
  };
  const handleOtpClick = () => {
    console.log(dataOTP);
    setloading2(true);
    if (selectedConsultation === 'Choose an option') {
      MySwal.fire({
        title: 'Error',
        icon: 'error',
        text: 'Please Select a Consultation Type',
        showConfirmButton: true,
      });
      return;
    }
    if (mobile.length >= 10) {
      axios(configOTP)
        .then((response) => {
          console.log(response.data);
          if (response.data.message === 'success') {
            MySwal.fire({
              title: 'Congratulations!',
              icon: 'success',
              text: `Booking Successful. Our team will get in touch with you shortly. If you don't hear from us in 5 minutes, or are in an emergency, please call our 24/7 helpline number +917948221222.`,
              showConfirmButton: true,
            });
            setOpenOtp(false);
            setloading2(false);
          } else if (response.data.message === 'wrong_otp') {
            MySwal.fire({
              title: 'Error!',
              icon: 'error',
              text: 'OTP is Wrong, Please Re-Enter OTP',
              showConfirmButton: true,
            });
            setloading2(false);
          } else if (response.data.message === 'expired_otp') {
            MySwal.fire({
              title: 'Error!',
              icon: 'error',
              text: 'OTP Expired',
              showConfirmButton: true,
            });
            setOpenOtp(false);
            setloading2(false);
          } else if (response.data.message === 'no_otp') {
            MySwal.fire({
              title: 'Error',
              icon: 'question',
              text: 'No OTP sent to this Number',
              showConfirmButton: true,
            });
            setOpenOtp(false);
            setloading2(false);
          } else if (response.data.message === 'no_account') {
            MySwal.fire({
              title: 'Error',
              icon: 'question',
              text: 'No Account with this Number',
              showConfirmButton: true,
            });
            setOpenOtp(false);
            setloading2(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setloading2(false);
        });
    } else {
      MySwal.fire({
        title: 'Error',
        icon: 'error',
        text: 'Please Enter a Valid Mobile Number',
        showConfirmButton: true,
      });
      setloading2(false);
    }
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-primary-200">
        <div className="mx-4 w-full max-w-[500px] rounded-lg bg-white px-5 py-6 md:shadow-lg">
          <h1 className="mb-4 text-center text-xl font-bold text-primary-600 md:text-3xl">
            Book Complimentary Consultation
          </h1>
          <p className="mb-2 text-center text-base font-bold text-gray-600 md:text-xl">
            Exclusive for Babynama Care Plan Subscribers. To learn more about care plans and become a Babynama parent,
            visit{' '}
            <Link href="/care-plans">
              <span className="text-primary-500">Care Plans</span>
            </Link>
          </p>

          <p className="pb-4 pt-2 text-center text-base text-gray-600 md:text-lg">
            Book a Pediatric consultation only in case of emergencies. The doctor will call within 15 minutes after
            booking.
          </p>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="consultationType" className="text-base font-semibold text-primary-600 md:text-xl">
                  Select Consultation Type:
                </label>
                <select
                  id="consultationType"
                  value={selectedConsultation}
                  onChange={(e) => setSelectedConsultation(e.target.value)}
                  className="w-full rounded-md border border-primary-600 px-4 py-2 focus:outline-none focus:ring focus:ring-primary-600"
                >
                  {consultationTypeOption.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="mobileNumber" className="text-base font-semibold text-primary-600 md:text-xl">
                  Enter Mobile Number:
                </label>
                <PhoneInput
                  inputStyle={{
                    width: '100%',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    border: '1px solid #3b82f6',
                  }}
                  country={'in'}
                  value={mobile}
                  onChange={(phone) => setMobile(phone)}
                  countryCodeEditable={false}
                />
              </div>
            </div>
            {openOtp && (
              <div className="flex flex-col items-start gap-2 md:gap-4">
                <p className="text-left text-base font-semibold text-primary-600 md:text-xl">Enter OTP:</p>
                <input
                  className="text-black-600 dark:text-black-100 h-full w-full rounded-md border-2 border-solid border-primary-500  bg-transparent py-3 pl-4 text-sm leading-none placeholder-gray-600 focus:rounded focus:border-2 focus:border-solid focus:border-primary-600 focus:outline-none focus:ring-primary-600 dark:border-gray-700 dark:placeholder-gray-100"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
              </div>
            )}
            {!openOtp ? (
              loading ? (
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <div
                  onClick={handleClick}
                  className="w-full rounded-[2rem] bg-[#293BDB] py-4 text-center text-[1.2rem] tracking-wide text-white "
                >
                  Send OTP
                </div>
              )
            ) : loading2 ? (
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <div
                onClick={handleOtpClick}
                className="w-full rounded-[2rem] bg-[#293BDB] py-4 text-center text-[1.2rem] tracking-wide text-white"
              >
                Submit
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookConsultation;
