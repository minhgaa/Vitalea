import React, { useState } from 'react';
import { BarChart, ResponsiveContainer, YAxis, Tooltip, Bar, Cell, LabelList } from 'recharts';

const CustomBarChart = ({ data }) => {
    // State để lưu chỉ số của cột đang hover
    const [activeIndex, setActiveIndex] = useState(null);

    // Hàm thay đổi màu khi hover
    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    // Hàm reset màu khi không hover
    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <ResponsiveContainer width="100%" height="80%">
            <BarChart data={data} margin={{ top: 100, right: 30, left: 20, bottom: 5 }}>
                <YAxis />
                <Tooltip />
                <Bar
                    dataKey="value"
                    onMouseLeave={handleMouseLeave}
                    radius={[10, 10, 0, 0]} 
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={index === activeIndex ? '#5767DE' : '#EAF0FA'} 
                            onMouseEnter={() => handleMouseEnter(index)}
                        />
                    ))}
                    <LabelList dataKey="value" position="top" /> 
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;
