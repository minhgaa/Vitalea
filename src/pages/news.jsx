import { useCallback, useEffect, useState } from "react"
import NewsTabs from "../components/tabs"
import axiosInstance from "../config/api"
import { format } from "date-fns"
import { Link } from "react-router-dom"
import Spinner from "../custom/spinner"
const News = () => {
    const [loading, setLoading] = useState(false)
    const [news, setNews] = useState([])
    const getNews = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axiosInstance.get('/blog')
            setNews(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])
    useEffect(() => {
        getNews()
    }, [getNews])
    return (
        <div className=" w-[1200px] mx-auto">
            {loading ? <div className="h-screen w-screen fixed top-0 left-0">
                <Spinner />
            </div> : <>
                <div className="flex flex-col items-center justify-center ">
                    <div className="flex">
                        <div className="w-1/2 overflow-hidden rounded-md border border-[#B3B3B3]">
                            <div className="overflow-hidden">
                                <img className="hover:scale-110 overflow-hidden duration-200 w-[100%] object-cover" src={news[0]?.thumbnail} />
                            </div>
                            <div className="">
                                <div className="p-4 ">
                                    <p className="font-bold text-customBlue">{news[0]?.subCategory}</p>
                                    <Link to={`/blog-detail/${news[0]?.id}`}><p className="text-[24px] font-bold">{news[0]?.title}</p></Link>
                                    <div className="line-clamp-3" dangerouslySetInnerHTML={{ __html: news[0]?.content.replaceAll("<strong>", "") }} />
                                </div>
                                <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                                    <p className="text-[14px] font-bold">Bác sĩ: {news[0]?.doctor.firstName} {news[0]?.doctor.lastName}</p>
                                    <p className="text-[12px]">Ngày đăng: {news[0]?.date && format(new Date(news[0]?.date), "dd/MM/yyyy HH:MM:SS")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col ml-4">
                            {Array.isArray(news) && news.length > 0 ?
                                news.slice(1, 3).map((item, index) => {
                                    let content = item.content.replaceAll("<strong>", "");
                                    return (
                                        <div key={index} className="flex h-1/2 border border-[#B3B3B3] rounded-md">
                                            <div className="w-2/3">
                                                <div className="p-4">
                                                    <p className="font-bold text-customBlue">TỬ CUNG</p>
                                                    <Link to={`/blog-detail/${item.id}`}><p className="text-[24px] font-bold">{item.title}</p></Link>
                                                    <div className="line-clamp-3" dangerouslySetInnerHTML={{ __html: content }} />
                                                </div>
                                                <div className="flex p-4 items-center justify-between">
                                                    <p className="text-[14px] font-bold">Bác sĩ: {item?.doctor.firstName} {item?.doctor.lastName}</p>
                                                    <time className="text-[12px]">Ngày đăng: {format(new Date(item.date), "dd/MM/yyyy HH:MM:SS")}</time>
                                                </div>
                                            </div>
                                            <div className="overflow-hidden w-1/3 p-4">
                                                <img className="hover:scale-110 overflow-hidden duration-200 w-[150px] h-[150px] rounded-md object-cover" src={item.thumbnail} />
                                            </div>
                                        </div>
                                    )
                                }) : (
                                    <p></p>
                                )}
                        </div>
                    </div>
                    <div className="flex mt-6 justify-between">
                        {Array.isArray(news) && news.length > 0 ?
                            news.slice(3, 7).map((item, index) => {
                                let content = item.content.replaceAll("<strong>", "");
                                return (
                                    <div key={index} className="w-[calc(25%-16px)] overflow-hidden rounded-md border border-[#B3B3B3]">
                                        <div className="overflow-hidden">
                                            <img className="hover:scale-110 overflow-hidden duration-200 w-[100%] object-cover" src={item.thumbnail} />
                                        </div>
                                        <div className="">
                                            <div className="p-4 ">
                                                <p className="font-bold text-customBlue">TỬ CUNG</p>
                                                <Link to={`/blog-detail/${item.id}`}><p className="text-[24px] font-bold">{item.title}</p></Link>
                                                <div className="line-clamp-3" dangerouslySetInnerHTML={{ __html: content }} />
                                            </div>
                                            <div className="flex p-4 items-center justify-between">
                                                <p className="text-[14px] font-bold">Bác sĩ: {item?.doctor.firstName} {item?.doctor.lastName}</p>
                                                <time className="text-[12px]">Ngày đăng: {format(new Date(item.date), "dd/MM/yyyy HH:MM:SS")}</time>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : (
                                <p></p>
                            )}
                    </div>
                    <div className="mt-6">
                        {Array.isArray(news) && news.length > 0 ?
                            news.slice(3, 7).map((item, index) => {
                                let content = item.content.replaceAll("<strong>", "");
                                return (
                                    <div key={index} className="mt-4 flex items-center justify-between w-2/3 overflow-hidden rounded-md border border-[#B3B3B3]">
                                        <div className="w-2/3">
                                            <div className="p-4 ">
                                                <p className="font-bold text-customBlue">TỬ CUNG</p>
                                                <Link to={`/blog-detail/${item.id}`}><p className="text-[24px] font-bold">{item.title}</p></Link>
                                                <div className="line-clamp-3" dangerouslySetInnerHTML={{ __html: content }} />
                                            </div>
                                            <div className="flex p-4 items-center justify-between">
                                                <p className="text-[14px] font-bold">Bác sĩ: {item?.doctor.firstName} {item?.doctor.lastName}</p>
                                                <time className="text-[12px]">Ngày đăng: {format(new Date(item.date), "dd/MM/yyyy HH:MM:SS")}</time>
                                            </div>
                                        </div>
                                        <div className=" w-1/3">
                                            <img className="ml-auto mr-4 hover:scale-110 rounded-md overflow-hidden duration-200 w-[150px] h-[150px] object-cover" src={item.thumbnail} />
                                        </div>
                                    </div>
                                )
                            }) : (
                                <p></p>
                            )}
                    </div>
                    <div className="mt-6 sticky">
                        <p className="text-[24px] font-bold">Từ điển y khoa</p>
                        <div className="mt-4 p-4 rounded-md border border-[#B3B3B3]">
                            <NewsTabs />
                        </div>
                    </div>
                </div>

            </>
            }
        </div>
    )
}

export default News