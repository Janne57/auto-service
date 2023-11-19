import { createSlice } from '@reduxjs/toolkit';
// import { fetchCarsFavorite, addCarsFavorite, deleteCarsFavorite } from './operations';

const carFavoriteSlice = createSlice({
  name: 'carsfavorite',
  initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    

//   extraReducers: {
reducers: {
    // [fetchCarsFavorite.pending](state) {
    //   state.isLoading = true;
    // },
    // [fetchCarsFavorite.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // [fetchCarsFavorite.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    addCarsFavorite: (state, { payload }) => {
        state.items.push(payload);
      },
      deleteCarsFavorite: (state, action) => {
          state.items = state.items.filter(({id}) => id !== action.payload.id);
        },
    // [addCarsFavorite.pending] (state) {
    //   state.isLoading = true;
    // },
    // [addCarsFavorite.fulfilled] (state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    //   // state.items = [ ...state.items, action.payload];
    // },
    // [addCarsFavorite.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [deleteCarsFavorite.pending](state) {
    //   state.isLoading = true;
    // },
    // [deleteCarsFavorite.fulfilled](state, action) {
    //   state.isLoading=false;
    //   state.error= null;
    //   state.items = state.items.filter(({id}) => id !== action.payload.id);
    // },
    // [deleteCarsFavorite.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const { addCarsFavorite, deleteCarsFavorite } = carFavoriteSlice.actions;
export const carFavoriteReducer = carFavoriteSlice.reducer;









