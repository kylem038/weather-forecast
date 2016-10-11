import { connect } from 'react-redux';
import { fetchPinnedCurrentForecast, fetchExtendedPinnedForecast } from '../actions/actions';
import Settings from '../components/Settings';

const mapStateToProps = (state) => {
  if (!state.WeatherCardReducer[0]) return {};
  const { name } = state.WeatherCardReducer[0];
  const { temp } = state.WeatherCardReducer[0].main;
  const { main } = state.WeatherCardReducer[0].weather[0]
  return {
    name,
    temp,
    main
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (zip) => {
      dispatch(fetchPinnedCurrentForecast(zip));
      dispatch(fetchExtendedPinnedForecast(zip));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
