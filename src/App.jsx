/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
// import Landing from './pages/landing'
// import Login from './pages/loginpage'
// import Signup from './pages/signuppage'
// import Mainpage from './pages/mainpage'
// import Appointments from './pages/appointments'
// import Patients from './pages/patients'
import Messages from './pages/messages'
// import Report from './pages/report'
// import Personal from './pages/personal'
// import Settings from './pages/settings'
import { UserContextProvider } from './userContext'
// import DoctorProfile from './pages/doctor-profile'
// import Appointment from './pages/appointment'
// import News from './pages/news'
// import NewsSearch from './pages/news-search'
// import Doctors from './pages/doctors'
// import BlogEditor from './pages/blog-editor'
// import BlogDetail from './pages/blog-detail'
// import WorkingSchedule from './pages/working-schedule'
// import Order from './pages/order'
// import Profile from './pages/profile'
// import ChangePassword from './pages/change-password'
// import Conversation from './pages/conversation'
// import UserMessages from './pages/user-messages'
// import Blogs from './pages/blogs'
// import DoctorSearch from './pages/doctor-search'
// import ManageDoctors from './pages/admin-doctors'
// import VideoChat from './pages/video-chat'
// import { useAuthContext } from './context/AuthContext'
// import Verification from './pages/verification'
// import UserConversation from './pages/user-conversation'
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Messages />} />
        
      </Routes>
    </UserContextProvider>
  )
}
export default App