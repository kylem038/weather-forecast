import { combineReducers } from 'redux';
import HeaderReducer from './HeaderReducer';
import WeatherCardReducer from './WeatherCardReducer';


const rootReducer = combineReducers({
  HeaderReducer,
  WeatherCardReducer
});

export default rootReducer;
