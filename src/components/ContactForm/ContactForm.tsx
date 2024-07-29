
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { Form, Title, Wrapper } from './ContactForm.styled';
import { useAddContactsMutation } from '../../redux/contacts/contactsApi';
import { useAuth } from '../../hooks/useAuth';
import { selectUser } from '../../redux/auth/selectors';



const validationSchema = yup.object({
    name: yup
    .string()
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
export const ContactForm = () => {
  const { user } = useAuth(selectUser);
  console.log(user.id)
  const [addContacts, {isLoading}] = useAddContactsMutation();

  const formik = useFormik({
      initialValues: {
      name: "Nick Bol",
      email: 'foobar@example.com',
      phone: '0973563476',
    },
    validationSchema: validationSchema,
    onSubmit: (values:Values) => addContacts(values, user.id)
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
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add contact
        </Button>
      </Form>
    </Wrapper>
  );
};
