import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './carSlice';
import { carFavoriteReducer } from './carFavoriteSlice';
// import { filterReducer } from './filterSlice.js';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    carsFavorite: carFavoriteReducer,
    // filter: filterReducer,
  },
});


