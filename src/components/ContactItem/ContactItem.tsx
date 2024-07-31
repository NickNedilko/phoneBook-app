import { FC, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDeleteContactMutation } from '../../redux/contacts/contactsApi';
import {
  DeleteIcon,
  EditIcon,
} from './ContactItem.styled';
import EditContactModal from "../EditContactModal/EditContactModal";
import { Contact } from "../../types/types";
import { Avatar } from "@mui/material";

interface ContactItemProps {
  contact: Contact
}

export const ContactItem: FC<ContactItemProps> = ({ contact}) => {
  const [deleteContact, {isLoading}] = useDeleteContactMutation()
  const { name, phone, email } = contact;
  const [isModalOpen, setModalOpen] = useState(false);


  return (
    <>
    
       <Card sx={{ width: 320, padding: '15px'}}>
      <Avatar
  alt={name}
  src="/static/images/avatar/1.jpg"
  sx={{ width: 100, height: 100 , margin:'0 auto'}}
/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Email: {email}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent:'center', gap:'10px'}}>
          <Button size="small" variant="outlined"
            type="button"
            aria-label="edit"
            onClick={() => setModalOpen(true)} 
          >Edit <EditIcon /></Button>
          <Button size="small" variant="outlined"
          type="button"
            aria-label="delete"
            onClick={() => deleteContact(contact._id)}
            disabled={isLoading}
          >Delete <DeleteIcon /></Button>
      </CardActions>
        </Card>
        
      {isModalOpen && (
        <EditContactModal
          id={contact._id}
          name={name}
          number={phone}
          email={email}
          onClose={() => setModalOpen(false)}
          open={isModalOpen}
        />
      )}
    </>
  );
};
//  <ContactWrap>
//       <Card key={contact._id} >
//         <CardContent>
//           <Avatar />
//           <Name>{name}</Name>
//           <Number>{phone}</Number>
//           <Number>{email}</Number>
//           </CardContent>
//         {/* <ButtonWrap> */}
//           <Button
//             type="button"
//             aria-label="edit"
//             onClick={() => setModalOpen(true)}
//           >
//             
//           </Button>
//           <Button
//             type="button"
//             aria-label="delete"
//             onClick={() => deleteContact(contact._id)}
//             disabled={isLoading}
//           >
//             <DeleteIcon />
//           </Button>
//         {/* </ButtonWrap> */}
//         </Card>
//         </ContactWrap>
        