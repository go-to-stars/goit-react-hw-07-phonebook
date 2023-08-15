import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled'; // імпорт стилів тегів ul(List), li(ListItem), p(Text), Button

export const ContactList = () => {
  const contacts = useSelector(getContacts); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux за допомогою функції селектора getContacts
  const filter = useSelector(getFilter); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux за допомогою функції селектора getFilter

  const filterContacts = () =>
    filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  // функція filterContacts повертає повний список контактів, якщо поле фільтра порожнє, інакше повертає відфільтровний список контактів, приведений до нижнього регістру

  const filteredContacts = filterContacts(); // масив відфільтрованих контактів

  return (
    filteredContacts.length > 0 && (
      <List>
        {filteredContacts.map(item => (
          <ListItem key={item.id}>
            <ContactListItem
              id={item.id}
              name={item.name}
              number={item.number}
            />
          </ListItem>
        ))}
      </List>
    ) // створення списку елементів ul, якщо є хоча б один контакт
  );
}; // повернення розмітки списку контактів функції ContactList
