import { createStore, combineReducers, applyMiddleware } from 'redux';
import apiReducer from '../reducers/apiReducer';
import promiseMiddleware from '../middleware/promiseMiddleware';

const reducer = combineReducers({
  grid: apiReducer,
});

let createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;