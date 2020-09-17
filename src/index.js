import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

export const Wrapper = props => <Provider store={store}>{props.children}</Provider>;

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById('main'),
);

WebFont.load({
  google: {
    families: ['Lato:300,400,700', 'sans-serif'],
  },
});
