import { FC } from "react"
import { ContactItem } from "../ContactItem/ContactItem"
import { Contact } from "../../types/types"

interface ContactsProps {
  cars: Contact[],
  
}

export const ContactsList: FC<ContactsProps> = ({ contacts  }) => {
   
    return (
        <ul>
            {contacts?.map((contact : Contact) =>
                
                     <ContactItem key={contact._id} contact={contact} />
              
            )}
        </ul>
    )
} 