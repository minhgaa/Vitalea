import { IoMdAdd } from "react-icons/io"
import Nav from "../components/Nav/nav"
import DoctorModal from "../custom/doctor-modal"
import { useCallback, useEffect, useState } from "react"
import axiosInstance from "../config/api"
const ManageDoctors = () => {
    const [open, setOpen] = useState(false)
    const [doctors, setDoctors] = useState([])
    const [activeDoctor, setActiveDoctor] = useState({})
    const handleToggle = () => {
        if (open === true) setActiveDoctor({})
        setOpen(prevState => !prevState)
    }
    const getDoctors = useCallback(async () => {
        const response = await axiosInstance.get('/doctor')
        setDoctors(response.data)
    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await axiosInstance.delete(`doctor/${id}`)
            if (response.data) {
                setDoctors(prevState => prevState.filter(item => item.id !== id))
            }
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getDoctors()
    }, [getDoctors])
    const item = [
        { label: 'Lịch khám', icon: "../src/assets/app.svg", link: "/user/order" },
        { label: 'Lịch sử thanh toán', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Hồ sơ', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Tin nhắn', icon: "../src/assets/app.svg", link: "/user/messages" },
        { label: 'Tài khoản', icon: "../src/assets/app.svg", active: true, link: "/user/settings" },
        { label: 'Đăng xuất', icon: "../src/assets/app.svg", link: "/mainpage" },
    ]
    return (

        <div className="w-screen h-screen">
            <div className='grid grid-cols-6 h-[92.5%]'>
                <div className='border-r border-gray-300 col-span-1 flex justify-center items-start'>
                    <Nav items={item} />
                </div>
                <div className="col-span-5 p-4 h-screen">
                    <p className="font-bold text-[36px]">Quản lí bác sĩ</p>
                    <div className='p-4 col-span-5'>
                        <button onClick={() => setOpen(prevState => !prevState)} className='opacity-60 hover:opacity-100 duration-150 w-fit ml-auto flex items-center my-4 px-4 py-2 rounded-md bg-customBlue'>
                            <p className= 'text-white font-bold'>Thêm bác sĩ mới</p>
                            <IoMdAdd className='text-white text-[18px] ml-2'/>
                        </button>
                        <table className="h-fit min-w-[98.5%] bg-white">
                            <thead>
                                <tr className="text-xs">
                                    <th className="py-2 px-4 text-start">Số thứ tự</th>
                                    <th className="py-2 px-4 text-start">Tên</th>
                                    <th className="py-2 px-4 text-start">Họ</th>
                                    <th className="py-2 px-4 text-start">Số điện thoại</th>
                                    <th className="py-2 px-4 text-start">Phòng khám</th>
                                    <th className="py-2 px-4 text-start">Số năm kinh nghiệm</th>
                                    <th className="py-2 px-4 text-start">Chuyên khoa</th>
                                    <th className="py-2 px-4 text-start"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctors.map((doctor,index) => {
                                    return (
                                        <tr key={index} className="border-b h-14 text-xs hover:bg-gray-100 transition duration-200">
                                            <td className="py-2 px-4 text-start">{index + 1}</td>
                                            <td className="py-2 px-4 text-start">{doctor?.firstName}</td>
                                            <td className="py-2 px-4 text-start">{doctor?.lastName}</td>
                                            <td className="py-2 px-4 text-start">{doctor?.phone}</td>
                                            <td className="py-2 px-4 text-start">{doctor?.clinic}</td>
                                            <td className="py-2 px-4 text-start">{doctor?.experience}</td>
                                            <td className="py-2 px-4 text-start">{doctor?.specialization}</td>
                                            <td className="py-2 px-4 text-start">
                                                <button onClick={
                                                    () => {
                                                        handleToggle()
                                                        setActiveDoctor(doctor)
                                                    }
                                                } className="hover:text-customBlue duration-150">Edit</button>
                                                <button onClick={() => handleDelete(doctor?.id)} className="ml-4 hover:text-customBlue duration-150">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                { open && <DoctorModal setDoctors={setDoctors} activeDoctor = {activeDoctor} handleToggle={handleToggle}/> }
            </div>
        </div>
    )
}
export default ManageDoctors