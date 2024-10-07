import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Customized } from 'recharts';
import { FaFaceFrown, FaFaceLaugh, FaFaceMeh, FaFaceSmile, FaFaceGrinHearts } from "react-icons/fa6";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 rounded shadow-md">
                <p className="text-gray-700">{`${label} : ${payload[0].value}`}</p>
                {payload[0].payload.label && (
                    <p className="text-yellow-600 font-bold">{payload[0].payload.label}</p>
                )}
            </div>
        );
    }
    return null;
};

const CustomYAxisTick = ({ x, y, payload }) => {
    const value = payload.value;
    let IconComponent = FaFaceMeh; 

    if (value <= 2) IconComponent = FaFaceFrown;
    else if (value <= 4) IconComponent = FaFaceMeh;
    else if (value <= 6) IconComponent = FaFaceSmile;
    else if (value <= 8) IconComponent = FaFaceLaugh;
    else IconComponent = FaFaceGrinHearts;

    return (
        <g transform={`translate(${x},${y})`}>
            <foreignObject x={-20} y={-10} width={50} height={50}>
                <IconComponent size={17} color='#DBDBDA' />
            </foreignObject>
        </g>
    );
};

const Custombarchart1 = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis
                    domain={[0, 10]}
                    width={50}
                    tick={CustomYAxisTick}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill="#727EEE" barSize={30} radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Custombarchart1;
