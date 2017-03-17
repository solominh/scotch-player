import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import ReduxLogger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';

const middlewares = [ReduxThunk, ReduxPromise];
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middlewares),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
