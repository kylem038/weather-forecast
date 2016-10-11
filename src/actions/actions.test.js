// import React from 'react';
// import {shallow} from 'enzyme';
import {currentLocalCity, CURRENT_LOCAL_CITY } from './actions';
import {extendedLocalCity, EXTENDED_LOCAL_CITY } from './actions';


describe('actions', () => {
  it('should create an action to identify current local city forecast', () => {
    const weather = 'Cloudy';
    const expectedAction = {
      type: CURRENT_LOCAL_CITY,
      weather
    };
    expect(currentLocalCity(weather)).toEqual(expectedAction);
  });

  it('should create an action to identify current city extended forecast', () => {
    const weather = 'Sunny';
    const expectedAction = {
      type: EXTENDED_LOCAL_CITY,
      weather
    };
    expect(extendedLocalCity(weather)).toEqual(expectedAction);
  });
});
