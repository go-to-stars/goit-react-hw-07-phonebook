import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64dbf587593f57e435b19048.mockapi.io'; // глобальні значення за замовчуванням для axios які будуть застосовані до кожного запиту (з мого аккаунту)

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts'); // запит списку контактів
      return response.data; // при успішному запиті повертаємо проміс із даними (список контактів)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } // при помилці запиту повертаємо проміс, який буде відхилений з текстом помилки (функцію thunkAPI.rejectWithValue з аргументом - повідомленням об'єкта помилки)
  }
); // асинхронна фукція fetchContacts очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (список контактів)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number }); // запит на додавання контакту з name і number у список контактів (id генерує бекенд)
      return response.data; // при успішному запиті повертаємо проміс із даними (доданий контакт)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } // при помилці запиту повертаємо проміс, який буде відхилений з текстом помилки (функцію thunkAPI.rejectWithValue з аргументом - повідомленням об'єкта помилки)
  }
); // асинхронна фукція addContact очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (список контактів після додавання контакту)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`); // запит на видалення контакту з id з списку контактів
      return response.data; // при успішному запиті повертаємо проміс із даними (видалений контакт)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } // при помилці запиту повертаємо проміс, який буде відхилений з текстом помилки (функцію thunkAPI.rejectWithValue з аргументом - повідомленням об'єкта помилки)
  }
); // асинхронна фукція addContact очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (список контактів після видалення контакту)

// з завдання:
// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".
