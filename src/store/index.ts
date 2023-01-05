import { configureStore } from '@reduxjs/toolkit';
import staffDataReducer from './slices/staffData.slice';
import authReducer from './slices/auth.slice';

export const store = configureStore({
  reducer: {
    staffData: staffDataReducer,
    auth: authReducer
  }
});

export type TRootState = ReturnType<typeof store.getState>;
