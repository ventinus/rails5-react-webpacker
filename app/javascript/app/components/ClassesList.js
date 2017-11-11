import React, {Component} from 'react'
import m from 'moment'
import {forEach} from 'lodash'
import {ClassRow, Capsule} from '.'

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
    },
    btnsHeight: 0
  }

  _dates = this.props.data.map(d => m(d.start_time))

  _refs = {}

  // constructor(props) {
  //   super(props)
  //   console.log('constructor')
  // }

  componentDidMount() {
    const btnsWrappers = document.querySelectorAll('.js-classes-btns')

    const btnsLength = btnsWrappers.length
    console.log(btnsLength)
    if (btnsLength === 0) return

    const lastBtnsEl = btnsWrappers[btnsLength - 1]

    lastBtnsEl.style.display = 'flex'
    // const btnsHeight = lastBtnsEl.offsetHeight
    // lastBtnsEl.style.height = ''
    console.log(lastBtnsEl.offsetHeight)
    this.setState({btnsHeight: lastBtnsEl.offsetHeight})
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
              ref={node => this._refs[`mains-${i}`] = node}
              style={{
                marginBottom: activeIndices.includes(i) ? 0 : `-${this.state.btnsHeight}px`,
                transitionDuration: this.state.btnsHeight === 0 ? 0 : '300ms'
              }}
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
              <div className="classes-list__item__btns js-classes-btns" style={{display: this.state.btnsHeight !== 0 ? 'flex' : 'none'}}>
                <Capsule
                  onClick={() => {console.log(i)}}
                  modifiers={['sm']}
                >
                  <p className="type-reg--2 type--uppercase">Cancel</p>
                </Capsule>
                <Capsule
                  onClick={() => {console.log(i)}}
                  modifiers={['sm', 'green']}
                >
                  <p className="type-reg--2 type--uppercase">Register</p>
                </Capsule>
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

    // this._toggleBtnsHeight(i)

    this.setState({[this.props.type]: {activeIndices: nextActiveIndices}})
    this.props.onItemClick(i)
  }

  // _toggleBtnsHeight = i => {
  //   const {activeIndices} = this.state[this.props.type]
  //   const container = this._refs[`mains-${i}`]
  //   if (!container) return

  //   console.log(activeIndices.includes(i))

  // }

}

export default ClassesList
