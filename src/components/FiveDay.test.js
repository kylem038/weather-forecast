import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import FiveDay from './FiveDay';


describe('FiveDay Forecast', () => {

  it('has a class of .fiveDayForecast', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.is('.fiveDayForecast')).toEqual(true);
  });
});
