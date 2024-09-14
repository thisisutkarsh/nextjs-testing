import { useState } from 'react';
import { Plan } from '../shared/types';

const careCouponValidation = (plan: Plan, isSixMonthly: 'monthly' | 'sixMonth', couponCode?: string): boolean => {
  couponCode = couponCode?.toUpperCase().replace(/\s+/g, '');
  // Temporary logic to handle affiliate coupons
  // TODO: Remove this logic once affiliate coupon api is made
  //  Checks if AFF is in the coupon code
  if (couponCode?.includes('GH') && isSixMonthly === 'sixMonth') {
    console.log('Coupon Found');
    return true;
  } else if (
    (plan.coupons.find((c) => c.code === couponCode) && isSixMonthly === 'sixMonth') ||
    couponCode === 'EXTRA'
  ) {
    console.log('Coupon Found');
    return true;
  } else {
    console.log('Coupon Not Found');
    return false;
  }
};
export default careCouponValidation;
