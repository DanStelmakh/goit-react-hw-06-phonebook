import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: { name, id: shortid.generate(), number },
    };
  }
);
export const removeContact = createAction('contacts/removeContact');
export const filteredContacts = createAction('filter/filterContacts');

// export const addContact = (name, number) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: shortid.generate(),
//       number,
//       name,
//     },
//   };
// };
// export const removeContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

// export const filteredContacts = (name, number) => {
//   return {
//     type: 'filter/filterContacts',
//     payload: {
//       id: shortid.generate(),
//       number,
//       name,
//     },
//   };
// };
