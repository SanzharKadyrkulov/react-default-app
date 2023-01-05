import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  id: number;
  username: string;
  role: 'admin' | 'user';
}

interface IState {
  user: IUser | null;
}

const initialState: IState = {
  user: null
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
