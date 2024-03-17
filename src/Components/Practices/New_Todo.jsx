import React, { useState } from 'react'

const New_Todo = (props) => {
    const [todo, setTodo]= useState("")
    const handleChange = (e)=>{
        setTodo(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        // props.newTodo(todo)
        props.onTodo(todo)
        console.log(todo)
    }
  return (
    <div>
        <h1>New todo page</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="todo">New todo</label>
            <input className='border' type="text" name="todo" id="todo" value={todo} onChange={handleChange}/>
            <button >Add Todo</button>
        </form>
    </div>
  )
}

export default New_Todo