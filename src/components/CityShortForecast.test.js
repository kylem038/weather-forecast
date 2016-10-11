import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CityShortForecast from './CityShortForecast';

describe('CityShortForecast', () => {

  it('has an class of CityForecast', () => {
    const wrapper = shallow(<CityShortForecast />);

    expect(wrapper.is('.CityForecast')).toEqual(true);
  });

  it('should have a temp element if a temp is passed as a prop', () => {
    const wrapper = shallow(<CityShortForecast />);

    expect(wrapper.find('.Temp').length).toEqual(1);
  });

  it('should display the correct temp if temp is passed in', () => {
    const wrapper = shallow(<CityShortForecast />);

    expect(wrapper.find('.Temp').text()).toEqual('Temperature: 289.5º F');
  });

  it('should have a humidity element if a humidity is passed as a prop', () => {
    const wrapper = shallow(<CityShortForecast />);

    expect(wrapper.find('.Humidity').length).toEqual(1);
  });

  it('should display the correct humidity if humidity is passed in', () => {
    const wrapper = shallow(<CityShortForecast />);

    expect(wrapper.find('.Humidity').text()).toEqual('Humidity: 89%');
  });

  it('should have a wind speed element if a wind is passed as a prop', () => {
    const wrapper = shallow(<CityShortForecast />);

    expect(wrapper.find('.Wind').length).toEqual(1);
  });

  it('should display the correct wind speed if wind is passed in', () => {
    const wrapper = shallow(<CityShortForecast />);

    expect(wrapper.find('.Wind').text()).toEqual('Wind: 7.31mph');
  });

  it('should have a weather description element if a description is passed as a prop', () => {
    const wrapper = shallow(<CityShortForecast />);

    expect(wrapper.find('.Description').length).toEqual(1);
  });

  it('should display the correct weather description if a description is passed in', () => {
    const wrapper = shallow(<CityShortForecast />);

    expect(wrapper.find('.Description').text()).toEqual('Weather: overcast clouds');
  });
});
