import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {

  const logger = createLogger({
    collapsed:true,
    duration:true
  });

  let createStoreWithMiddleware;

  const middleware = applyMiddleware(thunkMiddleware, logger);
  createStoreWithMiddleware = compose(
    middleware
  );

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);


  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}