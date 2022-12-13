import React from 'react';
import { Btn, List, Item } from 'components/ContactList/ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/actions';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(`contacts`, contacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => (
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

// class ContactList extends React.Component {
//   render() {

//   }
// }
// export { ContactList };
