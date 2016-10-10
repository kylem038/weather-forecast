import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import HeaderContainer from '../containers/HeaderContainer';
import store from '../store';
import { fetchForecast } from '../actions/actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  getLocalCoordinatesAndWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        return this.props.fetchForecast(location)
      })
    }
  }

  componentDidMount() {
    this.getLocalCoordinatesAndWeather()
  }

  render() {
    return (
        <section className="App">
          <h1 className="page-title">Weather Tracker</h1>
            <HeaderContainer />
          <div>{this.props.children}</div>
        </section>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchForecast}, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
