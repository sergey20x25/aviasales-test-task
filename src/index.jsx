import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import { getTickets } from './actions/thunkActions';

const initialState = {
  tickets: [],
  // filters: [1, 2, 3, 4],
  // sort: 'cheapest',
  fetchingState: 'none',
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

getTickets();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
