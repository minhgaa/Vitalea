import React from 'react';
import {Link} from 'react-router-dom'

const CounselingCard = ({ profile, name, date, time, sessionTitle }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-2">
            <div className=' flex items-start w-2/5 h-full'>
                <img src={profile} alt={name} className="w-full aspect-square rounded-full object-cover" />
            </div>
            <div>
                <h3 className="font-semibold text-sm text-gray-900">{name}</h3>
                <p className="text-xs text-gray-500">{`${date}, ${time}`}</p>
                <p className="text-xs text-gray-400">{sessionTitle}</p>
            </div>
        </div>
    );
};

const CounselingGrid = ({ sessions }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
            {sessions.map((session, index) => (
                <Link to="/personal" type="button" className=''>
                <CounselingCard
                    key={index}
                    profile={session.profile}
                    name={session.name}
                    date={session.date}
                    time={session.time}
                    sessionTitle={session.sessionTitle}
                />
                </Link>
            ))}
        </div>
    );
};

export default CounselingGrid;
