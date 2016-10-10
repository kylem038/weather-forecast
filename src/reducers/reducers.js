import { combineReducers } from 'redux';
// import settings from './settings';
import CurrentCityReducer from './CurrentCityReducer';
import ExtendedLocalCityReducer from './ExtendedLocalCityReducer';

const rootReducer = combineReducers({
  ExtendedLocalCityReducer,
  CurrentCityReducer
});

export default rootReducer;
