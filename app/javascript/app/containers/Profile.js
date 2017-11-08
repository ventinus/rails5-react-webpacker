import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {TabNav, Capsule} from '../components'

class Profile extends Component {
  state = {
    selectedReservations: []
  }

  render() {
    const user = window.user
    const courses = window.courses
    console.log(courses)
    return (
      <div>
        <TabNav
          tabs={[
            {
              heading: 'Your Reservations',
              children: (
                <div>
                  <p className="type-light--2 type--white">Below is a list of classes that you have reserved for today. Select all the<br />classes below that you would like to check-in for and then print your tickets.</p>
                  <div className="info-list info-list--reservations">
                  </div>
                  {this.state.selectedReservations.length > 0 &&
                    this._printTickets()
                  }
                </div>
              )
            }, {
              heading: 'Find A Class',
              children: (
                <div>
                  <p className="type-light--2 type--white">Below is a list of upcoming classes that are available for in-club reservation.<br />Note that only classes with any remaining availability will appear.</p>
                  <div className="info-list info-list--classes">
                  </div>
                </div>
              )
            }
          ]}
        />
      </div>
    )
  }

  _printTickets = () => {
    return (
      <div className="print-cta">
        <Capsule
          onClick={() => {console.log('click print')}}
          modifiers={['green', 'lg', 'no-width']}
        >
          <p className="type-bold--1">{`Print Tickets (${this.state.selectedReservations.length})`}</p>
        </Capsule>
      </div>
    )
  }
}

export default Profile
