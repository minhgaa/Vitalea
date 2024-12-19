/* eslint-disable react/prop-types */
import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";
const DoctorCard = ({doctor}) => {
    return (
        <div className='flex flex-col justify-center items-center h-[300px] w-[250px] rounded-xl bg-white'>
            <img src={doctor.avatar} className='mb-10 w-24 h-24 rounded-full'/>
            <span className='mb-2 font-inter font-bold '>{doctor.name}</span>
            <span className='font-inter text-gray-500'>{doctor.specialty}</span>
            <div className='flex mt-3 w-full justify-center'>
                <button className='mr-3'>
                    <IoInformationCircleOutline className='w-10 h-10'/>
                </button>
                <button className='h-10 w-[60%] text-white text-sm rounded-full bg-customBlue1'>
                Đặt lịch khám ngay
                </button>
            </div>
        </div>
    );
}
const Doctorlist = () => {
    const doctors = [
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "Nội khoa",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "Nội khoa",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "Nội khoa",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "Nội khoa",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "Nội khoa",
        },
        
    ];

    return (
        <div className="flex gap-8 w-[2000px] justify-start mt-[5%]">
            {doctors.map((doctor, index) => (
                <DoctorCard key={index} doctor={doctor} />
            ))}
        </div>
    );
}

export default Doctorlist
