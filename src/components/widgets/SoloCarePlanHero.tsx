import Image from 'next/image';
import { SoloCarePlanHeroProps } from '../../shared/types';
import React, { useState, useEffect } from 'react';
import UtmHeading from '../../components/widgets/UtmHeading';
import Card from '../../components/widgets/Card';
import NavigationStepper from '../../components/widgets/NavigationStepper';
import SoloPlanPurchaser from '../../components/widgets/SoloPlanPurchaser';
import { useRecoilState } from 'recoil';
import { planDurationAtom } from '../../components/state/atoms/planDurationAtom';

const SoloCarePlanHero: React.FC<SoloCarePlanHeroProps> = ({
  title,
  subtitle,
  callToAction,
  callToAction2,
  image,
  plan,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [planDuration, setPlanDuration] = useRecoilState(planDurationAtom);
  const headingContent = UtmHeading();
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const monthDataFromParams = searchParams.get('month');
    if (monthDataFromParams === '3') {
      setPlanDuration('threeMonthly');
    } else {
      setPlanDuration('monthly');
    }
  }, [setPlanDuration]);

  const handleDurationToggle = () => {
    setPlanDuration((prevDuration) => (prevDuration === 'monthly' ? 'threeMonthly' : 'monthly'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition >= 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="heroOne" className="bg-primary-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-2 pt-4 md:grid-cols-2 md:pt-12">
          {image && (
            <div className="md:col-span-1/2 relative col-span-1 m-auto max-w-5xl pb-0 md:pb-6">
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full rounded-md md:w-[85%]"
                placeholder="blur"
                priority={true}
                width={1000}
                height={1000}
              />
            </div>
          )}
          <div className="mx-auto h-full w-full max-w-4xl pb-10 text-center md:text-left">
            {/* <div className="pt-2"> <NavigationStepper /></div> */}
            <div className="flex items-center justify-center py-4 md:py-3">
              {title && (
                <h1 className="font-heading leading-tighter text-center text-xl font-medium tracking-normal lg:text-3xl">
                  {/* {headingContent !== null ? headingContent : planTimeBasedTitle} */}
                  Choose Plan Duration
                </h1>
              )}
            </div>
            {/* month toggle */}
            <div className="mb-3 flex items-center justify-center py-2 md:py-2">
              <label className="relative inline-flex cursor-pointer items-center gap-1">
                <span
                  className={`text-md mr-1.5 md:text-lg ${
                    planDuration === 'monthly' ? 'font-medium text-blue-500' : 'font-medium text-gray-900'
                  } dark:text-gray-300`}
                >
                  1 Month
                </span>
                <input
                  onChange={handleDurationToggle}
                  type="checkbox"
                  className="peer sr-only"
                  checked={planDuration === 'threeMonthly'}
                />
                <div
                  className={`peer relative h-6 w-12 rounded-full bg-blue-600 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 md:h-8 md:w-16 md:after:h-7 md:after:w-7 ${
                    planDuration === 'threeMonthly' ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                ></div>
                <span
                  className={`text-md ms-2 flex-col items-center gap-2 md:flex md:flex-row md:text-lg ${
                    planDuration === 'threeMonthly' ? 'font-bold text-blue-500' : 'font-medium text-gray-500'
                  } dark:text-gray-300`}
                >
                  3 Months
                  <div className="h-fit w-fit rounded-full bg-green-600 p-1 px-2 text-xs font-medium leading-[10px] text-white">
                    <p>Save Upto 16%</p>
                  </div>
                </span>
              </label>
            </div>
            {/* show price according to month selected */}
            <div className="flex items-center justify-center text-center ">
              {plan.prices && (
                <div className="relative w-fit py-0">
                  <p className="font-heading  leading-tighter text-2xl font-bold tracking-normal lg:text-2xl">
                    ₹ {planDuration === 'threeMonthly' ? plan.prices.threeMonthly : plan.prices.monthly}
                  </p>
                </div>
              )}
            </div>

            <SoloPlanPurchaser plan={plan} />

            <div className="pt-6">
              <h3 className="text-start text-lg font-medium md:text-xl">{plan.name} Plan includes:</h3>

              <div className="text-left">
                {plan.features.map((feature, index) => (
                  <Card
                    key={index}
                    details={feature.text}
                    icon={feature.icon}
                    summary={''}
                    terms={feature.terms}
                    TicKIcon={feature.TickIcon}
                    present={index === plan.features.length - 1 && plan.id === 3}
                    expandedText={feature.expandedText}
                    expanded={plan.id === 3 && index > 2}
                    fontSize="!text-[16px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoloCarePlanHero;
