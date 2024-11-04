import { useSearchParams } from "react-router-dom"
import Header from "../components/header"
import { useCallback, useEffect, useState } from "react"
import axiosInstance from "../config/api"
import Spinner from "../custom/spinner"

const DoctorSearch = () => {
    const [searchParams] = useSearchParams()
    const [pending, setPending] = useState(true)
    const symptom = searchParams.get('q')
    const [doctors, setDoctors] = useState([])
    const getDoctors = useCallback(async () => {
        if (symptom){
            const response = await axiosInstance.post('/doctor/find', {
                    symptom
                })
            setDoctors(response.data)
            setPending(false)
        }
    }, [symptom])

    useEffect(() => {
        getDoctors()
    }, [getDoctors])
    return (
        pending ? <Spinner/> : <div className="w-screen">
            <Header/>
            <div className="flex justify-center">
                <div className="border border-[#B3B3B3] px-8 py-4 rounded-md w-1/2">
                    <input className="outline-none border-none w-full" type="text" placeholder="Nhập triệu chứng của bạn..."/>
                </div>
            </div>
            <div className="w-1/2 mx-auto mt-4 border border-[#B3B3B3]">
                <p className="p-4">Tìm thấy {doctors.length} kết quả</p>
                {doctors && doctors.map((doctor, index) => {
                    return (
                        <div key={index} className="p-4 border-t border-[#B3B3B3]">
                            <div className="mt-6 rounded-md !flex items-center justify-between">
                                <div className="flex">
                                    <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                    <img className="w-full h-full" src={`http://localhost:3000/${doctor?.account.image}`}/>
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-[18px]">{doctor?.firstName} {doctor?.lastName}</p>
                                        <div className="flex">
                                            {
                                                doctor?.specialization.split(', ').map((item, index) => {
                                                    return (<p key={index} className="mr-4 my-4 text-black text-[12px] py-2 mt-4 bg-[#F3F4F6] rounded-full font-bold text-center">{item}</p>)
                                                })
                                            }
                                        </div>
                                        <p className="">{doctor?.clinic}</p>
                                    </div>
                                </div>
                                <button className="px-6 py-2 bg-customBlue mr-4 font-bold rounded-md text-white text-[14px]">Đặt khám</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default DoctorSearch