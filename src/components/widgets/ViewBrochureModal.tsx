'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PayNowButton from './PayNowButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Hero3WeaningBrochureApiData } from '../../shared/types';
import { initialBrochureWeaningFormApiData } from '../../shared/data';
import GeoPhoneInput from './GeoPhoneInput';

interface ViewBrochureModalProps {
  isBrochureModalOpen: boolean;
  setIsBrochureModalOpen: (isOpen: boolean) => void;
}

const ViewBrochureModal: React.FC<ViewBrochureModalProps> = ({ isBrochureModalOpen, setIsBrochureModalOpen }) => {
  const [formApiValues, setFormApiValues] = useState<Hero3WeaningBrochureApiData>(initialBrochureWeaningFormApiData);
  const [mobile, setMobile] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const brochureData = JSON.stringify({
    mobile: formApiValues.mobile,
    remark: formApiValues.remark,
  });

  const brochureconfig = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_API_URL + '/consultation/general-appointment/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },
    data: brochureData,
  };

  const brochureForm = async () => {
    if (formApiValues.mobile.length < 7) {
      toast.error('Please enter the correct mobile number!');
      return;
    }
    setIsDisabled(true);
    setIsBrochureModalOpen(false);
    setIsModalOpen(true);
    setIsThankYouModalOpen(true);
    try {
      const response = await axios(brochureconfig);
      if (response?.data?.messages === 'success') {
        toast.success('Brochure sent successfully on WhatsApp.');
        setIsDisabled(false);
      } else if (response?.data?.messages === 'wrong_input') {
        toast.error('Wrong input, please try again later.');
        setIsDisabled(false);
      }
    } catch (error) {
      toast.error('Something went wrong.');
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    if (formApiValues.mobile && formApiValues.remark) {
      brochureForm();
    }
  }, [formApiValues]);

  const handleButtonClick = () => {
    setFormApiValues({
      mobile: mobile.replace(/\D/g, ''),
      remark: 'weaning',
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="heroTwo">
      {isBrochureModalOpen && (
        <div className="text-primary fixed inset-0 z-50">
          <div
            role="alert"
            className="container mx-auto flex h-[100vh] w-11/12 max-w-lg items-center justify-center  pt-[4vh]  md:w-2/3 "
          >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-11/12 rounded bg-white pb-8 pt-10 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12 ">
              <div className="flex flex-col items-center overflow-hidden px-4 md:px-12">
                <h3 className="text-center text-xl font-semibold text-primary-600 dark:text-white">View Brochure</h3>
                <div className="mt-4 flex w-full flex-col items-center sm:mt-6">
                  <form className="flex w-[100%] flex-col space-y-4">
                    <h2 className="text-md text-center text-black">Enter Your WhatsApp number to Download Brochure</h2>
                    <label className="flex w-full flex-col text-black">
                      <GeoPhoneInput mobile={mobile} setMobile={setMobile} isDisabled={isDisabled} />
                    </label>
                    <div className="w-full">
                      <PayNowButton
                        onClick={() => handleButtonClick()}
                        buttonText={isDisabled ? 'Please Wait...' : 'View Brochure'}
                        isDisabled={isDisabled}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer text-black transition duration-150 ease-in-out"
                onClick={() => setIsBrochureModalOpen(false)}
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
      {isThankYouModalOpen && (
        <div className="fixed inset-0 z-50">
          <div
            role="alert"
            className="container mx-auto flex h-[100vh]  w-11/12 items-center justify-center  pt-[4vh]  md:w-2/3"
          >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-full rounded bg-white pb-8 pt-10 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden px-4 font-bold text-black md:px-12">
                <h2 className="mb-4 text-xl font-semibold">Thanks for downloading our weaning brochure!</h2>
                <div className="mt-4 flex w-full flex-col items-center sm:mt-6">
                  <p>If you haven&apos;t received it yet on your WhatsApp, please drop us a message on:</p>
                  <a
                    href="http://babynama.in/agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 underline"
                  >
                    http://babynama.in/agent
                  </a>
                </div>
              </div>
              <div
                className="dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer text-black transition duration-150 ease-in-out"
                onClick={() => setIsThankYouModalOpen(false)}
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
      <div className="flex flex-col sm:flex-row">
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative mx-auto my-5 h-3/4 w-3/4 bg-white text-end">
              <button
                className="mx-1 my-1 rounded-lg border-2 border-gray-400 px-4 py-1"
                type="button"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <iframe
                src="https://gh-public-contents.s3.ap-south-1.amazonaws.com/Weaning+Workshop+23july.pdf"
                title="Solids Food Start Workshop brochure"
                className="h-full w-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ViewBrochureModal;
