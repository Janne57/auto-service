import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
   
    filterCar: (state, action) => {
      return state = action.payload;
    },
  },
});


// Action creators are generated for each case reducer function
export const { filterCar } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;