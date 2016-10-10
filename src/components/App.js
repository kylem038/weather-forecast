import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import Header from '../containers/current-city';
import store from '../store';
import { fetchForecast } from '../actions/actions';
// import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';

class App extends Component {
  componentDidMount() {
    this.props.didMount();
  }

  render() {
    return (
      // <Provider store={store}>
        <section className="App">
          <h1 className="page-title">Weather Tracker</h1>
            <Header />
          <div>{this.props.children}</div>
        </section>
      // </Provider>
    )
  }
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    didMount: () => {
      dispatch(fetchForecast());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
