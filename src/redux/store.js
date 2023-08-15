import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    phonebook: persistedReducer,
    filter: filterReducer,
  }, // імена функцій редюсерів, що зберігають стани у сховищі Redux
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), // проміжна вставка (до редюсера) для ігнорування дій (ignoredActions), що викликають помилки (на старті програми, поки не вичитані дані або вони відсутні і т.ін)
}); // абстракція над стандартною createStore функцією Redux, яка додає параметри за замовчуванням до налаштувань сховища для кращого досвіду розробки

export const persistor = persistStore(store); // посилання для persistor-сховища localhost на оригінальне сховище Redux
