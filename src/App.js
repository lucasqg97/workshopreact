import React from 'react'
import { Router } from '@reach/router'
import Home from './Home'
import Login from './Login'

const App = () => {
  return (
    <Router>
      <Home path='/' />
      <Login path='/login' />
    </Router>
  )
}

export default App
