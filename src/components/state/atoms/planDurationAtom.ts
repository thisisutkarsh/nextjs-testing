import { atom } from 'recoil';
import { Duration } from '../../shared/types';

export const planDurationAtom = atom<Duration>({
  key: 'planDuration',
  default: 'monthly',
});

export const threeMonthplanDurationAtom = atom<Duration>({
  key: 'threeMonthPlanDuration',
  default: 'threeMonthly',
});
