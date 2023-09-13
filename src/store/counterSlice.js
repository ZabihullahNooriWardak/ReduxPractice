

import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  initNumber: 0,
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.initNumber = state.initNumber + 1;
    }
  }
})
export const { increment } = counterSlice.actions;
export default counterSlice.reducer;