'use client';
import React, { useState, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import PlanItem from './PlanItem';
import { ComparisonPlan, Plan } from '../../shared/types';
import ComparisonTable from './ComaprisonTable';
import { ComparisonPlans, ComparisonPlansBabyCare } from '../../shared/data';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import '../../assets/styles/Ribbon.css';
import { usePathname } from 'next/navigation';

interface ComparisonTableProps {
  isThreeMonthly: boolean;
  setIsThreeMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  isSticky: boolean;
  setIsSticky: React.Dispatch<React.SetStateAction<boolean>>;
  plans: ComparisonPlan[];
}
const featuresForBabyCarePlan = [
  'Instant support on WhatsApp Group (8AM - 10PM)',
  'Unlimited Free pediatric consultation',
  'Expert Guidance in Lactation, Nutrition & Weaning: chat/consultation',
  'Growth & Milestone Tracking by an expert pediatrician',
  'Personalized Care by a dedicated pediatrician.',
  'Comprehensive support & guidance for mother: postnatal care, personalized diet plan, emotional well-being & health concerns',
  // 'Free Workshops',
  'Specialist Consultations for baby & mother: Gynecologists, Dermatologist, Psychologist, Pediatrician, Nutritionist',
];

const featuresForCarePlan = [
  'Instant support on WhatsApp Group (8AM - 10PM)',
  'Unlimited Free pediatric consultation',
  'Expert Guidance in Lactation, Nutrition & Weaning: chat/consultation',
  'Growth & Milestone Tracking by an expert pediatrician',
  'Personalized Care by a dedicated pediatrician.',
  'Comprehensive support & guidance for mother: postnatal care, personalized diet plan, emotional well-being & health concerns',
  'Free Workshops',
  'Specialist Consultations for baby & mother: Gynecologists, Dermatologist, Psychologist, Pediatrician, Nutritionist',
];

const ComparisonPricing: React.FC<ComparisonTableProps> = ({
  isThreeMonthly,
  setIsThreeMonthly,
  isSticky,
  setIsSticky,
  plans,
}) => {
  const pathname = usePathname();
  const babyCarePlan = pathname === '/baby-care-plan';

  return (
    <section className="pb-5 lg:pb-10" id="comparison">
      {/* end modal section */}
      <div className={`mx-auto max-w-full px-1 py-16 sm:px-6 lg:px-8 lg:py-20 ${isSticky ? 'pt-0' : 'max-w-7xl pt-3'}`}>
        <div className="mb-6">
          <h2 className="font-heading mb-4 px-3 text-center text-3xl font-bold tracking-tight text-black dark:text-primary-200 md:text-5xl">
            What&apos;s Available For Each Plan?
          </h2>
          <h3 className="mx-auto mt-4 max-w-3xl px-3 text-center text-xl text-gray-600 dark:text-slate-400">
            Compare and contrast the plans and choose the one that works best for you and your baby
          </h3>
        </div>

        {/* Iterates for both the cards */}
        <div className="overflow-auto rounded-lg px-0 text-sm md:m-auto md:max-w-3xl md:text-lg">
          <div
            className={`grid-rows-8 grid   ${
              babyCarePlan
                ? 'grid-cols-[190px_repeat(2,1fr)] md:grid-cols-3 '
                : 'grid-cols-[190px_repeat(3,1fr)] md:grid-cols-4 '
            }`}
          >
            {/* Columns */}
            <div className="sticky left-0 top-0 z-10 flex h-10 min-w-[130px] basis-40 items-center justify-center bg-blue-600 px-1 py-2 text-sm font-bold text-white shadow-lg dark:bg-[#13496dba] md:text-lg">
              Plan Description
            </div>
            {plans.map((plan, columnIndex) => (
              <div
                key={plan.name}
                className={`relative flex h-10 items-center  justify-center  px-1 py-2 text-white ${
                  plan.id === 2 ? 'bg-pink-600 dark:bg-[#390f0b]' : 'bg-blue-600 dark:bg-[#13496dba]'
                }`}
              >
                <div>
                  <h3 className="text-center text-sm font-bold md:text-lg">{plan.name}</h3>
                </div>
                <div className={`${plan.id === 2 ? 'ribbon-1 left' : 'hidden'}`}></div>
              </div>
            ))}
            {/* Rows */}
            {!babyCarePlan &&
              featuresForCarePlan.map((feature, index) => (
                <React.Fragment key={`feature-${index}`}>
                  {/* Feature Column */}
                  <div
                    className={`sticky left-0 top-0 z-10 flex min-w-[130px] basis-40 items-center  p-1 py-2 text-sm shadow-lg dark:text-white ${
                      index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-500'
                    }`}
                  >
                    {feature}
                  </div>

                  {/* Plan Columns */}
                  {plans.map((plan, planIndex) => (
                    <div
                      key={`feature-${index}-${planIndex}`}
                      className={`-scroll flex items-center justify-center border-l border-r p-4 text-center dark:text-white ${
                        index % 2 === 0 && plan.id !== 2
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : index % 2 === 0 && plan.id === 2
                          ? 'bg-pink-100 dark:bg-[#555]'
                          : index % 2 !== 0 && plan.id !== 2
                          ? 'bg-white dark:bg-gray-500'
                          : 'bg-pink-50 dark:bg-[#757575]'
                      }`}
                    >
                      <div className="-scroll flex items-center justify-center rounded-full text-lg text-black dark:text-white">
                        {plan.features[index] ? (
                          typeof plan.features[index] === 'boolean' ? (
                            <TiTick className="rounded-full bg-primary-500 text-white" size={15} />
                          ) : (
                            <span className={` ${index === 6 ? 'h-[124px] md:h-[65px]' : 'h-[30px]'} text-[12px]`}>
                              {plan.features[index]}
                            </span>
                          )
                        ) : (
                          <RxCross2 className="rounded-full bg-red-500 text-white" size={15} />
                        )}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}

            {babyCarePlan &&
              featuresForBabyCarePlan.map((feature, index) => (
                <React.Fragment key={`feature-${index}`}>
                  {/* Feature Column */}
                  <div
                    className={`sticky left-0 top-0 z-10 flex min-w-[130px] basis-40 items-center  p-1 py-2 text-sm shadow-lg dark:text-white ${
                      index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-500'
                    }`}
                  >
                    {feature}
                  </div>

                  {/* Plan Columns */}
                  {plans.map((plan, planIndex) => (
                    <div
                      key={`feature-${index}-${planIndex}`}
                      className={`-scroll flex items-center justify-center border-l border-r p-4 text-center dark:text-white ${
                        index % 2 === 0 && plan.id !== 2
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : index % 2 === 0 && plan.id === 2
                          ? 'bg-pink-100 dark:bg-[#555]'
                          : index % 2 !== 0 && plan.id !== 2
                          ? 'bg-white dark:bg-gray-500'
                          : 'bg-pink-50 dark:bg-[#757575]'
                      }`}
                    >
                      <div className="-scroll flex items-center justify-center rounded-full text-lg text-black dark:text-white">
                        {plan.features[index] ? (
                          typeof plan.features[index] === 'boolean' ? (
                            <TiTick className="rounded-full bg-primary-500 text-white" size={15} />
                          ) : (
                            <span className={` ${index === 6 ? 'h-[124px] md:h-[65px]' : 'h-[30px]'} text-[12px]`}>
                              {plan.features[index]}
                            </span>
                          )
                        ) : (
                          <RxCross2 className="rounded-full bg-red-500 text-white" size={15} />
                        )}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}

            <div className="min-w-40 sticky left-0 top-0 z-10 flex min-w-[130px] items-center bg-gray-100 p-1 text-sm font-medium shadow-lg dark:bg-gray-700 dark:text-white ">
              Price For 3 Month
            </div>

            {plans.map((plan, columnIndex) => (
              <div
                key={plan.name}
                className={`flex items-center justify-center border-l border-r bg-gray-100 p-3 dark:text-white ${
                  plan.id === 2 ? 'bg-pink-100 dark:bg-[#555] ' : 'bg-gray-100 dark:bg-gray-700'
                }`}
              >
                <div
                  className={`btn mb-2 w-full cursor-pointer rounded-md
                      px-4 py-2 text-center  text-white transition-all  hover:bg-white
                      dark:text-white  sm:mb-0
                     ${
                       plan.id === 2
                         ? 'border-[#ff0c79] bg-[#ff0c79] hover:border-[#983f64] hover:text-[#ac4b80] dark:border-[#390f0b]  dark:bg-[#390f0b] hover:dark:border-[#390f0b] hover:dark:bg-[#555] hover:dark:text-white'
                         : 'border-[#0CAFFF] bg-[#0CAFFF] hover:border-[#6CB4EE] hover:text-[#6CB4EE] dark:border-[#13496dba] dark:bg-[#13496dba] hover:dark:border-[#6CB4EE]'
                     }
                     `}
                  key={`price-${plan.name}`}
                >
                  <ComparisonTable key={plan.id + 1} plan={plan} isThreeMonthly={isThreeMonthly} />
                </div>
              </div>
            ))}

            <div className="min-w-40 sticky left-0 top-0 z-10 flex min-w-[130px] items-center border-t-2 border-gray-200 bg-white p-1 text-sm font-medium shadow-lg dark:bg-gray-500 dark:text-white">
              Price For 1 Month
            </div>

            {plans.map((plan, columnIndex) => (
              <div
                key={plan.name}
                className={`flex items-center justify-center border-l border-r  border-t-2 border-gray-200  p-3 dark:text-black ${
                  plan.id === 2 ? 'bg-pink-50 dark:bg-[#757575]' : 'bg-white dark:bg-gray-500'
                }`}
              >
                <div
                  className={`btn mb-2 w-full cursor-pointer rounded-md
                    px-4 py-2 text-center  font-normal text-white transition-all hover:border-gray-500 hover:bg-white
                     dark:text-white hover:dark:text-white sm:mb-0

                    ${
                      plan.id === 2
                        ? 'border-[#e1458de3] bg-[#e1458de3] hover:border-[#983f64] hover:text-[#ac4b80] dark:border-[#7e3a34]  dark:bg-[#7e3a34] hover:dark:border-[#390f0b] hover:dark:bg-[#555] hover:dark:text-white'
                        : 'border-[#6cb4ee] bg-[#6cb4ee] hover:border-[#6CB4EE] hover:text-[#6CB4EE] dark:border-[#7db7deba] dark:bg-[#7db7deba] hover:dark:border-[#6CB4EE]'
                    }
                    `}
                  key={`price-${plan.name}`}
                >
                  <ComparisonTable key={plan.id + 1} plan={plan} isThreeMonthly={!isThreeMonthly} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonPricing;
