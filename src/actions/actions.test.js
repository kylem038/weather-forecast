import React from 'react';
import {shallow} from 'enzyme';
import {currentLocalCity, CURRENT_LOCAL_CITY } from './actions';


describe('actions', () => {
  it('should create an action to identify current city', () => {
    const weather = 'Cloudy';
    const expectedAction = {
      type: CURRENT_LOCAL_CITY,
      weather
    };
    expect(currentLocalCity(weather)).toEqual(expectedAction);
  });
});
