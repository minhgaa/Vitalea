import { useParams, useSearchParams } from "react-router-dom"
import NewsNav from "../components/newsnav"
import { useCallback, useEffect, useState } from "react"
import axiosInstance from "../config/api"
import { format } from "date-fns"
import Spinner from "../custom/spinner"

const NewsSearch = () => {
    const { category } = useParams()
    const [searchParams] = useSearchParams()
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const getBlogs = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axiosInstance.get(`/blog/search/${category}?search=${searchParams.get('search') || ''}`)
            setBlogs(response.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }, [category, searchParams])

    useEffect(() => {
        getBlogs()
    }, [getBlogs])

    return (
        <div className="py-12 w-[1200px] mx-auto">
                {loading ? <div className="h-screen w-screen fixed top-0 left-0">
                    <Spinner/>
                </div> : <div>
                <NewsNav/>
                <div className="w-2/3 mx-auto">
                    <div className="p-2 border  border-[#B3B3B3]">
                        <input className="outline-none border-none" type="text" placeholder="Nhập tìm kiếm..."/>
                    </div>
                    <p className="mt-4">{blogs.length || 0} kết quả phù hợp</p>
                </div>
                <div className="mx-auto w-2/3 mt-6">
                    {blogs.length > 0 && blogs?.map((item, index) => {
                        return (
                            <div key={index} className="flex py-2 border-b border-b-[#B3B3B3]">
                                <div className="overflow-hidden w-1/2">
                                    <img className="rounded-md hover:scale-110 overflow-hidden duration-200 w-[100%] object-cover" src={item?.thumbnail}/>
                                </div>
                                <div className="w-1/2">
                                    <div className="p-4 ">
                                        <p className="font-bold text-customBlue">{item?.subCategory}</p>
                                        <p className="text-[18px] font-bold">{item?.title}</p>
                                        <p className="text-[#B3B3B3] text-[14px]">{item?.content}</p>
                                        <p className="text-[12px] mt-2">Ngày đăng: {item?.date && format(new Date(item?.date), "dd/MM/yyyy HH:MM:SS")}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>}
        </div>
    )
} 
export default NewsSearch