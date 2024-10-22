import { IoMdAdd } from "react-icons/io"
import Nav from "../components/Nav/nav"
import DoctorModal from "../custom/doctor-modal"
import { useCallback, useEffect, useState } from "react"
import axiosInstance from "../config/api"
const ManageDoctors = () => {
    const [open, setOpen] = useState(false)
    const [doctors, setDoctors] = useState([])
    const handleToggle = () => {
        setOpen(prevState => !prevState)
    }
    const getDoctors = useCallback(async () => {
        const response = await axiosInstance.get('/doctor')
        setDoctors(response.data)
    }, [])

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
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b h-14 text-xs hover:bg-gray-100 transition duration-200">
                                    <td className="py-2 px-4 text-start">1</td>
                                    <td className="py-2 px-4 text-start">2</td>
                                    <td className="py-2 px-4 text-start">3</td>
                                    <td className="py-2 px-4 text-start">4</td>
                                    <td className="py-2 px-4 text-start">4</td>
                                    <td className="py-2 px-4 text-start">4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                { open && <DoctorModal handleToggle={handleToggle}/> }
            </div>
        </div>
    )
}
export default ManageDoctors