
import React, { useContext } from 'react'
import User from './User'
import { UserContext } from '../ContextApi/UseContext'
const Users = ({ handleDeleteUser}) => {
  const {users, setUsers} = useContext(UserContext)
  return (
    <section className='grid grid-cols-2 gap-10 m-10'>
        {users.map((user)=>{
          return <User key={user.id} user={user} handleDeleteUser={handleDeleteUser}/>
        })}
    </section>
  )
}

export default Users