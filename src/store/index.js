import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from "../reducers";
import {createLogger} from 'redux-logger';

// add the middlewares
let middlewares = [];

// add thunk middleware
middlewares.push(thunkMiddleware);

// add logger middleware
const logger = createLogger({
  collapsed:true,
  duration:true
});
middlewares.push(logger);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// create the store
const store = createStore(reducers, middleware);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('../reducers').default;
    store.replaceReducer(nextRootReducer)
  })
}

// export
export { store };