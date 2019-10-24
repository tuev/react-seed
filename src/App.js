import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { FacebookProvider } from 'react-facebook'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.scss'
import Main from './Template/main'

const App = () => (
  <div className='App'>
    <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
      <Main />
    </FacebookProvider>
  </div>
)

export default App
