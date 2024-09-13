/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import GiftingPlanItem from './GiftingPlanItem';
// Data for Plans
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { Plan } from '../../shared/types';

const giftingPlans = [
  {
    id: 1,
    name: 'Prime Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Comprehensive care for your child's health & development.",
    },

    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Instant answers on WhatsApp by Pediatricians (8AM-10PM)',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited free pediatric consultations 24X7',
        icon: <BsFillInfoCircleFill color="blue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Monthly milestones tracking by a senior pediatrician',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Comprehensive guidance for lactation, nutrition, weaning',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Free workshops: weaning',
        icon: <BsFillInfoCircleFill color="blue" />,
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 1999, sixMonth: 4449 } },
      { code: 'GET20', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GET30', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'NEWMOMGIFT', prices: { monthly: 999, sixMonth: 2499 } },
    ],
  },
  {
    id: 2,
    name: 'Holistic Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Experience exceptional personalized Care by a dedicated team of doctors for the Child and Mother's overall well-being",
    },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b>Dedicated pediatrician</b> to guide and support you with your child's specific needs
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Private WhatsApp group with your dedicated pediatrician',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited free pediatric consultations 24X7',
        icon: <BsFillInfoCircleFill color="blue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Instant answers on WhatsApp by Pediatricians (8AM-10PM)',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b>Comprehensive support and guidance for mother</b>postnatal care, personalized diet plan, emotional
            well-being and other health concerns
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b>Free Specialist Consultations</b> for baby & mother: Gynecologists, Dermatologist, Psychologist,
            Pediatrician, Nutritionist and more
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b>Free workshops</b>: weaning, lactation, nutrition and more
          </>
        ),
        icon: <BsFillInfoCircleFill color="blue" />,
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'NEWMOMGIFT', prices: { monthly: 1999, sixMonth: 4999 } },
    ],
  },
];

function GiftingPricing() {
  const [isSixMonthly, setisSixMonthly] = useState(false);

  return (
    <section className="pb-5 lg:pb-2">
      <div className="relative mx-auto -mb-12 max-w-7xl px-4 pt-3 sm:px-6" id="gifting-pricing">
        <h2 className="font-heading mb-4 text-center text-3xl font-bold tracking-tight text-black dark:text-primary-200 md:text-5xl">
          Our Care Plans
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-600 dark:text-slate-400">
          {`Get a 50% discount on any plan by entering your friend’s contact number`}
        </p>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center">
            <button
              className={`mr-4 rounded-md px-4 py-2 ${
                !isSixMonthly ? 'bg-primary-600 text-white' : 'border border-primary-600 bg-white text-primary-600'
              }`}
              onClick={() => setisSixMonthly(false)}
            >
              1 Month
            </button>
            <button
              className={`rounded-md px-4 py-2 ${
                isSixMonthly ? 'bg-primary-600 text-white' : 'border border-primary-600 bg-white text-primary-600'
              }`}
              onClick={() => setisSixMonthly(true)}
            >
              3 Months
            </button>
          </div>

          {/* Iterates for both the cards */}
          <div className="grid grid-cols-1 gap-3 bg-transparent sm:grid-cols-2 lg:gap-6">
            {giftingPlans.map((plan) => (
              <GiftingPlanItem key={plan.id + 1} plan={plan} isSixMonthly={isSixMonthly} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiftingPricing;
