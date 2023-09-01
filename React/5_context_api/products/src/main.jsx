import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Routing from './poc/Routing.jsx';
ReactDOM.createRoot(
  document.getElementById('root'))
  .render(
    
      <BrowserRouter>
        <App />
        {/* <Routing></Routing> */}
      </BrowserRouter>
   ,
  )
