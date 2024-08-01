
import { useState } from "react";
import { ContactManagement } from "../components/ContactManagement/ContactManagement";
import { ContactsList } from "../components/ContactsList/ContactsList";





export const ContactsPage = () => {
  const [search, setSearch] = useState<string>('');
    

    const handleSearch = (filter:string) => {
        setSearch(filter)
    }
    

    return (
        <>
            <ContactManagement filter={search} onFilter={handleSearch} />
            <ContactsList filter={search} />
        </>        
    )
}