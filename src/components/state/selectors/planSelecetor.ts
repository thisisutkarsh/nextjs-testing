// write a sample selector using recoil
import { selector } from 'recoil';
import { planDurationAtom } from '../atoms/planDurationAtom';

export const planDurationSelector = selector({
  key: 'planDurationSelector',
  get: ({ get }) => {
    return get(planDurationAtom);
  },
});

