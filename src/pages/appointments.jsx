import Header from '../components/header';
import Nav from '../components/Nav/nav';
import Dropdownmenu from '../custom/dropdownmenu';
import CounselingCard from '../custom/counsellingcart';
import { useCallback, useEffect, useState } from 'react';
import axiosInstance from '../config/api';
import { useAuthContext } from '../context/AuthContext';

const Appoiments = () => {
    const {authUser} = useAuthContext()
    const [appointments, setAppointments] = useState([])
    const [type, setSelectType] = useState('This day')
    const getAppointments = useCallback(async () => {
        const response = await axiosInstance.post('/appointment/getappointments', {
            "doctorId": authUser.id,
            "status": "Accept",
            "date": `${new Date().getDate()}/${new Date().getMonth() + 1}/2024`
        })
        setAppointments(response.data)
    }, [authUser.id])

    useEffect(() => {
        getAppointments()
    }, [getAppointments])

    const item = [
        { label: 'Dashboard', icon: "src/assets/dasb.svg",  link: "/mainpage" },
        { label: 'Appointments', icon: "src/assets/app.svg",active: true, link: "/appointments" },
        { label: 'Patients', icon: "src/assets/pat.svg", link: "/patients" },
        { label: 'Blogs', icon: "src/assets/pat.svg", link: "/blogs" },
        { label: 'Messages', icon: "src/assets/mes.svg", link: "/messages" },
        { label: 'Working Schedule', icon: "src/assets/rep.svg", link: "/working-schedule" },
        { label: 'Settings', icon: "src/assets/set.svg", link: "/settings" },
    ];
    const menuData = ['This day', 'This week', 'This month', 'This year'];
    const menuData1 = ['All'];
    return (

        <div className="w-screen h-screen">
            {/* Header */}
            <div className='w-full h-[7.5%] flex items-center border-b border-gray-300'>
                <Header />
            </div>
            <div className='grid grid-cols-6 h-[92.5%]'>
                <div className='border-r border-gray-300 col-span-1 flex justify-center items-start'>
                    <Nav items={item} />
                </div>
                <div className=' col-span-5 grid grid-rows-11 bg-customBg'>
                    <div className=' row-span-1 flex justify-center items-center'>
                        <div className='bg-white h-[90%] w-[96%] flex items-center justify-between rounded-md'>
                            <label className=' m-4 font-bold '> Appointment</label>
                            <div className=' flex flex-row space-x-2 mr-5'>
                                <div className=''>
                                    <label className='mr-3 text-gray-400 text-sm'>Appointments</label>
                                    <Dropdownmenu setSelectType = {setSelectType} data={menuData} />
                                </div>
                                <div className=''>
                                    <label className='mr-3 text-gray-400 text-sm'>Sort by</label>
                                    <Dropdownmenu data={menuData1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row-span-10 grid grid-cols-5'>
                        <div className='col-span-2 grid grid-rows-2'>
                        </div>
                        <div className='col-span-3 flex justify-start items-start'>
                            <div className='bg-white h-[97.5%] rounded-md w-[96.5%] p-4'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                                    {appointments.map((appointment, index) => (
                                        <CounselingCard
                                            key={index}
                                            date={appointment.workingShift.date }
                                            time={appointment.workingShift.time}
                                            sessionTitle={appointment.note}
                                            profile={appointment.user}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appoiments