import { ComparisonPlan, Coupon } from '../shared/types';

export const ComparisonGetPriceWithCoupon = (
  plan: ComparisonPlan ,
  duration: 'monthly' | 'sixMonth',
  couponCode?: string
): number => {
  if (couponCode) {
    const coupon = plan.coupons.find((c) => c.code === couponCode);

    if (coupon) {
      return coupon.prices[duration];
    }
  }

  return plan.prices[duration];
};
