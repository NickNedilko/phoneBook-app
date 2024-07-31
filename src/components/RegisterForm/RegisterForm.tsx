
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { Form, Text, Title, Wrapper } from './RegisterForm.styled';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/authThunk';


const validationSchema = yup.object({
    name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
interface Values {
  name: string;
  email: string;
  password: string;
}
export const RegisterForm = () => {
  const dispatch = useDispatch<any>();

  const formik = useFormik({
      initialValues: {
      name: " Nick",
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values:Values) => {
        dispatch(signUp(values));
    },
  });

  return (
    <Wrapper>
          <Form onSubmit={formik.handleSubmit}>
              <Title>PhoneBook</Title>
              <Text>Create a new account</Text>
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
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
              />
              <Link to='/login'>Allready has account?</Link>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign up
        </Button>
      </Form>
    </Wrapper>
  );
};
