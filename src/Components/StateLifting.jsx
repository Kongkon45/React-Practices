import React from 'react'

const StateLifting = ({onChildDataValue}) => {
    const kongkon = "I am a kongkon jowarder";
    onChildDataValue({name : "Kongkon jowarder"})
  return (
    <div>
        <h1>State Lifing</h1>
        {/* <p>{Data}</p> */}
    </div>
  )
}

export default StateLifting