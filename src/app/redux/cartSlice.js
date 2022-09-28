import { createSlice } from '@reduxjs/toolkit'


export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => Number(item.price) + amount, 0);
  
const initialState = {
    cart :[],
    }
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state=initialState,action) => {
            const cartItem = {
                id:action.payload.cart.id,
                category:action.payload.cart.category,
                name:action.payload.cart.name,
                price:action.payload.cart.price,
                images:action.payload.cart.images,
            }
            state.cart.push(cartItem)
            console.log(state.cart)
        }
        
    }
    
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer