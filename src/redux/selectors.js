export const getContacts = state => state.phonebook.contacts; // експорт функції селектору getContacts. що повертає список контактів зі стану сховища Redux (за допомогою виклика хука useSelector)

export const getFilter = state => state.filter; // експорт функції селектору getFilter, що повертає значення зі стану сховища Redux (за допомогою виклика хука useSelector)
