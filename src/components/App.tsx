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



function App() {
  const dispatch = useDispatch<any>();
  const { isRefreshing } = useAuth();


  useEffect(() => {
       
        dispatch(getCurrentUser());
      
 
  }, [dispatch]);

  return (
    !isRefreshing && (
         <Routes>
  <Route path='/' element={<SharedLayout />}>
        <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} redirectTo='contacts'/>} />
          <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='contacts' />} />
          <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} redirectTo='login' />} />
  </Route>
</Routes>
)
  )
}

export default App;
