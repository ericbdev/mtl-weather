import React from 'react';
import { propTypes, defaultProps } from './types';
import { LayoutRow, LayoutColumn } from '../Layout';
import WeatherIcon from './WeatherIcon';

const Forecast = ({ forecast }) => {
  const { coord, weather } = forecast;

  return (
    <LayoutRow>
      <LayoutColumn>
        <ul>
          <li>
            {coord.lon}, {coord.lat}
          </li>

          <li>
            {weather[0].main} <br />
            {weather[0].description} <br />
            <WeatherIcon icon={weather[0].icon} />
          </li>
        </ul>
      </LayoutColumn>
    </LayoutRow>
  );
};

Forecast.defaultProps = defaultProps;
Forecast.propTypes = propTypes;

export default Forecast;
