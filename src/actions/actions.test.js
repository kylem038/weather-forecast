import React from 'react';
import {shallow} from 'enzyme';
import {currentCity, CURRENT_CITY } from './actions';


describe('actions', () => {
  it('should create an action to identify current city', () => {
    const weather = 'Cloudy';
    const expectedAction = {
      type: CURRENT_CITY,
      weather
    };
    expect(currentCity(weather)).toEqual(expectedAction);
  });
});
