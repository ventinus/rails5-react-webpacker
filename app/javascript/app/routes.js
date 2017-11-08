// import Relay from 'react-relay'
import {
  Home,
  PhoneInput,
  Confirm,
  Notification,
  Profile,
  Success
} from './containers'

// const UserQueries = {
//   users: () => Relay.QL`query { users }`
// }

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    // queries: UserQueries
  }, {
    path: '/phone',
    component: PhoneInput,
    darkPage: true
  }, {
    path: '/confirm',
    component: Confirm,
    darkPage: true
  }, {
    path: '/profile',
    component: Profile
  }, {
    path: '/success',
    component: Success,
    hideNav: true
  }, {
    path: '/notification',
    component: Notification,
    darkPage: true,
    hideNav: true
  }
]

export default routes
