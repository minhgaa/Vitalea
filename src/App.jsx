import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Login from './pages/loginpage'
import Signup from './pages/signuppage'
import { UserContextProvider } from './userContext'
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App