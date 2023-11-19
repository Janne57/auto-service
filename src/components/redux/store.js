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



// // import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { configureStore } from '@reduxjs/toolkit';
// import { carReducer } from './carSlice';
// // import { contactReducer } from '../redux/contacts/contactSlice.js';
// // import { filterReducer } from '../redux/contacts/filterSlice.js';



// // const authPersistConfig = {
// //   key: 'auth',
// //   storage,
// //   whitelist: ['token'],
// // };


// export const store = configureStore({
//   reducer: {
//     // auth: persistReducer(authPersistConfig, authReducer),
//     cars: carReducer,
//     // filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
