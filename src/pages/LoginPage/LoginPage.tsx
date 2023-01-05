import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IFields } from '../../store/actions/auth.actions';

import classes from './LoginPage.module.scss';

const LoginPage = (): JSX.Element => {
  const { user } = useTypedSelector((state) => state.auth);
  const { login } = useActions();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  const ref = useRef<IFields>({ username: '', password: '' });
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const body = { ...ref.current };
    login(body);
  };
  return (
    <div className={classes.screen}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="username"
          type="text"
          required
          onChange={(e) => (ref.current = { ...ref.current, username: e.target.value })}
        />
        <input
          name="password"
          type="text"
          required
          onChange={(e) => (ref.current = { ...ref.current, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
