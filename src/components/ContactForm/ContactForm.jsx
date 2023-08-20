import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  Label,
  Input,
  Button,
  Error,
} from './ContactForm.styled'; // імпорт стилів тегів form (FormContainer), label (Label), input (Input), button (Button)

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/; // регулярний вираз для імені
const numberRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/; // регулярний вираз для номера телефону

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(nameRegex, 'Name is not valid!')
    .trim()
    .required('Required!'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(numberRegex, 'Phone number is not valid!')
    .trim()
    .required('Required!'),
}); // валідація полів форми

const INITIAL_STATE = {
  name: '',
  number: '',
}; // ініціалізація полів форми

export const ContactForm = () => {
  const contacts = useSelector(selectContacts); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux за допомогою функції селектора selectContacts
  const dispatch = useDispatch(); //виклик хука useDispatch повертає посилання на dispatch функцію зі сховища Redux, для відправки action за потреби
  const addNewContact = e => {
    if (
      contacts.find(
        item =>
          item.name.toLowerCase().replaceAll(' ', '') ===
          e.name.toLowerCase().replaceAll(' ', '')
      ) // при порівнянні приводимо до нижнього регістру та видаляємо пробіли, для унеможливлення реєстрації однакових імен з додатковими пробілами
    ) {
      return Notiflix.Notify.warning(`Name ${e.name} is already in contacts`); // якщо в списку контактів існує контакт з таким ім'ям, вийти та вивести відповідне повідомлення
    } else if (
      contacts.find(
        item =>
          item.number
            .replaceAll('+', '')
            .replaceAll(' ', '')
            .replaceAll('(', '')
            .replaceAll(')', '')
            .replaceAll('-', '') ===
          e.number
            .replaceAll('+', '')
            .replaceAll(' ', '')
            .replaceAll('(', '')
            .replaceAll(')', '')
            .replaceAll('-', '')
      ) // при порівнянні видаляємо плюс, пробіли, дужки та тире, якщо вони є, для унеможливлення реєстрації однакових номерів з додатковими символами
    ) {
      return Notiflix.Notify.warning(`Number ${e.name} is already in contacts`); // якщо в списку контактів існує контакт з таким номером телефону, вийти та вивести відповідне повідомлення
    }

    dispatch(addContact({ id: nanoid(), name: e.name, number: e.number })); // інакше, додати цей новий контакт до сховища stor

    e.name = ''; // очищення поля name форми
    e.number = ''; // очищення поля number форми
  }; // функція addContact додає новий контакт в сховище stor, що містить дерево стану нашого застосунку

  return (
    <Formik
      initialValues={INITIAL_STATE}
      validationSchema={schema}
      onSubmit={addNewContact}
    >
      <FormContainer>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <Error name="name" component="p" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Error name="number" component="p" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  ); // при настанні події onSubmit викликається функція addNewContact
}; // повернення для рендеру розмітки форми (теги Label і Input для кожного поля форми та тег Button)
