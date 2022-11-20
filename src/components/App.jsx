import React from "react";
import ContactsForm from "./ContactsForm/ContactsForm"
import ContactList from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
import {Section, Title, Container} from "./section.styled"
import { useState, useEffect } from "react";
// import { nanoid } from 'nanoid'



const App = () => {
  const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'))

  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState(contactsFromStorage ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ])

  
  useEffect(() => 
    localStorage.setItem('contacts', JSON.stringify(contacts), [contacts]))
  
  const formSubmitHandler = (data) => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts([data, ...contacts]
    )
  }

  const filterChangeHandler = (event) => {
    setFilter(event.target.value)
  }

  const onDeleteContact = ({ id }) => {
    setContacts(contacts.filter(contact => contact.id !== id),
    );
  };

  
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
        <ContactsForm
          onSubmitProp={formSubmitHandler}
        />
        </Container>
        <Container>
        <Title>Contacts</Title>
        <Filter
          onChange={filterChangeHandler}
          value={filter}
        />
        <ContactList
          contacts={filteredContacts}
          onDelete={onDeleteContact}
        />
      </Container>
      </Section>
    )
  

  
}





export default App

