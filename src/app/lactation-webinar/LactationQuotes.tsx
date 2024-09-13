'use client';
import Image from 'next/image';
import { LactationQuotesProps } from '../../shared/types';
import HeaderWidget from '../../components/common/HeaderWidget';


import { usePathname, useRouter } from 'next/navigation';
import Slider, { LazyLoadTypes } from 'react-slick';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
const LactationQuotes: React.FC<LactationQuotesProps> = ({ header, quotes }) => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
          fade: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          fade: true,
        },
      },
    ],
  };

  const router = useRouter();
  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="child-testimonials">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-10">
        {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}
        <div className="flex flex-col items-stretch justify-center">
          <div className="h-full w-full md:mx-4 md:pt-8" ref={ref}>
            <Slider {...settings}>
              {quotes.map(({ name, quotes }, index) => (
                <div
                  key={`item-quotes-${index}`}
                  className=" relative h-[300px] rounded-lg border-2 border-dashed border-gray-800 bg-pink-100 pt-6 text-white"
                >
                  <div className="inline-block p-4">
                    <div className="mb-4 flex-col">
                      <div className="flex flex-col md:m-4">
                        <svg className="" width="41" height="28" viewBox="0 0 41 28" fill="none">
                          <path
                            opacity="0.12"
                            d="M8.772 0.399995L3.156 10.984C1.428 14.332 0.672 16.6 0.672 19.3C0.672 24.376 4.452 27.94 9.528 27.94C14.28 27.94 18.276 24.376 18.276 19.3C18.276 15.304 15.036 12.064 11.148 12.064H10.932L17.412 0.399995H8.772ZM30.696 0.399995L25.08 10.984C23.352 14.332 22.596 16.6 22.596 19.3C22.596 24.376 26.376 27.94 31.452 27.94C36.204 27.94 40.2 24.376 40.2 19.3C40.2 15.304 36.96 12.064 33.072 12.064H32.856L39.336 0.399995H30.696Z"
                            fill="#0055FF"
                          ></path>
                        </svg>
                        <p className="text-md text-center text-lg font-semibold text-black dark:text-slate-400 md:text-base">
                          {quotes}
                        </p>

                        {/* {!expanded && (
                          <div>
                            <p className="text-md text-center text-lg font-semibold text-black dark:text-slate-400 md:text-base">{`"${quotes.slice(
                              0,
                              150,
                            )}"`}</p>
                            <br />
                          </div>
                        )}
                        {expanded && (
                          <div>
                            <p className="m-b-30 text-md text-center text-lg font-semibold text-black dark:text-slate-400">{`"${quotes}"`}</p>
                          </div>
                        )} */}
                        {/* {quotes.length > 150 && (
                          <div className="m-b-30 mt-2 cursor-pointer border-none">
                            <span
                              className={`text-primary-500 transition-all hover:text-gray-500 dark:text-gray-700 ${
                                expanded ? 'bg-primary-300' : ''
                              }`}
                              onClick={() => {
                                setExpanded(!expanded);
                              }}
                            >
                              {expanded ? 'Read less' : 'Read more'}
                            </span>
                          </div>
                        )} */}
                      </div>
                      <h3 className="mx-auto flex items-center justify-center  pl-10 font-bold text-black">-{name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LactationQuotes;
