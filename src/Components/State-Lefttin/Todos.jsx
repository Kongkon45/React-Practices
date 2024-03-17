import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
    console.log(props.todos)
  return (
    <div>
        <h1>Todos page</h1>
        {props.todos.map((todo, index)=> (
            <Todo key={index} todo={todo}/>
        ))}
        
    </div>
  )
}

export default Todos