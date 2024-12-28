/* eslint-disable react/prop-types */
import React from 'react'
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
const DoctorCard = ({ doctor }) => {
    return (
        <div className='flex flex-col justify-center items-center h-[400px] w-[250px] rounded-xl bg-white'>
            <img src={doctor.avatar} className='mb-5 w-24 h-44' />
            <span className='mb-5 text-sm font-inter font-bold '>{doctor.name}</span>
            <div className='h-1 mb-5 w-8 rounded-full bg-customBlue'></div>
            <span className='font-inter  text-center pb-2 text-xs text-gray-500'>{doctor.specialty}</span>
            <div className='flex mt-3 gap-7 w-full items-center justify-center'>
                <IoLogoFacebook className='w-5 h-5 text-gray-500' />
                <IoLogoLinkedin className='w-5 h-5 text-gray-500' />
                <IoLogoTwitter className='w-5 h-5 text-gray-500' />
                <IoLogoInstagram className='w-5 h-5 text-gray-500' />
            </div>
        </div>
    );
}
const Doctorlist = () => {
    const doctors = [
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "BDS . MDS - Peridontology and Oral Inplantology, 16 years Experience",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "BDS . MDS - Peridontology and Oral Inplantology, 16 years Experience",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "BDS . MDS - Peridontology and Oral Inplantology, 16 years Experience",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "BDS . MDS - Peridontology and Oral Inplantology, 16 years Experience",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "BDS . MDS - Peridontology and Oral Inplantology, 16 years Experience",
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
