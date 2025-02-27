'use client';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Image from 'next/image';
import hrs from '../../assets/images/24-hours.webp';
import Pediatrician from '../../assets/images/peditric-doc.jpg';
const EmergencyConsultation = () => {
  const [showBookNow, setShowBookNow] = useState(true);
  const [showJoinNow, setShowJoinNow] = useState(false);

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState('');
  const [alert, setAlert] = useState('');
  let data = JSON.stringify({
    mobile: mobile,
    amount: 50000,
    payment_source: 'Babynama Emergency Page',
    payment_reason: 'Consultation - Pediatrics',
  });
  let config = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_API_URL + '/payments/payment-link/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },
    data: data,
  };
  const getURL = () => {
    if (!mobile || mobile.length <= 10) {
      setAlert('Enter Valid 10 digits Number');
      return;
    }
    setOpen(true);
    console.log(data);
    axios(config)
      .then((response) => {
        console.log(response.data);
        router.push(response.data.url);
      })
      .catch((error) => {
        console.log(error);
        setOpen(false);
        setAlert('Internal Server Error');
      });
  };

  const handleBookNow = () => {
    setShowBookNow(true);
    setShowJoinNow(false);
  };

  const handleJoinNow = () => {
    setShowBookNow(false);
    setShowJoinNow(true);
  };

  return (
    <div className="h-full bg-primary-50 pt-6 shadow-lg md:h-screen md:pt-20">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="mb-2  h-full w-full md:m-10 md:mt-10 md:h-60 md:p-8">
          {/* Content for the first column */}
          <h1 className="text-center text-2xl font-bold text-primary-800 md:text-3xl">
            Emergency Pediatric Consultation
          </h1>
          <div>
            <ul className="mt-4 items-center justify-center text-center md:mt-20">
              <li className="flex flex-col items-center justify-start gap-2 pb-2 text-lg  font-medium md:pb-16 md:text-xl">
                <div className="flex items-center justify-center gap-4 md:gap-16">
                  <Image src={hrs} alt="24 Hours" width={50} height={50} className="text-primary-400" />
                  <p>Available 24/7, even at late night</p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-start gap-2 pb-2 text-lg font-medium md:pb-16 md:text-xl">
                <div className="flex items-center justify-center  gap-4  md:gap-16">
                  <Image src={Pediatrician} alt="24 Hours" width={50} height={50} className="text-primary-400" />
                  <p>
                    Connect with an MD Pediatrician <br /> within 15 minutes
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-0 h-full max-w-full px-4 md:m-10 md:mt-10 md:w-1/2 md:p-8">
          <div className=" flex  w-full justify-center">
            <button
              className={`w-1/2 py-4 ${
                showBookNow
                  ? 'rounded-l-lg bg-primary-500 font-medium text-white'
                  : 'rounded-l-lg bg-gray-200 text-gray-700'
              }`}
              onClick={handleBookNow}
            >
              For Non-Subscribers
            </button>
            <button
              className={`w-1/2 py-4 ${
                showJoinNow
                  ? 'rounded-r-lg bg-orange-500 text-white '
                  : 'rounded-r-lg bg-gray-200 font-medium text-gray-700'
              }`}
              onClick={handleJoinNow}
            >
              For Subscribers
            </button>
          </div>
          <div className="mt-6 rounded-lg bg-white p-6 shadow-lg ">
            {showBookNow && (
              <div className="flex h-96 flex-col">
                <h1 className="text-center text-3xl font-bold text-black">Book Appointment</h1>
                <div className="flex justify-center pt-8 text-center">
                  {/* <h1 className='font-gray-800 pb-1 text-lg'>Charges:</h1> */}
                  <h2 className="text-center font-medium ">
                    <span className="pr-2 text-xl font-semibold">Charge:</span>
                    <span className="font-bold">₹500</span>(8AM-11PM)
                    <span className="font-bold "> |</span>
                    <span className="font-bold">₹1000 </span> (11PM-8AM)
                  </h2>
                </div>
                <div className="h-30 flex flex-col items-center justify-center">
                  <form className="pt-8">
                    {/* Book Now form inputs */}
                    <div className="mb-4 pt-4">
                      <label className="mb-2 block font-bold text-gray-800">Enter Your Mobile Number</label>
                      <PhoneInput
                        containerClass="w-full border-none focus:outline-none focus:border-none outline-none"
                        inputClass="w-full border-none focus:outline-none focus:border-none outline-none"
                        country={'in'}
                        onChange={(phone) => setMobile(phone)}
                        countryCodeEditable={false}
                      />
                    </div>
                    <div className="flex justify-center">
                      {!open ? (
                        <button
                          className="rounded bg-primary-500 px-8 py-2 text-white hover:bg-primary-600 focus:outline-none"
                          onClick={getURL}
                        >
                          Book now
                        </button>
                      ) : (
                        <p className="text-lg font-semibold text-green-500">
                          Please Wait, Your Payment is under process
                        </p>
                      )}
                      {alert && <p className="text-lg font-semibold text-red-500">{`Alert: ${alert}`}</p>}
                      {/* Other form fields */}
                    </div>
                  </form>
                </div>
              </div>
            )}
            {showJoinNow && (
              <div className="mb-3 flex h-72 flex-col items-center gap-3 sm:gap-8">
                <p className="max-w-[640px] rounded  px-4 py-2 text-center text-xl font-bold sm:text-2xl">
                  Babynama <span className="text-orange-800">Subscribers</span> can book{' '}
                  <span className="underline">free consultations</span> from below.
                </p>
                <Link href="/book-consultation">
                  <button className="w-full rounded bg-orange-500  px-4 py-2 text-white hover:bg-primary-600 focus:outline-none">
                    Book Free Consultation
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyConsultation;
