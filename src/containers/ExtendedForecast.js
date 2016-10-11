import { connect } from 'react-redux';
import { currentCity, fetchForecast } from '../actions/actions';
import ExtendedForecast from '../components/ExtendedForecast';

const mapStateToProps = state => {
  if (!state.ExtendedLocalCityReducer.main.weatherdata) return {};
  const data = state.ExtendedLocalCityReducer.city.id;
  return {
    data
  };
};

export default connect(mapStateToProps, null)(ExtendedForecast);
