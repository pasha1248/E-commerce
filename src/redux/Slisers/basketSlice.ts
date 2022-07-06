/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import getBasketFromLocalStorage from '../../utils/getBasketFromLocalStorage copy'
import getTotalFromLocalStorage from '../../utils/getTotalFromLocalStorage'

export type CartItem = {
  id: string
  price: number
  name: string
  image: string
  type: number
  size: number
  count: number
}

interface CartSliceState {
  totalPrice: number
  items: CartItem[]
}

const initialState: CartSliceState = {
  totalPrice: getTotalFromLocalStorage(),
  items: getBasketFromLocalStorage(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return Number(obj.price * obj.count) + sum
      }, 0)
    },
    minuseItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(obj => obj.id === action.payload)

      if (findItem) {
        findItem.count--
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
    },
    clearItem(state) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const { addItem, removeItem, clearItem, minuseItem } = cartSlice.actions

export default cartSlice.reducer
