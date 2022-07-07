/** @format */

import { createSlice } from '@reduxjs/toolkit'

// interface FilterSliceState {
//   categoryId: string
//   sort: string
// }

const initialState = {
  categoryId: 'Popular',
  sort: 'name',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
  },
})

export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer
