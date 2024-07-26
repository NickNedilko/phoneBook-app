import { Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout/SharedLayout'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { LoginForm } from './components/LoginForm/LoginForm'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentUser } from './redux/auth/authThunk'
import { useAuth } from './hooks/useAuth'






function App() {
  const dispatch = useDispatch<any>();
  const { isRefreshing } = useAuth();


  
  
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch]);

  return (
    !isRefreshing && (
         <Routes>
  <Route path='/' element={<SharedLayout />}>
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm/>} />
  </Route>
</Routes>
)
  )
}

export default App;
