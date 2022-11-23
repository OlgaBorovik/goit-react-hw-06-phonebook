import { nanoid } from "nanoid";
import React from "react";
import { Form, Label, Input, Button } from "./ContactForm.styled"
import { useDispatch, useSelector } from "react-redux"
import { addContact } from "../../redux/contactsSlice"
import { getContacts } from "redux/selectors";

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)
    
  const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.target;
      const newContact = {
          id: nanoid(5),
          name: form.elements.name.value,
          number: form.elements.number.value
        }
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      form.reset();
      return;
    }
      dispatch(addContact( newContact.name, newContact.number, newContact.id,));
      console.log(newContact)
      
    form.reset();
    
    }
      return (
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </Label>
                <Label>
                    Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        )
    
}

export default ContactsForm

