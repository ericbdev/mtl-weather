import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('main'));

WebFont.load({
  google: {
    families: ['Lato:300,400,700', 'sans-serif']
  }
});
