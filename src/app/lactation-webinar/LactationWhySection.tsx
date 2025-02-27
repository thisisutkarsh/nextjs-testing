import React from 'react';
import { LactationWhyHeadingData } from '../../shared/data';
import HeaderWidget from '../../components/common/HeaderWidget';
import { LactationWhyData } from '../../shared/data';
import { usePathname, useRouter } from 'next/navigation';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';

const LactationWhySection: React.FC<{}> = () => {
  const { header } = LactationWhyHeadingData;
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
    <>
      <section className="mx-auto hidden max-w-7xl px-4 pb-12 pt-4 sm:px-6 md:block  lg:px-8 lg:pb-16 lg:pt-16">
        <div className="relative mx-auto -mb-12 max-w-7xl px-4 sm:px-6">
          {header && <HeaderWidget header={header} titleClassname="text-3xl md:text-5xl" />}

          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {LactationWhyData.map((service) => (
              <div
                key={service.id}
                className="transform overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800"
              >
                <div className="flex h-16 items-center justify-center rounded-t-xl bg-primary-600 text-white">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-center text-2xl font-semibold text-gray-800 dark:text-gray-50">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-100">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 md:hidden lg:px-8 lg:pt-8 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {header && <HeaderWidget header={header} titleClassname="text-3xl md:text-5xl" />}
          <div className="w-full md:mx-4 md:pt-8">
            <Slider {...settings}>
              {LactationWhyData.map((service, index) => (
                <div key={service.id} className="px-3">
                  <div className="h-[300px] transform overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 md:h-80">
                    <div className="flex h-16 items-center justify-center rounded-t-xl bg-primary-600 text-white">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-center text-2xl font-semibold text-gray-800 dark:text-gray-50">
                        {service.title}
                      </h3>
                      <p className="text-center text-gray-600 dark:text-gray-100">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default LactationWhySection;
