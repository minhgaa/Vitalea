import { Button } from "@headlessui/react"
import { FaArrowCircleRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const Doctors = () => {
    return (
        <div className="">
            <div>
                <label className="pl-7 font-sofadi text-xl text-customBlue">
                    Vitaléa
                </label>
            </div>
            <div className="flex overflow-y-hidden">
                <div className="w-1/4 p-8 ">
                    <p className="text-[18px] font-bold">Chuyên khoa</p>
                    <div className="my-6 p-2 border border-[#B3B3B3] rounded-md">
                        <input className="border-none outline-none" type="text" placeholder="Tìm nhanh chuyên khoa..." />
                    </div>
                    <div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="tatca" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="tatca" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="tatca" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="tatca" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="tatca" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="tatca" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="tatca" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="tatca" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="tatca" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="tatca" type="radio" value="tatca" name="specialization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="tatca" className="ms-4 text-sm font-medium text-black">Tất cả</label>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 h-[700px] ml-6 overflow-hidden overflow-y-scroll">
                    <div className="mt-6 p-4 rounded-md border border-[#DEDEDE] !flex items-center justify-between">
                            <div className="flex">
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                <img src="https://cdn.youmed.vn/photos/67c3e343-bbab-46f2-950e-f11b86ecde6e.jpg?width=160"/>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-[18px]">Nguyễn Văn A</p>
                                    <p className="w-[100px] my-4 text-black p-2 mt-4 bg-[#F3F4F6] rounded-full text-[14px] font-bold text-center">Nội tiết</p>
                                    <p className="">23 Nguyễn Văn Đậu, Phường 5, Quận Phú Nhuận, TPHCM</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-customBlue mr-4 font-bold rounded-md text-white text-[14px]">Đặt khám</button>
                    </div>
                    <div className="mt-6 p-4 rounded-md border border-[#DEDEDE] !flex items-center justify-between">
                            <div className="flex">
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                <img src="https://cdn.youmed.vn/photos/67c3e343-bbab-46f2-950e-f11b86ecde6e.jpg?width=160"/>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-[18px]">Nguyễn Văn A</p>
                                    <p className="w-[100px] my-4 text-black p-2 mt-4 bg-[#F3F4F6] rounded-full text-[14px] font-bold text-center">Nội tiết</p>
                                    <p className="">23 Nguyễn Văn Đậu, Phường 5, Quận Phú Nhuận, TPHCM</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-customBlue mr-4 font-bold rounded-md text-white text-[14px]">Đặt khám</button>
                    </div>
                    <div className="mt-6 p-4 rounded-md border border-[#DEDEDE] !flex items-center justify-between">
                            <div className="flex">
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                <img src="https://cdn.youmed.vn/photos/67c3e343-bbab-46f2-950e-f11b86ecde6e.jpg?width=160"/>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-[18px]">Nguyễn Văn A</p>
                                    <p className="w-[100px] my-4 text-black p-2 mt-4 bg-[#F3F4F6] rounded-full text-[14px] font-bold text-center">Nội tiết</p>
                                    <p className="">23 Nguyễn Văn Đậu, Phường 5, Quận Phú Nhuận, TPHCM</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-customBlue mr-4 font-bold rounded-md text-white text-[14px]">Đặt khám</button>
                    </div>
                    <div className="mt-6 p-4 rounded-md border border-[#DEDEDE] !flex items-center justify-between">
                            <div className="flex">
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                <img src="https://cdn.youmed.vn/photos/67c3e343-bbab-46f2-950e-f11b86ecde6e.jpg?width=160"/>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-[18px]">Nguyễn Văn A</p>
                                    <p className="w-[100px] my-4 text-black p-2 mt-4 bg-[#F3F4F6] rounded-full text-[14px] font-bold text-center">Nội tiết</p>
                                    <p className="">23 Nguyễn Văn Đậu, Phường 5, Quận Phú Nhuận, TPHCM</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-customBlue mr-4 font-bold rounded-md text-white text-[14px]">Đặt khám</button>
                    </div>
                    <div className="mt-6 p-4 rounded-md border border-[#DEDEDE] !flex items-center justify-between">
                            <div className="flex">
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                <img src="https://cdn.youmed.vn/photos/67c3e343-bbab-46f2-950e-f11b86ecde6e.jpg?width=160"/>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-[18px]">Nguyễn Văn A</p>
                                    <p className="w-[100px] my-4 text-black p-2 mt-4 bg-[#F3F4F6] rounded-full text-[14px] font-bold text-center">Nội tiết</p>
                                    <p className="">23 Nguyễn Văn Đậu, Phường 5, Quận Phú Nhuận, TPHCM</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-customBlue mr-4 font-bold rounded-md text-white text-[14px]">Đặt khám</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default Doctors 