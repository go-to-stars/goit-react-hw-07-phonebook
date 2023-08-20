import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import PropTypes from 'prop-types'; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { Text, Button } from './ContactListItem.styled'; // імпорт стилів тегів ul(List), li(ListItem), p(Text), Button

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch(); //виклик хука useDispatch повертає посилання на dispatch функцію зі сховища Redux, для відправки action за потреби

  const onDeleteContact = id => {    
    dispatch(deleteContact(id));
  }; // функція onDeleteContact видаляє контакт по id

  return (
    <>
      <Text>
        &#8226; {name}: {number}
      </Text>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </> // створення елементів для елементу списку li; при настанні події onClick викликається функція onDeleteContact
  );
}; // повернення розмітки елементу списку контактів компонента ContactListItem

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}; // типізація (опис типів) пропсів компоненту ContactListItem
