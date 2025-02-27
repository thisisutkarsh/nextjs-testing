import axios from 'axios';
import { UpdatedPlan, Duration } from '../shared/types';

export const updatedGetPriceFromCoupon = async (
  planId: number,
  plan: UpdatedPlan,
  duration: Duration,
  couponCode?: string
): Promise<{ is_coupon_valid: boolean; original_price: number; discounted_price: number }> => {

  const defaultPrice = {
    is_coupon_valid: false,
    original_price: plan.prices[duration] || 0,
    discounted_price: plan.prices[duration] || 0,
  };

  if (!couponCode) {
    return defaultPrice;
  }

  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/payments/validate-coupon/`,
      {
        coupon: couponCode,
        plan_id: planId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
        },
      }
    );

    return data;
  } catch (error) {
    console.error('Error validating coupon:', error);
    return defaultPrice;
  }
};
