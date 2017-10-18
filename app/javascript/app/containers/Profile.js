import React from 'react'
import {Link} from 'react-router-dom'

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <p>this is the Profile page</p>
      <Link to="/">phone</Link>
    </div>
  )
}

export default Profile
