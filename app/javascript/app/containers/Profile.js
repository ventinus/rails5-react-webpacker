import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {TabNav, Capsule, ClassesList} from '../components'

class Profile extends Component {
  state = {
    selectedReservationIds: []
  }

  render() {
    const user = window.user
    const courses = window.courses
    console.log(courses)

    // theoretically, this wont be needed in production because we wont be trying to render this page until data is present
    if (!courses) return null

    return (
      <div>
        <TabNav
          tabs={[
            {
              heading: 'Your Reservations',
              children: (
                <div>
                  <p className="type-light--2 type--white">Below is a list of classes that you have reserved for today. Select all the<br />classes below that you would like to check-in for and then print your tickets.</p>
                  <ClassesList
                    data={courses}
                    type='reservations'
                    onItemClick={this._onReservationClick}
                  />
                  {this.state.selectedReservationIds.length > 0 &&
                    this._printTickets()
                  }
                </div>
              )
            }, {
              heading: 'Find A Class',
              children: (
                <div>
                  <p className="type-light--2 type--white">Below is a list of upcoming classes that are available for in-club reservation.<br />Note that only classes with any remaining availability will appear.</p>
                  <ClassesList
                    data={courses.slice(5)}
                    type='classes'
                    onItemClick={this._onClassClick}
                  />
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
          onClick={() => {console.log('click print', this.state.selectedReservationIds)}}
          modifiers={['green', 'lg', 'no-width']}
        >
          <p className="type-bold--1">{`Print Tickets (${this.state.selectedReservationIds.length})`}</p>
        </Capsule>
      </div>
    )
  }

  _onReservationClick = (index) => {
    const {selectedReservationIds} = this.state
    const {id} = window.courses[index]
    const idIndex = selectedReservationIds.indexOf(id)
    const nextReservationIdsState = idIndex >= 0
      ? selectedReservationIds.slice(0, idIndex).concat(selectedReservationIds.slice(idIndex + 1))
      : selectedReservationIds.concat(id)

    this.setState({selectedReservationIds: nextReservationIdsState})
  }

  _onClassClick = (index) => {
    console.log('class click', index)
  }
}

export default Profile
