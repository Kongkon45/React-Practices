// import React, { useState } from 'react'

// const index = () => {
//     const [inputValue, setInputValue]= useState("")
//     const handle = ()=>{
//         console.log("Clicked!")
//     }
//     const handleChange = (e)=>{
//         setInputValue(e.target.value)
//     }
//   return (
//     <div>
//         <button onClick={handle}>Cliek Here</button>
//         <input type="text" onChange={handleChange} placeholder='type something...'/>
//         <p>Current Value :{inputValue} </p>
//     </div>
//   )
// }

// export default index


import React, { useState } from 'react';

function MyComponent() {
  // State to store the value of the input field
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0)

  // Event handler for input change
  const handleInputChange = (event) => {
    // Update the state with the new value of the input field
    setInputValue(event.target.value);
    console.log(event.target.value)
  };
  const handleIncrement = ()=>{
    setCount((count)=> count+1)
    

    setCount((count)=> count+1)
    setCount((count)=> count+1)
  }

  return (
    <div>
      <h2>React onChange Event Example</h2>
      
      {/* Input field with onChange event */}
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type something..."
      />

      {/* Display the current value */}
      <p>Current value: {inputValue}</p>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default MyComponent;
