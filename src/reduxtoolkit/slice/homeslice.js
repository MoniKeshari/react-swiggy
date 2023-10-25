// inputFieldSlice.js
import { createSlice } from '@reduxjs/toolkit';

const inputFieldSlice = createSlice({
  name: 'inputField',
  initialState: { 
    inputsearch: '' ,
    carddata:[],
}, 
  reducers: {
    setInputValue: (state, action) => {
      state.inputsearch = action.payload;
    },
    setCardData: (state, action) => {
        state.carddata = action.payload;
      },
  },
});

export const { setInputValue, setCardData } = inputFieldSlice.actions;

export default inputFieldSlice.reducer;
