import React, { useState } from "react";

const New_Todo = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTodo(todo);
  };
  return (
    <div>
      <h1>I am new todo</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="todo">New Todo : </label>
        <input
          className="border"
          type="text"
          name="todo"
          value={todo}
          id="todo"
          onChange={handleChange}
        />
        <button
          
          className="bg-blue-600 px-4 py-1 rounded-xl text-white"
        >
          Todo
        </button>
      </form>
    </div>
  );
};

export default New_Todo;
