import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';

export default function ProtectedRoutes(): JSX.Element {
  const {
    auth: { user }
  } = useTypedSelector((state) => state);

  function isAllowed(): boolean {
    if (user) return true;
    return false;
  }

  return isAllowed() ? <Outlet /> : <Navigate to="/login" />;
}
