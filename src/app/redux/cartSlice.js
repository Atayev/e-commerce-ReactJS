import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{},
    reducers: {
        addToCart: (state) => {
            return null 
        }
        
    }
    
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer