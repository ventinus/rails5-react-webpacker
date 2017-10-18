import {
  Home,
  PhoneInput,
  Confirm,
  Notification,
  Profile,
  Success
} from './containers'

const routes = [
  {
    exact: true,
    path: '/',
    component: Home
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
    component: Success
  }, {
    path: '/notification',
    component: Notification,
    darkPage: true
  }
]

export default routes
