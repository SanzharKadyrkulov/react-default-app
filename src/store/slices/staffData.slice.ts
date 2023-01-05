import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TPosition = 'tracker' | 'mentor' | 'product manager';

interface IEmployer {
  id: number;
  fio: string;
  image: string;
  position: TPosition;
  startTracker: Date;
  startMentor: Date;
}

interface IState {
  employers: IEmployer[];
  employer: IEmployer | null;
}

const initialState: IState = {
  employers: [],
  employer: null
};

const staffDataSlice = createSlice({
  name: 'staffData',
  initialState,
  reducers: {
    setEmployers(state, action: PayloadAction<IEmployer[]>) {
      state.employers = action.payload;
    },
    setOneEmployer(state, action: PayloadAction<IEmployer>) {
      state.employer = action.payload;
    }
  }
});

export const { setEmployers, setOneEmployer } = staffDataSlice.actions;

export default staffDataSlice.reducer;
