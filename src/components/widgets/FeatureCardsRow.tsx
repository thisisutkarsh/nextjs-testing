import React from 'react';
import Image from 'next/image';
import HeaderWidget from '../../components/common/HeaderWidget';
import { PreviewAccessFeaturesProps } from '../../shared/types';
import { useRecoilState } from 'recoil';
import { isPaymentModalOpenState } from '../../components/state/atoms/modalState';
const FeatureCardsRow: React.FC<PreviewAccessFeaturesProps> = ({ header, items }) => {
  const [_, setIsPaymentModalOpen] = useRecoilState(isPaymentModalOpenState);
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 pb-4 pt-4 sm:px-6 md:pb-10 md:pt-16 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className=" -left-4 top-0 h-72 w-72 rounded-full bg-purple-100 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className=" animation-delay-4000 -bottom-32 left-20 h-72 w-72 rounded-full bg-purple-100 opacity-70 mix-blend-multiply blur-xl filter"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        {header && <HeaderWidget header={header} titleClassname="text-2xl md:text-4xl" />}
        <div className="flex flex-wrap justify-center">
          {items &&
            items.map((service, index) => {
              const { title, image } = service;
              return (
                <div
                  key={index.toString()}
                  className="mb-4 flex w-full flex-row items-center justify-center gap-1 rounded-md border border-gray-300 bg-white p-4 shadow-md md:mr-4 md:w-[30%] md:flex-col"
                  onClick={() => setIsPaymentModalOpen(true)}
                >
                  <div className="flex w-[15%] md:w-full md:justify-center">
                    {image && <Image src={image.src} alt={image.alt} className="h-10 w-10" />}
                  </div>
                  <div className="w-[85%] pt-2 text-left  md:w-full">
                    <h2 className="text-base font-medium text-gray-900">{title}</h2>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsRow;
