import { combineReducers } from 'redux';

import people from './reducers/people';

const rootReducer = combineReducers({
  people
});

export default rootReducer;
