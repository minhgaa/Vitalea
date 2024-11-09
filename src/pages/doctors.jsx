import { useCallback, useEffect, useState } from "react"
import axiosInstance from "../config/api"
import { Link } from "react-router-dom"
import Header from "../components/header"

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    const getDoctorsBySpecialization = useCallback(async (specialization) => {
        if (specialization === 'Tất cả') {
            const response = await axiosInstance.get('/doctor')
            setDoctors(response.data)
            return
        }
        const response = await axiosInstance.post('/doctor/find', {
            specialization
        })
        setDoctors(response.data)
    }, [])

    const getAllDoctors = useCallback(async () => {
        const response = await axiosInstance.get('/doctor')
        setDoctors(response.data)
    }, [])
    const handleChangeSpecialization = async (e) => {
        getDoctorsBySpecialization(e.target.value)
    }

    useEffect(() => {
        getAllDoctors();
    }, [getAllDoctors])

    return (
        <div className="">
            <Header/>
            <div className="flex overflow-y-hidden">
                <div className="w-1/4 p-8 ">
                    <p className="text-[18px] font-bold">Chuyên khoa</p>
                    <div className="my-6 p-2 border border-[#B3B3B3] rounded-md">
                        <input className="border-none outline-none" type="text" placeholder="Tìm nhanh chuyên khoa..." />
                    </div>
                    <div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="Tất cả" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChangeSpecialization(e)}/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="nhikhoa" type="radio" value="Nhi khoa" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChangeSpecialization(e)}/>
                            <label htmlFor="nhikhoa" className="ms-4 text-sm font-medium text-black">Nhi khoa</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="coxuongkhop" type="radio" value="Cơ xương khớp" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChangeSpecialization(e)}/>
                            <label htmlFor="coxuongkhop" className="ms-4 text-sm font-medium text-black">Cơ xương khớp</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="dalieu" type="radio" value="Da liễu" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChangeSpecialization(e)}/>
                            <label htmlFor="dalieu" className="ms-4 text-sm font-medium text-black">Da liễu</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="hohap" type="radio" value="Hô hấp" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChangeSpecialization(e)}/>
                            <label htmlFor="hohap" className="ms-4 text-sm font-medium text-black">Hô hấp</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="noitiet" type="radio" value="Nội tiết" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChangeSpecialization(e)}/>
                            <label htmlFor="noitiet" className="ms-4 text-sm font-medium text-black">Nội tiết</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="diungmiendich" type="radio" value="Dị ứng - miễn dịch" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChangeSpecialization(e)}/>
                            <label htmlFor="diungmiendich" className="ms-4 text-sm font-medium text-black">Dị ứng - miễn dịch</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="gaymehoisuc" type="radio" value="Gây mê hồi sức" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChangeSpecialization(e)}/>
                            <label htmlFor="gaymehoisuc" className="ms-4 text-sm font-medium text-black">Gây mê hồi sức</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="taimuihong" type="radio" value="Tai - mũi - họng" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChangeSpecialization(e)}/>
                            <label htmlFor="taimuihong" className="ms-4 text-sm font-medium text-black">Tai - mũi - họng</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="ungbuou" type="radio" value="Ung bướu" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChangeSpecialization(e)}/>
                            <label htmlFor="ungbuou" className="ms-4 text-sm font-medium text-black">Ung bướu</label>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 h-[700px] ml-6 overflow-hidden overflow-y-scroll">
                    {doctors.map((doctor, index) => {
                        return (
                            <div key={index} className="mt-6 p-4 rounded-md border border-[#DEDEDE] !flex items-center justify-between">
                                <div className="flex">
                                    <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                    <img src={`http://localhost:3000/${doctor.account.image}`}/>
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-[18px]">{doctor.firstName} {doctor.lastName}</p>
                                        <div className="flex">
                                            {
                                                doctor?.specialization.split(', ').map((item, index) => {
                                                    return (<p key={index} className="mr-4 my-4 text-black text-[12px] py-2 px-4 mt-4 bg-[#F3F4F6] rounded-full font-bold text-center">{item}</p>)
                                                })
                                            }
                                        </div>
                                        <p className="">{doctor.clinic}</p>
                                    </div>
                                </div>
                                <Link to ={`/appointment/${doctor.id}`}><button className="px-6 py-2 bg-customBlue mr-4 font-bold rounded-md text-white text-[14px]">Đặt khám</button></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
} 
export default Doctors 