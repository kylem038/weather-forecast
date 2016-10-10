import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers.js';
const middleware = [ thunk ];


console.log(rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(...middleware)
));

export default store;
