import { useCallback, useEffect, useState } from "react"
import NewsNav from "../components/newsnav"
import NewsTabs from "../components/tabs"
import axiosInstance from "../config/api"
import { format } from "date-fns"
import { Link } from "react-router-dom"
const News = () => {
    const [news, setNews] = useState([])
    const getNews = useCallback(async () => {
        const response = await axiosInstance.get('/blog')
        setNews(response.data)
    }, [])
    useEffect(() => {
        getNews()
    }, [getNews])
    return (
        <div className="py-12 w-[1200px] mx-auto">
            <NewsNav/>
            <div className="flex">
                <div className="w-1/2 overflow-hidden rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 overflow-hidden duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[24px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col ml-4">
                    {news.map((item ,index) => {
                        let content = item.content.replaceAll("<strong>", "")
                        if (index === 3) return;
                        return (
                            <div key={index} className="flex h-1/2 border border-[#B3B3B3] rounded-md">
                                <div className="w-2/3">
                                    <div className="p-4">
                                        <p className="font-bold text-customBlue">TỬ CUNG</p>
                                        <Link to={`/blog-detail/${item.id}`} ><p className="text-[24px] font-bold">{item.title}</p></Link>
                                        <div className="line-clamp-3" dangerouslySetInnerHTML={{__html: content}} />
                                    </div>
                                    <div className="flex p-4 items-center justify-between">
                                        <p className="text-[14px] font-bold">Bác sĩ: {item?.doctor.firstName} {item?.doctor.lastName}</p>
                                        <time className="text-[12px]">Ngày đăng: {format(new Date(item.date), "dd/MM/yyyy HH:MM:SS")}</time>
                                    </div>
                                </div>
                                <div className="overflow-hidden w-1/3 p-4">
                                    <img className="hover:scale-110 overflow-hidden duration-200 w-[150px] h-[150px] rounded-md object-cover" src={`http://localhost:3000/${item.thumbnail}`}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex mt-6 justify-between">
                <div className="w-[calc(25%-16px)] overflow-hidden rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 overflow-hidden duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                </div>
                <div className="w-[calc(25%-16px)] overflow-hidden rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 overflow-hidden duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                </div>
                <div className="w-[calc(25%-16px)] overflow-hidden rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 overflow-hidden duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                </div>
                <div className="w-[calc(25%-16px)] overflow-hidden rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 overflow-hidden duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="mt-4 flex items-center justify-between w-2/3 overflow-hidden rounded-md border border-[#B3B3B3]">
                    <div className="w-2/3">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                    <div className=" w-1/3">
                        <img className="ml-auto mr-4 hover:scale-110 rounded-md overflow-hidden duration-200 w-[150px] h-[150px] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between w-2/3 overflow-hidden rounded-md border border-[#B3B3B3]">
                    <div className="w-2/3">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                    <div className=" w-1/3">
                        <img className="ml-auto mr-4 hover:scale-110 rounded-md overflow-hidden duration-200 w-[150px] h-[150px] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between w-2/3 overflow-hidden rounded-md border border-[#B3B3B3]">
                    <div className="w-2/3">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                    <div className=" w-1/3">
                        <img className="ml-auto mr-4 hover:scale-110 rounded-md overflow-hidden duration-200 w-[150px] h-[150px] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between w-2/3 overflow-hidden rounded-md border border-[#B3B3B3]">
                    <div className="w-2/3">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                    <div className=" w-1/3">
                        <img className="ml-auto mr-4 hover:scale-110 rounded-md overflow-hidden duration-200 w-[150px] h-[150px] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                </div>
            </div>
            <div className="mt-6 sticky">
                <p className="text-[24px] font-bold">Từ điển y khoa</p>
                <div className="mt-4 p-4 rounded-md border border-[#B3B3B3]">
                    <NewsTabs/>
                </div>
            </div>
        </div>
    )
}

export default News