import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../components/HomePage';

// create a mock store
export const mockStore = (state) => {
	return {
		default: () => {},
		subscribe: () => {},
		dispatch: () => {},
		getState: () => {
			return { ...state };
		},
	};
};

describe('Main Container', () => {
  function setup() {
    const store = mockStore({});
    const wrapper = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const Component = wrapper.find(HomePage);
    return {
      Component
    };
  }

  it('should render Main container', () => {
    const { Component } = setup();

    expect(Component.length).toBeTruthy();
  });
});
