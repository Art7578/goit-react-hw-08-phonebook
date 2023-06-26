import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={css.nav}>
      <div className={css.menu}>
        <p className={css.text}>Current user: {name}</p>
        <p className={css.text}>{email}</p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}