import { combineReducers } from 'redux';
import settings from './settings';
import testReducer from './testReducer'

const rootReducer = combineReducers({
  settings, testReducer
});

export default rootReducer;
