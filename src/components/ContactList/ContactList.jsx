import React from "react";
import PropTypes from "prop-types"
import { ContactsUl, ContactItem } from "./ContactList.styled"
import Contact from "../Contact/Contact"
import {getContacts} from "../../redux/selectors"
import { useSelector } from "react-redux";


function ContactList() {
    const contacts = useSelector(getContacts)
    return (
        <div>
            <ContactsUl>
                {contacts.map(contact  => (
                <ContactItem key={contact.id}>
                    <Contact contact={contact}  />    
                </ContactItem>    
                   ))}
            </ContactsUl>
        
      </div>
        )
    

}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func
}


export default ContactList