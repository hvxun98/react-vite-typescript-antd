import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  test: true
}

const testSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    onLoading: (state) => {
      state.test = true
    },
    offLoading: (state) => {
      state.test = false
    }
  }
})

export const { onLoading, offLoading } = testSlice.actions
export default testSlice.reducer
