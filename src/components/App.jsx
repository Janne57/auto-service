import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// import { useDispatch } from 'react-redux';
// import { refreshUser } from '../redux/auth/auth-operations.js';
// import { RestrictedRoute } from './RestrictedRoute.js';
// import { PrivateRoute } from './PrivateRoute.js';
// import CatalogForm from './components/CatalogForm'
// import SearchBar from './ /components/SearchBar.js';
// import Searchbar from './components/Searchbar';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoriteCarPage = lazy(() => import('./pages/FavoriteCarPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoriteCarPage />} />
      </Route>
    </Routes>

    // <div className={css.basic}>
    // <div>
    //   {/* <h1 className={css.basic_text}>Phonebook</h1> */}
    //   <Searchbar />
    //   <CatalogForm />
    //   {/* <h2 className={css.basic_text}>Contacts</h2>
    //   <Filter />
    //   <Contacts /> */}
    // </div>
  );
};
// );
// };
