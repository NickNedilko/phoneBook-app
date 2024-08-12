import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import './App.css'
import { useAuth } from '../hooks/useAuth';
import SharedLayout from './SharedLayout/SharedLayout';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import { ContactsPage } from '../pages/ContactsPage';
import { PrivateRoute, RestrictedRoute } from './RedirectRoutes';
import { getCurrentUser } from '../redux/auth/authThunk';
import { AppDispatch } from '../redux/store';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import ChangePasswordPage from '../pages/ChangePasswordPage';



function App() {
  const dispatch: AppDispatch = useDispatch<any>();
  const { isRefreshing } = useAuth();


  useEffect(() => {
       
        dispatch(getCurrentUser());
      
 
  }, [dispatch]);

  return (
    !isRefreshing && (
         <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} redirectTo='/contacts'/>} />
          <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts'/>} />
          <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} redirectTo='/login'/>} />
          <Route path='/profile' element={<PrivateRoute component={<ProfilePage />} redirectTo='/login'/>} />
          <Route path='/change-password' element={<PrivateRoute component={<ChangePasswordPage/>} redirectTo='/login'/>} />

  </Route>
</Routes>
)
  )
}

export default App;
