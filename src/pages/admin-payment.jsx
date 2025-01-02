import Nav from "../components/Nav/nav"
import { useCallback, useEffect, useState } from "react"
import axiosInstance from "../config/api"
const ManagePayments = () => {
    const [payments, setPayments] = useState([])
    const [imageModal, setImageModal] = useState({ isOpen: false, imageUrl: "" })

    const getPayments = useCallback(async () => {
        const response = await axiosInstance.get('/payment')
        setPayments(response.data)
    }, [])
    useEffect(() => {
        getPayments()
    }, [getPayments])
    const item = [
        { label: 'Quản lí bác sĩ', icon: "/src/assets/manageb.png",  link: "/admin/doctors" },
        { label: 'Quản lí khách hàng', icon: "/src/assets/manageb.png",  link: "/admin/doctors" },
        { label: 'Quản lí Thanh toán', icon: "/src/assets/manageb.png", active: true,  link: "/admin/payments" },
    ]
    
    const handleImageClick = (imageUrl) => {
        setImageModal({ isOpen: true, imageUrl })
    }

    const closeImageModal = () => {
        setImageModal({ isOpen: false, imageUrl: "" })
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);  // Chuyển chuỗi thành đối tượng Date
        
        const day = String(date.getDate()).padStart(2, '0');  // Lấy ngày và đảm bảo 2 chữ số
        const month = String(date.getMonth() + 1).padStart(2, '0');  // Lấy tháng và đảm bảo 2 chữ số
        const year = date.getFullYear();  // Lấy năm
        
        const hours = String(date.getHours()).padStart(2, '0');  // Lấy giờ và đảm bảo 2 chữ số
        const minutes = String(date.getMinutes()).padStart(2, '0');  // Lấy phút và đảm bảo 2 chữ số
        const seconds = String(date.getSeconds()).padStart(2, '0');  // Lấy giây và đảm bảo 2 chữ số
        
        return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;  // Trả về định dạng dd/MM/yyyy hh:mm:ss
        }
    const handleUpdateStatus = async (id, status) => {
        await axiosInstance.patch(`/payment/${id}`, {
            status: status
        })
        window.location.reload()
    }

    return (
        <div className="w-screen h-screen">
            <div className='grid grid-cols-6 h-[92.5%]'>
                <div className='border-r border-gray-300 col-span-1 flex justify-center items-center h-screen'>
                    <Nav items={item} />
                </div>
                <div className="col-span-5 p-4 h-screen">
                    <p className="font-bold text-[36px]">Quản lí thanh toán</p>
                    <div className='p-4 col-span-5'>
                        <table className="h-fit min-w-[98.5%] bg-white">
                            <thead>
                                <tr className="text-xs">
                                    <th className="py-2 px-4 text-center">Số thứ tự</th>
                                    <th className="py-2 px-4 text-center">Họ Tên</th>
                                    <th className="py-2 px-4 text-center">Ngày</th>
                                    <th className="py-2 px-4 text-center">Số tiền</th>
                                    <th className="py-2 px-4 text-center">Trạng thái</th>
                                    <th className="py-2 px-4 text-center">Hình ảnh</th>
                                    <th className="py-2 px-4 text-center"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.length > 0 && payments.map((payment, index) => {
                                    return (
                                        <tr key={index} className="border-b h-14 text-xs hover:bg-gray-100 transition duration-200">
                                            <td className="py-2 px-4 text-center">{index + 1}</td>
                                            <td className="py-2 px-4 text-center">{payment?.user.firstName} {payment?.user.lastName}</td>
                                            <td className="py-2 px-4 text-center">{formatDate(payment?.date)}</td>
                                            <td className="py-2 px-4 text-center">{payment?.amount}</td>
                                            <td className="py-2 px-4 text-center">
                                                <span
                                                    className={`
                                                        ${payment?.status === 'Chờ xác nhận' ? 'bg-yellow-500 text-black font-bold' : ''}
                                                        ${payment?.status === 'Thành công' ? 'bg-green-500 text-white' : ''}
                                                        ${payment?.status === 'Thất bại' ? 'bg-red-500 text-white' : ''}
                                                        py-1 px-2 rounded-md
                                                    `}
                                                >
                                                    {payment?.status}
                                                </span>
                                            </td>
                                            <td className="py-2 px-4 flex justify-center">
                                                <img 
                                                    className="w-[50px] h-[50px] cursor-pointer" 
                                                    src={payment?.image} 
                                                    alt="Payment Proof" 
                                                    onClick={() => handleImageClick(payment?.image)} 
                                                />
                                            </td>
                                            {payment?.status === 'Chờ xác nhận' && <td className="py-2 px-4 text-center">
                                                <button
                                                    onClick={() => {
                                                        // Hàm xử lý xác nhận (chấp nhận thanh toán hoặc tương tự)
                                                        handleUpdateStatus(payment?.id, 'Thành công');
                                                    }}
                                                    className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-200 ease-in-out transform hover:scale-105"
                                                >
                                                    Xác nhận
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        // Hàm xử lý từ chối (hủy bỏ thanh toán hoặc tương tự)
                                                        handleUpdateStatus(payment?.id, 'Thất bại');
                                                    }}
                                                    className="ml-4 bg-red-500 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-red-600 transition duration-200 ease-in-out transform hover:scale-105"
                                                >
                                                    Từ chối
                                                </button>
                                            </td>}


                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
                { imageModal.isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-4 rounded-md">
                            <img src={imageModal.imageUrl} alt="Modal Content" className="max-w-full max-h-[80vh]"/>
                            <button onClick={closeImageModal} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ManagePayments
