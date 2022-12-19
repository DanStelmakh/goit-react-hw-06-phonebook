import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const contactsInitialState = {
  contacts: [],
  filter: '',
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
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
