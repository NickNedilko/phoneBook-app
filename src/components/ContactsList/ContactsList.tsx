import { FC } from "react"
import { ContactItem } from "../ContactItem/ContactItem"
import { Contact } from "../../types/types"
import { useAppSelector } from "../../redux/store";
import { selectUser } from "../../redux/auth/selectors";
import { useGetContactsQuery } from "../../redux/contacts/contactsApi";
import { ContactList, Img } from "./ContactsList.styled";
import EmptyImg from "../../assets/empty.webp"

interface ContactsProps {
  data: Contact[] ,
}

interface ContactListProps {
  filter : string
}

export const ContactsList: FC<ContactListProps> = ({filter}) => {
   const user = useAppSelector(selectUser);
  const { data } = useGetContactsQuery<ContactsProps>(user.id)
  

  const filteredContacts = data?.filter(contact => {
    const normalizedFilter = filter.toLocaleLowerCase().trim();
    return contact.name.toLocaleLowerCase().trim().includes(normalizedFilter)
  })

    return (
        filteredContacts?.length ? <ContactList>
            {filteredContacts?.map((item: Contact) =>
                     <ContactItem key={item._id} contact={item} />
              
            )}
        </ContactList> : <Img src={EmptyImg} alt="contactList is empty" />
    )
} 