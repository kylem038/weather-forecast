import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import FiveDay from './FiveDay';

describe('FiveDay Forecast', () => {

  it('has a class of .fiveDayForecast', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.is('.fiveDayForecast')).toEqual(true);
  });

  it('should display the correct city name if name is passed in', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.forecast-title').text()).toEqual('Extended Forecast for Shuzenji');
  });


  it('should have a temp element if a temp is passed as a prop', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.Temp').length).toEqual(1);
  });

  it('should display the correct temp if temp is passed in', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.Temp').text()).toEqual('Temp: 289.5');
  });

  it('should have a humidity element if a humidity is passed as a prop', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.Humidity').length).toEqual(1);
  });

  it('should display the correct humidity if humidity is passed in', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.Humidity').text()).toEqual('Humidity: 89');
  });

  it('should have a pressure element if a pressure is passed as a prop', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.Pressure').length).toEqual(1);
  });

  it('should display the correct pressure if pressure is passed in', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.Pressure').text()).toEqual('Pressure: 1013');
  });

  it('should have a Min Temp element if a Min Temp is passed as a prop', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.MinTemp').length).toEqual(1);
  });

  it('should display the correct Min Temp if Min Temp is passed in', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.MinTemp').text()).toEqual('Min Temp: 287.04');
  });

  it('should have a Max Temp element if a Max Temp is passed as a prop', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.MaxTemp').length).toEqual(1);
  });

  it('should display the correct Max Temp if Max Temp is passed in', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.MaxTemp').text()).toEqual('Max Temp: 292.04');
  });
});
