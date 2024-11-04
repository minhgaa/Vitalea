import { React, useState } from 'react'
import Header from '../components/header';
import Nav from '../components/Nav/nav';
import Dropdownmenu from '../custom/dropdownmenu';
import CounselingCard from '../custom/counsellingcart';

const Appoiments = () => {
    const sessionDataArray = [
        {
            date: '06 Feb',
            time: '6:00 pm - 6:45 pm',
            sessionTitle: 'Individual Counselling for feeling stress all the time after office.',
            profile: {
                name: 'Abdullah ',
                gender: 'Male',
                age: 36,
                image: 'https://via.placeholder.com/50',
            },
        },
        {
            date: '07 Feb',
            time: '4:00 pm - 5:00 pm',
            sessionTitle: 'Therapy session for anxiety management.',
            profile: {
                name: 'Fatima Al-Amir',
                gender: 'Female',
                age: 29,
                image: 'https://via.placeholder.com/50',
            },
        },
        {
            date: '06 Feb',
            time: '6:00 pm - 6:45 pm',
            sessionTitle: 'Individual Counselling for feeling stress all the time after office.',
            profile: {
                name: 'Abdullah ',
                gender: 'Male',
                age: 36,
                image: 'https://via.placeholder.com/50',
            },
        },
        {
            date: '07 Feb',
            time: '4:00 pm - 5:00 pm',
            sessionTitle: 'Therapy session for anxiety management.',
            profile: {
                name: 'Fatima Al-Amir',
                gender: 'Female',
                age: 29,
                image: 'https://via.placeholder.com/50',
            },
        }
    ]
    const sessionData = {
        date: '06 Feb',
        time: '6:00 pm - 6:45 pm',
        sessionTitle: 'Individual Counselling for feeling stress all the time after office.',
        profile: {
            name: 'Abdullah ibn Masud',
            gender: 'Male',
            age: 36,
            image: 'https://via.placeholder.com/50',
        }
    };
    const item = [
        { label: 'Dashboard', icon: "src/assets/das.svg", link: "/mainpage" },
        { label: 'Appointments', icon: "src/assets/appb.svg", active: true, link: "/appoiments" },
        { label: 'Patients', icon: "src/assets/pat.svg", link: "/patients" },
        { label: 'Messages', icon: "src/assets/mes.svg", link: "/messages" },
        { label: 'Settings', icon: "src/assets/set.svg", link: "/settings" },
    ]
    const [requests, setRequests] = useState([
        {
            id: 1,
            name: 'John Doe',
            avatar: 'https://via.placeholder.com/50',
            dateTime: '2024-10-04 10:00 AM',
            counselling: 'Consultation',
        },
        {
            id: 2,
            name: 'Jane Smith',
            avatar: 'https://via.placeholder.com/50',
            dateTime: '2024-10-05 11:30 AM',
            counselling: 'Therapy Session',
        },
        {
            id: 1,
            name: 'John Doe',
            avatar: 'https://via.placeholder.com/50',
            dateTime: '2024-10-04 10:00 AM',
            counselling: 'Consultation',
        },
        {
            id: 2,
            name: 'Jane Smith',
            avatar: 'https://via.placeholder.com/50',
            dateTime: '2024-10-05 11:30 AM',
            counselling: 'Therapy Session',
        },
    ]);
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
                                    <Dropdownmenu data={menuData} />
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
                            <div className='flex justify-center items-center' >
                                <div className='bg-white row-span-1 rounded-md w-[90%] h-[95%]'>
                                    <div className='h-full w-full flex flex-col justify-center items-center space-y-2 xl:space-y-4'>
                                        <div className='h-[60px] w-[90%] border flex items-center rounded-md bg-white'>
                                            <div className='ml-5 w-[40px] h-[40px] flex justify-center items-center rounded-lg border border-gray-500'>
                                                <img src="src/assets/apptoday.svg" className='w-[60%] h-[60%]' />
                                            </div>
                                            <div className='ml-5 h-[40px] flex flex-col justify-between'>
                                                <label className='font-inter text-xs'>Total Appointments</label>
                                                <label className='flex font-inter text-xs font-bold'>12k</label>
                                            </div>
                                        </div>
                                        <div className='h-[60px] w-[90%] border flex items-center rounded-md bg-white'>
                                            <div className='ml-5 w-[40px] h-[40px] flex justify-center items-center rounded-lg border border-gray-500'>
                                                <img src="src/assets/overall.svg" className='w-[60%] h-[60%]' />
                                            </div>
                                            <div className='ml-5 h-[40px] flex flex-col justify-between'>
                                                <label className='font-inter text-xs'>Compeleted Counselling</label>
                                                <label className='flex font-inter text-xs font-bold'>12k</label>
                                            </div>
                                        </div>
                                        <div className='h-[60px] w-[90%] border flex items-center rounded-md bg-white'>
                                            <div className='ml-5 w-[40px] h-[40px] flex justify-center items-center rounded-lg border border-gray-500'>
                                                <img src="src/assets/pendapp.svg" className='w-[60%] h-[60%]' />
                                            </div>
                                            <div className='ml-5 h-[40px] flex flex-col justify-between'>
                                                <label className='font-inter text-xs'>Pending Appointments</label>
                                                <label className='flex font-inter text-xs font-bold'>12k</label>
                                            </div>
                                        </div>
                                        <div className='h-[60px] w-[90%] border flex items-center rounded-md bg-white'>
                                            <div className='ml-5 w-[40px] h-[40px] flex justify-center items-center rounded-lg border border-gray-500'>
                                                <img src="src/assets/cancel.svg" className='w-[60%] h-[60%]' />
                                            </div>
                                            <div className='ml-5 h-[40px] flex flex-col justify-between'>
                                                <label className='font-inter text-xs'>Cancel Appointments</label>
                                                <label className='flex font-inter text-xs font-bold'>12k</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex row-span-1 justify-center items-center' >
                                <div className='bg-white rounded-md w-[90%] h-[95%]'>
                                    <div className='mt-3'>
                                        <label className='font-inter font-semibold p-4'>
                                            Pending Appointments
                                        </label>
                                    </div>
                                    <div className="mt-3 overflow-y-auto max-h-[240px] xl:max-h-[300px] ">
                                        {requests.map((request) => (
                                            <div className='flex justify-center'>
                                                <div key={request.id} className="mt-3 flex items-center p-4 border rounded-md w-[90%]">
                                                    <div className="flex w-full h-full items-center">
                                                        <img
                                                            src={request.avatar}
                                                            alt={request.name}
                                                            className="w-10 h-10 rounded-full mr-4"
                                                        />
                                                        <div className='w-[80%] '>
                                                            <p className="font-semibold text-xs">{request.name}</p>
                                                            <p className="text-xs text-gray-500">{request.dateTime}</p>
                                                            <p className="text-xs text-gray-500">{request.counselling}</p>
                                                            <div className='space-x-2 mt-2'>
                                                                <button
                                                                    className="bg-customBlue text-white w-[40%] h-[30px] rounded-md text-xs hover:bg-green-600"
                                                                    onClick={() => handleApprove(request.id)}
                                                                >
                                                                    Accept
                                                                </button>
                                                                <button
                                                                    className=" bg-red-500 text-white w-[40%] h-[30px] rounded-md text-xs hover:bg-red-600"
                                                                    onClick={() => handleReject(request.id)}
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
                        <div className='col-span-3 flex justify-start items-start'>
                            <div className='bg-white h-[97.5%] rounded-md w-[96.5%] p-4'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                                    {sessionDataArray.map((session, index) => (
                                        <CounselingCard
                                            key={index}
                                            date={session.date}
                                            time={session.time}
                                            sessionTitle={session.sessionTitle}
                                            profile={session.profile}
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