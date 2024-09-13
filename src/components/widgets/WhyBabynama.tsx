import Image from 'next/image';
import { CareWhyBabynamaProps } from '../../shared/types';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import BTPPricingModal from 'app/(ads)/breastfeeding-training-program/BTPPaymentModal/BTPPricingModal';
import { btpPlan, motherhoodCareplan } from '../../shared/data';
import FreePreviewModal from '../../components/widgets/FreePreviewModal';
import MotherhoodPricingModal from 'app/(ads)/motherhood-webinar/PrimePaymentModal/MotherhoodPricingModal';
const WhyBabynama: React.FC<CareWhyBabynamaProps> = ({ title, subtitle1, features, image }) => {
  const pathname = usePathname();
  const [isPrimePricingModalOpen, setIsPrimePricingModalOpen] = useState(false);
  const [isMotherHoodPricingModalOpen, setIsMotherHoodPricingModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const handleButtonClick = () => {
    if (pathname.includes('preview-landing')) {
      setIsPaymentModalOpen(true);
    } else if (pathname === '/lactation-program' || pathname === '/breastfeeding-training-program') {
      setIsPrimePricingModalOpen(true);
    } else if (pathname === '/motherhood-webinar') {
      setIsMotherHoodPricingModalOpen(true);
    } else {
      window.location.href = `${pathname}/#pricing`;
    }
  };

  return (
    <section className="mx-auto flex max-w-7xl flex-col px-4 py-6 pb-6 sm:px-6 lg:px-8 lg:py-14 " id="why-babynama">
      <FreePreviewModal isFreePreviewModalOpen={isPaymentModalOpen} setIsFreePreviewModalOpen={setIsPaymentModalOpen} />
      {/* For lactation and breastfeedingprogram */}
      {isPrimePricingModalOpen && (
        <div className=" fixed inset-0 z-50 overflow-y-auto  ">
          <div
            role="alert"
            className="container mx-auto flex w-11/12 max-w-lg items-center justify-center pt-[4vh] md:w-2/3 "
          >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative z-10 w-[370px] rounded bg-white px-2 pb-8 pt-10 shadow dark:bg-gray-800 sm:w-8/12 md:w-9/12">
              <div className="flex flex-col items-center overflow-hidden">
                <div className="mt-4 flex w-full flex-col items-center sm:mt-6 ">
                  <BTPPricingModal plans={btpPlan} />
                </div>
              </div>
              <div
                className="text-black-800 dark:text-black-100 absolute right-0 top-0 m-3 cursor-pointer transition duration-150 ease-in-out"
                onClick={() => setIsPrimePricingModalOpen(false)}
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
      )}

      {/* For motherhood webinar */}
      {isMotherHoodPricingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="relative w-11/12 max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <div
              className="absolute right-0 top-0 mr-3 mt-3 cursor-pointer"
              onClick={() => setIsMotherHoodPricingModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={24}
                height={24}
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
            <MotherhoodPricingModal plans={motherhoodCareplan} />
          </div>
        </div>
      )}

      <div className="relative mx-auto mb-12 max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          {title && (
            <h1 className="font-heading leading-tighter mb-6 text-3xl font-bold tracking-normal md:text-4xl">
              {title}
            </h1>
          )}
          {subtitle1 && (
            <p className="text-left text-lg font-normal text-gray-600 dark:text-slate-400 md:text-xl">{subtitle1}</p>
          )}
        </div>

        <div className="grid grid-cols-1 items-center gap-4 sm:gap-8 md:grid-cols-2 md:py-6">
          <div className="mx-auto max-w-4xl text-left md:pb-10 md:text-left">
            <div className="flex-1">
              {/* Plan benefits */}
              <div>
                <div className="pb-6 pt-6 md:pb-0">
                  {features.map((feature, index) => (
                    <div key={index}>
                      <div className="mx-auto max-w-3xl "></div>
                      <div className="mt-2 flex text-xl">
                        {feature.TickIcon && (
                          <div className="cursor-pointer pt-1.5 text-base md:text-lg">{feature.TickIcon}</div>
                        )}
                        <p className="pl-1.5 text-base text-gray-700 dark:text-white md:pl-2 md:pr-1 md:text-lg">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {image && (
            <div className="md:col-span-1/2 relative col-span-1 m-auto max-w-5xl">
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full rounded-md"
                placeholder="blur"
                width={500}
                height={500}
              />
            </div>
          )}
        </div>
        <div className="justify-center pt-4 md:py-0 md:pl-[102px] md:pt-0">
          <button
            className="btn btn-primary w-full text-base font-medium hover:cursor-pointer sm:mb-0 sm:text-lg md:w-auto md:text-xl"
            onClick={() => handleButtonClick()}
          >
            Join the Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyBabynama;
