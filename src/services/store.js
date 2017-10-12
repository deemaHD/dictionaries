import { createStore, combineReducers, applyMiddleware } from 'redux';
import apiReducer from '../reducers/apiReducer';
import middleware from '../middleware/promises';

const reducer = combineReducers({
  grid: apiReducer,
});

let createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;