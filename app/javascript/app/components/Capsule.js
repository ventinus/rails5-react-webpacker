import React from 'react'
import {Link} from 'react-router-dom'

const Capsule = ({text, to = '', modifiers = [], textClass = '', onClick = () => {}, children}) => {
  const extraClass = modifiers.reduce((a, c) => `${a} capsule--${c}`, '').trim()

  return to.length > 0
    ? <Link to={to} className={`capsule ${extraClass}`}>{children}</Link>
    : <div onClick={onClick} className={`capsule ${extraClass}`}>{children}</div>
}

export default Capsule
