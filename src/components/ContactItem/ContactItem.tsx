import { ChangeEvent, FC, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDeleteContactMutation, useUpdatePhotoMutation } from '../../redux/contacts/contactsApi';
import {
  DeleteIcon,
  EditIcon,
} from './ContactItem.styled';
import EditContactModal from "../EditContactModal/EditContactModal";
import { Contact } from "../../types/types";
import { PhotoAvatar } from "../PhotoAvatar/PhotoAvatar";

interface ContactItemProps {
  contact: Contact
}

export const ContactItem: FC<ContactItemProps> = ({ contact}) => {
  const [deleteContact, {isLoading}] = useDeleteContactMutation()
  const { name, phone, email, avatar, _id } = contact;
  const [isModalOpen, setModalOpen] = useState(false);
  const [updatePhoto] = useUpdatePhotoMutation();


const changeHandler =(e:ChangeEvent<HTMLInputElement>) =>{
  const file = e.target.files[0];
  const data = {
    _id,
    file
  }

  updatePhoto(data)

}

  return (
    <>
    
       <Card sx={{ width: 320, padding: '15px'}}>
 

      <PhotoAvatar avatar={avatar} onChange={changeHandler} name = {name}/>

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
        