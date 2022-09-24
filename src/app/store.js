import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './redux/cartSlice'
export default configureStore({
    reducer: {
      cart:cartSlice
  },
})