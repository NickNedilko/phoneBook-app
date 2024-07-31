import { FC } from "react"
import { ContactItem } from "../ContactItem/ContactItem"
import { Contact } from "../../types/types"
import { useAppSelector } from "../../redux/store";
import { selectUser } from "../../redux/auth/selectors";
import { useGetContactsQuery } from "../../redux/contacts/contactsApi";

interface ContactsProps {
  data: Contact[] ,
}

export const ContactsList: FC = () => {
   const user = useAppSelector(selectUser);
     const { data} = useGetContactsQuery<ContactsProps>(user.id)
    return (
        <ul>
            {data?.map((item: Contact) =>
                
                     <ContactItem key={item._id} contact={item} />
              
            )}
        </ul>
    )
} 