import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase, isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import config from '../src/config/config.js';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';
import './index.css';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, config, {
      useFirestoreForProfile: true,
      userProfile: 'users',
      attachAuthIsReady: true,
    })
  )
);

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center">Loading...</div>
  return children
}

const rrfProps = {
  firebase,
  config: config,
  dispatch: store.dispatch,
  createFirestoreInstance
};



ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);



