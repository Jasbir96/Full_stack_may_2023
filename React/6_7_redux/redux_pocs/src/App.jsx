import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/normalComponents/Counter';
import CounterRedux from "./components/reduxComponents/CounterRedux";
import TodoRedux from './components/reduxComponents/TodoRedux';
import UserRedux from './components/reduxComponents/UserRedux';

function App() {

  return (

    // <Counter></Counter>
    <>
      {/* <CounterRedux></CounterRedux>
      <TodoRedux></TodoRedux> */}
      <UserRedux></UserRedux>
    </>


  )
}

export default App
