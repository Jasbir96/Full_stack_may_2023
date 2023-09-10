import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Counter from './components/useStateExample';
import CounterUseReducer from './components/useReducer';
import Form from './components/userReducerComplex';

function App() {
  return (
    <>
      <h2>Use state Example</h2>
      {/* <Counter></Counter> */}
      <h2>Use reducer Example</h2>
      <CounterUseReducer></CounterUseReducer>
      <Form></Form>
    </>
  )
}

export default App
