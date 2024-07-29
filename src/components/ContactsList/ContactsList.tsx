import { ContactItem } from "../ContactItem/ContactItem"


export const ContactsList = ({ contacts }) => {
    console.log(contacts)
    return (
        <ul>
            {contacts?.map(contact =>
                
                     <ContactItem key={contact._id} contact={contact} />
              
            )}
        </ul>
    )
} 