import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";

export default function MainPage() {
  const [isLogin, setIsLogin] = useState(true);
  let elements;
  if (isLogin) {
    elements = <Home />;
  } else {
    elements = <Login />;
  }

  const handle = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <h1 className="text-center mt-4">This is main page</h1>
      {/* {isLogin? <Home/> : <Login/>} */}
      {/* {elements} */}
      {isLogin && <Home />}
      {!isLogin && <Login />}

      <button onClick={handle}>Click Here</button>
    </div>
  );
}
