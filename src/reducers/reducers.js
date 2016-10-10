import { combineReducers } from 'redux';
// import settings from './settings';
import cityReducer from './current-city';

const rootReducer = combineReducers({
  // settings,
  cityReducer
});

export default rootReducer;
