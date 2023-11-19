import Searchbar from 'components/components/SearchBar/Searchbar';
import FavoriteCarForm from '../components/FavoriteForm/FavoriteForm';
import css from './FavoriteCarPage.module.css';

export default function FavoriteCarPage() {
  return (
    <div className={css.container}>
      <Searchbar />
      <FavoriteCarForm />
    </div>
  );
}