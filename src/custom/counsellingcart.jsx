/* eslint-disable react/prop-types */
import { FaCircleExclamation } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import Modal from "./modal";
import { useState } from "react";
import axiosInstance from "../config/api";
import { useNavigate } from "react-router-dom";
const CounselingCard = ({ date, time, sessionTitle, profile }) => {
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()
    const handleToggle = () => {
        setToggle(prevState => !prevState)
    }

    const handleOpenMessage = async (userId) => {
        const response = await axiosInstance.post('/conversation', {
            userId1: 2,
            userId2: userId
        })
        navigate(`/conversation/${response.data.id}`)
    }

    return (
        <div className="p-4 border flex flex-col justify-between rounded-lg shadow-md bg-white">
            <div className=''>
                <div className="flex justify-between items-center">
                    <div className="bg-yellow-200 flex items-center justify-center text-yellow-900 h-7 w-40 text-[10px] font-semibold rounded-full">
                        {time}, {date}
                    </div>
                    <FaCircleExclamation onClick={() => setToggle(prevState => !prevState)} className="text-gray-600 h-3 w-3 cursor-pointer mx-4 opacity-50 hover:opacity-100 duration-150" />
                    <FaMessage onClick={() => handleOpenMessage(profile.id)} className="text-gray-600 h-3 w-3 cursor-pointer opacity-50 hover:opacity-100 duration-150" />
                </div>
                <div className="text-base font-semibold text-gray-800 mb-4 mt-4">
                    {sessionTitle}
                </div>
            </div>

            <div className="flex items-center border-t h-16 w-full border-gray-400">
                <img
                    src="https://via.placeholder.com/50"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                    <p className="text-gray-900 text-xs font-medium">{profile.firstName}, {profile.lastName}</p>
                    <p className="text-gray-500 text-xs">Nam, Age: 24</p>
                </div>
            </div>
            {
                toggle && <Modal handleToggle = {handleToggle}/>
            }
        </div>
    );
}

export default CounselingCard;
