
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Form, Title, Wrapper } from '../RegisterForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import changePasswordImg from "../../assets/change-password.png"
import { Img } from '../LoginForm/LoginForm.styled';
import { updatePassword } from '../../redux/auth/authThunk';
import toast from 'react-hot-toast';



const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
    newPassword: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export interface PasswordValues {

  password: string;
  newPassword: string
}

export const ChangePassword = () => {

  const dispatch = useDispatch<any>();

  const formik = useFormik({
      initialValues: {
      password: '',
      newPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values: PasswordValues) => {
      toast.success('User password successfully changed!')
      
       dispatch(updatePassword(values));
    },
  });

  return (
    <Wrapper>
          <Form onSubmit={formik.handleSubmit}>
                <Title>Change Password</Title>
        <TextField
          fullWidth
          id="password"
          name="password"
          label="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          id="newPassword"
          name="newPassword"
          label="new Password"
          type="password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Change
        </Button>
      </Form>
    <Img src={changePasswordImg} alt="login image" />
    </Wrapper>
  );
};


