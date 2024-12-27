import { useCallback, useEffect, useState } from "react"
import Header from "../components/header"
import Nav from "../components/Nav/nav"
import axiosInstance from '../config/api'
import EmptyOrder from "../components/emptyOrder"
const Order = () => {
    const [orders, setOrders] = useState([])
    const [activeOrder, setActiveOrder] = useState([])
   const item = [
        { label: 'Lịch khám', icon: "../src/assets/app.svg", active: true, link: "/user/order" },
        { label: 'Lịch sử thanh toán', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Hồ sơ', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Tin nhắn', icon: "../src/assets/app.svg", link: "/user/messages" },
        { label: 'Tài khoản', icon: "../src/assets/app.svg", link: "/user/settings" },
        { label: 'Đăng xuất', icon: "../src/assets/app.svg", link: "/mainpage" },
    ]
    const getOrders = useCallback(async () => {
        const response = await axiosInstance.get('/appointment/1')
        setOrders(response.data)
        setActiveOrder(response.data[0])
    }, [])
    useEffect(() => {
        getOrders()
    }, [getOrders])
    return (

        <div className="w-screen h-screen">
            <div className='w-full h-[7.5%] flex items-center border-b border-gray-300'>
                <Header />
                
            </div>
            <div className='flex h-[92.5%]'>
                <div className='border-r border-gray-300 col-span-1 flex justify-center items-start'>
                    <Nav items={item} />
                </div>
                {orders.length ? <div className="p-8 bg-[#F3F4F6] w-full">
                    <h1 className="text-[32px] font-bold">Lịch khám</h1>
                    <div className="flex w-3/4 mx-auto">
                        {orders.map((order, index) => {
                            return (
                                <div onClick={() => setActiveOrder(order) } key={index} className="bg-white rounded-md w-2/5 h-[70vh] mr-6">
                                    <div className="bg-[#F9FAFB] mt-6 p-4 cursor-pointer">
                                        <p className="font-bold text-md">BS.{order?.doctor.firstName} {order?.doctor.lastName}</p>
                                        <time className="text-gray-600 text-sm">{order?.workingShift.time} - {order?.workingShift.date}</time>
                                        <p className="text-gray-600 text-sm">Nguyễn Phi Học</p>
                                        <p className="text-gray-600 text-sm">{order?.workingShift.type}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="bg-white rounded-md w-3/5 h-[70vh] p-4 overflow-y-scroll">
                            <div className="flex mt-6 items-center">
                                <img className="w-[75px] h-[75px]" src="https://cdn.youmed.vn/photos/d9bdabb7-7afb-419a-8533-db34a775e504.jpg"/>
                                <p className="font-bold ml-4">BS.{activeOrder?.doctor?.firstName} {activeOrder?.doctor?.lastName}</p>
                            </div>
                            <div className="mt-6">
                                <h3 className="font-bold">Thông tin đặt khám</h3>
                                <div className="flex justify-between mt-2">
                                    <p>Mã phiếu khám</p>
                                    <p>YMA2410102430</p>
                                </div>
                                <div className="flex justify-between my-4">
                                    <p>Ngày khám</p>
                                    <p>{activeOrder?.workingShift?.date}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Giờ khám</p>
                                    <p>{activeOrder?.workingShift?.time}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="font-bold">Thông tin bệnh nhân</h3>
                                <div className="flex justify-between mt-2">
                                    <p>Mã bệnh nhân</p>
                                    <p>YMP241972776</p>
                                </div>
                                <div className="flex justify-between my-4">
                                    <p>Họ và tên</p>
                                    <p>Nguyễn Phi Học</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Ngày tháng năm sinh</p>
                                    <p>20/02/2004</p>
                                </div>
                                <div className="flex justify-between my-4">
                                    <p>Số điện thoại</p>
                                    <p>0865562334</p>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <p>Giới tính</p>
                                    <p>Nam</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Địa chỉ</p>
                                    <p className="w-1/2 text-end">1276, tỉnh lộ 7, ấp Xóm Trại, xã An Nhơn Tây, huyện Củ Chi, TPHCM</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="font-bold">Thông tin bổ sung</h3>
                                <div className="mt-2">
                                    <p>Ghi chú:</p>
                                    <div className="p-4 border border-[#B3B3B3] mt-2 rounded-md">
                                        <p className="text-[12px] text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit unde in adipisci laboriosam asperiores natus, velit deleniti neque eos et quas animi quisquam atque. Doloribus totam adipisci eveniet rerum esse. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci officiis illo aliquid quasi, voluptates ad at perspiciatis laborum fugit, aspernatur tempore quidem itaque mollitia velit quia suscipit fugiat quam dolore.</p>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p>Hình ảnh đính kèm:</p>
                                    <div className="flex mt-2">
                                        <img src={`http://localhost:3000/${activeOrder?.noteImage1}`} className="w-[100px] h-[100px] rounded-md cursor-pointer opacity-50 hover:opacity-100 duration-150"/>
                                        <img src={`http://localhost:3000/${activeOrder?.noteImage2}`} className="w-[100px] h-[100px] rounded-md mx-4 cursor-pointer opacity-50 hover:opacity-100 duration-150"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <EmptyOrder/>}
            </div>
        </div>
    )
}
export default Order