import { connect } from 'react-redux';
import { currentCity, fetchForecast } from '../actions/actions';
import ExtendedForecast from '../components/ExtendedForecast';

const mapStateToProps = state => {
  if (!state.ExtendedLocalCityReducer.city.id) return {};
  const data = state.ExtendedLocalCityReducer.city.id;
  console.log(data);
  return {
    data
  };
};

export default connect(mapStateToProps, null)(ExtendedForecast);
