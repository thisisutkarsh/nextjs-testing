'use client';
import Slider from 'react-slick';
import HeroYogaMainCard from './HeroYogaMainCard';
import { useInView } from 'react-intersection-observer';
import '../../assets/styles/carousel.css';
import { useRouter } from 'next/navigation';
import { HeroYogaCardProps } from '../../shared/types';

const HeroYogaCard: React.FC<{ heroYogaCard: HeroYogaCardProps[] }> = ({ heroYogaCard }) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
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
          fade: true,
        },
      },
    ],
  };
  return (
    <>
    <section >
      <div >
        <div className="w-full" ref={ref}>
          <Slider {...settings}>
            {heroYogaCard.map((item, index) => (
              <div key={index.toString()}>
                <HeroYogaMainCard
                  name={item.name}
                  image={item.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroYogaCard;
