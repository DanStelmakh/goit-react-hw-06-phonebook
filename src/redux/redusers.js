import shortid from 'shortid';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, filteredConatcts } from './actions';

const initialState = {
  contacts: [
    { id: shortid.generate(), name: 'Dan', number: 123456789 },
    { id: shortid.generate(), name: 'Dad', number: 232145678 },
    { id: shortid.generate(), name: 'Mom', number: 456987123 },
  ],
};

export const contactReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    console.log(state);
    return [state, action.payload];
  },
  [removeContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

//     case 'contacts/deleteContact': {
//       return {
//         contacts: state.filter(contact => contact.id !== action.payload),
//       };
//     }

//     default:
//       return state;
//   }
// };

// const filterInitialState = {
//   filter: ``,
// };

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter/filterContacts':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     default:
//       return state;
//   }
// };
