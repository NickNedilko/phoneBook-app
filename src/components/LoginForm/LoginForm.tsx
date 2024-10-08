
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Form, Title, Wrapper } from '../RegisterForm/RegisterForm.styled';
import { login } from '../../redux/auth/authThunk';
import { useDispatch } from 'react-redux';
import loginImg from "../../assets/loginImg.webp"
import { Img } from './LoginForm.styled';


const validationSchema = yup.object({
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
  
  email: string;
  password: string;
}

export const LoginForm = () => {

  const dispatch = useDispatch<any>();

  const formik = useFormik({
      initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values:Values) => {
       dispatch(login(values));
    },
  });

  return (
    <Wrapper>
          <Form onSubmit={formik.handleSubmit}>
                <Title>PhoneBook</Title>
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
         <Link to='/forgot-password'>Forgot password?</Link>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Log in
        </Button>
      </Form>
    <Img src={loginImg} alt="login image" />
    </Wrapper>
  );
};


