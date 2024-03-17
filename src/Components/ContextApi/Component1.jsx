import React, { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './UseContext'
const Component1 = () => {
    const [user, setUser] = useState({id:1, name:"kongkon jowarder", department:"Computer"})
    const [text, setText] = useState("I am Kongkon jowarder")
  return (
    <UserContext.Provider value={{user, text}}>
        <Component2  />
    </UserContext.Provider>
  )
}

export default Component1