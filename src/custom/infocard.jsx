// src/components/InfoCard.js
import React from 'react';

const InfoCard = ({ imgSrc, label1, label2 }) => {
    return (
        <div className='h-full w-full flex justify-end items-center'>
            <div className='h-[90%] w-[90%] flex items-center rounded-md bg-white'>
                <div className='ml-5 w-[50px] h-[50px] flex justify-center items-center rounded-lg border border-gray-500'>
                    <img src={imgSrc} className='w-[60%] h-[60%]' />
                </div>
                <div className='ml-5 h-[50px] flex flex-col justify-between'>
                    <label className='font-inter text-xs'>{label1}</label>
                    <label className='flex font-inter text-xs font-bold'>{label2}</label>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
