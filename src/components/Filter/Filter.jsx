import React from 'react';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { FilterTitle } from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'redux/actions';
import { useState } from 'react';

export const Filter = () => {
  const filterContact = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const data = e.currentTarget.value;
    return data;
  };
  return (
    <label>
      <FilterTitle>Find contacts by name:</FilterTitle>
      <Input
        type="text"
        name="filter"
        placeholder="Enter name"
        //   value={}
        //   onChange={}
      ></Input>
    </label>
  );
};
