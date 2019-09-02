import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import './index.css'
import firebaseConfig from './firebaseConfig'
import * as serviceWorker from './serviceWorker'
import configureStore from './Redux/store'
import App from './App'

const store = configureStore()
firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
