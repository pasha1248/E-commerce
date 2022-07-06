/** @format */

import { useDispatch } from 'react-redux'
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

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
