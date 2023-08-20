import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items; // експорт функції селектору selectContacts, що повертає список контактів зі стану сховища Redux (за допомогою виклика хука useSelector)

export const selectIsLoading = state => state.contacts.isLoading; // експорт функції селектору selectIsLoading, що повертає поточний стан завантаження контактів зі стану сховища Redux (за допомогою виклика хука useSelector)

export const selectError = state => state.contacts.error; // експорт функції селектору selectError, що повертає повідомлення значення об'єкта помилки завантаження контактів зі стану сховища Redux (за допомогою виклика хука useSelector)

export const selectFiltered = state => state.filter; // експорт функції селектору selectFilter, що повертає значення пошуку (списку, що відповідає критеріям пошуку) зі стану сховища Redux (за допомогою виклика хука useSelector)

export const selectVisibleContact = createSelector(
  [selectContacts, selectFiltered],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
