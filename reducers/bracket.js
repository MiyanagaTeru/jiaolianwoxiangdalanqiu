import {GENERATE, SET_WINNER, SWITCH_GAME_DONE, RESET} from '../actions/bracket';
import getCombination from '../utils/combinator';
import shuffleArray from '../utils/shuffleArray';

const INITIAL_STATE = [];

const bracket = (initialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENERATE:
      const n = action.numberOfPeople;
      const players = [...Array(n+1).keys()].slice(1);
      const leftTeams = shuffleArray(getCombination(players));
      const wholeBraket = leftTeams.map((team) => {
        const otherTeam = players.filter(player => !team.includes(player));
        return ({
          left: team,
          right: otherTeam,
          winner: '',
          done: false
        });
      });
      return wholeBraket;
    case SET_WINNER:
      return initialState.map((match, index) =>
        index === action.matchIndex ?
        ({
          ...match,
          winner: action.winner
        }) :
        match
      );
    case SWITCH_GAME_DONE:
      return initialState.map((match, index) =>
        index === action.matchIndex ?
        ({
          ...match,
          done: action.done
        }) :
        match
      );

    case RESET:
      return INITIAL_STATE;
    default:
      return initialState;
  }
};

export default bracket;