import React from 'react'
import Card from './Components/Card'
import data from './data.json'
import List from './Components/List'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main'
import MainPage from './Components/MainPage';
import Handle from './Components/Event_Handler/index'
import StopPropagration from './Components/Event_Handler/StopPropagration';
import CounterApp from './Components/CounterApp';
// import Home from './Components/Home'
import State from './Components/StateLifting'
import Home from './Components/State-Lefttin/Home'
import Toggle from './Components/Toggle';
import use_Effect from './Components/Practices/use_Effect';
// import Home from './Components/Practices/Home'
import Index from './Components/UseReducer/index'
// import Component1 from './Components/Prop-Drilling/Component1';
import Component1 from './Components/ContextApi/Component1';
import ContextApi from './Components/UseContext/ContextApi';
const App = () => {
//  const data = "I am parents data"
//  const handleChildData = (childData)=>{
//   console.log(childData)
//  }
//  const ChildData = (Data)=>{
//   console.log(Data)
//  }


  return (
    <div>
      {/* <Toggle/> */}
      
      {/* <Main/> */}
      {/* <List/> */}
      {/* <MainPage/> */}
      {/* <Handle/>
      <StopPropagration/>
      <CounterApp/> */}
      {/* <Home data={data} onChildData={handleChildData}/> */}
      {/* <State Data = {data} onChildDataValue={ChildData}/> */}
      {/* <Home/> */}
      {/* <Home/> */}
      {/* <use_Effect/> */}
      {/* <Index/> */}
      {/* <Component1/> */}
      <Component1/>
      {/* <ContextApi/> */}
    </div>
  )
}

export default App