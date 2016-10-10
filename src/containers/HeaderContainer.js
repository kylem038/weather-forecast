import { connect } from 'react-redux';
import { currentCity, fetchForecast } from '../actions/actions';
import Header from '../components/Header';

const mapStateToProps = state => {
  if (!state.HeaderReducer.main) return {};
  const { temp } = state.HeaderReducer.main;
  const { name } = state.HeaderReducer;
  const { description } = state.HeaderReducer.weather[0]
  return {
    temp,
    name,
    description
  };
};


export default connect(mapStateToProps, null)(Header);
