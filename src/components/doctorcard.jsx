import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DoctorCard = ({ doctor }) => {
    return (
        <div className='flex flex-col justify-between items-center py-4 px-4 w-[250px] h-[350px] rounded-xl bg-white shadow-md'>
            <img src={doctor?.account?.image} className='mb-3 w-24 h-24 object-cover rounded-full' />
            <span className='text-sm font-inter font-bold text-center'>BS.{doctor.firstName} {doctor.lastName}</span>
            <div className='h-1 my-3 w-8 rounded-full bg-customBlue'></div>
            <span className='font-inter text-center text-xs text-gray-500'>Chuyên khoa: {doctor.specialization}</span>
            <Link to={`/appointment/${doctor.id}`}><button className='mt-3 px-6 py-2 bg-customBlue text-white font-inter font-medium text-sm rounded-md shadow-sm hover:bg-blue-700 transition-all'>
                Đặt lịch khám
            </button></Link>
        </div>

    );
}
const Doctorlist = ({doctors}) => {

    return (
        <div className="flex gap-8 w-[2000px] justify-start mt-[10%]">
            {doctors.length > 0 && doctors.map((doctor, index) => (
                <DoctorCard key={index} doctor={doctor} />
            ))}
        </div>
    );
}

export default Doctorlist
