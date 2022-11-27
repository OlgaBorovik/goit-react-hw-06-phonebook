import React from "react";
import PropTypes from "prop-types"
import { ContactsUl, ContactItem } from "./ContactList.styled"
import Contact from "../Contact/Contact"



function ContactList({contacts}) {
    return (
        
            <ContactsUl>
                {contacts.map(contact  => (
                <ContactItem key={contact.id}>
                    <Contact contact={contact}  />    
                </ContactItem>    
                ))}
            </ContactsUl>
        )
    

}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func
}


export default ContactList