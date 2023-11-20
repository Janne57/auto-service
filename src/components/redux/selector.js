export const getCars = (state) => state.cars.items;
export const getFavoriteCars = (state) => state.carsFavorite.items;
export const getIsLoading = (state) => state.cars.isLoading;
export const getError = (state) => state.cars.error;
export const getFilter = (state) => state.filter;