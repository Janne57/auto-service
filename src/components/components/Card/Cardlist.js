import React from 'react';
// import { ColorRing } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import stop from '../../img/placeholder.png';
import {
  addCarsFavorite,
  deleteCarsFavorite,
} from '../../redux/carFavoriteSlice';
// import Modal from '../Modal/Modal.js';
import { useSelector } from 'react-redux';
import { getFavoriteCars } from '../../redux/selector';
import css from './CardList.module.css';

const CardList = ({ carsData }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(getFavoriteCars);
  console.log('favoriteCars', favoriteCars);

  const handleClickFavorite = carInfo => {
    if (!favoriteCars.some(car => car.id === carInfo.id)) {
      dispatch(addCarsFavorite(carInfo));
    } else {
      dispatch(deleteCarsFavorite(carInfo));
    }
  };

  return (
    <div>
      <ul className={css.advert__list}>
        {carsData.map(
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
              <button
                type="submit"
                onClick={() =>
                  handleClickFavorite({
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
                  })
                }
                className={css.advert_icon_btn}
                style={{ stroke: 'red' }}
              >
                <i className="fa fa-heart"></i>
              </button>
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
              <button
                type="button"
                className={css.advert_btn}
                // onClick={toggleModal}
              >
                Learn more
              </button>
            </li>
          )
        )}
        {/* {isShowModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={toggleModal}
        />
      )} */}
      </ul>
    </div>
  );
};

export default CardList;
