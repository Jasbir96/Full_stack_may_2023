import React from 'react';
import ProductList from '../components/ProductList';
import { useSelector } from "react-redux";
function Cart() {
  const productList = useSelector((store) => { return store.cartReducer.cartProducts })
  return (
    <>
      <h1>Cart</h1>
      <h2>Add to Product List</h2>
      <div className="cart_product_wrapper">

        <ProductList productList={productList}></ProductList>
      </div>
    </>

  )
}

export default Cart