import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './index';
import Header from '../Header';
import forecastFixture from '../../lib/api/fixtures/weather-forecast.json';

describe.only('App', () => {
  const mockStore = configureStore();
  const props = {
    fetchWeather: jest.fn(),
  };
  const initialState = {
    app: {
      isLoading: false,
      forecast: forecastFixture,
    },
  };
  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<App store={store} {...props} />);
  });
  it('should mount without crashing', () => {
    expect(container).toBeTruthy();
  });

  xit('should have a header', () => {
    const headerComponent = container.find(Header);
    expect(headerComponent.length).toEqual(1);
  });
});
