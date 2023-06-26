import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import css from './HomeView.module.css';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/contacts" />
      ) : (
        <div className={css.section}>
          <h1 className={css.title}>Phonebook app</h1>
          <p className={css.text}>
            Please register or log in to start to work with the app.
          </p>
        </div>
      )}
    </>
  );
}