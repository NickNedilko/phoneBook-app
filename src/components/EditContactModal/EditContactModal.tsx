import React, { useState } from 'react';

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


const EditContactModal = ({ open, onClose, id, name, email, number }) => {

    const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
    const [phoneNumber, setPhoneNumber] = useState(number);
    
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [updateContact, {isLoading}] = useUpdateContactMutation()

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
      light: '#ff7961',
      main: '#ba000d',
      dark: '#f44336',
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