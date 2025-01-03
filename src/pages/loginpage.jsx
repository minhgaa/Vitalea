import { motion } from 'framer-motion';
import { useState } from 'react';
import axiosInstance from '../config/api';
import { useNavigate } from 'react-router-dom';
import Spinner from '../custom/spinner';
import EmailModal from '../custom/emailModal';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [verification, setVerification] = useState(false)
    const navigate = useNavigate()
    const handleLogin = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            setError(false)
            setErrorMessage('')
            const response = await axiosInstance.post('/auth/login', {
                email,
                password
            })
            if (response.data.token) {
                setVerification(true)
                setLoading(false)    
                return
            }
            console.log(response.data.account.role === "DOCTOR")
            if (response.data.account.role === "DOCTOR") {
                response.data.account.doctor.role = response.data.account.role
                response.data.account.doctor.image = response.data.account.image
                await localStorage.setItem('doctor', JSON.stringify(response.data.account.doctor))
                console.log("Navigating to /mainpage...");
                navigate("/mainpage")
                window.location.reload()
            } else if (response.data.account.role === "USER") {
                response.data.account.user.role = response.data.account.role
                response.data.account.user.image = response.data.account.image
                localStorage.setItem('user', JSON.stringify(response.data.account.user))
                navigate('/')
                window.location.reload()
            } else navigate('/admin/doctors')
        } catch (error) {
            if (error){
                setLoading(prevState => !prevState)
                setError(true)
                setErrorMessage("Email hoặc mật khẩu không chính xác, vui lòng thử lại !!!")
            }
        }
    }

    return (
        <div className="relative w-screen h-screen overflow-hidden">

            {/* Main Grid */}
            {loading && <Spinner/> || <div className="grid grid-cols-2 h-[90%]">
                <div className="flex justify-center items-center ">
                    <motion.div
                        className="h-5/6 w-3/4 bg-white shadow-2xl rounded-lg flex items-center justify-center"
                        initial={{ opacity: 0, x: -100 }}   // Bắt đầu từ bên trái và mờ dần
                        animate={{ opacity: 1, x: 0 }}      // Hiện dần và trượt vào
                        transition={{ duration: 0.8 }}      // Thời gian chuyển động
                    >
                        <div className="h-[80%] w-full">
                            <div className="flex h-full w-full justify-center items-center">
                                <div className=" h-auto w-[70%]">
                                    <div className=" h-full mb-10 w-[70%] flex justify-start items-end ">
                                        <label className="font-poppin text-customBlue font-bold text-2xl ">
                                            Đăng nhập
                                        </label>
                                    </div>
                                    {errorMessage && <p className='font-bold text-red-500 text-[14px]'>{errorMessage}</p>}
                                    <form onSubmit={handleLogin}>
                                        <label className={`font-poppin font-bold text-xs ` + (error ? "text-red-500 font-bold" : "")}>Email</label>
                                        <div className={`mt-3 mb-5 p-4 w-full rounded-lg bg-white border-[0.3px] ` + (error ? "border-red-500" : "border-gray-500")}>
                                            <input className={`outline-none border-none w-full ` + (error ? "placeholder-red-500" : "")} type='text' placeholder='Nhập email của bạn...' onChange={e => {setError(false); setEmail(e.target.value); setErrorMessage('')}} />
                                        </div>
                                        <label className={`font-poppin font-bold text-xs ` + (error ? "text-red-500 font-bold" : "")}>Mật khẩu</label>
                                        <div className={`mt-3 mb-5 p-4 w-full rounded-lg bg-white border-[0.3px] ` + (error ? "border-red-500" : "border-gray-500")}>
                                            <input className={`outline-none border-none w-full ` + (error ? "placeholder-red-500" : "")} type='password' placeholder='Nhập mật khẩu của bạn...' onChange={e => setPassword(e.target.value)}/>
                                        </div>
                                        <div className="mt-5 flex justify-between h-10 w-full">
                                            <button type='button' className="font-poppin font-light text-sm">
                                                Bạn quên mật khẩu?
                                            </button>

                                            <button type='submit' className="h-10 w-10">
                                                <img src="src/assets/nextbtn.svg" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className=" flex justify-center items-end ">
                    <img src="src/assets/chat.svg"
                        className="mb-72 mr-auto z-20 h-2/5 w-1/2"
                    />
                    <img src="src/assets/doctor.png"
                        className="ml-7 absolute w-1/3 h-5/6 z-10" />
                    <div className=" absolute w-1/3 h-[30%] bg-customBlue rounded-xl z-0" />
                </div>
            </div>}
            {verification && <div>
                <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[99]'>
                    <EmailModal setVerification = {setVerification} email = {email}/>
                </div>
                <div className='absolute top-0 left-0 h-screen w-screen bg-black opacity-50 z-[98]'></div>    
            </div>}
        </div>
    )
}

export default Login