import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import css from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ ...form }));
    setForm({ email: '', password: '' });
  };

  const { email, password } = form;

  return (
    <div className={css.section}>
      <h2 className={css.title}>Please enter your email and password</h2>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            title="Enter your email"
            placeholder="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            title="Enter your password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={css.button}>
          Log In
        </button>
      </form>
    </div>
  );
}