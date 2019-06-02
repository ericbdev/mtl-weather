import React from 'react';
import Header from '../Header';
import { LayoutRow, LayoutColumn } from '../Layout';
import classes from './style.scss';

const App = () => (
  <div className={classes.root}>
    <Header />
    <main className={classes.main}>
      <LayoutRow>
        <LayoutColumn>
          Full width
        </LayoutColumn>
      </LayoutRow>
    </main>
  </div>
);

export default App;
