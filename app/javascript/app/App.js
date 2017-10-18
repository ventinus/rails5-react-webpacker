import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {Nav} from './components'
import routes from './routes'

const App = props => {
  return (
    <Router>
      <div className='full-height'>
        <Nav />
        <div className="page-wrapper">
          {routes.map((props, i) =>
            <Route {...props} key={i} />
          )}
        </div>
      </div>
    </Router>
  )
}

export default App
