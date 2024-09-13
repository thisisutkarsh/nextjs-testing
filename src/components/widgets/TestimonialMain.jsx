'use client';
import Slider from 'react-slick';
import { testimonialData, testimonialDataLactationGroup } from '../../shared/data';
import HeaderWidget from '../common/HeaderWidget';
import TestimonialMainCard from './TestimonialMainCard';
import TestimonialMainCardDrPuneet from './TestimonialMainCardDrPuneet';
import '../../assets/styles/carousel.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { isLandingPage } from '../../utils/isLandingPage';

const TestimonialMain = ({ testimonialContent }) => {
  const pathname = usePathname();
  const router = useRouter();
  let header;

  if (pathname === '/lactation-group') {

    header = testimonialDataLactationGroup.header;
  } else {
    header = testimonialData.header;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
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
          // autoplaySpeed: 4000,
        },
      },
    ],
  };

  return (
    <>
      <section className="pb-4 pt-10 sm:px-6 md:mx-auto md:max-w-7xl lg:px-8 lg:py-20" id="testimonials">
        <div className="relative  px-4 sm:px-6 md:mx-auto md:max-w-7xl">
          {header && <HeaderWidget header={header} titleClassname="text-3xl md:text-5xl" />}
          <div className="md:mx-4">
            <Slider {...settings}>
              {testimonialContent.map((testimonial, index) => (
                <div key={index.toString()}>
                  {pathname === '/dr-puneet' ? (
                    <TestimonialMainCardDrPuneet
                      key={index.toString()}
                      videoUrl={testimonial.url}
                      review={testimonial.text}
                      reviewer={testimonial.name}
                      position={testimonial.title}
                      thumbnailUrl={testimonial.thumbnailUrl}
                    />
                  ) : (
                    <TestimonialMainCard
                      key={index.toString()}
                      videoUrl={testimonial.url}
                      mp4VideoUrl={testimonial.mp4Url}
                      review={testimonial.text}
                      reviewer={testimonial.name}
                      position={testimonial.title}
                      thumbnailUrl={testimonial.thumbnailUrl}
                    />
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <div className="flex justify-center pt-4 md:pb-4">
        {isLandingPage(pathname) ? (
          ''
        ) : (
          <button
            className="btn focus:none mb-2 w-[87%] cursor-pointer rounded-md  border-primary-600 bg-primary-600 text-base text-white transition-all hover:border-primary-600 hover:bg-white hover:text-primary-600  focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-primary-600 dark:text-white hover:dark:border-primary-600 sm:mb-0 md:w-1/2"
            onClick={() => router.push('/testimonials')}
          >
            <span className="text-base sm:text-lg md:text-xl"> View More Testimonials</span>
            <AiOutlineArrowRight className="text-2xl font-bold text-white " />
          </button>
        )}
        {pathname === '/prime-care-plus' && (
          <button
            className="btn btn-primary text-base font-medium sm:mb-0 sm:text-lg md:text-xl"
            onClick={() => router.push('/prime-care-plus#pricing')}
          >
            <span className="px-2 text-lg">Try for 2 Weeks</span>
          </button>
        )}
      </div>
    </>
  );
};

export default TestimonialMain;
