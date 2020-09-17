import PropTypes from 'prop-types';

const defaultProps = {
  coord: {},
  weather: [],
};

const coordPropTypes = PropTypes.shape({
  lon: PropTypes.number,
  lat: -PropTypes.number,
});

const weatherItemPropTypes = PropTypes.shape({
  id: PropTypes.number,
  main: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
});

const mainPropTypes = PropTypes.shape({
  temp: PropTypes.number,
  pressure: PropTypes.number,
  humidity: PropTypes.number,
  temp_min: PropTypes.number,
  temp_max: PropTypes.number,
  sea_level: PropTypes.number,
  grnd_level: PropTypes.number,
});

const windPropTypes = PropTypes.shape({
  speed: PropTypes.number,
  deg: PropTypes.number,
});

const forecastPropTypes = {
  coord: coordPropTypes,
  weather: PropTypes.arrayOf(weatherItemPropTypes),
  base: PropTypes.string,
  main: mainPropTypes,
  wind: windPropTypes,
  clouds: PropTypes.shape({ all: PropTypes.number }),
  dt: PropTypes.number,
  sys: PropTypes.shape({
    message: PropTypes.number,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
  }),
  timezone: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  cod: PropTypes.number,
};

const propTypes = {
  forecast: PropTypes.shape(forecastPropTypes).isRequired,
};

export { defaultProps, propTypes };
