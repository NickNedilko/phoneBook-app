import { useState } from "react";
import { useDeleteContactMutation } from '../../redux/contacts/contactsApi';
import {
  Item,
  ContactWrap,
  Avatar,
  Name,
  Number,
  ButtonWrap,
  Button,
  DeleteIcon,
  EditIcon,
} from './ContactItem.styled';
import EditContactModal from "../EditContactModal/EditContactModal";

export const ContactItem = ({ contact }) => {
  
  const [deleteContact, {isLoading}] = useDeleteContactMutation()
  const { name, phone, email } = contact;
  // console.log(id)
//   const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <Item key={contact._id}>
        <ContactWrap>
          <Avatar />
          <Name>{name}: </Name>
          <Number>{phone}</Number>
        </ContactWrap>
        <ButtonWrap>
          <Button
            type="button"
            aria-label="edit"
            onClick={() => setModalOpen(true)}
          >
            <EditIcon />
          </Button>
          <Button
            type="button"
            aria-label="delete"
            // onClick={() => dispatch(deleteContact(id))}
            onClick={() => deleteContact(contact._id)}
            // disabled={isDeleting}
          >
            <DeleteIcon />
          </Button>
        </ButtonWrap>
      </Item>
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
