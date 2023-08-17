import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {    
    contacts: contactsReducer,
    filter: filterReducer,
  }, // імена функцій редюсерів, що зберігають стани у сховищі Redux  
}); // абстракція над стандартною createStore функцією Redux, яка додає параметри за замовчуванням до налаштувань сховища для кращого досвіду розробки
