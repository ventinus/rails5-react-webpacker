import React from 'react'
import {Link} from 'react-router-dom'

// can behave as a button or a link
const Capsule = ({to = '', modifiers = [], onClick = () => {}, children}) => {
  const extraClass = modifiers.reduce((a, c) => `${a} capsule--${c}`, '').trim()

  return to.length > 0
    ? <Link to={to} className={`capsule ${extraClass}`}>{children}</Link>
    : <div onClick={onClick} className={`capsule ${extraClass}`}>{children}</div>
}

export default Capsule
