import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },
    increaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload)
      if (item) item.quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload)
      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        return state.filter(i => i.id !== action.payload)
      }
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer