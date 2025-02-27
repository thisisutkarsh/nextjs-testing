import React from 'react';
import type { Metadata } from 'next';
import LactationMain from './LactationMain';

export const metadata: Metadata = {
  title: 'Join live session with top lactation experts and resolve your queries',
  description:
    'Breastfeeding made easy! Join live session with top lactation experts for a flourishing Mother-Baby Bond!',
  keywords: [
    'lactation webinar',
    'best pediatricians',
    'WhatsApp',
    'India',
    'breastfeeding support',
    'lactation consultation',
    'online lactation class',
    'breastfeeding tips',
    'new mothers',
    'nursing mothers',
    'baby nutrition',
    'milk supply issues',
    'lactation advice',
    'pediatric care',
    'infant feeding',
    'motherhood support',
    'breastfeeding techniques',
    'lactation expert',
    'parenting tips',
    'child healthcare',
  ],

  openGraph: {
    url: `https://babynama.com/lactation-webinar`,
    type: 'website',
    title: 'Join live session with top lactation experts and resolve your queries',
    description:
      'Breastfeeding made easy! Join live session with top lactation experts for a flourishing Mother-Baby Bond!',
    images: [
      {
        url: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/lactation-consultation.jpg',
        width: 1200,
        height: 630,
        alt: 'Join live session with top lactation experts and resolve your queries',
      },
    ],
  },
};
const page = () => {
  return (
    <>
      <LactationMain />
    </>
  );
};

export default page;
