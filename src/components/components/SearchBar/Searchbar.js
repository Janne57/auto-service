// import { useCallback, useState } from 'react';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getCars, getFilter } from '../../redux/selector';
import { rentalPrice } from '../../hooks/const';
import { filterCar } from 'components/redux/filterSlice';

import css from './Searchbar.module.css';
// import Notiflix from 'notiflix';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');


  
  const cars = useSelector(getCars);
  const valueFilter = useSelector(getFilter);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValuePrice, setSelectedValuePrice] = useState('');
  const [selectedValueMile, setSelectedValueMile] = useState('');
  const [selectedValueMileTo, setSelectedValueMileTo] = useState('');
  const dispatch = useDispatch();
  // const [name, setName] = useState('');

  let makesOptions = [];
  let rentalPriceOptions = [];

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(filterCar(evt.currentTarget.value));
    console.log('evt.currentTarget.value', evt.currentTarget.value);
    console.log('valueFilter', valueFilter);

    setQuery(evt.currentTarget.value);
    console.log('query', query);

    onSubmit(query.trim());
    setQuery('');
  };
  // console.log('handleSubmit', handleSubmit);

  if (cars) {
    cars.forEach(item =>
      makesOptions.push({ value: item.make, label: item.make })
    );
    rentalPrice.forEach(item =>
      rentalPriceOptions.push({ value: item, label: item })
    );
  }

 

  const handleChange = selectedOption => {
    setSelectedValue(selectedOption.value);

    // console.log('SelectedValueu 60', selectedValue);
    // console.log('selectedValue 61', selectedValue.currentTarget.value);
  };

  const handleChangePrice = selectedOption => {
    setSelectedValuePrice(selectedOption.value);

    // console.log('SelectedValueuPrice 60', selectedValuePrice);
    // console.log('selectedValue 61', selectedValue.currentTarget.value);
  };

  // const handleChange = selectedOption => {
  //   const {make, rentalPrice} = selectedOption.value;
  //   console.log('make', make);
  //   console.log('rentalPrice', rentalPrice);

  //   switch (make) {
  //     case "make":
  //       setSelectedValue(make)
  //       break;

  //       case 'rentalPrice':
  //         setSelectedValuePrice(rentalPrice)
  //         break;

  //         default: return;
  //   }
  //   // setSelectedValue(selectedOption.value);

  //   console.log('SelectedValueu 60', selectedValue);
  //   // console.log('selectedValue 61', selectedValue.currentTarget.value);
  // };


  const handleOnClick = evt => {
    try {
      dispatch(filterCar(evt.currentTarget.value));
      console.log('evt.currentTarget.value', evt.currentTarget.value);
      console.log('SelectedValueu ', selectedValue);
      console.log('selectedValuePrice', selectedValuePrice);
      console.log('selectedValueMile', selectedValueMile);
      console.log('selectedValueMileTo', selectedValueMileTo);
    } catch (error) {
      console.log('error', error.messege);
    }
  };


  const handleChangeMile = evt => {
    const { name, value } = evt.currentTarget;
    console.log('name', name);
    console.log('value', value);

    switch (name) {
      case 'selectedValueMile':
        setSelectedValueMile(value);
        break;

      case 'selectedValueMileTo':
        setSelectedValueMileTo(value);
        break;

      default:
        return;
    }
  };


  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__text}>
        Car brand
        <Select
          placeholder="Enter the text..."
          className={css.form__select}
          name="make"
          // value={selectedValue}
          options={[{ value: 'Enter the text...' }, ...makesOptions]}
          onChange={handleChange}
        />
      </label>

      <label className={css.form__text}>
        Price/1 hour
        <Select
          placeholder="To $"
          className={css.form__select}
          name="rentalPrice"
          options={[{ value: 'To $' }, ...rentalPriceOptions]}
          onChange={handleChangePrice}
        />
      </label>

      <label htmlFor="mileFrom" className={css.form__text__mile}>
        Car mileage / km
        <div className={css.form__text__div}>
          <input
            className={css.form__text__input}
            type="text"
            mask='9,999'
            autoComplete="off"
            autoFocus
            name="selectedValueMile"
            // value={selectedValueMileW}
            onChange={handleChangeMile}
            id="mileFrom"
          />
          <label htmlFor="mileFrom" className={css.form__text__inputlabel}>
            From
          </label>
          <input
            // className="input"
            htmlFor="mileTo"
            className={css.form__text__input}
            type="text"
            autoComplete="off"
            autoFocus
            name="selectedValueMileTo"
            onChange={handleChangeMile}
            id="mileTo"
          />
          <label for="mileTo" className={css.form__text__inputlabelto}>
            To
          </label>
        </div>
      </label>

      <button type="submit" className={css.search_btn} onClick={handleOnClick}>
        <span className="button-label">Search</span>
      </button>
    </form>
  );
};

export default Searchbar;
