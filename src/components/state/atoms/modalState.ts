import { atom } from "recoil";

export const isPaymentModalOpenState = atom<boolean>({
  key: 'isLactationPaymentModalOpenState',
  default: false,
});
