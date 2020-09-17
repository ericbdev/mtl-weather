// @flow
import React from 'react';
import images from './images/*.png';

type weatherIconProps = {
  alt: string,
  icon: string,
};

const WeatherIcon = (props) => {
  const { icon, alt } = props;
  const iconPath = `${icon}`;

  return icon !== '' ? <img src={images[icon]} alt="" /> : null;
};

WeatherIcon.defaultProps = {
  alt: '',
  icon: '',
};

export default WeatherIcon;
