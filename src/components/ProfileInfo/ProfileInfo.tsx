
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { Form, Img, Wrapper } from './ProfileInfo.styled';
import { useDispatch } from 'react-redux';
import { signUp, updateAvatar } from '../../redux/auth/authThunk';
import profile from "../../assets/profile.webp"
import { useAuth } from '../../hooks/useAuth';
import { PhotoAvatar } from '../PhotoAvatar/PhotoAvatar';



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
    
});
interface Values {
  name: string;
  email: string;
  phone: string;
  
  
}
export const ProfileInfo = () => {
  const dispatch = useDispatch<any>();
const {user} = useAuth()


  const formik = useFormik({
      initialValues: {
      name: `${user.name}`,
      email: `${user.email}`,
      phone: `${user.phone}`
      
    },
    validationSchema: validationSchema,
    onSubmit: (values:Values) => {
      
        dispatch(signUp(values));
    },
  });

  return (
   <div>
     <Wrapper>
          <Form onSubmit={formik.handleSubmit}>
      <PhotoAvatar avatar={user.avatarUrl} onChange={(e)=>{dispatch(updateAvatar(e.target.files[0]))}} name = {user.name}/>
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
          label="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign up
        </Button>
      </Form>
    <Img src={profile} alt="sign up image" />
    </Wrapper>
   </div>
  );
};
