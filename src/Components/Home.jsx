import React, { useState } from "react";
import banner from "../assets/banner.png";

export default function Home(props) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState({name:"", email:"", password:""})
  const {name, email, password} = user;
  // const handleNameChange = (e) => {
  //   setUser({name:e.target.value, email, password})
  // };
  // const handleEmailChange = (e) => {
  //   setUser({email:e.target.value, password, name})
  // };
  // const handlePasswordChange = (e) => {
  //   setUser({password:e.target.value, email, name})
  // };
  const handleChange = (e)=>{
    // const Field = e.target.name;
    // if(Field === "name"){
    //   setUser({name:e.target.value, email, password})
    // }
    // else if(Field === "email"){
    //   setUser({email:e.target.value, password, name})
    // }
    // else{
    //   setUser({password:e.target.value, email, name})
    // }

    setUser({...user,[e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    // console.log("Form is Submitted");
    // const userInfo = {
    //   name: form.name.value,
    //   email: form.email.value,
    //   password: form.password.value,
    // };
    // console.log(userInfo);
    console.log(user)
    
  };
  const childData = "I am child data";
  props.onChildData(childData)
  return (
    <div>
      <section>
        <h2>{props.data}</h2>
        <h1 className="text-center mt-4 text-4xl font-bold">
          Registration Form
        </h1>
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-1/3 my-8 mx-auto border p-8 rounded-3xl hover:shadow-2xl"
        >
          <div>
            <label htmlFor="name">Name :</label>
            <input
              className="w-full border my-2 rounded-md pl-2 py-1"
              placeholder="Enter your Name..."
              onChange={handleChange}
              type="text"
              value={name}
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              className="w-full border my-2 rounded-md pl-2 py-1"
              placeholder="Enter your Email..."
              onChange={handleChange}
              type="email"
              value={email}
              name="email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input
              className="w-full border my-2 rounded-md pl-2 py-1"
              placeholder="Enter your Password..."
              onChange={handleChange}
              type="password"
              value={password}
              name="password"
              id="password"
              required
            />
          </div>
          <div className="w-48 mx-auto">
            <button
              className="bg-orange-600 text-white px-2 py-1 rounded-2xl mt-3 w-40 font-bold text-xl"
              type="submit"
            >
              Submit Now
            </button>
          </div>
        </form>
      </section>
      <section>
        {/* <div className="lg:hidden md:block" class="custom-shape-divider-bottom-1707064217">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div> */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center h-screen p-8 ">
          <div className="w-1/2 mr-8">
            <h3 className="text-5xl text-left text-bold text-white">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="text-md text-justify text-white mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae in sed dolore, expedita hic labore possimus ipsa,
              commodi consequuntur exercitationem nulla natus provident a sunt,
              impedit inventore nostrum cumque laborum.
            </p>
          </div>
          <div className="w-1/ ml-12">
            <img className="w-full" src={banner} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
