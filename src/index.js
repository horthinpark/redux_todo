import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './containers/App.js';
import todoApp from './reducers/index.js';

const store = applyMiddleware(
 thunk 
)(createStore)(todoApp);

let rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
