import {
  ENTER_NUMBER,
  CHANGE_PAGE
} from '../actions/displayPage';

const INIT_STATE = ENTER_NUMBER;

const displayPage = (initialState = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.page;
      break;
    default:
      return initialState;
  }
}

export default displayPage;