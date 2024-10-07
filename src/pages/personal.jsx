import { React, useState, useEffect } from 'react'
import Header from '../components/header'
import Nav from '../components/Nav/nav'
import { RiMessage3Line } from "react-icons/ri";
import Custompiechart from '../custom/custompiechart';
import { FaCheckCircle, FaEllipsisH } from 'react-icons/fa';
import Custombarchart1 from '../custom/custombarchart1';

const dataweek = [
    { name: 'Mon', value: 6 },
    { name: 'Tue', value: 5 },
    { name: 'Wed', value: 10, label: 'Excellent' },
    { name: 'Thu', value: 5 },
    { name: 'Fri', value: 6 },
    { name: 'Sat', value: 7 },
    { name: 'Sun', value: 7 },
];
const datamonth = [
    { name: 'Jan', value: 2 },
    { name: 'Feb', value: 3 },
    { name: 'Mar', value: 5 },
    { name: 'Apr', value: 4 },
    { name: 'May', value: 3 },
    { name: 'Jun', value: 8 },
    { name: 'Jul', value: 5 },
    { name: 'Aug', value: 6, label: 'Excellent' },
    { name: 'Sep', value: 5 },
    { name: 'Oct', value: 6 },
    { name: 'Nov', value: 10 },
    { name: 'Dec', value: 7 },
];
const datayear = [
    { name: '2019', value: 2 },
    { name: '2020', value: 3 },
    { name: '2021', value: 5 },
    { name: '2022', value: 4 },
    { name: '2023', value: 3 },
    { name: '2024', value: 9, label: 'Excellent' },
  ];

const tasks = [
    { task: 'Stretch', completed: true },
    { task: '5 Times Salat', completed: false },
    { task: 'Home Workout', completed: true },
    { task: 'Go for a walk', completed: false },
    { task: 'Listen to Quran', completed: true },
    { task: 'Get fresh air outdoors', completed: true },
    { task: 'Read a book', completed: false },
];

const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-US', options);
};

const getCurrentWeekRange = () => {
    const today = new Date();
    const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
    const lastDay = new Date(today.setDate(today.getDate() + 6));

    return { start: formatDate(firstDay), end: formatDate(lastDay) };
};
const Personal = () => {
    const [taskList, setTaskList] = useState(tasks);
    const [today, setToday] = useState(new Date());
    const [weekRange, setWeekRange] = useState({ start: '', end: '' });

    useEffect(() => {
        const currentWeek = getCurrentWeekRange();
        setWeekRange(currentWeek);
    }, []);
    const [activeButton, setActiveButton] = useState('W');
    const [activeButton1, setActiveButton1] = useState('W');
    const [datachart, setDatachart] = useState(dataweek);
    const handleClick1 = (button) => {
        setActiveButton1(button);

        if (button === 'W') {
            setDatachart(dataweek);
        } else if (button === 'M') {
            setDatachart(datamonth);
        } else if (button === 'Y') {
            setDatachart(datayear);
        }
    };


    const handleClick = (button) => {
        setActiveButton(button);
    };
    const data = [
        { label: 'Impulse', left: 60, right: 40 },
        { label: 'Anxiety', left: 30, right: 70 },
        { label: 'Attention Drift', left: 80, right: 20 },
        { label: 'Mood Swing', left: 10, right: 90 },
        { label: 'Traumatic', left: 50, right: 50 },
        { label: 'Depression', left: 35, right: 65 },
    ];

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
            <div className=' grid grid-cols-6 h-[92.5%]'>
                <div className='border-r border-gray-300 col-span-1 flex justify-center items-start'>
                    <Nav items={item} />
                </div>
                <div className=' col-span-5 bg-customBg w-full h-full grid grid-rows-11'>
                    <div className='row-span-2 flex justify-center items-center w-full h-full' >
                        <div className=' w-[95%] h-[95%] flex justify-between items-center rounded-md' style={{ backgroundColor: '#4E5F8E' }}>
                            <div className='ml-5 flex items-center'>
                                <img src="src/assets/personal.jpg"
                                    className=' h-[80px] w-[80px] rounded-full' />
                                <div className='ml-3 flex flex-col justify-start items-start h-[75%] w-auto'>
                                    <label className='text-white  font-light text-sm'>Le Ngoc Bao Minh</label>
                                    <label className='text-white font-light text-xs mt-1'>Age: 20</label>
                                    <label className='text-white font-light text-xs mt-1'>Consultation: Individual Theraphy</label>
                                    <label className='text-white font-light text-xs mt-1'>Visited: Online</label>
                                </div>
                            </div>
                            <div className=' h-[75%] w-[70px] mr-5'>
                                <button className='flex flex-row justify-center rounded-md items-center h-[23px] w-[70px] bg-gray-400 '>
                                    <RiMessage3Line className='text-white mr-1' />
                                    <label className='text-[8px] text-white'> Message</label>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-center items-center  row-span-5'>
                        <div className='w-[95%] h-[95%] grid grid-cols-3 gap-4'>
                            <div className='bg-white flex flex-col items-center rounded-md'>
                                <div className='w-[90%] h-full'>
                                    <div className='h-[20%] items-center flex justify-between w-full'>
                                        <label className='font-semibold text-sm'>Self Control</label>
                                        <div>
                                            <button className={`mr-1 text-xs ${activeButton === 'W' ? 'font-semibold' : 'font-light text-gray-500'}`}
                                                onClick={() => handleClick('W')}>W</button>
                                            <button className={`mr-1 text-xs ${activeButton === 'M' ? 'font-semibold' : 'font-light text-gray-500'}`}
                                                onClick={() => handleClick('M')}>M</button>
                                            <button className={`mr-1 text-xs ${activeButton === 'Y' ? 'font-semibold' : 'font-light text-gray-500'}`}
                                                onClick={() => handleClick('Y')}>Y</button>
                                        </div>
                                    </div>
                                    <div className='flex h-[70%]  w-full items-end'>
                                        <div className="grid grid-cols-5 w-full ">
                                            <div className='col-span-2 flex flex-col space-y-4 2xl:space-y-6 items-start justify-center'>
                                                {data.map((item, index) => (
                                                    <div key={index} className="text-sm font-medium text-gray-700">
                                                        {item.label}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='col-span-3 flex flex-col items-end justify-center 2xl:space-y-6 space-y-4 w-full'>
                                                {data.map((item, index) => (
                                                    <div key={index} className="flex items-center justify-end space-x-3 w-full">
                                                        <div className="text-sm font-light">{item.left}%</div>

                                                        <div className="flex items-center w-2/4 h-4 rounded-lg overflow-hidden"
                                                            style={{ background: '#E5EDF8' }}>
                                                            <div
                                                                className="bg-blue-500 rounded-full h-full"
                                                                style={{ width: `${item.left}%`, background: '#727EEE' }}
                                                            ></div>
                                                        </div>
                                                        <div className="text-sm font-light">{item.right}%</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white flex flex-col items-center rounded-md'>
                                <div className='w-[90%] h-full'>
                                    <div className='h-[20%] items-center flex justify-between w-full'>
                                        <label className='font-semibold text-sm'>Weekly Activities</label>
                                        <label className="mt-[3px] font-normal text-gray-500 text-xs">{weekRange.start} - {weekRange.end}</label>
                                    </div>
                                    <div className='flex justify-center h-[70%] w-full'>
                                        <Custompiechart />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white flex flex-col items-center rounded-md'>
                                <div className='w-[90%] h-full'>
                                    <div className='h-[20%] items-center flex justify-between w-full'>
                                        <label className='font-semibold text-sm'>Daily Tasks</label>
                                        <label className="mt-[3px] font-normal text-gray-500 text-xs">{formatDate(today)}</label>
                                    </div>
                                    <div className='flex  h-[70%] w-full'>
                                        <ul className='h-full w-full'>
                                            {taskList.map((item, index) => (
                                                <li key={index} className='mb-2 flex w-full justify-between items-center'>
                                                    <span className='text-sm'>{item.task}</span>
                                                    <span>
                                                        {item.completed ? (
                                                            <FaCheckCircle className='text-green-500' />
                                                        ) : (
                                                            <FaEllipsisH className='text-gray-400' />
                                                        )}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=' flex justify-center items-center row-span-4'>
                        <div className='w-[95%] h-[95%] grid grid-cols-3 gap-4'>
                            <div className='col-span-2 bg-white flex flex-col items-center rounded-md'>
                                <div className='w-[95%] h-full'>
                                    <div className='h-[20%] items-center flex justify-between w-full'>
                                        <label className='font-semibold text-sm'>Progress of well-being</label>
                                        <div>
                                            <button className={`mr-1 text-xs ${activeButton1 === 'W' ? 'font-semibold' : 'font-light text-gray-500'}`}
                                                onClick={() => handleClick1('W')}>W</button>
                                            <button className={`mr-1 text-xs ${activeButton1 === 'M' ? 'font-semibold' : 'font-light text-gray-500'}`}
                                                onClick={() => handleClick1('M')}>M</button>
                                            <button className={`mr-1 text-xs ${activeButton1 === 'Y' ? 'font-semibold' : 'font-light text-gray-500'}`}
                                                onClick={() => handleClick1('Y')}>Y</button>
                                        </div>
                                    </div>
                                    <div className='mr-6 flex justify-center items-center h-[80%] w-[95%]'>
                                        <Custombarchart1 data={datachart}/>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white grid grid-rows-5 rounded-md'>
                                <div className='row-span-1 rounded-t-md'style={{ backgroundColor: '#4E5F8E' }}>

                                </div>
                                <div className='row-span-4'>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal