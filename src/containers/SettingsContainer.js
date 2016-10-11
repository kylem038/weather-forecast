import { connect } from 'react-redux';
import { fetchPinnedCurrentForecast, fetchExtendedPinnedForecast } from '../actions/actions';
import Settings from '../components/Settings';

const mapStateToProps = (state) => {
  if (!state.WeatherCardReducer[0]) return {};
  const cityArray = state.WeatherCardReducer;
  return {
    cityArray
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (zip) => {
      dispatch(fetchPinnedCurrentForecast(zip));
      dispatch(fetchExtendedPinnedForecast(zip))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
