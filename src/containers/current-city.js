import { connect } from 'react-redux';
import { currentCity } from '../actions/actions';
import Header from '../components/Header';

const mapStateToProps = state => {
  if (!state.localForecast) return {};
  const { temp, outlook } = state.localForecast;
  return {
    temp,
    outlook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(currentCity());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
