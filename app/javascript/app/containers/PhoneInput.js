import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AsYouTypeFormatter} from 'google-libphonenumber'
import {CircleBtn} from '../components'
import backspace from 'backspace.svg'
import checkmark from 'checkmark.svg'

class PhoneInput extends Component {

  constructor() {
    super()

    this.state = {
      phoneVal: '',
      isValid: false
    }

    this._numberPad = [
      {val: '1'},
      {val: '2'},
      {val: '3'},
      {val: '4'},
      {val: '5'},
      {val: '6'},
      {val: '7'},
      {val: '8'},
      {val: '9'},
      {
        val: (<img src={backspace} />),
        onClick: this._onBackspaceClick,
        modifiers() {return ['backspace']}
      },
      {val: '0'},
      {
        val: (<img src={checkmark} />),
        onClick: this._onDoneClick,
        modifiers: this._genDoneModifiers
      }
    ]

    this.formatter = new AsYouTypeFormatter('US')
  }

  render() {
    return (
      <div>
        <p className='type--white type-bold--1'>{this.state.phoneVal}</p>
        <div className="phone-pad">
          {this._numberPad.map((data, i) =>
            <div className="phone-pad__item" key={i}>
              <CircleBtn
                onClick={data.onClick || this._onNumberClick(i)}
                modifiers={data.modifiers ? data.modifiers() : []}
                >
                {data.val}
              </CircleBtn>
            </div>
          )}
        </div>
        <Link to="/" className=''>CANCEL</Link>
      </div>
    )
  }

  _getNums = str => str.match(/\d+/g).join('')

  _genDoneModifiers = () => {
    const mods = this.state.isValid ? ['done-valid'] : ['done-invalid']

    return ['done'].concat(mods)
  }

  _setCurrentFormat = () => {
    const numsLength = this._getNums(this.formatter.currentOutput_).length

    this.setState({
      phoneVal: this.formatter.currentOutput_,
      isValid: numsLength === 7 || numsLength === 10
    })
  }

  _onNumberClick = index => () => {
    this.formatter.inputDigit(this._numberPad[index].val)
    this._setCurrentFormat()
  }

  _onBackspaceClick = () => {
    const nums = this._getNums(this.state.phoneVal)
    const nextVal = nums.substring(0, nums.length - 1)
    this.formatter.clear()
    nextVal.split('').forEach(n => this.formatter.inputDigit(n))

    this._setCurrentFormat()
  }

  _onDoneClick = () => {
    if (this.state.isValid) {
      console.log('run query for', this._getNums(this.state.phoneVal))
      this.props.history.push('/profile')
    }
  }
}

export default withRouter(PhoneInput)
