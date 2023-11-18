import React from 'react';
// import { ColorRing } from 'react-loader-spinner';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCars, getError, getIsLoading, getFilter } from 'redux/selectors.js';
import { getCars } from '../../redux/selector';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/operations';
import stop from '../../img/placeholder.png';
import css from './CatalogForm.module.css';

const CatalogForm = () => {
  const cars = useSelector(getCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <ul className={css.advert__list}>
        {cars.map(
          ({
            id,
            make,
            model,
            year,
            rentalPrice,
            img,
            address,
            rentalCompany,
            type,
            functionalities,
          }) => (
            <li key={id} className={css.advert__list__item}>
              <img
                src={img || stop}
                alt={make}
                className={css.advert__list__image}
                width="274"
                height="268"
                onError={event => (event.target.src = stop)}
              />
              <button className={css.advert_icon_btn} style={{stroke: 'red' }}>
                <i className="fa fa-heart" ></i>
              </button>
              {/* <a href="" class="logo">WEB<span class="logo-studio">STUDIO</span></a> */}
              <p className={css.advert__list__text}>
                <div className={css.advert__list__flex}>
                  <span>{make}</span>
                  <span className={css.advert__list__textblue}>{model},</span>
                  <span>{year}</span>
                </div>
                <span>${rentalPrice}</span>
              </p>
              <p className={css.advert__list__text__opp}>
                <span>{address}</span>
                <span>{rentalCompany}</span>
                <span>{type}</span>
                <span>{id}</span>
                <span>{functionalities[1]}</span>
              </p>
              {/* <p className={css.contact__item__numb}>{year}</p>
              <p className={css.contact__item__numb}>{rentalPrice}</p>

              <p className={css.contact__item__numb}>{address}</p>
              <p className={css.contact__item__numb}>{rentalCompany}</p>
              <p className={css.contact__item__numb}>{type}</p>
              <p className={css.contact__item__numb}>{id}</p>
              <p className={css.contact__item__numb}>{functionalities}</p> */}
              <button
                className={css.advert_btn}
                //   onClick={() => {handleDelete(id);}}
                //   disabled={result.isFetching}
              >
                Learn more
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CatalogForm;
