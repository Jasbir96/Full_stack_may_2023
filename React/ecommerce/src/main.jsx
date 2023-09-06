import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Routing from './poc/Routing.jsx';
// import Context from './poc/Context.jsx';
import ThemeManger from './poc/context/themes/ThemeManger.jsx';
ReactDOM.createRoot(
  document.getElementById('root'))
  .render(

    <BrowserRouter>
      <App />
      {/* <Routing></Routing> */}
      {/* <Context></Context> */}
      {/* <ThemeManger></ThemeManger> */}
    </BrowserRouter>
    ,
  )
