'use client';
import { IconCheck } from '@tabler/icons-react';
import HeaderWidget from '../common/HeaderWidget';
import { StepsProps } from '../../shared/types';

const ProgramSteps: React.FC<StepsProps> = ({ header, title, items, image, videoUrl, mp4VideoUrl, callToAction }) => {
  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {header && <HeaderWidget header={header} titleClassname="text-2xl md:text-5xl" />}
        <div className={`row-gap-10 grid gap-6  ${videoUrl ? `md:grid-cols-2` : `md:grid-cols-1`}`}>
          <div className="mb-4 md:mb-0 md:py-4 md:pr-16">
            {title && <h2 className="font-heading mb-8 text-3xl font-bold lg:text-3xl">{title}</h2>}
            {items &&
              items.length &&
              items.map(({ title, description, icon: Icon }, index) => (
                <div key={`item-steps-${index}`} className="flex">
                  {/* Render steps */}
                  <div className="mr-4 flex flex-col items-center">
                    {/* Step icon */}
                    <div>
                      {index !== items.length - 1 ? (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                          {Icon ? (
                            <Icon className="h-6 w-6 text-primary-800 dark:text-slate-200" />
                          ) : (
                            <p className="text-base font-bold text-primary-800 dark:text-slate-200">{index + 1}</p>
                          )}
                        </div>
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                          {Icon ? (
                            <Icon className="h-6 w-6 text-white dark:text-slate-200" />
                          ) : (
                            <IconCheck className="h-6 w-6 text-white dark:text-slate-200" />
                          )}
                        </div>
                      )}
                    </div>
                    {index !== items.length - 1 && <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                  </div>
                  <div className={`pt-1 ${index !== items.length - 1 ? 'pb-4' : ''}`}>
                    {title && <p className="mb-2 text-base text-gray-900 dark:text-slate-300">{title}</p>}
                    {description && (
                      <p className="text-base text-gray-600 dark:text-slate-400 md:text-lg">{description}</p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSteps;
