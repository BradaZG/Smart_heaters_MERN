import { createStore, applyMiddleware } from 'redux';
import heaterReducer from './heater/heaterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  heaterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
