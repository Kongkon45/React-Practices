import React, { useState } from 'react'

const FAQ = ({id, title, desc}) => {
    const [faq, setFaq] = useState(false)
  return (
    <div>
        {/* <h1>faq toggle</h1> */}
        <h3>{title}</h3>
        <button onClick={()=>{setFaq(!faq)}}>{faq? "-":"+"}</button>
        <p>{faq && desc}</p>
    </div>
  )
}

export default FAQ