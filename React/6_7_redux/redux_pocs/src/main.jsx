import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import store from "./redux/store";
import User from './components/normalComponents/User.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 
   
    <Provider store={store}>
      <App />
    </Provider>
 ,
)
