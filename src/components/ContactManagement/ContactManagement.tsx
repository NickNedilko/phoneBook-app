import * as ReactDOM from 'react-dom';
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material"
import { GiArchiveResearch } from "react-icons/gi"
import { Button } from "@mui/material";
import { FaAddressBook } from "react-icons/fa";
import { useState } from "react";
import { Modal } from '../Modal/Modal';
import { ContactForm } from '../ContactForm/ContactForm';
import { Wrapper } from './ContactManagement.styled';


export const ContactManagement = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Wrapper>
               <Button variant="contained" endIcon={<FaAddressBook />} onClick={()=>setIsOpen(true)}>
  Add new Contact
            </Button>
        <FormControl fullWidth sx={{ width: 400}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Search contact</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"><GiArchiveResearch size={"20px"} /></InputAdornment>}
          />
        </FormControl>
          {isOpen && ReactDOM.createPortal (<Modal onClose={()=>setIsOpen(false)}><ContactForm onClose={()=>setIsOpen(false)}/></Modal>, document.querySelector('#modal-root') as HTMLElement)}
        </Wrapper>
    )
}

