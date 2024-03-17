import React from 'react'

const StopPropagration = () => {
    const handleIncrement = (event)=>{
        event.stopPropagation();
        console.log("child element", event)
    }
    const handleParents = (event)=>{
        console.log("parent element", event)
    }
  return (
    <div onClick={handleParents} className='bg-gray-600'>
        <h1>Count</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default StopPropagration