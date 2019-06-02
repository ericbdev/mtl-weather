import React from 'react';
import { Box } from '@rebass/grid';

const LayoutColumn = props => (
  <Box
    {...props}
    px={6}
    flex="1 1 auto"
  />
);

export default LayoutColumn;
