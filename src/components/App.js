import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import Header from '../containers/HeaderContainer';
import store from '../store';
import { fetchForecast } from '../actions/actions';

class App extends Component {
  componentDidMount() {
    this.props.didMount();
  }

  render() {
    return (
        <section className="App">
          <h1 className="page-title">Weather Tracker</h1>
            <Header />
          <div>{this.props.children}</div>
        </section>
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
