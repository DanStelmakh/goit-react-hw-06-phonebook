import React from 'react';
import { Btn, List, Item } from 'components/ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts, getContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContacts);
  const visibleContacts = () => {
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filteredContacts;
  };
  return (
    <List>
      {visibleContacts().map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Btn
            type="button"
            onClick={() => dispatch(removeContact(contact.id))}
          >
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};
