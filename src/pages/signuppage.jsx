import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom"
import axiosInstance from '../config/api';
import Joi, { exist } from 'joi'
import Spinner from '../custom/spinner';

const userSchema = Joi.object({
    firstName: Joi.string().min(1).required().messages({
        'string.base': 'First name must be a string',
        'string.empty': 'First name is required',
        'any.required': 'First name is required',
    }),
    lastName: Joi.string()
    .min(1)
    .required()
    .messages({
      'string.base': 'Last name must be a string',
      'string.empty': 'Last name is required',
      'any.required': 'Last name is required',
    }),
    email: Joi.string()
    .email({tlds: {allow: false}})
    .required()
    .messages({
      'string.base': 'Email must be a string',
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address',
      'any.required': 'Email is required',
    }),
    gender: Joi.string()
    .required()
    .messages({
      'string.base': 'Gender must be a string',
      'string.empty': 'Gender is required',
      'any.required': 'Gender is required',
    }),
    password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.base': 'Password must be a string',
      'string.empty': 'Password is required',
      'string.min': 'Password should be at least 6 characters long',
      'any.required': 'Password is required',
    }),
    address: Joi.string()
    .min(1)
    .required()
    .messages({
      'string.base': 'Address must be a string',
      'string.empty': 'Address is required',
      'any.required': 'Address is required',
    }),
    phoneNumber: Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      'string.base': 'Phone number must be a string',
      'string.empty': 'Phone number is required',
      'string.pattern.base': 'Phone number must be a valid 10-digit number',
      'any.required': 'Phone number is required',
    }),

})

const Signup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [errors, setErrors] = useState({});
    const [loading ,setLoading] = useState(false)
    const [existError, setExistError] = useState('')
    const navigate = useNavigate()
    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        const data = {
            firstName,
            lastName,
            address,
            phoneNumber,
            gender,
            email,
            password
        }
        const { error } = userSchema.validate(data, { abortEarly: false });
        if (error) {
            const newErrors = error.details.reduce((acc, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
            }, {});
            setErrors(newErrors);
            setLoading(false)
        } else {
            try {
                setErrors({})
                const response = await axiosInstance.post('/auth/register', data)
                if(response.status === 201) {
                    navigate("/login")
                    window.location.reload()
                }
            } catch(error) {
                if (error.status === 303) setExistError('Tài khoản đã tồn tại, vui lòng thử lại !!!')
                setLoading(false)
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                setGender("")
                setAddress("")
                setPhoneNumber("")

            }
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
            { loading && <Spinner/> || <div className="grid grid-cols-2 h-[90%]">
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
                    <div className="h-full flex justify-center items-center ">
                        <motion.div
                            className="overflow-y-scroll w-3/4 bg-white shadow-2xl rounded-lg flex items-center justify-center"
                            initial={{ opacity: 0, x: -100 }}   // Bắt đầu từ bên trái và mờ dần
                            animate={{ opacity: 1, x: 0 }}      // Hiện dần và trượt vào
                            transition={{ duration: 0.8 }}      // Thời gian chuyển động
                        >
                            <div className="w-full">
                                <div className=" w-full flex justify-center items-center">
                                    <div className=" h-auto w-[70%]">
                                        <div className=" h-full w-[70%] mb-5  flex justify-start items-end ">
                                            <button onClick={closePopup} className='mr-2 h-8 w-8 flex justify-center items-center'>
                                                <img src="src/assets/arrow.svg" className=' h-5 w-5' />
                                            </button>
                                            <label className="font-poppin text-customBlue font-bold text-2xl ">
                                                Sign up
                                            </label>
                                        </div>
                                        <form onSubmit={handleSubmit} className='grid grid-cols-1 max-w-md'>
                                            <div className='col-span-2 my-4'>
                                                {existError && <p className='text-red-500 text-[18px] font-bold'>{existError}</p>}
                                            </div>
                                            <div className='flex justify-between gap-6 w-full'>
                                                <div className='flex flex-col w-full'>
                                                    <label className="font-poppin font-bold text-xs">First name</label>
                                                    {errors.firstName && <p className='text-red-500 text-[14px]'>{errors.firstName}</p>}
                                                    <input className={`mt-3 h-[50px] w-full rounded-lg bg-white border-[0.3px] ` + (errors.firstName ? "border-red-500" : "border-gray-500")} value={firstName} onChange = {e => setFirstName(e.target.value)} />
                                                </div>
                                                <div className='flex flex-col w-full'>
                                                    <label className="font-poppin font-bold text-xs">Last name</label>
                                                    {errors.lastName && <p className='text-red-500 text-[14px]'>{errors.lastName}</p>}
                                                    <input className={`mt-3 h-[50px] w-full rounded-lg bg-white border-[0.3px] ` + (errors.lastName ? "border-red-500" : "border-gray-500")} value={lastName} onChange = {e => setLastName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='col-span-2'>
                                                <label className="font-poppin font-bold text-xs">Email</label>
                                                {errors.email && <p className='text-red-500 text-[14px]'>{errors.email}</p>}
                                                <input className={`mt-3 h-[50px] w-full rounded-lg bg-white border-[0.3px] ` + (errors.email ? "border-red-500" : "border-gray-500")} value={email} onChange = {e => setEmail(e.target.value)}/>
                                            </div>
                                            <div className='col-span-2 mt-4'>
                                                <label className="font-poppin font-bold text-xs">Password</label>
                                                {errors.password && <p className='text-red-500 text-[14px]'>{errors.password}</p>}
                                                <input className={`mt-3 h-[50px] w-full rounded-lg bg-white border-[0.3px] ` + (errors.password ? "border-red-500" : "border-gray-500")} value={password} onChange = {e => setPassword(e.target.value)}/>
                                            </div>
                                            <div className=''>
                                                <label className="font-poppin font-bold text-xs mr-4">Gender</label>
                                                {errors.gender && <p className='text-red-500 text-[14px]'>{errors.gender}</p>}
                                                <div className='flex'>
                                                    <div className='col-span-2 mt-4 flex items-center'>
                                                        <input type='radio' value='nam' name = 'gender' onChange = {e => setGender(e.target.value)} />
                                                        <label className={`font-poppin font-bold text-xs mr-4 ` + (errors.gender ? "text-red-500" : "")}>Nam</label>
                                                    </div>
                                                    <div className='col-span-2 mt-4 flex items-center'>
                                                        <input type='radio' value='nữ' name = 'gender' onChange = {e => setGender(e.target.value)} />
                                                        <label className={`font-poppin font-bold text-xs mr-4 ` + (errors.gender ? "text-red-500" : "")}>Nữ</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-2 mt-4'>
                                                <label className="font-poppin font-bold text-xs">Address</label>
                                                {errors.address && <p className='text-red-500 text-[14px]'>{errors.address}</p>}
                                                <input className={`mt-3 h-[50px] w-full rounded-lg bg-white border-[0.3px] ` + (errors.address ? "border-red-500" : "border-gray-500")} value={address} onChange = {e => setAddress(e.target.value)}/>
                                            </div>
                                            <div className='col-span-2 mt-4'>
                                                <label className="font-poppin font-bold text-xs">Phone Number</label>
                                                {errors.phoneNumber && <p className='text-red-500 text-[14px]'>{errors.phoneNumber}</p>}
                                                <input className={`mt-3 h-[50px] w-full rounded-lg bg-white border-[0.3px] ` + (errors.phoneNumber ? "border-red-500" : "border-gray-500")} value={phoneNumber} onChange = {e => setPhoneNumber(e.target.value)}/>
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
                                        </form>
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
            </div >}

        </div >
    )
}

export default Signup