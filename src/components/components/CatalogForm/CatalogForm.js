import React, { useState } from 'react';
import { getCars } from '../../redux/selector';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import CardList from '../Card/Cardlist'
import { fetchCars } from '../../redux/operations';

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
