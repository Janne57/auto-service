import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {

    return (
        <nav>
            <NavLink className={css.link} to="/">Home</NavLink>
            <NavLink className={css.link} to="/catalog">Catalog</NavLink>
            <NavLink className={css.link} to="/favorites">Favorites</NavLink>
        </nav>
    )
}