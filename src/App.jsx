import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Login from './pages/loginpage'
import Signup from './pages/signuppage'
import Mainpage from './pages/mainpage'
import Appoiments from './pages/appoiments'
import Patients from './pages/patients'
import Messages from './pages/messages'
import Report from './pages/report'
import Settings from './pages/settings'
import { UserContextProvider } from './userContext'
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mainpage' element={<Mainpage />} />
        <Route path='/appoiments' element={<Appoiments />} />
        <Route path='/patients' element={<Patients />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/report' element={<Report />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App