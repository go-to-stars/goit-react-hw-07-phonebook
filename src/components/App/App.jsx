import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, Box, TopTitle, Title } from './App.stiled.jsx'; // імпорт стилів тегів div (Container), div (Box), h1 (TopTitle), h2 (Title)

export const App = () => {
  return (
    <Container>
      <Box>
        <TopTitle>Phonebook</TopTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Box>
    </Container>
  ); // повернення для рендеру розмітки застосунку "Книга контактів"
}; // функція App(), повертає компоненти з даними для рендеру сторінки
