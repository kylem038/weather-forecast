import { connect } from 'react-redux';
import { fetchPinnedCurrentForecast } from '../actions/actions';
import Settings from '../components/Settings';

const mapStateToProps = (state) => {
  if (!state.WeatherCardReducer[0]) return {};
  const cityArray = state.WeatherCardReducer
  return {
    cityArray
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (zip) => {
      dispatch(fetchPinnedCurrentForecast(zip));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
