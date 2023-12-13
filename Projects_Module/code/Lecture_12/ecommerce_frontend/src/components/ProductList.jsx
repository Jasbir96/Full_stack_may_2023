import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useDispatch, useSelector } from "react-redux";
import { action } from '../redux/slices/cartSlice';

function ProductList(props) {
    const { productList } = props;
    const cartProducts = useSelector((store) => { return store.cartReducer.cartProducts })
    const dispatch = useDispatch();
    const handleAddProduct = (product) => {
        dispatch(action.addToCart(product));
    }

    const handleDeleteProduct = (product) => {
        dispatch(action.deleteFromCart(product));
    }

    return (
        <>
            {productList == null ? <h3 > Loading...</h3> :
                productList.map((product) => {
                    return (<div className="product" key={product.id}>
                        <img src={product.images[0]}
                            className='product_image' />
                        <div className="product_meta">
                            <p className="product_title">{product.title}</p>
                            <p className='Price'>$ {product.price}</p>
                        </div>
                        <div className="add_to_cart_container">
                            <AddBoxIcon
                                onClick={() => { handleAddProduct(product) }}
                            ></AddBoxIcon>
                            <div className="currentCartCount">{<PrintCount cartProducts={cartProducts} id={product.id}></PrintCount>}</div>
                            <IndeterminateCheckBoxIcon
                                onClick={() => { handleDeleteProduct(product) }}
                            >
                            </IndeterminateCheckBoxIcon>
                        </div>
                    </div>
                    )
                })}
        </>
    )
}
function PrintCount(props) {
    const { cartProducts, id } = props;
    let quanitity = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].id == id) {
            quanitity = cartProducts[i].indQuantity
        }
    }
    return (<>
        {quanitity}
    </>)

}




export default ProductList;


