import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import jwt_decode from 'jwt-decode';
import axiosCustom from '../../utils/axios';
import { BaseUrl } from '../../utils/consts';
import { setUser } from '../slices/auth.slice';

export interface IFields {
  username: string;
  password: string;
}
interface IDecode {
  userID: number;
}

export const login = (fields: IFields) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data: tokens } = await axiosCustom.post(`${BaseUrl}/account/login`, fields);
    localStorage.setItem('token', JSON.stringify(tokens));
    const { userID } = jwt_decode<IDecode>(tokens.access);
    const { data: user } = await axiosCustom.get(`${BaseUrl}/account/profile/${userID}`);
    dispatch(setUser(user));
  } catch (error) {
    console.log('hello', error);
  }
};

export const logout = () => async (dispatch: Dispatch<AnyAction>) => {
  localStorage.removeItem('token');

  dispatch(setUser(null));
};

export const checkAuth = () => async (dispatch: Dispatch<AnyAction>) => {
  const tokens = JSON.parse(localStorage.getItem('token') as string);
  if (tokens) {
    const { userID } = jwt_decode<IDecode>(tokens.access);
    const { data: user } = await axiosCustom.get(`${BaseUrl}/account/profile/${userID}`);
    dispatch(setUser(user));
  } else {
    dispatch(setUser(null));
  }
};

export const refreshAccessToken = async () => {
  const tokens = JSON.parse(localStorage.getItem('token') as string);

  try {
    const { data } = await axiosCustom.post(`${BaseUrl}/account/refresh`, {
      refresh: tokens.refresh
    });

    if (!data?.access) {
      localStorage.removeItem('token');
      window.dispatchEvent(new Event('storage'));
    }

    localStorage.setItem('token', JSON.stringify(data));

    return data.access;
  } catch (error) {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('storage'));
  }
};
