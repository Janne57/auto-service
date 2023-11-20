import css from '../Modal/ModalData.module.css';

export default function ModalData({ dataArr, onBtnClick }) {
  return (
    <>
      {dataArr.map(({ id, imgs, makes }) => {
        return (
          <li className={css.imageGalleryItem} key={id}>
            <img
              className={css.imageGalleryItem__image}
              src={imgs}
              alt={makes}
              onClick={()=> {onBtnClick({imgs, makes})}}
            />
          </li>
        );
      })}
    </>
  );
}