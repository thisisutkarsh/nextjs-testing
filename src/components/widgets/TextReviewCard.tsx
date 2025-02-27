'use client';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
interface TextReviewCardProps {
  review: string | undefined;
  videoUrl: string | undefined;
  reviewImage:
    | {
        src: string | StaticImageData;
        alt: string;
      }
    | undefined;
  date: string | undefined;
}

const TextReviewCard: React.FC<TextReviewCardProps> = ({ review, videoUrl, reviewImage, date }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex">
      {review && (
        <div className="flex-col">
          <div className="flex items-center">
            {reviewImage && (
              <Image
                src={reviewImage.src}
                alt="review Image"
                height={200}
                width={200}
                className="mb-auto mt-6 h-72 w-full rounded-lg shadow-lg"
              />
            )}
          </div>
          <div className="m-4 flex flex-col">
            <svg className="" width="41" height="28" viewBox="0 0 41 28" fill="none">
              <path
                opacity="0.12"
                d="M8.772 0.399995L3.156 10.984C1.428 14.332 0.672 16.6 0.672 19.3C0.672 24.376 4.452 27.94 9.528 27.94C14.28 27.94 18.276 24.376 18.276 19.3C18.276 15.304 15.036 12.064 11.148 12.064H10.932L17.412 0.399995H8.772ZM30.696 0.399995L25.08 10.984C23.352 14.332 22.596 16.6 22.596 19.3C22.596 24.376 26.376 27.94 31.452 27.94C36.204 27.94 40.2 24.376 40.2 19.3C40.2 15.304 36.96 12.064 33.072 12.064H32.856L39.336 0.399995H30.696Z"
                fill="#0055FF"
              ></path>
            </svg>
            {!expanded && (
              <div>
                <p className="text-md text-center text-sm md:text-base font-semibold text-black dark:text-slate-400">{`"${review.slice(
                  0,
                  150,
                )}..."`}</p>
                <br />
                <p className="text-xs text-gray-500">{date}</p>
              </div>
            )}
            {expanded && (
              <div>
                <p className="m-b-30 text-md text-center text-sm font-semibold text-black dark:text-slate-400">{`"${review}"`}</p>
                <p className="text-xs text-gray-500">{date}</p>
              </div>
            )}
            {review.length > 150 && (
              <div className="m-b-30 mt-2 cursor-pointer border-none">
                <span
                  className={`text-primary-500 transition-all hover:text-gray-500 dark:text-gray-700 text-sm md:text-base ${
                    expanded ? 'bg-primary-300' : ''
                  }`}
                  onClick={() => {
                    setExpanded(!expanded);
                  }}
                >
                  {expanded ? 'Read less' : 'Read more'}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextReviewCard;
