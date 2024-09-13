import { ProgramPlanCardProps } from '../../shared/types';
import Image from 'next/image';
import FupCard from '../../components/widgets/FupCard';

const ProgramPlanCard = ({
  heading,
  subHeading,
  description,
  buttonText,
  imgUrl,
  features,
  onBookNowClicked,
}: ProgramPlanCardProps) => {
  return (
    <div className="mx-auto max-w-5xl rounded-xl bg-slate-100 px-2 py-4 shadow-lg dark:bg-slate-800 lg:pb-5 lg:pt-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Plan benefits */}
        <div className="flex items-center justify-center">
          <div className="md:hidden">
            <Image
              src={imgUrl.src}
              alt={imgUrl.alt}
              className="mx-auto rounded-md dark:bg-slate-700"
              placeholder="blur"
              width={350}
              height={350}
            />
          </div>

          <div className=" hidden md:block">
            <Image
              src={imgUrl.src}
              alt={imgUrl.alt}
              className="mx-auto rounded-md dark:bg-slate-700"
              placeholder="blur"
              priority={true}
              width={220}
              height={220}
            />
          </div>
        </div>

        <div className="flex h-full flex-col  space-y-4 px-2 pt-3 md:px-4">
          <h2 className="text-black-800 text-center text-2xl font-semibold dark:text-white">{heading}</h2>
          {subHeading && (
            <div className="text-center text-lg font-medium">
              <h3>{subHeading}</h3>
            </div>
          )}
          {description && (
            <div className="text-center text-sm md:text-base">
              <p>{description}</p>
            </div>
          )}
          {features.length > 0 && (
            <div className="hidden md:block">
              {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
                <FupCard
                  key={index}
                  details={feature.text}
                  icon={feature.icon}
                  summary={''}
                  TicKIcon={feature.TickIcon}
                />
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              className="btn btn-primary mb-2 w-full cursor-pointer rounded-md px-4 py-2 transition-all sm:mb-0"
              onClick={onBookNowClicked}
            >
              {buttonText}
              <span className="pl-1 text-sm text-yellow-300 line-through">₹9999</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPlanCard;
