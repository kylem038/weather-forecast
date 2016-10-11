import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => {
  if (!state.CurrentCityReducer.main) return {};
  const { temp } = state.CurrentCityReducer.main;
  const { name } = state.CurrentCityReducer;
  const { main } = state.CurrentCityReducer.weather[0];
  return {
    temp,
    name,
    main
  };
};

export default connect(mapStateToProps, null)(Header);
