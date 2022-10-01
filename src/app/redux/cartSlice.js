import { createSlice } from '@reduxjs/toolkit'


export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => Number(item.price) + amount, 0);
  
const initialState = {
    cart: [],
    wishList:[],
    }
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state = initialState, action) => {
            const cartItem = {
                id: action.payload.cart.id,
                category: action.payload.cart.category,
                name: action.payload.cart.name,
                price: action.payload.cart.price,
                images: action.payload.cart.images,
            }
            state.cart.push(cartItem)
        },
        removeFromCart: (state, action) => {
            let index = state.cart.findIndex(item => item.id === action.payload.id)
            state.cart.splice(index, 1)
        },
        emptyCart: (state, action) => {
            return {
                ...state,
                cart:action.payload.cart
            }
        },
        addToWishList: (state=initialState, action) => {
            const wishItem = {
                id:action.payload.wishList.id,
                images: action.payload.wishList.images,
                name: action.payload.wishList.name,
                price:action.payload.wishList.price
            }
            state.wishList.push(wishItem)
        }, removeFromList: (state, action) => {
            let index = state.wishList.findIndex(item => item.id === action.payload.id)
            state.wishList.splice(index, 1)
        },
            search: (state, action) => {
                
            }
    }
})

export const {addToCart,removeFromCart,emptyCart, addToWishList,removeFromList} = cartSlice.actions
export default cartSlice.reducer