'use client';
import React from 'react';
import { FeatureItem, PreviewAccessFeaturesProps } from '../../shared/types';
import WorkshopCard from '../../app/lactation-webinar/WorkshopCard';
import { motion } from 'framer-motion';

const Features: React.FC<PreviewAccessFeaturesProps> = ({ header, items, onClick }) => {
  const fromTop = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const headerFromDown = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleCardClick = (item: FeatureItem) => {
    if (onClick) {
      onClick(item);
    } else {
    }
  };

  const renderWorkshopCard = (variant: any, item: FeatureItem, key: number) => (
    <motion.div
      key={key}
      variants={variant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.1 }}
      className="h-[150px] w-[42vw] cursor-pointer rounded-[0.7rem] shadow-lg md:h-[130px] md:w-[30vw]"
      onClick={() => handleCardClick(item)}
    >
      <WorkshopCard
        icon={item?.image?.src || ''}
        text={item?.title || ''}
        shadowColor={item?.primaryColor || 'bg-primary-50'}
        bgColor={item?.secondaryColor || 'bg-primary-50'}
        imgAlt={item?.image?.alt || 'default-alt'}
      />
    </motion.div>
  );

  return (
    <section className="relative mx-auto max-w-7xl bg-[#F0F8FF] pb-4 pt-6 md:pb-10 md:pt-16">
      {header && (
        <motion.div
          variants={headerFromDown}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.1 }}
          className="font-heading mb-2 text-center text-2xl font-bold tracking-tight text-[#1D3860] dark:text-white md:text-4xl "
          style={{ textShadow: '-5px 5px 6px #FFF7DB' }}
        >
          {header?.title}
        </motion.div>
      )}

      {/* Mobile View */}
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 pl-6 pr-4 md:hidden">
        {items?.map((item, index) => renderWorkshopCard(fromTop, item, index))}
      </div>

      {/* Desktop View */}
      <div className="mt-6 hidden grid-cols-3 gap-x-4 gap-y-6 pl-6 pr-4 md:grid">
        {items?.map((item, index) => renderWorkshopCard(fromTop, item, index))}
      </div>
    </section>
  );
};

export default Features;
