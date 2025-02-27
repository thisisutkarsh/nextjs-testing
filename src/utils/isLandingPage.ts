const landingPageRoutes = [
  '/get-care-plan',
  '/preview-access-landing',
  '/dr-sumitra',
  '/lactation-webinar',
  '/basic-care',
  '/prime-care',
  '/essential-care',
  '/holistic-care',
  '/baby-care-plan',
  '/lactation-program',
  '/breastfeeding-training-program',
  '/sleep-training-program',
  '/emergency-pediatric-consultation',
  '/lactation-history-form',
  '/plans-landing',
  '/baby-nutrition-training-program',
  '/solids-food-start-workshop',
  '/solids-introduction-course',
  '/breastfeeding-seminar',
  '/breastfeeding-webinar',
];

export const isLandingPage = (pathname: string): boolean => {
  return landingPageRoutes.includes(pathname);
};
