// import { useCallback, useState } from 'react';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { getCars } from '../../redux/selector';
import { rentalPrice } from '../../hooks/const';

import css from './Searchbar.module.css';
// import Notiflix from 'notiflix';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  // const [valueSelect, setValueSelect] = useState({
  //   value: 'Enter the text...',
  //   label: 'Enter the text...',
  // });
 
  // const [inputValue, setInputValue] = useState('');
  const cars = useSelector(getCars);

  const [selectedValue, setSelectedValue] = useState('');



  let makesOptions = [];
  let rentalPriceOptions = [];


  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('evt.currentTarget.value', evt.currentTarget.value);

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



  // const handleInputChange = inputValue => {
  //   setValueSelect(inputValue);
  //   console.log('inputValue', inputValue);
  // };


  const handleChange = selectedOption => {
    setSelectedValue(selectedOption.value);
    console.log('SelectedValueu 98', selectedValue);
  };

  
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__text}>
        Car brand
        <Select
          placeholder="Enter the text..."
          className={css.form__select}
          name="make"
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
          onChange={handleChange}
        />
      </label>

      <label htmlFor="mileFrom" className={css.form__text__mile}>
        Car mileage / km
        <div className={css.form__text__div}>
          <input
            className={css.form__text__input}
            type="text"
            mask="9,999"
            autoComplete="off"
            autoFocus
            name="query"
            value={query}
            // onChange={handleChange}
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
            name="query"
            value={query}
            // onChange={handleChange}
            id="mileTo"
          />
          <label for="mileTo" className={css.form__text__inputlabelto}>
            To
          </label>
        </div>
      </label>

      <button type="submit" className={css.search_btn}>
        <span className="button-label">Search</span>
      </button>
    </form>
  );
};

export default Searchbar;
