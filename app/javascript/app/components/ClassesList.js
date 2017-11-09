import React, {Component} from 'react'
import m from 'moment'
import {ClassRow} from '.'

class ClassesList extends Component {
  static defaultProps = {
    data: []
  }

  // for some reason both versions are being rendered to the same component, so states need to be namespaced
  state = {
    reservations: {
      activeIndices: []
    },
    classes: {
      activeIndices: []
    }
  }

  _dates = this.props.data.map(d => m(d.start_time))

  constructor(props) {
    super(props)
    console.log('constructor')
  }

  render() {
    const {data, type, onItemClick} = this.props
    const {activeIndices} = this.state[type]
    console.log(activeIndices)

    return (
      <div className={`classes-list classes-list--${type}`}>
        {data.map((item, i) =>
          <div
            className={`classes-list__item ${activeIndices.includes(i) ? 'is-active' : ''} ${item.available_spots === 0 ? 'not-available' : ''}`}
            key={i}>
            <div
              className="classes-list__item__main"
              onClick={this._onItemClick(i)}
            >
              <div className="classes-list__item__main__left"></div>
              <div className="classes-list__item__main__right">
                <ClassRow
                  leftContent={(
                    <p>
                      <span className="type-bold--1">{this._dates[i].format('h:mm')}</span>
                      <span className="type-reg--2">{this._dates[i].format('a')}</span>
                    </p>
                  )}
                  rightContent={(
                    <p className="type-bold--1">{item.title}</p>
                  )}
                />
                <ClassRow
                  leftContent={type === 'reservations' ? null : (
                    <p className={`type-reg--2 ${item.available_spots > 0 ? 'type--faded-50' : ''}`}>{item.available_spots === 0 ? 'Class Full' : `${item.available_spots} Spot${item.available_spots > 1 ? 's' : ''} Left`}</p>
                  )}
                  rightContent={(
                    <p className="type-reg--2 type--faded-50">{`Treadmill Area | Kimani | ${item.duration} min`}</p>
                  )}
                />
              </div>
            </div>
            {type === 'classes' &&
              <div className="classes-list__item__btns">

              </div>
            }
          </div>
        )}
      </div>
    )
  }

  _onItemClick = i => () => {
    const {activeIndices} = this.state[this.props.type]
    const index = activeIndices.indexOf(i)
    const nextActiveIndices = index >= 0
      ? activeIndices.slice(0, index).concat(activeIndices.slice(index + 1))
      : activeIndices.concat(i)

    this.setState({[this.props.type]: {activeIndices: nextActiveIndices}})
    this.props.onItemClick(i)
  }

}

export default ClassesList
