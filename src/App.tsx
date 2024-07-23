import { Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout/SharedLayout'






function App() {
  
  return (
   <Routes>
  <Route path='/' element={<SharedLayout />}>
  
  </Route>
</Routes>
  )
}

export default App
