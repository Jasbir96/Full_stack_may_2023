import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import useAuth from '../hooks/useAuth';
import Logout from './Logout';
function NavBar() {
  const quantity = useSelector((store) => { return store.cartReducer.cartQuantity });
  const { user } = useAuth();
  // console.log(user); 
  const isUserPresent = Object.keys(user).length > 0;;
  return (
    <div className='navbar'>
      {isUserPresent ? <>
        <Link to="/">Home </Link>
        <Link to="/user">Profile</Link>
        <Logout></Logout>
        <Link to="/cart">
          <div className="cart_container">
            <ShoppingCartIcon></ShoppingCartIcon>
            <div className="cart_quantity">{quantity}</div>
          </div>
        </Link>
      </> : <>
        <Link to="/">Home </Link>
        <Link to="/login"> Login</Link>
      
      </>}

    </div>
  )
}

export default NavBar