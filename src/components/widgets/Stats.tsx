import Image from 'next/image';
import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { RiEmotionLine } from 'react-icons/ri';
import { StatData } from '../../shared/types';

const statsData: StatData[] = [
  {
    icon: <RiEmotionLine className="text-3xl text-primary-500" />,
    count: '1M+',
    label: 'Queries Resolved',
  },
  {
    icon: <IoIosPeople className="text-3xl text-primary-500" />,
    count: '2 Lac+',
    label: 'Mothers Connected',
  },
  {
    icon: <FaHandHoldingMedical className="text-3xl text-primary-500" />,
    count: '50+',
    label: 'Doctors',
  },
];

const StatCard: React.FC<StatData> = ({ icon, count, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="counter-item">
        {icon}
        <span className="counter text-2xl font-semibold">{count}</span>
      </div>
      <p className="text-center text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="bg-primary-50 dark:bg-tertiary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl pb-8 text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 sm:text-xl">
            See what we have accomplished so far in helping mothers and their children.
          </p>
        </div>
        <div className="flex justify-center gap-6 md:gap-9">
          <div className="box-stat grid w-full max-w-[700px] grid-cols-3 gap-4">
            {statsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
