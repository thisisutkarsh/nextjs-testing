'use client';
import Link from 'next/link';
import Image from 'next/image';
import drSumitra2 from '../../assets/images/doctors/drSumitra2.webp';
import drSumitra3 from '../../assets/images/doctors/drSumitra3-v2.jpg';
import { useState ,useEffect } from 'react';
export default function About() {
  const [expandedSection, setExpandedSection] = useState('');

  const handleButtonClick = (section:string) => {
    if (expandedSection === section) {
      setExpandedSection('');
    } else {
      setExpandedSection(section);
    }
  };
  return (
    <>
      <div className=" bg-primary-50 shadow-md dark:bg-gray-800  md:bg-white ">
        <div className="pt-5 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-gray-100">Babynama: An Empathetic Journey</h2>
          <p className="text-md px-7 text-gray-700 dark:text-gray-300 md:text-lg">
            Babynama was born out of empathetic experiences and observations of Dr. Sumitra Meena. Growing up in a
            family where pursuing dreams was a significant challenge, Dr. Sumitra overcame barriers to her education and
            achieved success in her field.
          </p>
        </div>

        <section className="mx-5 md:mx-0">
          <div className="container mx-auto bg-transparent p-2  shadow-none md:mt-8 md:h-full">
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0 ">
              <div className="absolute top-20 h-60 w-full bg-primary-100 md:hidden md:h-80 "></div>
              <div className="md:order-1">
                <div className="relative h-full">
                  <div className="flex items-center  justify-center">
                    <Image
                      src={drSumitra2.src}
                      alt="Doctor 1"
                      width={250}
                      height={400}
                      className="h-72 rounded-md object-cover object-top  shadow-md md:h-96 md:w-96"
                    />
                  </div>
                </div>
              </div>
              <div className="md:order-2">
                <div className="mt-0 transform overflow-hidden rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 md:mt-8 ">
                  <h1 className="mt-2 text-3xl font-bold text-primary-700 dark:text-gray-100 md:text-3xl">
                    An Empathetic Turn
                  </h1>
                  <p
                    className={`mt-4 text-gray-700 dark:text-gray-300 ${
                      expandedSection === 'section1' ? 'block' : 'h-36 overflow-hidden'
                    }`}
                  >
                    After completing her specialization in pediatrics, Dr. Sumitra started working as a full-time
                    pediatrician. During this time, she encountered the harsh realities of motherhood and the struggles
                    faced by mothers with newborns. Many infants were unable to receive timely basic care for common
                    issues like vomiting, diarrhea, and belly pain.
                    <br />
                    <br /> Dr. Sumitra observed that mothers often had to wait a long time to resolve their concerns
                    through offline consultations. For many, visiting hospitals or healthcare centers was not always
                    feasible. This issue became even more apparent when she became a mother herself. As a pediatrician,
                    she had the expertise to address her own baby needs but recognized the challenges faced by other
                    parents.
                  </p>
                  <button className="btn btn-primary mt-3 sm:mb-0" onClick={() => handleButtonClick('section1')}>
                    {expandedSection === 'section1' ? 'Read less' : 'Read more'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-5 py-4 md:mx-0">
          <div className="container mx-auto bg-transparent  p-2  shadow-none md:mt-8 md:h-full">
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0">
              <div className="absolute top-20 h-60 w-full bg-primary-100 md:hidden md:h-80 "></div>
              <div className="md:order-1">
                <div className="relative h-full">
                  <div className="flex items-center  justify-center">
                    <Image
                      src={drSumitra3.src}
                      alt="Doctor 1"
                      width={250}
                      height={400}
                      className="h-72  rounded-md object-cover object-top  shadow-md md:h-96 md:w-96"
                    />
                  </div>
                </div>
              </div>
              <div className="md:order-2">
                <div className="mt-0 transform overflow-hidden rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 md:mt-8 ">
                  <h1 className="mt-2 text-3xl font-bold text-primary-700 dark:text-gray-100 md:text-3xl">
                    An Empathetic Turn
                  </h1>
                  <p
                    className={`mt-4 text-gray-700 dark:text-gray-300 ${
                      expandedSection === 'section2' ? 'block' : 'h-36 overflow-hidden'
                    }`}
                  >
                    Driven by her empathy and insights, Dr. Sumitra decided to bridge the gap between parents and
                    pediatricians with the digital platform, <strong>Babynama</strong>. She aimed to help numerous
                    mothers who needed urgent solutions for their babies, even in the middle of the night. Along with a{' '}
                    <strong>proficient team of pediatricians</strong>, Dr. Sumitra created an online platform to support
                    parents and promote compassionate care.
                    <br />
                    <br /> <strong>Babynama</strong> is an <strong>online platform</strong> that connects mothers with
                    pediatricians, nutritionists, gynecologists, and various other medical experts who are available for
                    mothers and children to offer instant medical advice with regard to the health of the child.
                  </p>
                  <button className="btn btn-primary mt-3 sm:mb-0" onClick={() => handleButtonClick('section2')}>
                    {expandedSection === 'section2' ? 'Read less' : 'Read more'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center py-4 md:py-8">
          <Link href="/preview-access">
            <button className="btn btn-primary sm:mb-0">Get Preview Access now</button>
          </Link>
        </div>
      </div>
    </>
  );
}

