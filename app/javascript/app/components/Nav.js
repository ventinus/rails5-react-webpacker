import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import raf from 'raf'
import m from 'moment'

import routes from '../routes'
import logo from 'logo.svg'
import restartLogo from 'logo--restart.svg'

const darkPages = routes.filter(r => r.darkPage).map(r => r.path)
const navHiddenPages = routes.filter(r => r.hideNav).map(r => r.path)

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      now: this._now(),
      message: this._getMessage(props)
    }

    this.timeoutId = null

    this._setBodyStyle(props)
  }

  componentDidMount() {
    this._updateTime()
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.location.pathname !== nextProps.location.pathname) {
      this._setBodyStyle(nextProps)
      this.setState({message: this._getMessage(nextProps)})
    // }
  }

  componentWillUnmount() {
    clearInterval(this.timeoutId)
  }

  render() {
    const currentPage = this.props.location.pathname

    if (navHiddenPages.includes(currentPage)) return null

    return (
      <div className='nav'>
        <Link to='/' className='nav__logo-btn'>
          <img
            src={currentPage === '/' || currentPage === '/phone' ? logo : restartLogo}
            alt="crunch logo"
            className="nav__logo-btn__logo" />
        </Link>
        <div className="nav__main">
          <p className="type-reg--1 type--gray">{this.state.now}</p>
          <p className="type-bold-cond--2 type--purple">{this.state.message}</p>
        </div>
      </div>
    );
  }

  _setBodyStyle = props => {
    const currentPage = props.location.pathname
    const method = darkPages.includes(currentPage) ? 'add' : 'remove'
    document.body.classList[method]('bg--dark')
  }

  _getMessage = props => {
    switch (props.location.pathname) {
      case '/phone':
        return 'Enter Phone Number'
      case '/profile':
        // return `Welcome Schmuck`
        return `Welcome ${props.user.first_name}`
      default:
        return 'Sign In Here for Classes'
    }
  }

  _now = () => m().format('h:mm a | dddd MMMM D, YYYY')

  _updateTime = () => {
    const now = this._now()

    if (now !== this.state.now) {
      this.setState({now})
    }

    this.timeoutId = setTimeout(() => {
      raf(this._updateTime)
    }, 1000)
  }
}

export default withRouter(Nav)
