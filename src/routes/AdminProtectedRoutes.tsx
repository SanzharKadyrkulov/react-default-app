import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';

export default function AdminProtectedRoutes(): JSX.Element {
  const {
    auth: { user }
  } = useTypedSelector((state) => state);

  function isAllowed(): boolean {
    if (user && user.role === 'admin') return true;
    return false;
  }

  return isAllowed() ? <Outlet /> : <Navigate to="/login" />;
}
