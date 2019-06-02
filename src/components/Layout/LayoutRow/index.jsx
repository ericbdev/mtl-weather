import React from 'react';
import { Flex } from '@rebass/grid';
import classes from './style.scss';

const LayoutRow = props => (
  <Flex
    {...props}
    mx="auto"
    className={classes.main}
  />
);

export default LayoutRow;
