import React, { useState } from 'react'
import { dataArray } from './data'
import FAQ from './State-Lefttin/FAQ'
const Toggle = () => {
    const [toggle, setTodo] = useState(dataArray)
    console.log(dataArray)
  return (
    <div>
        <h1 className='text-center text-4xl font-bold my-4'>FAQ</h1>
        {/* {toggle && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nobis atque odit quasi expedita perferendis cupiditate quos eaque qui recusandae tenetur aspernatur consequatur accusantium, corrupti dolorum, repellendus sint quam voluptate.</p>}
        <button onClick={()=>{setTodo(!toggle)}} className='bg-blue-400 text-white rounded-2xl text-xl p-3 m-4'>{toggle? "Hide":"Show"}</button> */}

        {toggle.map((item)=><FAQ key={item.id} {...item}/>)}

        
    </div>
  )
}

export default Toggle