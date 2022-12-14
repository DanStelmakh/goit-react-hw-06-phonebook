import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const contactsInitialState = {
  contacts: [
    { id: shortid.generate(), name: 'Dan', number: '123456789' },
    { id: shortid.generate(), name: 'Dad', number: '987456321' },
    { id: shortid.generate(), name: 'Mom', number: '154987536' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            id: shortid.generate(),
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      state.contatcs.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
