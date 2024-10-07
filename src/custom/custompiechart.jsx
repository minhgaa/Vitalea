import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Quizzes', value: 60 },
    { name: 'Articles', value: 30 },
    { name: 'Medication', value: 80 },
];

const COLORS = ['#ED7583', '#727EEE', '#FFBB28'];


const renderLabel = ({ percent }) => ` ${(percent * 100).toFixed(0)}%`;

const CustomPieChart = () => {
    return (
        <div style={{ width: '100%', height: '155px' }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius="74%"
                        fill="#8884d8"
                        dataKey="value"
                        label={renderLabel}
                        labelLine={true}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <div className='2xl:mt-7'>
                {data.map((data, index) => (
                    <div key={index} className='flex justify-between items-center w-full'>
                        <div className='flex justify-center items-center'>
                            <div className="w-2 mr-1 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                            <label className='font-normal text-xs'> {data.name}</label>
                        </div>
                        <label className='font-normal text-sm'>{data.value}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomPieChart;
