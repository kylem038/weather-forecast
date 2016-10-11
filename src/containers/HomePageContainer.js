import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

const mapStateToProps = (state) => {
  if (!state.WeatherCardReducer[0]) return {};
  const cityArray = state.WeatherCardReducer
  return {
    cityArray
  };
};


export default connect(mapStateToProps, null)(HomePage);
