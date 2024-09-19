
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { ButtonWrapper, Form, Title, Wrapper } from './ContactForm.styled';
import { useAddContactsMutation } from '../../redux/contacts/contactsApi';
import { selectUser } from '../../redux/auth/selectors';
import { useAppSelector } from '../../redux/store';
import { FC } from 'react';
import toast from 'react-hot-toast';



const validationSchema = yup.object({
    name: yup
    .string()
    .min(5)
    .required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .required('Phone is required'),
});
interface Values {
  name: string;
  email: string;
  phone: string;
}

interface ContactFormProps {
  onClose : ()=>void
}

export const ContactForm: FC<ContactFormProps> = ({onClose}) => {
  
    const user = useAppSelector(selectUser);

  const [addContacts, {isLoading}] = useAddContactsMutation();

  const handleSubmit = (values: Values, id: string) => {
    const data = {
      id,
      ...values
    }
    
      toast.success('Contact successfully add')
    
    addContacts(data);
    onClose();
}

  const formik = useFormik({
    initialValues: {
      name: "Nick Bol",
      email: 'foobar@example.com',
      phone: '0973563476',
    },
    validationSchema: validationSchema,
    onSubmit: (values:Values) => handleSubmit(values, user.id)
  });

  return (
    <Wrapper>
          <Form onSubmit={formik.handleSubmit}>
              <Title>Add contact</Title>
              
               <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          type="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
              />
        <ButtonWrapper>
        <Button color="primary" variant="contained" type="submit" disabled={isLoading}>
          Add contact
        </Button>
        <Button color="primary" variant="contained" type="button" onClick={onClose} >
          Cancel
        </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};
