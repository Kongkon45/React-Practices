import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
const listItems = [
    {
        "id": uuidv4(),
        "name": "John",
        "details": {
          "age": 25,
          "location": "City A"
        }
      },
      {
        "id": uuidv4(),
        "name": "Jane",
        "details": {
          "age": 30,
          "location": "City B"
        }
      }
    ]

const List = () => {
  return (
    
    <div>
        <h1>This is list</h1>
        {listItems.map((list)=>{
            return <article key={list.id}>
                <h1> <FaFacebook /> {list.name}</h1>
                <p>{list?.details?.age}</p>
                <p>{list?.details.location}</p>
                <Button>Learn More</Button>
            </article>
        })}

        <span>
              <FaFacebook />
        </span>
        <span>
              <FaYoutube />
        </span>
        
    </div>
  )
}

export default List



  