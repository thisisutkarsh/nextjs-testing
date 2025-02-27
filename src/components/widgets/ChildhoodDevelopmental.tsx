'use client';
import { childDevelopment } from '../../shared/data';
import ChildhoodDevelopmentalCard from './ChildhoodDevelopmentalCard';
import Slider from 'react-slick';

export default function ChildhoodDevelopmental() {
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
  return (
    <>
      <section className="mx-auto  max-w-7xl dark:bg-gray-800  lg:py-8 " id="child-dev">
        <div className="pt-5 text-center">
          <h1 className="px-4 text-center text-2xl font-bold text-black dark:text-gray-100 md:text-3xl">
            Common Problems in Children at Different Stages:
          </h1>
        </div>
        <div className="hidden md:block">
          {childDevelopment.map((child, index) => (
            <section className="mx-5 py-6 md:mx-0 md:py-8" key={index}>
              <div className="container mx-auto">
                <ChildhoodDevelopmentalCard section={child} />
              </div>
            </section>
          ))}
        </div>

        <div className="md:hidden">
          <Slider {...settings}>
            {childDevelopment.map((child, index) => (
              <section className="py-6 md:mx-0 lg:py-8" key={index}>
                <div className="container mx-auto md:h-full">
                  <div className="mx-8">
                    <ChildhoodDevelopmentalCard section={child} />
                  </div>
                </div>
              </section>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
