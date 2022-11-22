import { Button, Span } from "./Contact.styled"
import { deleteContact } from "../../redux/contactsSlice"
import { useDispatch } from "react-redux";


const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <div><Span>{contact.name}: {contact.number}</Span>
            <Button type="button" onClick={handleDelete}>Delete</Button> 
        </div>
    )
}

export default Contact