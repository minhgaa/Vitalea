import { useCallback, useEffect, useState } from 'react';
import Header from '../components/header';
import Nav from '../components/Nav/nav';
import InfoCard from '../custom/infocard';
import DayGrid from '../custom/daygrid';
import axiosInstance from '../config/api';
import { useAuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from "react-toastify";
const Mainpage = () => {
    const {authUser} = useAuthContext()
    const [upcomingRequests, setUpcomingRequests] = useState([])
    const [appointments, setAppointments] = useState([])
    const [date, setDate] = useState("")
    const notify = (message) => {
        toast.success(message); // This will show the success toast
      };

    const getUpcomingRequests = useCallback(async () => {
        const response = await axiosInstance.post('/appointment/getappointments', {
            "doctorId": authUser.id,
            "status": "Pending",
        })
        setUpcomingRequests(response.data)
    }, [authUser.id])

    const getAppointments = useCallback(async () => {
        const response = await axiosInstance.post('/appointment/getappointments', {
            "doctorId": authUser.id,
            "status": "Accept",
            "date": date
        })
        setAppointments(response.data)
    }, [authUser.id, date])

    useEffect(() => {
        getUpcomingRequests()
        getAppointments()
    }, [getUpcomingRequests, getAppointments])



    
    const handleApprove = async (id, status) => {
        const response = await axiosInstance.patch('/appointment/update', {
            appointmentId: id,
            status
        })
        if (response.status === 200) {
            notify("Xác nhận thành công")
            window.location.reload()
        }
        
    };

    const handleReject = async (id, status) => {
        const response = await axiosInstance.patch('/appointment/update', {
            appointmentId: id,
            status
        })
        if (response.status === 200) {
            notify("Từ chối thành công")
            window.location.reload()
        }
    };

    const item = [
        { label: 'Dashboard', icon: "src/assets/dasb.svg", active: true, link: "/mainpage" },
        { label: 'Appointments', icon: "src/assets/app.svg", link: "/appointments" },
        { label: 'Patients', icon: "src/assets/pat.svg", link: "/patients" },
        { label: 'Blogs', icon: "src/assets/pat.svg", link: "/blogs" },
        { label: 'Messages', icon: "src/assets/mes.svg", link: "/messages" },
        { label: 'Working Schedule', icon: "src/assets/rep.svg", link: "/working-schedule" },
        { label: 'Settings', icon: "src/assets/set.svg", link: "/settings" },
    ];
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
                <div className="col-span-5 grid grid-rows-5 bg-customBg">
                    <div className='grid grid-cols-2 row-span-2'>
                        <div className='col-span-1 grid grid-cols-2 grid-rows-3'>
                            <InfoCard imgSrc='src/assets/totalc.svg'
                                label1='Total Counselling'
                                label2='2.9k' />
                            <InfoCard imgSrc='src/assets/overall.svg'
                                label1='Overall Booking'
                                label2='2.9k' />
                            <InfoCard imgSrc='src/assets/newapp.svg'
                                label1='New Appointments'
                                label2='2.9k' />
                            <InfoCard imgSrc='src/assets/cancel.svg'
                                label1='Cancel Appointments'
                                label2='2.9k' />
                            <InfoCard imgSrc='src/assets/totalv.svg'
                                label1='Total Visitors'
                                label2='2.9k' />
                            <InfoCard imgSrc='src/assets/apptoday.svg'
                                label1='Appointments Today'
                                label2='2.9k' />
                        </div>
                        <div className='col-span-1 flex flex-col justify-center items-center'>
                            {/* <div className='w-[90%] h-[96.5%] bg-white rounded-md pt-3'>
                                <label className='p-5 font-inter font-bold text-xs'> Patients overview </label>
                                <CustomBarChart data={data} />
                            </div> */}
                            <img className='rounded-full w-[150px] h-[150px]' src='/public/pictures_healthcare/Chanthuongchinhhinh.webp' />
                            <h3 className='font-bold text-lg'>Chào mừng trở lại, Dr.Hoc Nguyen</h3>
                        </div>

                    </div>
                    <div className='grid grid-cols-4 row-span-3'>
                        <div className='col-span-3 flex justify-center items-center'>
                            <div className='h-[96.5%] w-[93.5%] grid grid-rows-8 bg-white rounded-md'>
                                <div className='row-span-2 pt-3 border-gray-300 border-b'>
                                    <label className='p-5 font-inter font-bold text-xs'> Upcoming appointment</label>
                                    <DayGrid doctorId = {authUser.id} setAppointments={setAppointments} setDate = {setDate}/>
                                </div>
                                <div className='row-span-6 mt-3'>
                                    <label className='p-5 font-inter font-bold text-xs'> Schedule list</label>

                                    <div className="overflow-y-auto flex justify-center max-h-64 xl:mt-5">
                                        <table className="pl- min-w-[98.5%] min-h-full bg-white">
                                            <thead>
                                                <tr className="text-xs">
                                                    <th className="py-2 px-4 text-start">Name</th>
                                                    <th className="py-2 px-4 text-start">Date & Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {appointments.length > 0 && appointments?.map((appointment, index) => (
                                                    <tr key={index} className="border-b h-14 text-xs hover:bg-gray-100 transition duration-200">
                                                        <td className="py-2 px-4 text-start">{appointment?.user?.firstName} {appointment?.user?.lastName}</td>
                                                        <td className="py-2 px-4 text-start">{appointment?.workingShift.time}, {appointment?.workingShift.date}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 flex justify-start items-center'>
                            <div className='w-[90%] pt-3 h-[96.5%] rounded-md bg-white'>
                                <label className='p-5  font-inter font-bold text-xs'> Appoint Request</label>
                                
                                <div className="overflow-y-auto max-h-[350px] mt-3 ">
                                    {upcomingRequests.length > 0 && upcomingRequests?.map((request, index) => (
                                        <div key={index} className='flex justify-center'>
                                            <div className="mt-3 flex items-center p-4 border rounded-md w-[90%]">
                                                <div className="flex items-center">
                                                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                                                        <img
                                                        src={(request?.user?.account?.image !== 'none') || "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"}
                                                        alt='user-avatar'
                                                        />
                                                    </div>
                                                    <div className='w-[80%] pl-4'>
                                                        <p className="font-semibold text-xs">{request?.user.firstName} {request?.user?.lastName}</p>
                                                        <p className="text-xs text-gray-500">{request?.workingShift.time}, {request?.workingShift.date}</p>
                                                        <p className="text-xs text-gray-500">Counselling</p>
                                                        <div className='space-x-2 mt-3'>
                                                            <button
                                                                className="bg-customBlue text-white w-[45%] h-[25px] rounded-md text-xs hover:bg-green-600"
                                                                onClick={() => handleApprove(request.id, 'Accept')}
                                                            >
                                                                Accept
                                                            </button>

                                                            <button
                                                                className=" bg-red-500 text-white w-[45%] h-[25px] rounded-md text-xs hover:bg-red-600"
                                                                onClick={() => handleReject(request.id, 'Reject')}
                                                            >Reject</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position='top-right'/>
        </div>
    );
}

export default Mainpage;
