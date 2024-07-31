import  { FC, useState } from 'react';

import {
  Dialog,
  Button,
  TextField,
  Snackbar,
  Alert,
  AlertTitle,
  DialogTitle,
  DialogContent,
  DialogActions,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useUpdateContactMutation } from '../../redux/contacts/contactsApi';

interface EditModalProps {
    open: true,
    onClose: () => void,
    id: string,
    name: string,
    email: string,
    number: string 
}


const EditContactModal:FC<EditModalProps> = ({ open, onClose, id, name, email, number }) => {

    const [userName, setUserName] = useState<string>(name);
  const [userEmail, setUserEmail] = useState<string>(email);
    const [phoneNumber, setPhoneNumber] = useState<string>(number);
    
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [updateContact] = useUpdateContactMutation()

  const handleSave = () => {
    if (userName === '' || phoneNumber === '') {
      setOpenSnackbar(true);
      return;
    }

    const editContact = {id, name: userName.trim(), email: userEmail.trim(), phone: phoneNumber.trim()}
    console.log(editContact)
      updateContact(editContact)
  
    onClose();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={userName}
            onChange={({ target: { value } }) => setUserName(value)}
            fullWidth
            variant="outlined"
            margin="normal"
                  />
                   <TextField
            label="email"
            value={userEmail}
            onChange={({ target: { value } }) => setUserEmail(value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={({ target: { value } }) => setPhoneNumber(value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="warning" onClose={() => setOpenSnackbar(false)}>
          <AlertTitle>Warning</AlertTitle>
          Sorry, field values ​​cannot be empty!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};



export const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#6164ff',
      main: '#1565c0',
      dark: '#3662f4',
      contrastText: '#000',
    },
    secondary: {
      light: '#90a4ae',
      main: '#78909c',
      dark: '#607d8b',
      contrastText: '#fff',
    },
  },
});

export default EditContactModal;