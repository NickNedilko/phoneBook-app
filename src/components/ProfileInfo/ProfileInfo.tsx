
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { Form, Img, Wrapper } from './ProfileInfo.styled';
import { useDispatch } from 'react-redux';
import { updateAvatar, updateUserInfo } from '../../redux/auth/authThunk';
import profile from "../../assets/profile.webp"
import { useAuth } from '../../hooks/useAuth';
import { PhotoAvatar } from '../PhotoAvatar/PhotoAvatar';
import { FormEvent } from 'react';



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
const {user} = useAuth();



  const formik = useFormik({
      initialValues: {
      name: `${user.name}`,
      email: `${user.email}`,
      phone: `${user.phone}`
      
    },
    validationSchema: validationSchema,
    onSubmit: (values:Values) => {
      
        dispatch(updateUserInfo(values));
    },
  });

  const handleUpdateAvatar = (e: FormEvent<HTMLInputElement>) => {
   if (!e.currentTarget.files) {
      return;
    }
  {dispatch(updateAvatar(e.currentTarget.files[0]))}
}

 const isChange = !(user.name !== formik.values.name || user.email !== formik.values.email || user.phone !== formik.values.phone)
  return (
   <div>
     <Wrapper>
          <Form onSubmit={formik.handleSubmit}>
      <PhotoAvatar avatar={user.avatarUrl} onChange={handleUpdateAvatar} name = {user.name}/>
               <h1>{user.name} profile</h1>
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
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" 
        disabled={isChange}
        >
          Save
        </Button>
      </Form>
    <Img src={profile} alt="profile info" />
    </Wrapper>
   </div>
  );
};
