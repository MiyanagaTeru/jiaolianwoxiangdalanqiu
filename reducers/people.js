import {SET_NUMBER, CALC_SCORE, RESET} from '../actions/people';

const INITIAL_STATE = {
  numberOfPeople: 3,
  players: [{number: 1}, {number: 2}, {number: 3}],
  leadingPlayers: []
};

const people = (initialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NUMBER:
      return ({
        ...initialState,
        numberOfPeople: action.value,
        players: [...Array(action.value + 1).keys()].slice(1).map(number => ({number}))
      });

    case CALC_SCORE:
      const doneMatches = action.bracket.filter(match => match.done && match.winner);
      const winners = doneMatches.reduce((pre, cur) => [...pre, ...cur[cur.winner]], []);
      let highScore = 0;
      const scoredPlayers = initialState.players.map(player => {
        const score = winners.reduce((pre, cur) => {
          if (cur === player.number) {
            return pre + 1;
          } else {
            return pre;
          }
        }, 0);
        if (score > highScore) {
          highScore = score;
        }
        return ({
          ...player,
          score
        });
      });
      const leadingPlayers = scoredPlayers.filter(player => player.score >= highScore)
      .map(player => player.number);
      return {...initialState, players: scoredPlayers, leadingPlayers};

    case RESET:
      return INITIAL_STATE;
    default:
      return initialState;
  }
};

export default people;