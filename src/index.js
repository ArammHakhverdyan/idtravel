import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk';
import config from '../src/config/config.js';
import firebase from 'firebase/app';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



