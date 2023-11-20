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
  const [valueSelect, setValueSelect] = useState('');
  // const [inputValue, setInputValue] = useState('');
  const cars = useSelector(getCars);


  let makesOptions = [];
  let rentalPriceOptions = [];

  
  const handleChange = (event) => {
  //   console.log('event.currentTarget', event.currentTarget);
  //   console.log('event.target.value', event.target.value);
    const selectedValue = event.currentTarget;
    setValueSelect(selectedValue);
   
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setQuery(evt.currentTarget.value);
    onSubmit(query.trim()); 
    setQuery('');
  };

  
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

  

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__text}>
        Car brand
        <Select
          className={css.form__select}
          // placeholder="Select..."
          defaultValue={{
            value: 'Enter the text...',
            label: 'Enter the text...',
          }}
          name="make"
          value={{ value: '', label: valueSelect || 'Enter the text...' }}
          options={[{ value: 'Enter the text...' }, ...makesOptions]}
          // onChange={cars => handleSetSearchParams('make', cars.value)}
          // onChange={data => handleSetSearchParams('make', data.make)}
          onChange ={e => handleChange(e)}
          //  onChange ={handleChange}
          // inputValue={inputValue}
          // onInputChange={evt => handleInputChange(evt)}
          // onInputChange={handleChange}
          // styles={style}
        ></Select>
      </label>

      <label className={css.form__text}>
        Price/1 hour
        <Select
          className={css.form__select__price}
          placeholder="Select..."
          defaultValue={{
            value: 'To $',
            label: 'To $',
          }}
          name="rentalPrice"
          // value={{ value: '', label: makeParam || 'Enter the text...' }}
          value={{ value: '', label: 'To $' }}
          options={[{ value: 'To $' }, ...rentalPriceOptions]}
          // options={[{ value: 'To $' }, rentalPrice]}
          // onChange={data => handleSetSearchParams('make', data.value)}
          // inputValue={inputValue}
          // onInputChange={evt => handleInputChange(evt)}
          // styles={style}

        />
      </label>

      <label className={css.form__text__mile}>
        Car mileage / km
        <div className={css.form__text__div}>
          <input
            className={css.form__text__input}
            // className="input"
            type="text"
            autoComplete="off"
            autoFocus
            // placeholder="Enter the text"
            name="query"
            value={query}
            // onChange={handleChange}
            id="mileFrom"
          />
          <label for="mileFrom" className={css.form__text__inputlabel}>
            From
          </label>
          <input
            // className="input"
            className={css.form__text__input}
            type="text"
            autoComplete="off"
            autoFocus
            // placeholder="Enter the text"
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
    // </header>
  );
};

export default Searchbar;
