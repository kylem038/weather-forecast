import { connect } from 'react-redux';
import CityShortForecast from '../components/CityShortForecast';

const mapStateToProps = state => {
  if (!state.WeatherCardReducer[0]) return {};
  let length = state.WeatherCardReducer.length;
  const { temp } = state.WeatherCardReducer[length - 1].main;
  const { name } = state.WeatherCardReducer[length - 1];
  const { main } = state.WeatherCardReducer[length - 1].weather[0];
  return {
    temp,
    name,
    main
  };
};

export default connect(mapStateToProps, null)(CityShortForecast);
