import React from 'react'

const CircleBtn = ({onClick, children, modifiers = []}) => (
  <button type="button" onClick={onClick} className={`circle-btn ${modifiers.reduce((a, c) => `${a} circle-btn--${c}`,'').trim()}`}>
    {children}
  </button>
)

export default CircleBtn
