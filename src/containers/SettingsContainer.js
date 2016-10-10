import { connect } from 'react-redux';
import { fetchPinnedCurrentForecast } from '../actions/actions';
import Settings from '../components/Settings';

const mapStateToProps = state => {
  if (!state.WeatherCardReducer.main) return {};
  const { name } = state.WeatherCardReducer;
  return {
    name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(fetchPinnedCurrentForecast());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
