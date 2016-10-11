import { connect } from 'react-redux';
import CityShortForecast from '../components/CityShortForecast';

const mapStateToProps = state => {
  if (!state.WeatherCardReducer[0]) return {};
  const { temp } = state.WeatherCardReducer[0].main;
  const { name } = state.WeatherCardReducer[0];
  const { main } = state.WeatherCardReducer[0].weather[0]
  return {
    temp,
    name,
    main
  };
};


export default connect(mapStateToProps, null)(CityShortForecast);
