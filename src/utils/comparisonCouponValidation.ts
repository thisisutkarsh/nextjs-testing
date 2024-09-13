import { useState } from 'react';
import { ComparisonPlan } from '~/shared/types';

const comparisonCouponValidation = (plan:ComparisonPlan , isThreeMonthly: boolean, couponCode?: string): boolean => {
  couponCode = couponCode?.toUpperCase().replace(/\s+/g, '');
  if ((plan.coupons.find((c) => c.code === couponCode) && isThreeMonthly) || couponCode === 'EXTRA') {
    console.log('Coupon Found');
    return true;
  } else {
    console.log('Coupon Not Found');
    return false;
  }
};
export default comparisonCouponValidation;