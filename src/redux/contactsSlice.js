import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const isPending = state => {
  state.isLoading = true;
}; // функція isPending, змінює значення стейту isLoading на true

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}; // функція isRejected, змінює значення стейту isLoading на false та записує в стейт текст повідомлення об'єкта помилки

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  }, // форму стану за замовчуванням
  extraReducers: {
    [fetchContacts.pending]: isPending, // очікування завантаження списку контактів (стан isLoading = true)
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    }, // успішне виконання запиту (список контактів): зміна стану isLoading на false, обнулення помилки, запис даних (списку контактів) в стан
    [fetchContacts.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу запиту списку контактів, зміна стану isLoading на false
    [addContact.pending]: isPending, // очікування завантаження списку контактів після додавання контакту (стан isLoading = true)
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    }, // успішне виконання запиту (додавання контакту): зміна стану isLoading на false, обнулення помилки, запис даних (списку контактів з доданим) в стан
    [addContact.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу запиту списку контактів, після додавання, зміна стану isLoading на false
    [deleteContact.pending]: isPending, // очікування завантаження списку контактів після видалення контакту (стан isLoading = true)
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.splice(
        state.items.findIndex(contact => contact.id === action.payload.id),
        1
      );
    }, // успішне виконання запиту (видалення контакту): зміна стану isLoading на false, обнулення помилки, запис даних (списку контактів після видалення) в стан
    [deleteContact.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу запиту списку контактів, після додавання, зміна стану isLoading на false
  },
});

export const contactsReducer = contactsSlice.reducer; // експорт редюсера функції contactsSlice

// з завдання:
// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }

// fetchContacts - одержання масиву контактів
// addContact - додавання контакту
// deleteContact - видалення контакту
