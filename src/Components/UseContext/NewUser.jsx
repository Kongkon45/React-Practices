import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const NewUser = ({handleNewUser}) => {
    const [name, setName] = useState("")
    const handleChange = (e)=>{
        setName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newUser = {id:uuidv4(), name:name}
        setName("")
        handleNewUser(newUser)
    }
  return (
    <div>
        <h1>User Registration</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" value={name} onChange={handleChange} />
            <button type='submit'>Add User</button>
        </form>
    </div>
  )
}

export default NewUser