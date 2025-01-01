/* eslint-disable react/prop-types */
const HospitalCard = ({ doctor }) => {
    return (
        <div className='flex flex-col justify-center items-center py-4 w-[250px] rounded-xl bg-white'>
            <img src={doctor.avatar} className='mb-5 w-24 h-44' />
            <span className='mb-5 text-sm font-inter font-bold '>{doctor.name}</span>
            <div className='h-1 mb-5 w-8 rounded-full bg-customBlue'></div>
            <span className='font-inter  text-center pb-2 text-xs text-gray-500'>{doctor.specialty}</span>
        </div>
    );
}
const HospitalList = () => {
    const doctors = [
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "BDS . MDS - Peridontology and Oral Inplantology, 16 years Experience",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "BDS . MDS - Peridontology and Oral Inplantology, 16 years Experience",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "BDS . MDS - Peridontology and Oral Inplantology, 16 years Experience",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "BDS . MDS - Peridontology and Oral Inplantology, 16 years Experience",
        },
        {
            avatar: "src/assets/doctor.png",
            name: "PGS.TS Nguyễn Văn A",
            specialty: "BDS . MDS - Peridontology and Oral Inplantology, 16 years Experience",
        },

    ];

    return (
        <div className="flex gap-8 w-[2000px] justify-start mt-[10%]">
            {doctors.map((doctor, index) => (
                <HospitalCard key={index} doctor={doctor} />
            ))}
        </div>
    );
}

export default HospitalList
