import React from 'react';
import TestimonialCard from './TestimonialCard';
import Slider from 'react-slick';
import { LactationTestimonialCardprops } from '../../shared/types';
import '../../assets/styles/carousel.css';
import dynamic from 'next/dynamic';
const HeaderAnimationWrapper = dynamic(() => import('../../components/common/HeaderAnimationWrapper'), {
  ssr: false,
});

interface Props {
  testimonialContent: LactationTestimonialCardprops[];
}

function LactationTestimonials({ testimonialContent }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F0F8FF] py-6">
      <div className="text-center">
        <HeaderAnimationWrapper>
          <h1
            className="mx-auto w-5/6 text-[1.55rem] font-[700] leading-7 text-[#1D3860]"
            style={{ textShadow: '-5px 5px 6px #FFF7DB' }}
          >
            Hear from Babynama Parents
          </h1>
          <p className="mx-auto mt-3 w-2/3 text-[#1D3860]">We are proud to have helped thousands of parents</p>
        </HeaderAnimationWrapper>
      </div>
      <div className="mx-6 pb-6">
        <Slider {...settings}>
          {testimonialContent?.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              mp4VideoUrl={testimonial.mp4Url}
              position={testimonial.title}
              reviewer={testimonial.name}
              review={testimonial.text}
              videoUrl={testimonial.url}
              thumbnailUrl={testimonial.thumbnailUrl}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LactationTestimonials;
