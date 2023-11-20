import React, { useState } from 'react';
// import { ColorRing } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import stop from '../../img/placeholder.png';
import {
  addCarsFavorite,
  deleteCarsFavorite,
} from '../../redux/carFavoriteSlice';
import Modal from '../Modal/Modal.js';
import { useSelector } from 'react-redux';
import { getFavoriteCars } from '../../redux/selector';
import css from './CardList.module.css';

const CardList = ({ carsData }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(getFavoriteCars);
  const [isShowModal, setIsShowModal] = useState(false);
  const [ids, setIds]= useState(null);
  const [imgs, setImgs] = useState(null);
  const [makes, setMakes] = useState(null);
  const [models, setModels] = useState(null);
  const [years, setYears] = useState(null);
  const [rentalPrices, setRentalPrices] = useState(null);
  const [addresses, setAddresses] = useState(null);
  const [rentalCompanys, setRentalCompanys] = useState(null);
  const [types, setTypes] = useState(null);
  const [accessoriess, setAccessoriess] = useState(null);
  const [fuelConsumptions, setFuelConsumptions] = useState(null);
  const [engineSizes, setEngineSizes] = useState(null);
  const [descriptions, setDescriptions] = useState(null);
  const [functionalitiess, setFunctionalitiess] = useState(null);
  const [rentalConditionss, setRentalConditionss] = useState(null);
  const [mileages, setMileages] = useState(null);
  

  const handleClickFavorite = carInfo => {
    if (!favoriteCars.some(car => car.id === carInfo.id)) {
      dispatch(addCarsFavorite(carInfo));
    } else {
      dispatch(deleteCarsFavorite(carInfo));
    }
  };


  const openModal = ({
    id,
    make,
    model,
    year,
    rentalPrice,
    img,
    address,
    rentalCompany,
    type,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    mileage,
  }) => {
    setIsShowModal(true);
    setIds(id);
    setImgs(img);
    setMakes(make);
    setModels(model);
    setYears(year);
    setRentalPrices(rentalPrice);
    setAddresses(address);
    setRentalCompanys(rentalCompany);
    setTypes(type);
    setAccessoriess(accessories);
    setFuelConsumptions(fuelConsumption);
    setEngineSizes(engineSize);
    setDescriptions(description);
    setFunctionalitiess(functionalities);
    setRentalConditionss(rentalConditions);
    setMileages(mileage);
  };

  const closeModal = () => {
    setIsShowModal(false);
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
            accessories,
            fuelConsumption,
            engineSize,
            description,
            functionalities,
            rentalConditions,
            mileage,
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
                    accessories,
                    fuelConsumption,
                    engineSize,
                    description,
                    functionalities,
                    rentalConditions,
                    mileage,
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
                onClick={() => {
                  openModal({
                    id,
                    make,
                    model,
                    year,
                    rentalPrice,
                    img,
                    address,
                    rentalCompany,
                    type,
                    accessories,
                    fuelConsumption,
                    engineSize,
                    description,
                    functionalities,
                    rentalConditions,
                    mileage,
                  });
                }}
              >
                Learn more
              </button>
            </li>
          )
        )}
        {isShowModal && (
          <Modal 
          ids={ids}
          imgs={imgs} 
          makes={makes} 
          models ={models}
          years={years}
          rentalPrices={rentalPrices}
          addresses={addresses}
          rentalCompanys={rentalCompanys}
          types={types}
          accessoriess={accessoriess}
          fuelConsumptions={fuelConsumptions}
          engineSizes={engineSizes}
          descriptions={descriptions}
          functionalitiess={functionalitiess}
          rentalConditionss={rentalConditionss}
          mileages={mileages}

          onClose={closeModal}>
          </Modal>
        )}
      </ul>
    </div>
  );
};

export default CardList;
