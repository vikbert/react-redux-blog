import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import configureStore from './redux/store/store';
import {Provider as ReduxProvider} from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <App/>
  </ReduxProvider>,
  document.getElementById('root'),
);
