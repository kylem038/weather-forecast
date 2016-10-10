import { connect } from 'react-redux';
import { getLocation } from '../actions/actions';
import Header from '../components/Header';
import currentWeather from '../data/fake-current.js';

const mapDispatchToProps = (dispatch) => {
  return {
    currentCity: dispatch(currentCity(currentWeather.name))
  }
}


export default connect(null, mapDispatchToProps)(Test)
