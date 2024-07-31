import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactsList } from "../components/ContactsList/ContactsList";
import { selectUser } from "../redux/auth/selectors"
import { useGetContactsQuery } from "../redux/contacts/contactsApi"
import { useAppSelector } from "../redux/store";



export const ContactsPage = () => {
    const user = useAppSelector(selectUser);
     const { data} = useGetContactsQuery(user.id)
    

    return (
        <>
            <ContactForm />
            <ContactsList contacts={data} />
        </>        
    )
}