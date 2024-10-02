import React from 'react'
import Header from '../components/header';
import Nav from '../components/Nav/nav';

const Patients = () => {
    const item = [
        { label: 'Dashboard', icon: "src/assets/das.svg", link: "/mainpage" },
        { label: 'Appointments', icon: "src/assets/app.svg", link: "/appoiments" },
        { label: 'Patients', icon: "src/assets/patb.svg", active: true, link: "/patients" },
        { label: 'Messages', icon: "src/assets/mes.svg", link: "/messages" },
        { label: 'Report', icon: "src/assets/rep.svg", link: "/report" },
        { label: 'Settings', icon: "src/assets/set.svg", link: "/settings" },
    ]
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
            </div>
        </div>
    )
}

export default Patients