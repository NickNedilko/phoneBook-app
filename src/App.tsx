import { Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout/SharedLayout'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { LoginForm } from './components/LoginForm/LoginForm'






function App() {
  
  return (
   <Routes>
  <Route path='/' element={<SharedLayout />}>
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm/>} />
        
  </Route>
</Routes>
  )
}

export default App
