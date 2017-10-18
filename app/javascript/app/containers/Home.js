import React from 'react'
import {Link} from 'react-router-dom'
import {Capsule} from '../components'
import barcode from 'barcode.svg'
import arrowDown from 'arrow-down.svg'

const Home = (props) => (
  <div>
    <div className="scan page-wrapper__section">
      <img src={barcode} alt="scan" className='scan__barcode' />
      <p className="scan__text type--center type-bold-cond--1">Scan Barcode To Begin</p>
      <img src={arrowDown} alt="look below" className='scan__arrow' />
    </div>

    <div className="page-wrapper__section scan--alternate">
      <Capsule to='/phone' modifiers={['lg', 'white']}>
        <p className='type-bold--1'>USE PHONE NUMBER</p>
      </Capsule>
      <p className="scan--alternate__copy type-light--1 type--white type--center">Classes may be reserved online starting 22 hours before the class starts until 30 minutes before the class begins. In-club reservations begin 30 minutes before each class for any remaining spots. Reservations may be picked up at any time on the day of the reservation. Unclaimed reservations are released 10 minutes before each class begins. You must already have an online Crunch Member Account to sign-up for classes (online & in-club).</p>
    </div>

  </div>
)

export default Home
