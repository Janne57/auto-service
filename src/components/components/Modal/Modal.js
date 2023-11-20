import { useEffect } from 'react';
import css from '../Modal/Modal.module.css';
const { createPortal } = require('react-dom');
// import stop from '../../img/placeholder.png';

const Modal = ({
  ids,
  imgs,
  makes,
  models,
  years,
  rentalPricess,
  addresses,
  rentalCompanyss,
  types,
  accessoriess,
  fuelConsumptionstions,
  engineSizes,
  descriptionss,
  functionalitiesss,
  rentalConditionsstionss,
  mileages,
  onClose,
}) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // console.log ('mount');
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // console.log ('UNMOUNT');
    };
  }, [onClose]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.modal__backdrop} onClick={handleBackdropClick}>
      <div className={css.modal__content}>
        <img
          src={imgs}
          alt={`${makes}`}
          className={css.modal__img}
          width="460"
          h="250"
          onError={event => event.target.src}
        />
        {makes}
        <p className={css.advert__list__text}>
          <div className={css.advert__list__flex}>
            <span className={css.advert__list__textblue}>{models},</span>
            <span>{years}</span>
          </div>
          <span>${rentalPricess}</span>
        </p>
        <p className={css.advert__list__text__opp}>
          <span>{addresses}</span>
          <span>id: {ids}</span>
          <span>{rentalCompanyss}</span>
          <span>{types}</span>
          <span>{functionalitiesss}</span>
        </p>

        <p>{descriptionss}</p>

        <div>
          Accessories and functionalities:
          <p>{accessoriess}</p>
          <p>{functionalitiesss}</p>
        </div>

        <p className={css.advert__list__text__opp}>
          Rental Conditions:
          <span>Minimum age : 25</span>
          <span>Valid driver's license</span>
          <span>Security deposite required</span>
          <span>Mileage:</span>
          <span>{mileages}</span>
          <span>Price:</span>
          <span>{rentalPricess}</span>
        </p>
        {/* imgs, makes, models, years, rentalPricess, addresses, rentalCompanyss,
        types, , fuelConsumptionstions, engineSizes, */}
        <a className={css.advert_btn} href="tel:+380730000000">
          Rental Car
        </a>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
