/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async params => {
    const { data } = await axios.get(
      'https://62ac334c9fa81d00a7abe063.mockapi.io/pizza'
    )
    return data
  }
)

const initialState = {
  items: [],
  status: 'loading',
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: {
    [fetchPizza.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPizza.fulfilled]: (state, action) => {
      state.status = 'success'
      state.items = action.payload
    },
    [fetchPizza.rejected]: (state, action) => {
      state.status = 'error'
    },
  },
})

export const selectCart = state => state.items

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
