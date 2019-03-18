import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configuredStore from './store';
import {Provider as ReduxProvider} from 'react-redux';

ReactDOM.render(
  <ReduxProvider store={configuredStore}>
    <App/>
  </ReduxProvider>,
  document.getElementById('root'),
);
