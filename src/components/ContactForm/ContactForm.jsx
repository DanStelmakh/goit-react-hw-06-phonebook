import React from 'react';
import { useState } from 'react';
import { ReactComponent as IconTel } from '../../icons/telephone.svg';
import { ReactComponent as IconAdd } from '../../icons/add-user.svg';

import {
  Form,
  Input,
  Btn,
  Txt,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    //  onSubmit(name, number);
    const name = e.target.elements.name.value;
    console.log(name, `name`);
    const number = e.target.elements.number.value;

    dispatch(addContact(name, number));

    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Txt>
        Name <IconAdd width="20px" height="20px" />
      </Txt>

      <Input
        autoComplete="off"
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Txt>
        Number <IconTel width="20px" height="20px" />
      </Txt>
      <Input
        autoComplete="off"
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};
