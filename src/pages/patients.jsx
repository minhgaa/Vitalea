import { React, useState } from 'react'
import Header from '../components/header';
import Nav from '../components/Nav/nav';
import DropdownCheckbox from '../custom/dropdowncheckbox';
import CounselingGrid from '../custom/counsellpatient';
const Patients = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value); 
    };
    const data = [
        { "id": "checkbox1", "label": "Default checkbox", "checked": false },
        { "id": "checkbox2", "label": "Checked state", "checked": false },
        { "id": "checkbox3", "label": "Another checkbox", "checked": false },
    ]
    const item = [
        { label: 'Dashboard', icon: "src/assets/das.svg", link: "/mainpage" },
        { label: 'Appointments', icon: "src/assets/app.svg", link: "/appointments" },
        { label: 'Patients', icon: "src/assets/patb.svg", active:true, link: "/patients" },
        { label: 'Blogs', icon: "src/assets/blog.png", link: "/blogs" },
        { label: 'Messages', icon: "src/assets/mes.svg", link: "/messages" },
        { label: 'Working Schedule', icon: "src/assets/rep.svg", link: "/working-schedule" },
        { label: 'Settings', icon: "src/assets/set.svg", link: "/settings" },
    ];
    const sessionData = [
        {
          profile: 'https://via.placeholder.com/150',
          name: 'Ibrahim Kadri',
          date: '06 Feb',
          time: '11:00 am - 11:45 am',
          sessionTitle: 'Individual Counselling',
        },
        {
          profile: 'https://via.placeholder.com/150',
          name: 'Ibrahim Kadri',
          date: '06 Feb',
          time: '11:00 am - 11:45 am',
          sessionTitle: 'Individual Counselling',
        },
        {
            profile: 'https://via.placeholder.com/150',
            name: 'Ibrahim Kadri',
            date: '06 Feb',
            time: '11:00 am - 11:45 am',
            sessionTitle: 'Individual Counselling',
          },
          {
            profile: 'https://via.placeholder.com/150',
            name: 'Ibrahim Kadri',
            date: '06 Feb',
            time: '11:00 am - 11:45 am',
            sessionTitle: 'Individual Counselling',
          },
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
                <div className='col-span-5 bg-customBg flex justify-center items-center'>
                    <div className='  w-[95%] h-[95%] grid grid-cols-4 '>
                        <div className='col-span-1 h-full w-full bg-white rounded-md flex flex-col items-center'>
                            <div className='w-[90%] h-full'>
                                <div className=' mb-5 h-[7.5%] w-full flex items-center border-b-[0.5px] border-gray-400'>
                                    <label className='font-bold '>Filters</label>
                                </div>
                                <div className='w-[100%] h-[40px] flex flex-col  items-center '>
                                    <DropdownCheckbox label="Appointment for" data={data} />
                                    <DropdownCheckbox label="City" data={data} />
                                    <DropdownCheckbox label="Gender" data={data} />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 flex justify-end items-center'>
                            <div className='h-full w-[97%]'>
                                <div className='rounded-md mb-5 w-full h-[7.5%] flex items-center justify-center bg-white'>
                                    <div className='w-[90%] h-full flex items-center justify-between'>
                                        <label className='font-bold'> Patients</label>
                                        <div className='flex items-center h-1/2 w-1/2 rounded-md border-[0.5px] border-gray-500'>
                                            <button>
                                                <img src="src/assets/search.svg" className='mr-2 ml-3 w-3 h-3'>
                                                </img>
                                            </button>
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={handleChange}
                                                className="w-full text-sm border-gray-50 rounded-md"
                                                placeholder="Search patients"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-md w-full h-[89.5%] bg-white'>
                                <CounselingGrid sessions={sessionData} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Patients