import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carSlice = createSlice({
  name: 'car',
  initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    

  extraReducers: {

    [fetchCars.pending](state) {
      state.isLoading = true;
    },
    [fetchCars.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCars.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [addContacts.pending] (state) {
    //   state.isLoading = true;
    // },
    // [addContacts.fulfilled] (state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    //   // state.items = [ ...state.items, action.payload];
    // },
    // [addContacts.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [deleteContacts.pending](state) {
    //   state.isLoading = true;
    // },
    // [deleteContacts.fulfilled](state, action) {
    //   state.isLoading=false;
    //   state.error= null;
    //   state.items = state.items.filter(({id}) => id !== action.payload.id);
    // },
    // [deleteContacts.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});


export const carReducer = carSlice.reducer;









