import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom"
const Signup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(flase);
    };
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
                {/* Login Form with Slide In Animation */}
                {isPopupOpen == false && (<div className="flex justify-center items-center ">
                    <motion.div
                        className="h-5/6 w-3/4 bg-white shadow-2xl rounded-lg flex items-center justify-center"
                        initial={{ opacity: 0, x: -100 }}   // Bắt đầu từ bên trái và mờ dần
                        animate={{ opacity: 1, x: 0 }}      // Hiện dần và trượt vào
                        transition={{ duration: 0.8 }}      // Thời gian chuyển động
                    >
                        <div className="h-[80%] w-full">
                            <div className="flex h-[90%] w-full justify-center items-center">
                                <div className=" h-auto w-[70%]">
                                    <div className=" h-full w-[70%] mb-10 flex justify-start items-end ">
                                        <label className="font-poppin text-customBlue font-bold text-2xl ">
                                            Sign up
                                        </label>
                                    </div>
                                    <button className="h-[50px] border-[0.5px] border-gray-500 flex justify-center items-center w-full rounded-full bg-white">
                                        <img
                                            src="src/assets/google.png"
                                            className="w-6 mr-3 h-6"
                                        />
                                        <label className="text-black font-semibold text-xs font-poppin">
                                            Continue with Google
                                        </label>
                                    </button>
                                    <div className="mt-5 mb-5 relative flex justify-center items-center">
                                        <label className="z-10 h-3 text-center w-[25px] bg-white text-black text-xs font-poppin">
                                            Or
                                        </label>
                                        <div className="absolute mt-1 h-[0.5px] w-full bg-gray-500" />
                                    </div>
                                    <button onClick={openPopup} className="h-[50px]  flex justify-center items-center w-full rounded-full bg-customBlue">
                                        <label className="text-white font-semibold text-xs  font-poppin">
                                            Continue with Email
                                        </label>
                                    </button>
                                    <div className='text-xs font-poppin flex justify-center items-center w-full h-20'>
                                        <label>Already have an account? </label>
                                        <Link to="/login" type="button" className=' text-customBlue ml-1'>
                                            Log in
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>)}
                {isPopupOpen && (
                    <div className="flex justify-center items-center ">
                        <motion.div
                            className="h-5/6 w-3/4 bg-white shadow-2xl rounded-lg flex items-center justify-center"
                            initial={{ opacity: 0, x: -100 }}   // Bắt đầu từ bên trái và mờ dần
                            animate={{ opacity: 1, x: 0 }}      // Hiện dần và trượt vào
                            transition={{ duration: 0.8 }}      // Thời gian chuyển động
                        >
                            <div className="h-[80%] w-full">
                                <div className="h-[90%] w-full flex justify-center items-center">
                                    <div className=" h-auto w-[70%]">
                                        <div className=" h-full w-[70%] mb-5  flex justify-start items-end ">
                                            <button onClick={closePopup} className='mr-2 h-8 w-8 flex justify-center items-center'>
                                                <img src="src/assets/arrow.svg" className=' h-5 w-5' />
                                            </button>
                                            <label className="font-poppin text-customBlue font-bold text-2xl ">
                                                Sign up
                                            </label>
                                        </div>
                                        <div className='grid grid-cols-1 max-w-md'>
                                            <div className='flex justify-between gap-6 w-full'>
                                                <div className='flex flex-col w-full'>
                                                    <label className="font-poppin font-bold text-xs">Name</label>
                                                    <input className="mt-3  mb-5 h-[50px] w-full rounded-lg bg-white border-[0.3px] border-gray-500" />
                                                </div>
                                                <div className='flex flex-col w-full'>
                                                    <label className="font-poppin font-bold text-xs">Username</label>
                                                    <input className="mt-3 h-[50px] w-full rounded-lg bg-white border-[0.3px] border-gray-500" />
                                                </div>
                                            </div>
                                            <div className='col-span-2'>
                                                <label className="font-poppin font-bold text-xs">Email</label>
                                                <input className="mt-3 h-[50px] flex justify-center items-center w-full rounded-lg bg-white border-[0.3px] border-gray-500"></input>
                                            </div>
                                            <div className='col-span-2 mt-4'>
                                                <label className="font-poppin font-bold text-xs">Password</label>
                                                <input className="mt-3 h-[50px] flex justify-center items-center w-full rounded-lg bg-white border-[0.3px] border-gray-500"></input>
                                            </div>
                                            <div className='col-span-2 text-xs font-poppin flex justify-center items-center w-full h-20'>
                                                <label>Already have an account? </label>
                                                <Link to="/login" type="button" className=' text-customBlue ml-1'>
                                                    Log in
                                                </Link>
                                            </div>
                                            <div className="col-span-2 flex justify-end h-10 w-full">
                                                <button className="h-10 w-10">
                                                    <img src="src/assets/nextbtn.svg" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )
                }
                <div className=" flex justify-center items-end ">
                    <img src="src/assets/chat.svg"
                        className="mb-72 mr-auto z-20 h-2/5 w-1/2"
                    />
                    <img src="src/assets/doctor.png"
                        className="ml-7 absolute w-1/3 h-5/6 z-10" />
                    <div className=" absolute w-1/3 h-[30%] bg-customBlue rounded-xl z-0" />
                </div>
            </div >

        </div >
    )
}

export default Signup