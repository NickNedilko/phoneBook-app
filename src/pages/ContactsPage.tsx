import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactsList } from "../components/ContactsList/ContactsList";
import { useAuth } from "../hooks/useAuth"
import { selectUser } from "../redux/auth/selectors"
import { useGetContactsQuery } from "../redux/contacts/contactsApi"



export const ContactsPage = () => {
    const { user } = useAuth(selectUser);
    
     const { data} = useGetContactsQuery(user.id)
     console.log(data)

    return (
        <>
        <h1>Contacts Page!</h1>
            <ContactForm />
            <ContactsList contacts={data} />
        </>        
    )
}