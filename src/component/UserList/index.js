import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard'

const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .catch((err)=> console.log(err))
    },[])
  return (
    <div className='user-list'>  
      {users.map((user)=>{
            return <UserCard user ={user} key={user.id}/>
      })}
    </div>
  )
}

export default UserList
