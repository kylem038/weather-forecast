import React from 'react';
import { IndexRoute, Router, Route  } from 'react-router';
import App from './components/App';
import HomePage from './containers/HomePageContainer';
import Settings from './containers/SettingsContainer';
import ExtendedForecast from './components/ExtendedForecast';
import ExtendedPinnedForecast from './containers/ExtendedPinnedForecastContainer';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/ExtendedForecast" component={ExtendedForecast} />
      <Route path="/Settings" component={Settings} />
      <Route path="/ExtendedPinnedForecast" component={ExtendedPinnedForecast}/>
    </Route>
  </Router>
);

export default Routes;
