/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Dropdownmenu from './dropdownmenu';
import axiosInstance from '../config/api';

const DayGrid = ({setDate, setAppointments, doctorId}) => {
    const [startDate, setStartDate] = useState(new Date().getDate());
    const [daysToShow, setDaysToShow] = useState(15);
    const [selectedDay, setSelectedDay] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Keep the month as 0-11
    const [selectMonth, setSelectMonth] = useState("")
    const dayArray = Array.from({ length: daysToShow }, (_, index) => {
        const date = new Date(startDate);
        date.setDate(date.getDate() + index);
        return date;
    });

    const handleNext = () => {
        const newStartDate = new Date(startDate);
        newStartDate.setDate(newStartDate.getDate() + daysToShow);
        setStartDate(newStartDate);
    };

    const handleDayClick = async (day) => {
        setSelectedDay(day.getDate());
        const response = await axiosInstance.post('/appointment/getappointments', {
            "doctorId": doctorId,
            "status": "Accept",
            "date": `${day.getDate()}/${selectMonth}/2024`
        }) 
        if(response.status === 200) setAppointments(response.data)
    };

    const getDaysToShow = () => {
        if (window.innerWidth < 640) return 6;  
        if (window.innerWidth < 768) return 8;  
        if (window.innerWidth < 1024) return 10;
        if (window.innerWidth < 1300) return 14;
        return 18; 
    };

    const months = [
        "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
        "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
    ];

    useEffect(() => {
        const handleResize = () => {
            setDaysToShow(getDaysToShow());
        };
        setDate(`${new Date().getDate()}/${new Date().getMonth() + 1}/2024`)
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [startDate, setDate]);

    useEffect(() => {
        // Set the selected day to today if no day is selected and today's day is in the range
        if (!selectedDay && dayArray.some(day => day.getDate() === new Date().getDate())) {
            setSelectedDay(new Date().getDate());
        }
    }, [dayArray, selectedDay]);

    return (
        <div className="flex justify-start pt-3 pl-4">
            <div className="flex justify-center mb-4">
                {dayArray.map((day, index) => (
                    <div 
                        key={index} 
                        className={`m-1 w-8 h-8 flex justify-center items-center font-bold text-sm border border-gray-300 rounded-md cursor-pointer transition duration-200
                            ${selectedDay === day.getDate() ? 'border border-blue-500 bg-violet-200' : 
                            (day.getDate() === new Date().getDate() ? 'border border-blue-500 bg-yellow-200' : 'hover:bg-blue-100')}`} // Highlight today
                        onClick={() => handleDayClick(day)} 
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
            <button 
                onClick={handleNext} 
                className="ml-2 mb-4">
                <img src="src/assets/next.svg" className='h-5 w-5' />
            </button>
            <div className='ml-3'>
                <Dropdownmenu 
                    data={months} 
                    selectedMonth={currentMonth + 1} // Add 1 here to show the correct month (1-12)
                    onMonthChange={setCurrentMonth} // Update the selected month when changed
                    setSelectMonth={setSelectMonth}
                />
            </div>
        </div>
    );
};

export default DayGrid;
