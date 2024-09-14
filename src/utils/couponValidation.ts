import { useState } from 'react';
import { Plan } from '../shared/types';

const couponValidation = (plan: Plan, isSixMonthly: boolean, couponCode?: string): boolean => {
  if (couponCode) {
    couponCode = couponCode?.toUpperCase().replace(/\s+/g, '');
    // Temporary logic to handle affiliate coupons
    // TODO: Remove this logic once affiliate coupon api is made
    //  Checks if AFF is in the coupon code
    const discount = parseInt(couponCode?.slice(-2));
    if (discount > 50 || discount < 0 || Number.isNaN(discount)) return false;
    if (couponCode?.includes('GH')) {
      console.log('Coupon Found');
      return true;
    } else if ((plan.coupons.find((c) => c.code === couponCode) && isSixMonthly) || couponCode === 'EXTRA') {
      console.log('Coupon Found');
      return true;
    } else {
      console.log('Coupon Not Found');
      return false;
    }
  }
  else {
    return false;
  }
};
export default couponValidation;
