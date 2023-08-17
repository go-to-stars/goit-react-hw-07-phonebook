import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from '../Loader/Loader';
import { Container, Box, TopTitle, Title } from './App.stiled.jsx'; // імпорт стилів тегів div (Container), div (Box), h1 (TopTitle), h2 (Title)

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Box>
        <TopTitle>Phonebook</TopTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        {isLoading && !error && <Loader />}
        {error && <p>{error}</p>}
        {!isLoading && <ContactList />}
      </Box>
    </Container>
  ); // повернення для рендеру розмітки застосунку "Книга контактів"
}; // функція App(), повертає компоненти з даними для рендеру сторінки
