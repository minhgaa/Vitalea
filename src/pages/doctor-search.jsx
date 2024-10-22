import { useSearchParams } from "react-router-dom"
import Header from "../components/header"

const DoctorSearch = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("q"))
    return (
        <div className="w-screen">
            <Header/>
            <div className="flex justify-center">
                <div className="border border-[#B3B3B3] px-8 py-4 rounded-md w-1/2">
                    <input className="outline-none border-none w-full" type="text" placeholder="Nhập triệu chứng của bạn..."/>
                </div>
            </div>
            <div className="w-1/2 mx-auto mt-4 border border-[#B3B3B3]">
                <p className="p-4">Tìm thấy 2 kết quả</p>
                <div className="p-4 border-t border-[#B3B3B3]">
                    <div className="mt-6 rounded-md !flex items-center justify-between">
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
                <div className="p-4 border-t border-[#B3B3B3]">
                    <div className="mt-6 rounded-md !flex items-center justify-between">
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
export default DoctorSearch