import React from 'react';
import {render} from 'react-dom';
import App from './components/App.js';

import styles from './scss/main.scss';

render(<App/>, document.getElementById('root'));


module.hot.accept(['./components/App.js', './scss/main.scss'], () => {
  const NextApp = require('./components/App.js').default;
  render(
    <NextApp />, document.getElementById('root')
  );
});