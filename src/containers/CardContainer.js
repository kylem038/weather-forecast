import { connect } from 'react-redux';
import { fetchPinnedForecast } from '../actions/actions';
import CityShortForecast from '../components/CityShortForecast';

const mapStateToProps = state => {
  if (!state.WeatherCardReducer.main) return {};
  const { temp } = state.WeatherCardReducer.main;
  const { name } = state.WeatherCardReducer;
  const { description } = state.WeatherCardReducer.weather[0];
  return {
    temp,
    name,
    description
  };
};


export default connect(mapStateToProps, null)(CityShortForecast);
