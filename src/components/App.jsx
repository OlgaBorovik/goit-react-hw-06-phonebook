import React from "react";
import ContactsForm from "./ContactsForm/ContactsForm"
import ContactList from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
import {Section, Title, Container} from "./section.styled"
// import { useEffect } from "react";
// import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux"
import { getContacts, getFilter } from "redux/selectors";
import { setFilter } from "../redux/filterSlice"



const App = () => {
  // const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'))

  const filter = useSelector(getFilter)
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  
  // useEffect(() => 
  //   localStorage.setItem('contacts', JSON.stringify(contacts), [contacts]))
  

  const filterChangeHandler = (event) => {
    dispatch(setFilter(event.target.value))
    console.log(filter)
  }

  let filteredContacts = contacts;
    if (filter) {
      filteredContacts = contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
      });
    }

    return (
      <Section>
        <Container>
        <Title>Phonebook</Title>
        <ContactsForm/>
        </Container>
        <Container>
        <Title>Contacts</Title>
        <Filter
          onChange={filterChangeHandler}
          value={filter}
        />
        <ContactList
          contacts={filteredContacts}
        />
      </Container>
      </Section>
    )
  

  
}





export default App

