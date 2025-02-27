import { ReactElement } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}
export type Duration = 'monthly' | 'threeMonthly';


