import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactSlice';
import { contactsFilterReducer } from './filter/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: contactsFilterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
