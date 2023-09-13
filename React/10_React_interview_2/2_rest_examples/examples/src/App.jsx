import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseMemoConcept from './components/UseMemo'
import UseCallbackConcept from './components/UseCallBack'

function App() {


  return (
    <>
      <UseMemoConcept value={500}></UseMemoConcept>
      <UseCallbackConcept></UseCallbackConcept>
    </>
  )
}

export default App
