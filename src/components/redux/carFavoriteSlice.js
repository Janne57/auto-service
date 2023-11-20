import { createSlice } from '@reduxjs/toolkit';

const carFavoriteSlice = createSlice({
  name: 'carsfavorite',
  initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    

reducers: {
    addCarsFavorite: (state, { payload }) => {
        state.items.push(payload);
      },
      deleteCarsFavorite: (state, action) => {
          state.items = state.items.filter(({id}) => id !== action.payload.id);
        },
  },
});

export const { addCarsFavorite, deleteCarsFavorite } = carFavoriteSlice.actions;
export const carFavoriteReducer = carFavoriteSlice.reducer;









