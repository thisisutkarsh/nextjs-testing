'use client';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import HeaderWidget from '../common/HeaderWidget';
import { PreviewAccessFeaturesProps } from '../../shared/types';
import FlipCard from './FlipCard';
import '../../assets/styles/customSlider.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const WhySection: React.FC<PreviewAccessFeaturesProps> = ({ header, items }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollStep = 200;
  const autoScrollInterval = 4000;
  const scrollLeft = () => {
    if (carouselRef.current && items) {
      const maxScroll = items.length * scrollStep;
      const currentScroll = carouselRef.current.scrollLeft;
      let nextScroll = currentScroll - scrollStep;

      if (nextScroll < 0) {
        nextScroll = maxScroll - scrollStep;
      }

      carouselRef.current.scrollLeft = nextScroll;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && items) {
      const maxScroll = items.length * scrollStep;
      const currentScroll = carouselRef.current.scrollLeft;
      let nextScroll = currentScroll + scrollStep;

      if (nextScroll >= maxScroll) {
        nextScroll = 0;
      }

      carouselRef.current.scrollLeft = nextScroll;
    }
  };
  const ref = useRef<HTMLDivElement | HTMLVideoElement | null>(null);
  const { inView, ref: inViewRef } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });
  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  // Auto scroll
  // useEffect(() => {
  //   let intervalId: NodeJS.Timeout | null = null;

  //   const startAutoScroll = () => {
  //     intervalId = setInterval(() => {
  //       if (carouselRef.current && items && inView) {
  //         const maxScroll = items.length * scrollStep;
  //         const currentScroll = carouselRef.current.scrollLeft;
  //         let nextScroll = currentScroll + scrollStep;

  //         if (nextScroll >= maxScroll) {
  //           nextScroll = nextScroll - maxScroll;
  //         }
  //             carouselRef.current.scroll({
  //           left: nextScroll,
  //           behavior: "smooth",
  //         });
  //       }
  //     }, autoScrollInterval);
  //   };

  //   const stopAutoScroll = () => {
  //     if (intervalId) {
  //       clearInterval(intervalId);
  //       intervalId = null;
  //     }
  //   };

  //   if (inView) {
  //     startAutoScroll();
  //   } else {
  //     stopAutoScroll();
  //   }

  //   return () => {
  //     stopAutoScroll();
  //   };
  // }, [items, inView]);

  return (
    <section id="why" className="mx-auto max-w-7xl px-4 pb-4 pt-10 sm:px-6 md:pb-10 md:pt-16 lg:px-8 " ref={setRefs}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {header && <HeaderWidget header={header} titleClassname="text-3xl md:text-4xl" />}
        <div className="carousel-container relative">
          <div className="carousel-nav">
            <button className="carousel-nav-button" onClick={scrollLeft} aria-label="Scroll Left">
              <FaArrowAltCircleLeft className="carousel-nav-icon" />
            </button>
          </div>
          <div ref={carouselRef} className="carrousel px-10 pt-4 md:mx-4">
            {items &&
              items.map((service, index) => {
                const { title, image, icon, description, callToAction, subtitle } = service;
                return (
                  <div key={index.toString()} className="card">
                    <FlipCard
                      image={image}
                      icon={icon}
                      title={title}
                      description={description}
                      subtitle={subtitle}
                      callToAction={callToAction}
                    />
                  </div>
                );
              })}
          </div>
          <div className="carousel-nav">
            <button className="carousel-nav-button" onClick={scrollRight} aria-label="Scroll Right">
              <FaArrowAltCircleRight className="carousel-nav-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
