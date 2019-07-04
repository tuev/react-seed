import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './App.scss'
import Main from './Template/main'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Main />
      </div>
    )
  }
}

export default App
