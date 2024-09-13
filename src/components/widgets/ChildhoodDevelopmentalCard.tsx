import { ChildhoodCardProps } from '../../shared/types';
import Image from 'next/image';

const ChildhoodDevelopmentalCard: React.FC<ChildhoodCardProps> = ({ section }) => {
  const { title, subtitle1, subtitle2, subtitle3, subtitle4, subtitle5, subtitle6, subtitle7, image, id } = section;
  const isEvenCard = id % 2 === 0;

  return (
    <section
      className={`mx-auto flex max-w-7xl rounded-lg bg-primary-50 px-4 py-3 shadow-lg ${
        isEvenCard ? 'flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl px-4 sm:px-6 md:flex-col">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {image && (
            <div
              className={`md:col-span-1/2 relative col-span-1 m-auto max-w-5xl ${
                isEvenCard ? 'order-first' : 'md:order-last'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full rounded-md"
                placeholder="blur"
                width={300}
                height={300}
              />
            </div>
          )}
          <div className="mx-auto max-w-4xl pb-10 text-center md:text-left">
            {title && (
              <h1 className="font-heading leading-tighter mb-6 text-center text-2xl font-bold tracking-normal text-blue-500 md:text-left ">
                {title}
              </h1>
            )}
            <ul className="list-disc text-left text-gray-700">
              {subtitle1 && <li className="mx-auto max-w-3xl text-lg font-normal  dark:text-slate-400">{subtitle1}</li>}

              {subtitle2 && <li className="mx-auto max-w-3xl text-lg font-normal  dark:text-slate-400">{subtitle2}</li>}

              {subtitle3 && <li className="mx-auto max-w-3xl text-lg font-normal  dark:text-slate-400">{subtitle3}</li>}

              {subtitle4 && <li className="mx-auto max-w-3xl text-lg font-normal  dark:text-slate-400">{subtitle4}</li>}

              {subtitle5 && <li className="mx-auto max-w-3xl text-lg font-normal  dark:text-slate-400">{subtitle5}</li>}

              {subtitle6 && <li className="mx-auto max-w-3xl text-lg font-normal  dark:text-slate-400">{subtitle6}</li>}

              {subtitle7 && <li className="mx-auto max-w-3xl text-lg font-normal  dark:text-slate-400">{subtitle7}</li>}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildhoodDevelopmentalCard;
