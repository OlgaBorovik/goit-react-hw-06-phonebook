import React, { useMemo } from "react";
import ContactsForm from "./ContactsForm/ContactsForm"
import ContactList from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
import {Section, Title, Container} from "./section.styled"
import { useSelector } from "react-redux"
import { getContacts, getFilter } from "redux/selectors";




const App = () => {
  const filter = useSelector(getFilter)
  const contacts = useSelector(getContacts)

  console.log(contacts)
  
  const filteredContacts = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

    
  return (
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <ContactsForm/>
        </Container>
        <Container>
          <Title>Contacts</Title>
          <Filter />
          <ContactList contacts={filteredContacts} />
      </Container>
      </Section>
    )
  

  
}

export default App

