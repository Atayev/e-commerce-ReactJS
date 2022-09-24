import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialStat: {},

    reducers: {
        addToCart: () => {

        }
    }
    
})

export const {addToCart} = cartSlice.actions
export default cartSlice.redcer