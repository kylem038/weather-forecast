import { combineReducers } from 'redux';
import CurrentCityReducer from './CurrentCityReducer';
import ExtendedLocalCityReducer from './ExtendedLocalCityReducer';
import WeatherCardReducer from './WeatherCardReducer';
import ExtendedPinnedCityReducer from './ExtendedPinnedCityReducer';

const rootReducer = combineReducers({
  ExtendedLocalCityReducer,
  CurrentCityReducer,
  WeatherCardReducer,
  ExtendedPinnedCityReducer
});

export default rootReducer;
