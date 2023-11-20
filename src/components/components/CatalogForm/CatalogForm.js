import React, { useState } from 'react';
// import { ColorRing } from 'react-loader-spinner';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCars, getError, getIsLoading, getFilter } from 'redux/selectors.js';
import { getCars } from '../../redux/selector';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
// import { fetchCars } from '../../redux/operations';
import CardList from '../Card/Cardlist'
import { fetchCars } from '../../redux/operations';
// import stop from '../../img/placeholder.png';
// import {
//   addCarsFavorite,
//   deleteCarsFavorite,
// } from '../../redux/carFavoriteSlice';
// import css from './CatalogForm.module.css';

const CatalogForm = () => {
  const cars = useSelector(getCars);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCars());
    setIsLoading(false);
  }, [dispatch]);

  return (
    <div>
       {isLoading && <Loader />}
      <CardList carsData={cars}/>
    </div>
  );
};

export default CatalogForm;
