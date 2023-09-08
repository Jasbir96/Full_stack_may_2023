// to create a slice -> redux;

import { createSlice } from "@reduxjs/toolkit";
//1
const cartSlice = createSlice({
    name: "countername",
    initialState: {
        cartQuantity: 0,
        // array of object -> [{details or th product, individal quantity},]
        cartProducts: []
    },
    // all the update logic 
    reducers: {
        addToCart: (state, action) => {
            state.cartQuantity++;
            const productToBeAdded = action.payload;
            const requiredProduct = state.cartProducts
                .find((cProduct) => { return cProduct.id == productToBeAdded.id });
            if (requiredProduct == undefined) {
                //quanityt
                productToBeAdded.indQuantity = 1
                state.cartProducts.push(productToBeAdded)
            } else {
                // already present
                requiredProduct.indQuantity++;
            }
        },

        deleteFromCart: (state, action) => {
            
            const productToBeAdded = action.payload;
            const productIdx = state.cartProducts
                .findIndex((cProduct) => { return cProduct.id == productToBeAdded.id });
            if (productIdx == -1) {

            } else {
                
                let product = state.cartProducts[productIdx];
                if (product.indQuantity == 0) {
                    state.cartProducts.splice(productIdx, 0);
                } else {
                    state.cartProducts[productIdx].indQuantity--;
                    state.cartQuantity--;
                }
            }
        }
    }
});

export const action = cartSlice.actions;
export default cartSlice;