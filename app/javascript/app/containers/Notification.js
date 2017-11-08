import React from 'react'
import {Link} from 'react-router-dom'
import {Capsule} from '../components'
import iconAlert from 'icon-alert.svg'
import iconX from 'icon-X.svg'
import iconWifi from 'icon-wifi.svg'

const icons = {iconAlert, iconX, iconWifi}

const Notification = ({
  icon = 'iconX',
  error = 'Error!',
  errorDescription = ['There is an Error With The Scanner.', 'Please See Front Desk.'],
  btnText = 'Ok',
  onBtnClick,
  btnBack = true
}) => (
  <div className="notification">
    <img src={icons[icon]} alt="" className="notification__icon" />
    <h2 className="notification__error type--white type-bold-cond--1">{error}</h2>
    {errorDescription.map((desc, i) =>
      <p key={i} className="notification__description type-light--2 type--white">{desc}</p>
    )}
    <div className="notification__btn">
      <Capsule
        onClick={() => {}}
        modifiers={['white', 'lg']}
      >
        <p className="type-bold--1 type--uppercase">{btnText}</p>
      </Capsule>
    </div>
  </div>
)

export default Notification
