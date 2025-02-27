import React, { useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import PlanItem from './PlanItem';
import { UpdatedPlan } from '../../shared/types';
import { useRecoilState } from 'recoil';
import { planDurationAtom } from '../../components/state/atoms/planDurationAtom';

const Pricing: React.FC<{ plans: UpdatedPlan[] }> = ({ plans }) => {
  const [planDuration, setPlanDuration] = useRecoilState(planDurationAtom);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const monthDataFromParams = searchParams.get('month');
    if (monthDataFromParams === '3') {
      setPlanDuration('threeMonthly');
    } else {
      setPlanDuration('monthly');
    }
  }, [setPlanDuration]);

  const handleDurationToggle = () => {
    setPlanDuration((prevDuration) => (prevDuration === 'monthly' ? 'threeMonthly' : 'monthly'));
  };

  return (
    <section className="mt-16 pb-5 lg:pb-20" id="pricing">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="font-heading mb-2 text-center text-3xl font-bold tracking-tight text-black dark:text-primary-200 md:text-5xl">
          Our Care Plans
        </h2>
        <div className="sticky top-0 z-50 mb-3 flex items-center justify-center bg-gray-200 py-2 shadow-lg dark:bg-gray-900">
          <label className="relative inline-flex cursor-pointer items-center gap-1">
            <span
              className={`text-md mr-1.5 md:text-lg ${
                planDuration === 'monthly' ? 'font-medium text-blue-500' : 'font-medium text-gray-900'
              } dark:text-gray-300`}
            >
              1 Month
            </span>
            <input
              onChange={handleDurationToggle}
              type="checkbox"
              className="peer sr-only"
              checked={planDuration === 'threeMonthly'}
            />
            <div
              className={`peer relative h-6 w-12 rounded-full bg-blue-600 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 md:h-8 md:w-16 md:after:h-7 md:after:w-7 ${
                planDuration === 'threeMonthly' ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            ></div>
            <span
              className={`text-md ms-2 flex-col items-center gap-2 md:flex md:flex-row md:text-lg ${
                planDuration === 'threeMonthly' ? 'font-bold text-blue-500' : 'font-medium text-gray-500'
              } dark:text-gray-300`}
            >
              3 Months
              <div className="h-fit w-fit rounded-full bg-green-600 p-1 px-2 text-xs font-medium leading-[10px] text-white">
                <p>Save up to 20%</p>
              </div>
            </span>
          </label>
        </div>

        <div className="z-10 mx-auto grid grid-cols-1 gap-3 bg-transparent px-6 pt-2 md:grid-cols-2 lg:gap-6">
          {plans.map((plan) => (
            <PlanItem key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
