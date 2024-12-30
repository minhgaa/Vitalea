import Header from '../components/header';
import Nav from '../components/Nav/nav';
import Dropdownmenu from '../custom/dropdownmenu';
import CounselingCard from '../custom/counsellingcart';
import { useCallback, useEffect, useState } from 'react';
import axiosInstance from '../config/api';
import { useAuthContext } from '../context/AuthContext';
import Spinner from '../custom/spinner';
import NoAppointment from '../components/no-appointments';

const Appoiments = () => {
    const {authUser} = useAuthContext()
    const [appointments, setAppointments] = useState([])
    const [, setSelectType] = useState('This day')
    const [loading, setLoading] = useState(false)
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
        { label: 'Dashboard', icon: "src/assets/das.svg",  link: "/mainpage" },
        { label: 'Appointments', icon: "src/assets/appb.svg",active: true, link: "/appointments" },
        { label: 'Patients', icon: "src/assets/pat.svg", link: "/patients" },
        { label: 'Blogs', icon: "src/assets/blog.png", link: "/blogs" },
        { label: 'Messages', icon: "src/assets/mes.svg", link: "/messages" },
        { label: 'Working Schedule', icon: "src/assets/rep.svg", link: "/working-schedule" },
        { label: 'Settings', icon: "src/assets/set.svg", link: "/settings" },
    ];
    const menuData = ['This day', 'This week', 'This month', 'This year'];
    const menuData1 = ['All'];
    return (
        <div className="w-screen h-screen">
            {/* Header */}
            {loading ? <div className='w-sreen h-screen fixed top-0 left-0'>
                <Spinner/>
            </div> : <>

                <div className='w-full h-[7.5%] flex items-center border-b border-gray-300'>
                    <Header />
                </div>

                <div className='flex h-[92.5%] w-full'>
                    <div className='border-r border-gray-300 w-1/6 flex justify-center items-start'>
                        <Nav items={item} />
                    </div>

                    <div className='w-5/6 flex flex-col'>
                        <div className='flex justify-end items-center bg-black h-[10%] w-full rounded-md'>
                            <label className='m-4 font-bold '> Appointment</label>
                            <div className='flex space-x-2 mr-5'>
                                <div>
                                    <label className='mr-3 text-gray-400 text-sm'>Appointments</label>
                                    <Dropdownmenu setLoading={setLoading} setAppointments={setAppointments} setSelectType={setSelectType} data={menuData} />
                                </div>
                                <div>
                                    <label className='mr-3 text-gray-400 text-sm'>Sort by</label>
                                    <Dropdownmenu data={menuData1} />
                                </div>
                            </div>
                        </div>

                        <div className='w-[90%] mx-auto flex-1'>
                            <div className='flex justify-start items-start'>
                                <div className='bg-white rounded-md w-full p-4'>
                                    <div className='flex flex-wrap gap-4'>
                                        {appointments.length > 0 ? appointments.map((appointment, index) => (
                                            <CounselingCard
                                                key={index}
                                                date={appointment.workingShift.date }
                                                time={appointment.workingShift.time}
                                                sessionTitle={appointment.note}
                                                profile={appointment.user}
                                            />
                                        )) : <NoAppointment/>}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>}
        </div>
    )
}

export default Appoiments;
