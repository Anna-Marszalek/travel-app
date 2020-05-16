import { createStore, compose, applyMiddleware } from 'redux';
import hotelsReducer from './reducers/hotels-reducer';
import thunk from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(thunk);

const store = createStore(
  hotelsReducer,
  composeEnchancer(middlewares)
);

export default store;