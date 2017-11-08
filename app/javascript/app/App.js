import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {Nav} from './components'
import routes from './routes'

import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this._fetchUser()
    this._fetchCourses()
  }

  render() {
    return (
      <Router>
        <div className='full-height'>
          <Nav user={this.state.user} />
          <div className="page-wrapper">
            {routes.map((props, i) =>
              <Route {...props} key={i} />
            )}
          </div>
        </div>
      </Router>
    )
  }

  _fetchUser = () => {
    fetch('/api/users')
      .then(r  => r.json())
      .then(users => {
        const {id} = users[0]
        fetch(`/api/users/${id}`)
          .then(r => r.json())
          .then(user => {
            window.user = user
            this.setState({user})
          })
      })
  }

  _fetchCourses = () => {
    fetch('/api/courses')
      .then(r => r.json())
      .then(courses => window.courses = courses)
  }
}

export default App

// export default createFragmentContainer(App, {
//   users: graphql`
//     fragment Users on User {
//       id,
//       first_name
//     }
//   `
// })
