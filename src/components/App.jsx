// import { useEffect, useState } from 'react';
import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import shortid from 'shortid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/App.styled';

export const App = () => {
  //   const [filter, setFilter] = useState('');

  //   const changeFilter = e => {
  //     setFilter(e.currentTarget.value);
  //   };

  //   const addContact = (name, number) => {
  //     const newContact = {
  //       name,
  //       id: shortid.generate(),
  //       number,
  //     };
  //     if (contacts.some(contact => contact.name === newContact.name)) {
  //       return alert("Can't add already existing contact");
  //     }

  //     setContacts(prevState => [newContact, ...prevState]);
  //   };

  //   const removeContact = contactId => {
  //     setContacts(prevState =>
  //       prevState.filter(contact => contact.id !== contactId)
  //     );
  //   };

  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
      {/* <div>
        <span>Total number of contacts: {contacts.length}</span>
      </div> */}
    </Container>
  );
};
