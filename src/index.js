import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import configuredStore from './redux/store';
import {Provider as ReduxProvider} from 'react-redux';

ReactDOM.render(
  <ReduxProvider store={configuredStore}>
    <App/>
  </ReduxProvider>,
  document.getElementById('root'),
);
