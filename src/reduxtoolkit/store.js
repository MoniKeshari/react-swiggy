import { configureStore } from '@reduxjs/toolkit';
import inputFieldSlice from '../reduxtoolkit/slice/homeslice';

export const store = configureStore({
  reducer: {
    inputFieldSlice: inputFieldSlice,
  },
})