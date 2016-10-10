import { connect } from 'react-redux';
import { currentCity, fetchForecast } from '../actions/actions';
import Header from '../components/Header';

const mapStateToProps = state => {
  if (!state.HeaderReducer.localForecast) return {};
  const { temp, outlook } = state.HeaderReducer.localForecast;
  return {
    temp,
    outlook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(fetchForecast());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
