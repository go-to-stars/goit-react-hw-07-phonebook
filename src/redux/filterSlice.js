import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = ''; // стан з даними по замовчуванню

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
}); // функція filterSlice, яка приймає «ім’я фрагмента» (name), початковий стан (initialState) та об’єкт функції редюсера (setFilter) та автоматично генерує дії (action), які відповідають редюсеру і стану (state)

export const { setFilter } = filterSlice.actions; // експорт функції редюсера (setFilter) для генерації дій (actions) функції filterSlice 
export const filterReducer = filterSlice.reducer; // експорт редюсера функції filterSlice