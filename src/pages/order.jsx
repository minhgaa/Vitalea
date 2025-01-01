import { useCallback, useEffect, useState } from "react";
import Header from "../components/header";
import Nav from "../components/Nav/nav";
import axiosInstance from '../config/api';
import EmptyOrder from "../components/emptyOrder";
import { useAuthContext } from "../context/AuthContext";
import Spinner from "../custom/spinner";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [activeOrder, setActiveOrder] = useState([]);
    const [loading, setLoading] = useState(false);
    const { authUser } = useAuthContext();

    const item = [
        { label: 'Lịch khám', icon: "../src/assets/app.svg", active: true, link: "/user/order" },
        { label: 'Lịch sử thanh toán', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Hồ sơ', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Tin nhắn', icon: "../src/assets/app.svg", link: "/user/messages" },
        { label: 'Tài khoản', icon: "../src/assets/app.svg", link: "/user/settings" },
        { label: 'Đăng xuất', icon: "../src/assets/app.svg", link: "/mainpage" },
    ];

    const getOrders = useCallback(async () => {
        setLoading(true); // Set loading to true when the API call starts
        try {
            const response = await axiosInstance.get(`/appointment/${authUser?.id}`);
            setOrders(response.data);
            setActiveOrder(response.data[0]);
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false); // Set loading to false once the API call finishes
        }
    }, [authUser?.id]);

    const handleChangeOrder = async (e, order) => {
        e.preventDefault()
        setLoading(true);
        try {
            const response = await axiosInstance.get(`/appointment/detail/${order.id}`);
            setActiveOrder(response.data)
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false); // Set loading to false once the API call finishes
        }
    }

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    return (
        <div className="w-screen h-screen overflow-hidden">
            {loading ? <div className="w-screen h-screen fixed top-0 left-0">
                <Spinner/>
            </div> : <><div className="w-full h-[7.5%] flex items-center border-b border-gray-300">
                <Header />
            </div>
            <div className="grid grid-cols-6 h-[92.5%]">
                <div className="border-r border-gray-300 col-span-1 flex justify-center items-start">
                    <Nav items={item} />
                </div>
                <div className="col-span-5">
                    {orders.length ? (
                        <div className="p-8 bg-[#F3F4F6] w-full min-h-screen">
  <h1
  className="text-[40px] font-extrabold text-gray-900 mb-8 border-b-4 border-gray-700 inline-block px-4 pb-2 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
>
  Lịch khám
</h1>

  <div className="flex w-3/4 mx-auto gap-8">
    {/* Danh sách lịch khám */}
    <div className="bg-white rounded-lg w-2/5 h-[70vh] p-4 shadow-md overflow-y-scroll">
                        {orders.map((order, index) => (
                            <div
                            key={index}
                            onClick={(e) => handleChangeOrder(e, order)}
                            className={`p-4 mb-4 rounded-lg cursor-pointer transition duration-200 ${
                                order.id === activeOrder.id
                                ? "bg-blue-100 border border-blue-500 shadow-md"
                                : "bg-[#F9FAFB] hover:bg-gray-100"
                            }`}
                            >
                            <p className="font-bold text-lg text-gray-700">
                                BS.{order?.doctor.firstName} {order?.doctor.lastName}
                            </p>
                            <time className="text-gray-600 text-sm block mt-2">
                                {order?.workingShift.time} - {order?.workingShift.date}
                            </time>
                            <p className="text-gray-600 text-sm mt-1">{order?.workingShift.type}</p>
                            </div>
                        ))}
                        </div>

                        {/* Thông tin chi tiết */}
                        <div className="bg-white rounded-lg w-3/5 h-[70vh] p-6 shadow-md overflow-y-scroll">
                        {/* Thông tin bác sĩ */}
                        <div className="flex items-center gap-4 mb-6">
                            <img
                            className="w-[75px] h-[75px] rounded-full object-cover shadow-md"
                            src={activeOrder?.doctor?.account?.image}
                            alt="Doctor"
                            />
                            <p className="font-bold text-xl text-gray-700">
                            BS.{activeOrder?.doctor?.firstName} {activeOrder?.doctor?.lastName}
                            </p>
                        </div>

                        {/* Thông tin đặt khám */}
                        <div className="mb-6">
                            <h3 className="font-bold text-lg text-gray-800 border-b pb-2">Thông tin đặt khám</h3>
                            <div className="flex justify-between mt-4">
                            <p>Mã phiếu khám</p>
                            <p className="font-medium">YMA2410102430</p>
                            </div>
                            <div className="flex justify-between my-4">
                            <p>Ngày khám</p>
                            <p className="font-medium">{activeOrder?.workingShift?.date}</p>
                            </div>
                            <div className="flex justify-between">
                            <p>Giờ khám</p>
                            <p className="font-medium">{activeOrder?.workingShift?.time}</p>
                            </div>
                        </div>

                        {/* Thông tin bệnh nhân */}
                        <div className="mb-6">
                            <h3 className="font-bold text-lg text-gray-800 border-b pb-2">Thông tin bệnh nhân</h3>
                            <div className="flex justify-between mt-4">
                            <p>Mã bệnh nhân</p>
                            <p className="font-medium">YMP241972776</p>
                            </div>
                            <div className="flex justify-between my-4">
                            <p>Họ và tên</p>
                            <p className="font-medium">
                                {activeOrder?.user?.firstName} {activeOrder?.user?.lastName}
                            </p>
                            </div>
                            <div className="flex justify-between">
                            <p>Ngày tháng năm sinh</p>
                            <p className="font-medium">20/02/2004</p>
                            </div>
                            <div className="flex justify-between my-4">
                            <p>Số điện thoại</p>
                            <p className="font-medium">{activeOrder?.user?.phone}</p>
                            </div>
                            <div className="flex justify-between mb-4">
                            <p>Giới tính</p>
                            <p className="font-medium">Nam</p>
                            </div>
                            <div className="flex justify-between">
                            <p>Địa chỉ</p>
                            <p className="w-1/2 text-end font-medium">{activeOrder?.user?.address}</p>
                            </div>
                        </div>

                        {/* Thông tin bổ sung */}
                        <div>
                            <h3 className="font-bold text-lg text-gray-800 border-b pb-2">Thông tin bổ sung</h3>
                            <div className="mt-4">
                            <p className="font-medium">Ghi chú:</p>
                            <div className="p-4 border border-gray-300 rounded-md mt-2 bg-gray-50">
                                <p className="text-sm text-gray-600">{activeOrder?.note}</p>
                            </div>
                            </div>
                            <div className="mt-4">
                            <p className="font-medium">Hình ảnh đính kèm:</p>
                            <div className="flex gap-4 mt-2">
                                <img
                                src={activeOrder?.noteImage1 || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}
                                className="w-[100px] h-[100px] rounded-md cursor-pointer transition transform hover:scale-105"
                                alt="Note 2"
                                />
                                <img
                                src={activeOrder?.noteImage2 || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}
                                className="w-[100px] h-[100px] rounded-md cursor-pointer transition transform hover:scale-105"
                                alt="Note 3"
                                />
                                <img
                                src={activeOrder?.noteImage3 || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}
                                className="w-[100px] h-[100px] rounded-md cursor-pointer transition transform hover:scale-105"
                                alt="Note 3"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    ) : (
                        <EmptyOrder />
                    )}
                </div>
            </div></>}
        </div>
    );
};

export default Order;
