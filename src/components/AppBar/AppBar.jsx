import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import AuthForm from 'components/AuthForm';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import css from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthForm />}
      </div>
    </header>
  );
}