import React from 'react';
import { LayoutRow, LayoutColumn } from '../Layout';

const Header = () => (
  <LayoutRow>
    <LayoutColumn width={(1 / 2)} px={2}>
      Half Width
    </LayoutColumn>
    <LayoutColumn width={(1 / 2)} px={2}>
      Half width
    </LayoutColumn>
  </LayoutRow>
);

export default Header;
