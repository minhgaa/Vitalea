import React, { useState, useEffect } from 'react';

const DayGrid = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [daysToShow, setDaysToShow] = useState(15);
    const [selectedDay, setSelectedDay] = useState(null);

    
    const dayArray = Array.from({ length: daysToShow }, (_, index) => {
        const date = new Date(startDate);
        date.setDate(date.getDate() + index);
        return date.getDate();
    });

   
    const handleNext = () => {
        const newStartDate = new Date(startDate);
        newStartDate.setDate(newStartDate.getDate() + daysToShow); 
        setStartDate(newStartDate);
    };

    
    const handleDayClick = (day) => {
        setSelectedDay(day); 
    };


    const getDaysToShow = () => {
        if (window.innerWidth < 640) return 6;  
        if (window.innerWidth < 768) return 8;  
        if (window.innerWidth < 1024) return 10;
        if (window.innerWidth < 1300) return 14;
        return 18; 
    };

   
    useEffect(() => {
        const handleResize = () => {
            setDaysToShow(getDaysToShow());
        };

        
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex items-center justify-start pt-3 pl-4">
            <div className="flex justify-center mb-4">
                {dayArray.map((day, index) => (
                    <div 
                        key={index} 
                        className={`m-1 w-8 h-8 flex justify-center items-center font-bold text-sm border border-gray-300 rounded-md cursor-pointer transition duration-200
                            ${selectedDay === day ? 'border border-blue-500 bg-violet-200' : 'hover:bg-blue-100'}`} // Đổi màu khi được chọn
                        onClick={() => handleDayClick(day)} 
                    >
                        {day}
                    </div>
                ))}
            </div>
            <button 
                onClick={handleNext} 
                className="ml-2 mb-4">
                <img src="src/assets/next.svg" className='h-5 w-5' />
            </button>
        </div>
    );
};

export default DayGrid;
