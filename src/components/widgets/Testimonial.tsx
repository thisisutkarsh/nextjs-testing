'use client';
import Image from 'next/image';
import { TestimonialProps } from '../../shared/types';
import TextReviewCard from './TextReviewCard';

import TestimonialsChildCard from './TestimonialsChildCard';
const Testimonial: React.FC<TestimonialProps> = ({ header, testimonials }) => {
  const testimonialsToShow = testimonials.slice(0, 9); // Select testimonials from index 1 to 6
  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="child-testimonials">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-black dark:text-white md:text-5xl">
          Hear from Babynama Parents
        </h2>
        <div className="flex flex-col items-stretch  justify-center">
          <div className="grid grid-cols-1 gap-5 p-4 dark:text-white sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsToShow.map(({ url, thumbnailUrl, review, name, position }, index) => (
              <div key={`item-testimonial-${index}`}>
                <TestimonialsChildCard
                  videoUrl={url}
                  thumbnailUrl={thumbnailUrl}
                  review={review}
                  reviewer={name}
                  position={position}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 p-4 dark:text-white sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(10).map(({ name, date, review, profileImage, url, reviewImage }, index) => (
              <div
                key={`item-testimonial-${index}`}
                className="relative rounded-lg border-2 border-dashed border-gray-800 bg-pink-100 text-white"
              >
                <div className="inline-block p-4">
                  <div className="mb-4 flex">
                    {profileImage && (
                      <Image
                        src={profileImage.src}
                        width={48}
                        height={48}
                        alt={profileImage.alt}
                        className="mr-4 h-12 w-12 rounded-full bg-white object-cover shadow-lg"
                      />
                    )}
                    <div className="pt-2 text-left">
                      <h3 className="pr-2 font-bold text-black ">{name}</h3>
                    </div>
                  </div>
                  <TextReviewCard review={review} videoUrl={url} reviewImage={reviewImage} date={date} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
