export const GENERATE = 'bracket/generate';
export const SET_WINNER = 'bracket/set-winner';
export const SWITCH_GAME_DONE = 'bracket/switch-game-done';
export const RESET = 'bracket/reset';

export const generateBracket = (numberOfPeople) => ({
  type: GENERATE,
  numberOfPeople
});

export const setWinner = (matchIndex, winner) => ({
  type: SET_WINNER,
  matchIndex,
  winner
});

export const switchGameDone = (matchIndex, done) => ({
  type: SWITCH_GAME_DONE,
  matchIndex,
  done
});

export const resetBracket = () => ({
  type: RESET
});