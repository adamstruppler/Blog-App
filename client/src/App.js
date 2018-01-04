import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  state = {
    posts: undefined
  }

  render () {
    return (
      <Router>
        <div> Hello World 👋 </div>
      </Router>
    )
  }
}

export default App
