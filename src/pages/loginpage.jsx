import { motion } from 'framer-motion';
import { useState } from 'react';
import axiosInstance from '../config/api';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleLogin = async (event) => {
        event.preventDefault()
        const response = await axiosInstance.post('/auth/login', {
            email,
            password
        })
        console.log(response.data)
        if (response.data.account.role === "DOCTOR") {
            response.data.account.doctor.role = response.data.account.role
            response.data.account.doctor.image = response.data.account.image
            localStorage.setItem('doctor', JSON.stringify(response.data.account.doctor))
            navigate('/mainpage')
        } else {
            response.data.account.user.role = response.data.account.role
            response.data.account.user.image = response.data.account.image
            localStorage.setItem('user', JSON.stringify(response.data.account.user))
            navigate('/')
        }
    }

    return (
        <div className="w-screen h-screen">
            {/* Header */}
            <div className=" h-[7.5%] w-screen flex items-center justify-between">
                <label className="pl-7 font-sofadi text-xl text-customBlue">
                    Vitaléa
                </label>
                <div className="flex items-center pr-7">
                    <button>
                        <img src="src/assets/notiIcon.svg" className="w-7 h-7 mr-3" />
                    </button>
                    <button className="flex items-center justify-center  w-7 h-7 rounded-full border border-gray-400">
                        <img src="src/assets/avatar.png" className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-2 h-[90%]">
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
                                            Log in
                                        </label>
                                    </div>
                                    <button className="h-[50px] border-[0.5px] border-gray-500 flex justify-center items-center w-full rounded-full bg-white">
                                        <img
                                            src="src/assets/google.png"
                                            className="w-6 mr-3 h-6"
                                        />
                                        <label className="text-black font-semibold text-xs font-poppin">
                                            Log in with Google
                                        </label>
                                    </button>
                                    <div className="mt-5 mb-5 relative flex justify-center items-center">
                                        <label className="z-10 h-3 text-center w-[120px] bg-white text-black text-xs font-poppin">
                                            Or log in with Email
                                        </label>
                                        <div className="absolute mt-1 h-[0.5px] w-full bg-gray-500" />
                                    </div>
                                    <form onSubmit={handleLogin}>
                                        <label className="font-poppin font-bold text-xs">Email</label>
                                        <div className="mt-3 mb-5 p-4 w-full rounded-lg bg-white border-[0.3px] border-gray-500">
                                            <input className='outline-none border-none w-full' type='text' placeholder='Nhập email của bạn...' onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <label className="font-poppin font-bold text-xs">Password</label>
                                        <div className="mt-3 mb-5 p-4 w-full rounded-lg bg-white border-[0.3px] border-gray-500">
                                            <input className='outline-none border-none w-full' type='password' placeholder='Nhập mật khẩu của bạn...' onChange={e => setPassword(e.target.value)}/>
                                        </div>
                                        <div className="mt-5 flex justify-end h-10 w-full">
                                            <button type='submit' className="h-10 w-10">
                                                <img src="src/assets/nextbtn.svg" />
                                            </button>
                                        </div>
                                    </form>
                                    <button className="font-poppin font-light text-xs">
                                        Forgot your password?
                                    </button>
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
            </div>
        </div>
    )
}

export default Login