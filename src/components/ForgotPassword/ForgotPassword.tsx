
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Form, Title, Wrapper } from '../RegisterForm/RegisterForm.styled';
import { forgotPassword } from '../../redux/auth/authThunk';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import loginImg from "../../assets/loginImg.webp"
import { Img } from './LoginForm.styled';
import { useNavigate } from 'react-router-dom';


const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),

})

export interface ForgotPassword {
  email: string
}

export const ForgotPassword = () => {
  const dispatch = useDispatch<any>();
const navigate = useNavigate()
  const formik = useFormik({
      initialValues: {
      email: '',
     
    },
    validationSchema: validationSchema,
    onSubmit: (values:ForgotPassword) => {
      toast.success('Password reset instruction sent to email')
      dispatch(forgotPassword(values));
      navigate('/login')
    },
  });

  return (
    <Wrapper>
          <Form onSubmit={formik.handleSubmit}>
                <Title>Forgot Password?</Title>
                <p>What email  is associated with your PhonBook profile?</p>
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
        <Button color="primary" variant="contained" fullWidth type="submit">
          Send
        </Button>
      </Form>
    <Img src={loginImg} alt="login image" />
    </Wrapper>
  );
};


