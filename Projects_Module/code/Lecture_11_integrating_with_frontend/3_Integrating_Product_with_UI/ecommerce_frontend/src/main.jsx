import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './contexts/AuthProvider.jsx';
// import Routing from './poc/Routing.jsx';
// import Context from './poc/Context.jsx';
// import ThemeManger from './poc/context/themes/ThemeManger.jsx';
ReactDOM.createRoot(
  document.getElementById('root'))
  .render(
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <App />
          {/* <Routing></Routing> */}
          {/* <Context></Context> */}
          {/* <ThemeManger></ThemeManger> */}
        </BrowserRouter>
      </AuthProvider>

    </Provider>
    ,
  )
