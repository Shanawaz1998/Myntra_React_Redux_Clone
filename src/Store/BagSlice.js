import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload); //Here we have modified the existing state, so we dont need to return the array
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload); //Here we are creating the new array, that's why we need to return the array
    },
  },
});

export const bagAction = bagSlice.actions;
export default bagSlice;
