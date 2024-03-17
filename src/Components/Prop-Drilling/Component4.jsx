import React, {useContext} from 'react'
import { UserContext } from './UserContext'
const Component4 = () => {
   const {user, text} = useContext(UserContext)
   console.log(user)
  return (
    <div>
        <h1>{text}</h1>
        <h1>{user.id}</h1>
        <h3>{user.name}</h3>
        <p>{user.status}</p>
    </div>
  )
}

export default Component4