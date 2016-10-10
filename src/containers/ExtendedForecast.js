import { connect } from 'react-redux';
import { currentCity, fetchForecast } from '../actions/actions';
import ExtendedForecast from '../components/ExtendedForecast';

const mapStateToProps = state => {
  if (!state.ExtendedLocalCityReducer.main.weatherdata) return {};
  const { weatherdata } = state.ExtendedLocalCityReducer.main
  return {
    weatherdata
  };
};

export default connect(mapStateToProps, null)(ExtendedForecast);
