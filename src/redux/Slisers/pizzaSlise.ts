/** @format */

import { RootState } from './../Store'
/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async params => {
    const { data } = await axios.get<Pizza[]>(
      'https://62ac334c9fa81d00a7abe063.mockapi.io/pizza'
    )
    return data as Pizza[]
  }
)

type Pizza = {
  id: string
  title: string
  price: number
  imageUrl: string
  sizes: number[]
  types: number[]
  rating: number
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
interface PizzaSliceState {
  items: Pizza[]
  status: Status
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchPizza.pending, (state, action) => {
      state.status = Status.LOADING
    })
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      state.items = action.payload
    })
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.status = Status.ERROR
    })
  },
})

export const selectCart = (state: RootState) => state.pizzaSlice

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
