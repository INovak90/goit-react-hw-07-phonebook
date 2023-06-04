import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    filter(state, action) {
      return (state = action.payload);
    },
  },
});

export const contactsFilterReducer = contactsFilterSlice.reducer;
export const { filter } = contactsFilterSlice.actions;
