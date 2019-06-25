import React from 'react'
import logo from './logo.svg'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './template/main'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    )
  }
}

export default App
