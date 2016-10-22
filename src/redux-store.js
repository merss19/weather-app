import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './ducks/index'

export default function configureStore(initialState) {
  console.log(initialState)
    let store;

    store = createStore(
      reducers,
      initialState,
      compose(
        applyMiddleware(thunk, logger)
      )
    );


  if (module.hot) {
    module.hot.accept('./ducks/index', () => {
      const nextRootReducer = require('./ducks/index');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
