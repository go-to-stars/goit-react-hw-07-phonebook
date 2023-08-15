import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]; // стан з даними по замовчуванню

export const сontactsSlice = createSlice({
  name: 'phonebook',
  initialState: { contacts: initialContactsState }, 
  reducers: {
    addContact: (state, action) => {     
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
}); // функція сontactsSlice, яка приймає «ім’я фрагмента» (name), початковий стан (initialState) та об’єкт функцій редюсера (addContact, deleteContact) та автоматично генерує дії (action), які відповідають редюсерам і стану (state)

const persistConfig = {
  key: 'phonebook_contacts',
  storage,
}; // конфігурація persist-редюсера (назва ключа у localstorage (key) та сховище (storage)) 

export const persistedReducer = persistReducer(
  persistConfig,
  сontactsSlice.reducer
); // експорт persist-редюсера 

export const { addContact, deleteContact } = сontactsSlice.actions; // експорт функцій редюсера (addContact, deleteContact) для генерації дій (actions) функції сontactsSlice

// Selectors


