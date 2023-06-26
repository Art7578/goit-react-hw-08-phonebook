import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={css.nav}>
      {isLoggedIn ? (
        <NavLink
          to="/contacts"
          className={({ isActive }) => {
            return isActive
              ? [css.button, css.active].join(' ')
              : css.button;
          }}
        >
          Contacts
        </NavLink>
      ) : (
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive
              ? [css.button, css.active].join(' ')
              : css.button;
          }}
        >
          Home
        </NavLink>
      )}
    </nav>
  );
}