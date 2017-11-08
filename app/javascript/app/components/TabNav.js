import React, {Component} from 'react'
import {Capsule} from '.'


class TabNav extends Component {
  static defaultProps = {
    selectedIndex: 0
  }

  state = {
    selectedIndex: this.props.selectedIndex
  }

  componentWillReceiveProps(nextProps) {
    this._setSelectedIndex(nextProps.selectedIndex)
  }

  render() {
    const {tabs} = this.props
    const {selectedIndex} = this.state

    return (
      <div className='tab-nav'>
        <div className="tab-nav__header">
          {tabs.map((tab, i) =>
            <div key={i} className="tab-nav__header__btn">
              <Capsule
                onClick={this._setSelectedIndex(i)}
                modifiers={[i === selectedIndex ? 'white' : '', 'xs']}
              >
                <p className="type-bold-cond--4">{tab.heading}</p>
              </Capsule>
            </div>
          )}
        </div>
        <div className="tab-nav__body">
          {tabs[selectedIndex].children}
        </div>
      </div>
    )
  }

  _setSelectedIndex = (index) => () => {
    this.setState({selectedIndex: index})
  }
}

export default TabNav
