'use client';
import React, { useState } from 'react';
import { Hero3Props } from '../../shared/types';
import { previewAccessFixedButtonData } from '../../shared/data';
import UtmHeading from './UtmHeading';
import FreePreviewModal from './FreePreviewModal';
import FixedBottomBtn from './FixedBottomBtn';
// import WhatsAppUI from '../../components/widgets/WhatsAppUI';

const HeroPreviewAccessV2: React.FC<Hero3Props> = ({ HeroData }) => {
  const { titlePart1, titlePart2, subtitle, paymentButton, button2, image } = HeroData;
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const headingContent = UtmHeading();

  return (
    <section id="hero-preview2" className="bg-primary-50 dark:bg-gray-800">
      <FreePreviewModal isFreePreviewModalOpen={isPaymentModalOpen} setIsFreePreviewModalOpen={setIsPaymentModalOpen} />
      <FixedBottomBtn
        buttonText={previewAccessFixedButtonData.buttonText}
        onBookNowClicked={() => setIsPaymentModalOpen(true)}
      />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-12">
        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2 md:gap-8">
          <div className="mx-auto max-w-4xl pb-4 text-center md:pb-8 md:text-left">
            {titlePart1 && (
              <h1 className="font-heading leading-tighter mb-4 text-4xl font-bold tracking-normal md:mb-8">
                {headingContent !== null ? headingContent : titlePart1}
              </h1>
            )}
            <div className="mx-auto max-w-xl">
              {subtitle && (
                <p className="mb-4 text-lg font-medium text-gray-600 dark:text-slate-400 sm:text-xl md:mb-8 md:text-2xl">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <button
                className="btn btn-primary w-full text-base font-medium sm:mb-0 sm:text-lg md:w-auto md:text-xl"
                onClick={() => setIsPaymentModalOpen(true)}
              >
                {button2}
              </button>
            </div>
          </div>
          <div className={`md:col-span-1/2 relative col-span-1 m-auto max-w-5xl overflow-hidden rounded-xl`}>
            {/* <WhatsAppUI /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPreviewAccessV2;
