import { data } from "autoprefixer";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const booksData = [
  { id: 1, name: "Book number 1" },
  { id: 2, name: "Book number 2" },
  { id: 3, name: "Book number 3" },
];
const Index = () => {
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");
//   const [modalText, setModalText] = useState("")
//   const [isModalOpen, setIsModalOpen] =useState(false)
//   console.log(books);

  const handleSubmit = (e)=>{
    e.preventDefault()
    // alert(bookName)
    toast('New book is added')
    setBooks ((prevState)=>{
        // const newBook = {id: new Date().getTime().toString(), name:bookName}
        const newBook = {id:uuidv4(), name:bookName}
        return [...prevState, newBook]
      })
//       setModalText("Book is Added")
//       setIsModalOpen(true)
  }

  
  return (
    <div>
      <h3>Book List </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="book"
          id="book"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add Book</button>
        <ToastContainer />
      </form>
      {/* {isModalOpen && <Modal modalText={modalText}/>} */}
      {books.map((book) => {
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
};

export default Index;
