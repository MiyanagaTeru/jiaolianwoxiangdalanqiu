import { combineReducers } from 'redux'
// import individual reducers here
import bracket from './bracket';
import people from './people';
import displayPage from './displayPage';

const reducers = combineReducers({
  people,
  bracket,
  displayPage
});

export default reducers;