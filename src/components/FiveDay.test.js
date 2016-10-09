import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import FiveDay from './FiveDay';


describe('FiveDay Forecast', () => {

  it('has a class of .fiveDayForecast', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.is('.fiveDayForecast')).toEqual(true);
  });

  it('should have a temp element if a temp is passed as a prop', () => {
    const wrapper = shallow(<FiveDay temp={'85'} />);

    expect(wrapper.find('.Temp').length).toEqual(1);
  });

  it('should not have a temp element if a quantity is not passed as a prop', () => {
    const wrapper = shallow(<FiveDay temp={undefined}/>);

    expect(wrapper.find('.Temp').length).toEqual(0);
  });

  it('should display the correct temp if temp is passed in', () => {
    const wrapper = shallow(<FiveDay />);

    expect(wrapper.find('.Temp').text()).toEqual('Temp: 289.5');
  });
});
