import { combineReducers } from 'redux';
import CurrentCityReducer from './CurrentCityReducer';
import ExtendedLocalCityReducer from './ExtendedLocalCityReducer';
import WeatherCardReducer from './WeatherCardReducer';

const rootReducer = combineReducers({
  ExtendedLocalCityReducer,
  CurrentCityReducer,
  WeatherCardReducer
});

export default rootReducer;
