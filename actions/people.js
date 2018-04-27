export const SET_NUMBER = 'people/set';
export const CALC_SCORE = 'people/calculate-score';
export const RESET = 'people/reset';

export const setNumberOfPeople = (value) => ({
  type: SET_NUMBER,
  value
});

export const calculateScore = (bracket) => ({
  type: CALC_SCORE,
  bracket
});

export const resetPeople = () => ({
  type: RESET
});