import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/normalComponents/Counter';
import CounterRedux from "./components/reduxComponents/CounterRedux";
function App() {

  return (

      // <Counter></Counter>
      <CounterRedux></CounterRedux>
   
  )
}

export default App
