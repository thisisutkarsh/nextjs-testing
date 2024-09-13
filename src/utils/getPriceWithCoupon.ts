import { Plan, Coupon } from '~/shared/types';

export const getPriceWithCoupon = (
  plan: Plan,
  duration: 'monthly' | 'sixMonth',
  couponCode?: string
): number => {
  if (couponCode) {
    // Temporary logic to handle affiliate coupons
    // TODO: Remove this logic once affiliate coupon api is made
    // Parses the last 2 digit of the coupon code and uses it as the discount percentage
    if (couponCode.includes('GH')) {
      const discount = parseInt(couponCode.slice(-2));
      if (discount > 50 || discount < 0 || Number.isNaN(discount)) return plan.prices[duration];
      let finalPrice = plan.prices[duration] - (plan.prices[duration] * discount) / 100;
      finalPrice = Math.floor(finalPrice);
      if (Number.isNaN(finalPrice)) return plan.prices[duration];
      else return finalPrice;
    } else {
      const coupon = plan.coupons.find((c) => c.code === couponCode);
      if (!coupon) return plan.prices[duration];
      else {
        return coupon.prices[duration];
      }
    }
  }

  return plan.prices[duration];
};
