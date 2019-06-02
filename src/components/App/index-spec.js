import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import Header from '../Header'

describe('App', () => {
  const wrapper = shallow(<App />);
  it('should mount without crashing', () => {
    expect(wrapper).toBeTruthy()
  });

  it('should have a header', () => {
    const headerComponent = wrapper.find(Header);
    expect(headerComponent.length).toEqual(1);
  });
});
