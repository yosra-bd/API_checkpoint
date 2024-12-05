import React from 'react'
import'./style.css'

const UserCard = ({user}) => {
  return (
    <div className='user-card'>
      <p className='user-name'>{user.name}</p>
      <p className='user-phone'>Phone: {user.phone}</p>
      <p className='user-company'>company : {user.company.name}</p>
    </div>
  )
}

export default UserCard
