import React,{useContext} from 'react'
import { UserContext } from './UseContext'
const Component5 = () => {
const {user, text} = useContext(UserContext)
  return (
    <div>
        <h1>{text}</h1>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
        <p>{user.department}</p>

    </div>
  )
}

export default Component5