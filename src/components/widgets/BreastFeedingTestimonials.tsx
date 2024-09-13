import React from 'react';
import Image from 'next/image';
import Img1 from '../../assets/images/breastfeedingtestimonials/1.webp';
import Img2 from '../../assets/images/breastfeedingtestimonials/2.webp';
import Img3 from '../../assets/images/breastfeedingtestimonials/3.webp';
import Img4 from '../../assets/images/breastfeedingtestimonials/4.webp';
import Img5 from '../../assets/images/breastfeedingtestimonials/5.webp';
import Img6 from '../../assets/images/breastfeedingtestimonials/6.webp';
import Img7 from '../../assets/images/breastfeedingtestimonials/7.webp';
import Img8 from '../../assets/images/breastfeedingtestimonials/8.webp';
import Img9 from '../../assets/images/breastfeedingtestimonials/9.webp';
import Img10 from '../../assets/images/breastfeedingtestimonials/10.webp';
import Img11 from '../../assets/images/breastfeedingtestimonials/11.webp';
import Img12 from '../../assets/images/breastfeedingtestimonials/12.webp';
import Img13 from '../../assets/images/breastfeedingtestimonials/13.webp';
import Img14 from '../../assets/images/breastfeedingtestimonials/14.webp';
import Img15 from '../../assets/images/breastfeedingtestimonials/15.webp';
import Img16 from '../../assets/images/breastfeedingtestimonials/16.webp';
import Img17 from '../../assets/images/breastfeedingtestimonials/17.webp';
import Img18 from '../../assets/images/breastfeedingtestimonials/18.webp';
import Img19 from '../../assets/images/breastfeedingtestimonials/19.webp';
import Img20 from '../../assets/images/breastfeedingtestimonials/20.webp';
import Img21 from '../../assets/images/breastfeedingtestimonials/21.webp';
import Img22 from '../../assets/images/breastfeedingtestimonials/22.webp';
import Img23 from '../../assets/images/breastfeedingtestimonials/22.webp';
import Img24 from '../../assets/images/breastfeedingtestimonials/24.webp';
import Img25 from '../../assets/images/breastfeedingtestimonials/25.webp';
import Img26 from '../../assets/images/breastfeedingtestimonials/26.webp';
import Img27 from '../../assets/images/breastfeedingtestimonials/27.webp';

import { BreastFeedingTestimonial } from '../../shared/types';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const DivAnimationWrapper = dynamic(() => import('../../components/common/DivAnimationWrapper'), {
  ssr: false,
});

const testimonialData: BreastFeedingTestimonial[] = [
  { id: 1, image: Img1, name: 'Preview' },
  { id: 2, image: Img2, name: 'Preview' },
  { id: 3, image: Img3, name: 'Preview' },
  { id: 4, image: Img4, name: 'Preview' },
  { id: 5, image: Img5, name: 'Preview ' },
  { id: 6, image: Img6, name: 'Preview' },
  { id: 7, image: Img7, name: 'Preview' },
  { id: 8, image: Img8, name: 'Preview' },
  { id: 9, image: Img9, name: 'Preview' },
  { id: 10, image: Img10, name: 'Preview' },
  { id: 11, image: Img11, name: 'Preview' },
  { id: 12, image: Img12, name: 'Preview' },
  { id: 13, image: Img13, name: 'Preview' },
  { id: 14, image: Img14, name: 'Preview' },
  { id: 15, image: Img15, name: 'Preview' },
  { id: 16, image: Img16, name: 'Preview' },
  { id: 17, image: Img17, name: 'Preview' },
  { id: 18, image: Img18, name: 'Preview' },
  { id: 19, image: Img19, name: 'Preview' },
  { id: 20, image: Img20, name: 'Preview' },
  { id: 21, image: Img21, name: 'Preview' },
  { id: 22, image: Img22, name: 'Preview' },
  { id: 23, image: Img23, name: 'Preview' },
  { id: 24, image: Img24, name: 'Preview' },
  { id: 25, image: Img25, name: 'Preview' },
  { id: 26, image: Img26, name: 'Preview' },
  { id: 27, image: Img27, name: 'Preview' },
];

const BreastFeedingTestimonials: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<BreastFeedingTestimonial | null>(null);

  const handleImageClick = (testimonial: BreastFeedingTestimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleClosePreview = () => {
    setSelectedTestimonial(null);
  };

  return (
    <section className="testimonial-section bg-[#F0F8FF] px-4 py-8" id="testimonial">
      <h2
        className="font-heading mb-2 text-center text-2xl font-bold tracking-tight text-[#1D3860] dark:text-white md:text-4xl"
        style={{ textShadow: '-5px 5px 6px #FFF7DB' }}
      >
        Success Stories
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialData.map((testimonial) => (
          <DivAnimationWrapper key={testimonial.id}>
            <div
              className="testimonial-item group relative cursor-pointer  border-b-[5px] border-r-[5px] border-custom-purple "
              onClick={() => handleImageClick(testimonial)}
            >
              <Image
                src={testimonial.image.src}
                alt={testimonial.name}
                className="h-70 w-full rounded-lg object-cover shadow-md"
                priority={false}
                width={400}
                height={280}
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-center font-medium text-white">{testimonial.name}</p>
              </div>
            </div>
          </DivAnimationWrapper>
        ))}
      </div>

      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative mx-auto max-w-3xl">
            <button className="absolute right-4 top-4 text-3xl text-white" onClick={handleClosePreview}>
              &times;
            </button>
            <img
              src={selectedTestimonial.image.src}
              alt={selectedTestimonial.name}
              className="max-h-screen w-full rounded-lg object-contain"
            />
            <p className="mt-4 text-center text-white">{selectedTestimonial.name}</p>
          </div>
        </div>
      )}
    </section>
  );
};
export default BreastFeedingTestimonials;
