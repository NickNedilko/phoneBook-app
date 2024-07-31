import { FC } from "react"
import { ContactItem } from "../ContactItem/ContactItem"
import { Contact } from "../../types/types"

interface ContactsProps {
  contacts: Contact[] | [],
  
}

export const ContactsList: FC<ContactsProps> = ({ contacts  }) => {
   
    return (
        <ul>
            {contacts?.map((item: Contact) =>
                
                     <ContactItem key={item._id} contact={item} />
              
            )}
        </ul>
    )
} 