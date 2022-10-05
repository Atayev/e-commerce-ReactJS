import { createSlice } from '@reduxjs/toolkit'


export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => Number(item.price) + amount, 0);
  
const initialState = {
    cart: [],
    wishList: [],
    search: [],
    compare:[]
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
        addToCompare: (state=initialState.compare, action) => {
            const compareItem = {
                id: action.payload.compare.id,
                category: action.payload.compare.category,
                name: action.payload.compare.name,
                price: action.payload.compare.price,
                images: action.payload.compare.images,
                description:action.payload.compare.description
            }
            if (state.compare.length < 2) state.compare.push(compareItem)
        },
        removeFromCompare: (state, action) => {
            let index = state.compare.findIndex(item => item.id === action.payload.id)
            state.compare.splice(index, 1)
        },
            searchItem: (state, action) => {
                return {
                    ...state,
                    search:action.payload.search
                 }
            }
    }
})

export const {addToCart,removeFromCart,emptyCart, addToWishList,removeFromList,searchItem,addToCompare,removeFromCompare} = cartSlice.actions
export default cartSlice.reducer