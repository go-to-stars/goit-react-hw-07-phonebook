export const selectContacts = state => state.contacts.items; // експорт функції селектору selectContacts, що повертає список контактів зі стану сховища Redux (за допомогою виклика хука useSelector)

export const selectIsLoading = state => state.contacts.isLoading; // експорт функції селектору selectIsLoading, що повертає поточний стан завантаження контактів зі стану сховища Redux (за допомогою виклика хука useSelector)

export const selectError = state => state.contacts.error; // експорт функції селектору selectError, що повертає повідомлення значення об'єкта помилки завантаження контактів зі стану сховища Redux (за допомогою виклика хука useSelector)

export const selectFilter = state => state.filter; // експорт функції селектору selectFilter, що повертає значення пошуку зі стану сховища Redux (за допомогою виклика хука useSelector)

