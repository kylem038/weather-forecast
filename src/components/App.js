import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import HeaderContainer from '../containers/HeaderContainer';
import store from '../store';
import { fetchCurrentLocalForecast, fetchExtendedLocalForecast } from '../actions/actions';
import { bindActionCreators } from 'redux';
import Header from './Header';

class App extends Component {
  getLocalCoordinatesAndWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        return this.props.fetchCurrentLocalForecast(location);
      });
    }
  }
    getExtendedLocalWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((location) => {
          return this.props.fetchExtendedLocalForecast(location);
        });
      }
    }

  componentDidMount() {
    this.getLocalCoordinatesAndWeather();
    this.getExtendedLocalWeather();
  }

  render() {
    return (
      <section className="App">
          <HeaderContainer />
        <div>{this.props.children}</div>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCurrentLocalForecast, fetchExtendedLocalForecast}, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
