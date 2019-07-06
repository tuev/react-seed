import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// import monitorReducersEnhancer from 'Enhancers/monitorReducer'
import api from 'Middlewares/api'
import rootReducer from './rootReducer'

export default function configureStore (preloadedState) {
  let middlewares = [thunkMiddleware, api]
  if (process.env.NODE_ENV === 'development') {
    middlewares = [...middlewares, createLogger()]
  }
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  // TODO: fix bug about monitorReducersEnhancer
  // if (process.env.NODE_ENV === 'development') {
  //   enhancers.push(monitorReducersEnhancer)
  // }
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
