'use client';
import React, { useState } from 'react';
import { Hero3Props } from '../../shared/types';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import UtmHeading from './UtmHeading';
const Gifting: React.FC<Hero3Props> = ({ HeroData }) => {
  const { titlePart1, titlePart2, subtitle, paymentButton, button2, image } = HeroData;
  const [isReadMoreModalOpen, setIsReadMoreModalOpen] = useState(false);
  const router = useRouter();
  const headingContent = UtmHeading();

  return (
    <section id="hero-preview2" className="bg-primary-50 dark:bg-gray-800">
      {/* Read More pop-up start */}

      {isReadMoreModalOpen && (
        <div className="fixed inset-0 z-50">
          <div
            role="alert"
            className="container mx-auto flex h-[100vh] w-11/12 max-w-lg items-center justify-center pt-[4vh] md:w-2/3 "
          >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-11/12 rounded bg-white pt-2 shadow  dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex w-full flex-col  items-center overflow-hidden px-2 shadow-lg md:px-12">
                <div className="py-3">
                  <p className="px-2 py-4 ">
                    <strong>A</strong>re you an experienced parent👪 who understands the value of{' '}
                    <strong>peace of mind for new parents</strong>? Step into their shoes and give them a gift that
                    truly resonates with your own parenting journey. While others may offer traditional baby products,
                    you can offer something <strong>far more meaningful</strong>.<br />
                    <br />
                    With a Babynama subscription, you&apos;re giving the new parents 👩‍👦 the priceless gift of{' '}
                    <strong> expert guidance and support during this challenging phase</strong> of their lives. As a
                    fellow parent, you know firsthand the reassurance that comes from having a trusted resource by your
                    side.
                    <br />
                    <br /> Be the one to provide that invaluable support and show them they&apos;re not alone on this
                    incredible journey.<strong>Choose Babynama👨‍⚕️</strong>,because you understand the true value of
                    parental peace of mind.
                  </p>
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
                  className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer transition duration-150 ease-in-out"
                  onClick={() => setIsReadMoreModalOpen(false)}
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
        <div className="grid grid-cols-1 items-center gap-8 pt-5 md:grid-cols-2 md:pt-20">
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
            <div className="m-auto flex max-w-xs flex-col flex-nowrap justify-center gap-4 sm:max-w-md sm:flex-row md:m-0 md:justify-start">
              {paymentButton && (
                <div className="flex w-full sm:w-auto">
                  <Link
                    href="/gifting/#gifting-pricing"
                    className="w-full rounded-[2rem] bg-[#293BDB] py-4 text-center text-[1.2rem] tracking-wide text-white"
                  >
                    {paymentButton}
                  </Link>
                </div>
              )}
              {button2 && (
                <div
                  className="btn border-secondary bg-secondary text-base font-medium text-white shadow-lg transition-all duration-200 ease-in-out hover:border-secondary hover:bg-transparent hover:text-secondary focus:ring-secondary sm:text-lg md:text-xl"
                  onClick={() => setIsReadMoreModalOpen(true)}
                >
                  <button>Read More</button>
                </div>
              )}
            </div>
          </div>
          {image && (
            <div className="md:col-span-1/2 relative col-span-1 m-auto max-w-5xl">
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full rounded-md"
                placeholder="blur"
                width={400}
                height={400}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gifting;
