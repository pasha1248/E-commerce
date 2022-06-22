/** @format */

import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './Slisers/FilterSlise'
import cartSlice from './Slisers/basketSlice'
import pizzaSlice from './Slisers/pizzaSlise'

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    pizzaSlice,
  },
})
