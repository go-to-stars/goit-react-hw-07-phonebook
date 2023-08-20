import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from '../Loader/Loader';
import Notiflix from 'notiflix';
import { Container, Box, TopTitle, Title } from './App.stiled.jsx'; // імпорт стилів тегів div (Container), div (Box), h1 (TopTitle), h2 (Title)

export const App = () => {
  const dispatch = useDispatch(); //виклик хука useDispatch повертає посилання на dispatch функцію зі сховища Redux, для відправки action за потреби
  const isLoading = useSelector(selectIsLoading); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux (стан isLoading) за допомогою функції селектора
  const error = useSelector(selectError); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux (стан error) за допомогою функції селектора

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); // якщо викликана функція dispatch (ініційована зміна стану) то виконуємо запит на сервер (fetchContacts())

  return (
    <Container>
      <Box>
        <TopTitle>Phonebook</TopTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        {isLoading && !error && <Loader />}
        {error && Notiflix.Notify.failure(`${error}`)}
        {!isLoading && <ContactList />}
      </Box>
    </Container>
  ); // повернення для рендеру розмітки застосунку "Книга контактів"
}; // функція App(), повертає компоненти з даними для рендеру сторінки
