import React from 'react'

const ClassRow = ({leftContent = null, rightContent = null}) => (
  <div className="class-row">
    {leftContent &&
      <div className="class-row__left">{leftContent}</div>
    }
    {rightContent &&
      <div className="class-row__right">{rightContent}</div>
    }
  </div>
)

export default ClassRow
