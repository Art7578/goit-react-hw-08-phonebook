import { NavLink } from 'react-router-dom';
import css from './AuthForm.module.css';

export default function AuthForm() {
  return (
    <div className={css.auth}>
      <NavLink
        to="/login"
        className={({ isActive }) => {
          return isActive
            ? [css.button, css.active].join(' ')
            : css.button;
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => {
          return isActive
            ? [css.button, css.active].join(' ')
            : css.button;
        }}
      >
        Register
      </NavLink>
    </div>
  );
}