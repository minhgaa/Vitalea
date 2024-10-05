import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const CounselingCard = ({ date, time, sessionTitle, profile }) => {
    return (
        <div className="p-4 border flex flex-col justify-between rounded-lg shadow-md bg-white">
            <div className=''>
                <div className="flex justify-between items-center">
                    <div className="bg-yellow-200 flex items-center justify-center text-yellow-900 h-7 w-40 text-[10px] font-semibold rounded-full">
                        {date}, {time}
                    </div>
                    <FaEllipsisV className="text-gray-600 h-3 w-3 cursor-pointer" />
                </div>
                <div className="text-base font-semibold text-gray-800 mb-4">
                    {sessionTitle}
                </div>
            </div>

            <div className="flex items-center border-t h-16 w-full border-gray-400">
                <img
                    src={profile.image}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                    <p className="text-gray-900 text-xs font-medium">{profile.name}</p>
                    <p className="text-gray-500 text-xs">{profile.gender}, Age: {profile.age}</p>
                </div>
            </div>
        </div>
    );
}

export default CounselingCard;
