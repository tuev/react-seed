import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducersEnhancer from 'Enhancers/monitorReducer'
import api from 'Middlewares/api'
import rootReducer from './rootReducer'

export default function configureStore (preloadedState) {
  let middlewares = [api, thunkMiddleware]
  if (process.env.NODE_ENV === 'development') {
    middlewares = [...middlewares, logger]
  }
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]

  const composedEnhancers =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}
