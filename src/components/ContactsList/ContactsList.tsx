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

export const ContactsList: FC = () => {
   const user = useAppSelector(selectUser);
     const { data} = useGetContactsQuery<ContactsProps>(user.id)
    return (
        data?.length ? <ContactList>
            {data?.map((item: Contact) =>
                     <ContactItem key={item._id} contact={item} />
              
            )}
        </ContactList> : <Img src={EmptyImg} alt="contactList is empty" />
    )
} 