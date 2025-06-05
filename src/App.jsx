import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import UserForm from './Components/UserForm'
function App() {
  
  return (
    <BrowserRouter>
    <NavBar/>
   <Routes>
    <Route path='/' element={<Home />} />
     <Route path='register' element={<UserForm />} />
   </Routes>
    </BrowserRouter>
  )
}

export default App
