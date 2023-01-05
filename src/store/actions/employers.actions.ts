import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { BaseUrl } from '../../utils/consts';
import { setEmployers, setOneEmployer } from '../slices/staffData.slice';

const employersUrl = `${BaseUrl}employers/`;

export const getEmployers = () => async (dispatch: Dispatch<AnyAction>) => {
  const { data } = await axios(employersUrl);
  dispatch(setEmployers(data));
};

export const getOneEmployer = (id: number) => async (dispatch: Dispatch<AnyAction>) => {
  const { data } = await axios(`${employersUrl}/${id}`);

  dispatch(setOneEmployer(data));
};
