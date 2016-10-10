import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {

  it('has an id of HomePage', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper.is('#HomePage')).toEqual(true);
  });
});
