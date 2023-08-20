import { useSelector } from 'react-redux';
import { selectVisibleContact } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled'; // імпорт стилів тегів ul(List), li(ListItem), p(Text), Button

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContact); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux за допомогою функції селектора selectVisibleContact

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
    ) // створення списку елементів ul, якщо є хоча б один контакт, що відповідає критеріям пошуку
  );
}; // повернення розмітки списку контактів функції ContactList
