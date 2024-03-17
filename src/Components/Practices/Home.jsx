import React, { useState } from 'react'
import Todos from './Todos'
import New_Todo from './New_Todo';
const dummyTodos = ["item1", "item2"];
const Home = () => {
   
    const [todos, setTodos]= useState(dummyTodos)
    const handleNewTodo = (onTodo)=>{
        setTodos(...todos, onTodo)
    }
  return (
    <div>
        <h1>Home page</h1>
        <New_Todo onTodo={handleNewTodo}/>
        <Todos todos={todos}/>
    </div>
  )
}

export default Home