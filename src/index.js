import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './containers/App/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
