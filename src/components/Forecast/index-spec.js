import React from 'react';
import { shallow } from 'enzyme';
import Forecast from './index';
import forecastFixture from '../../lib/api/fixtures/weather-forecast.json';

describe('Forecast', () => {
  const props = {
    forecast: forecastFixture,
  };
  const wrapper = shallow(<Forecast {...props} />);
  it('should mount without crashing', () => {
    expect(wrapper).toBeTruthy();
  });
});
