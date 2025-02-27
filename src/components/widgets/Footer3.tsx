"use client"
import React from 'react';
import logoImg from '../../assets/images/logo-new.webp';
import Image from 'next/image';
import { AiFillMail } from 'react-icons/ai';
import { FaLocationArrow, FaPhone, FaWhatsapp } from 'react-icons/fa';
import WhatsAppButton from './WhatsAppButton';
import { usePathname } from 'next/navigation';
import playStoreLogo from '../../assets/images/Icons/Android-App.webp';
import appStoreLogo from '../../assets/images/Icons/app-store.webp';

export default function Footer3() {
  const pathname = usePathname();
  return (
    <>
      <footer id="footer" className="bg-tertiary" aria-labelledby="footer-heading">
        <WhatsAppButton />
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-12 lg:px-20 lg:py-16">
          <div className="">
            <a
              href="/"
              className="tracking-relaxed transform text-lg font-bold tracking-normal text-secondary transition duration-500 ease-in-out lg:pr-8"
            >
              <Image src={logoImg} alt="logo" width={100} height={100} />
            </a>
            <p className="mt-2 w-full text-base text-white lg:w-[90%]">
              Babynama is a digital platform with a highly experienced and professional team of doctors to cater to your{' '}
              {"baby's"} problems
            </p>
          </div>
          <div className="xl:mt-8 xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="grid grid-cols-2 gap-3">
              <div className="mt-12 lg:mt-0">
                <h3 className="text-base font-semibold uppercase tracking-wider text-secondary">Quick Links</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href="/care-plans" className="text-base font-normal text-white hover:text-secondary">
                      Care Plans
                    </a>
                  </li>
                  <li>
                    <a href="/doctors" className="text-base font-normal text-white hover:text-secondary">
                      Our Doctors
                    </a>
                  </li>
                  <li>
                    <a href="/testimonials" className="text-base font-normal text-white hover:text-secondary">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-base font-normal text-white hover:text-secondary">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 lg:mt-0 xl:hidden">
                <h3 className="text-base font-semibold uppercase tracking-wider text-secondary">Download App</h3>
                <ul className="mt-4 space-y-4 font-medium text-gray-500 dark:text-gray-400">
                  <li className="">
                    <a
                      href="https://apps.apple.com/in/app/babynama/id6451053175"
                      target="_blank"
                      className="text-base font-normal text-white hover:text-secondary"
                    >
                      <Image src={appStoreLogo} alt="appStoreLogo" width={150} height={80} />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.babynama.oncall.pediatrician.feeding.growth.milestones"
                      target="_blank"
                      className="text-base font-normal text-white hover:text-secondary"
                    >
                      <Image
                        src={playStoreLogo}
                        alt="playStoreLogo"
                        width={150}
                        height={120}
                        className="object-cover"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 hidden lg:mt-0 xl:block">
              <h3 className="text-base font-semibold uppercase tracking-wider text-secondary">Download App</h3>
              <ul className="mt-4 space-y-4 font-medium text-gray-500 dark:text-gray-400">
                <li className="">
                  <a
                    href="https://apps.apple.com/in/app/babynama/id6451053175"
                    target="_blank"
                    className="text-base font-normal text-white hover:text-secondary"
                  >
                    <Image src={appStoreLogo} alt="appStoreLogo" width={160} height={160} />
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.babynama.oncall.pediatrician.feeding.growth.milestones"
                    target="_blank"
                    className="text-base font-normal text-white hover:text-secondary"
                  >
                    <Image src={playStoreLogo} alt="playStoreLogo" width={160} height={160} className="object-cover" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 lg:mt-0">
              <h3 className="text-base font-semibold uppercase tracking-wider text-secondary">Services</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="/preview-access/" className="text-base font-normal text-white hover:text-secondary">
                    Preview Access
                  </a>
                </li>
                <li>
                  <a href="/book-consultation" className="text-base font-normal text-white hover:text-secondary">
                    One-on-One Paediatric Consultation
                  </a>
                </li>
                <li>
                  <a
                    href="/solids-food-start-workshop/"
                    className="text-base font-normal text-white hover:text-secondary"
                  >
                    Baby Solids Intoduction
                  </a>
                </li>
                {/* <li>
                  <a href="/yoga/" className="text-base font-normal text-white hover:text-secondary">
                    Yoga Workshop
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="mt-12 lg:mt-0">
              <h3 className="text-base font-semibold uppercase tracking-wider text-secondary">Contact Us</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li className="flex gap-2">
                  <AiFillMail size={28} color="#e7a019" />
                  <a
                    aria-label="Babynama"
                    href="mailto:contact@gagahealth.com"
                    className="text-base font-normal text-white hover:text-secondary"
                  >
                    contact@gagahealth.com
                  </a>
                </li>
                <li className="flex gap-2">
                  <FaPhone size={28} color="#e7a019" />
                  <a aria-label="Babynama" className="text-base font-normal text-white hover:text-secondary">
                    Call on: +91-7948221221
                  </a>
                </li>

                <li className="flex gap-2">
                  <FaWhatsapp size={28} color="#e7a019" />
                  <a
                    aria-label="Babynama"
                    href={`https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20Need%20Help%20with%20Babynama%20(${pathname
                      .split('-')
                      .join(' ')
                      .replace('/', '')
                      .trim()})`}
                    className="text-base font-normal text-white hover:text-secondary"
                  >
                    Chat with an agent Now
                  </a>
                </li>
                <li className="flex gap-2 text-base font-normal text-white hover:text-secondary">
                  <FaLocationArrow size={28} color="#e7a019" />
                  VR1 And U&I Centre, SCO-83, Sector 29, Gurugram, Haryana 122022
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-2 mt-12 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mt-8 md:order-1 lg:mt-0">
              <span className="mt-2 text-base font-normal text-white">
                Copyright &copy; 2023 GagaHealth Private Limited. All rights reserved.
              </span>
              <span className="mt-2 text-base font-normal text-white">
                <a
                  aria-label="Babynama"
                  href="/terms"
                  className="text-base font-normal text-white hover:text-secondary"
                >
                  {' '}
                  Terms And Conditions
                </a>
              </span>
              <span className="mt-2 text-base font-normal text-white">
                <a
                  aria-label="Babynama"
                  href="/privacy"
                  className="text-base font-normal text-white hover:text-secondary"
                >
                  {' '}
                  | Privacy Policy
                </a>
              </span>
              <span className="mt-2 text-base font-normal text-white">
                <a
                  aria-label="Babynama"
                  href="/refund-policy"
                  className="text-base font-normal text-white hover:text-secondary"
                >
                  {' '}
                  | Refund Policy
                </a>
              </span>
            </div>
            <div className="mb-8 mt-8 flex space-x-6 md:order-last md:mb-0 lg:mt-0">
              <a href="https://facebook.com/babynamahq" className="text-white hover:text-secondary">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://instagram.com/babynamahq" className="text-white hover:text-secondary">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://twitter.com/babynama" className="text-white hover:text-secondary">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
