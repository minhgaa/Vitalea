import { useState } from "react"
import { useEffect } from "react"
import { useCallback } from "react"
import axiosInstance from "../config/api"
import { useParams } from "react-router-dom"
import Spinner from "../custom/spinner"

const BlogDetail = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(false)
    const getDetailBlog = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axiosInstance.get(`/blog/${id}`)
            setBlog(response.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }, [id])

    const updateView = useCallback(async () => {
        await axiosInstance.patch(`/blog/${id}`)
    }, [id])
    
    useEffect(() => {
        getDetailBlog()
        updateView()
    }, [getDetailBlog, updateView])    
    return (
        <div className="bg-[#F5F4F0]">
            {loading ? <div className="h-screen w-screen fixed top-0 left-0">
                <Spinner/>
            </div> : <div className="min-h-screen w-[1400px] mx-auto text-center py-8">
                <div className="mt-4">
                    <p className="text-[24px] text-[#DB8C10] font-bold mb-4">News</p>
                    <h2 className="w-[800px] mx-auto text-[48px] font-bold">{blog.title}</h2>
                    <p className="mt-4">Author: {blog?.doctor?.firstName} {blog?.doctor?.lastName} <span className="text-[#B3B3B3]">{blog.date}</span></p>
                </div>
                <div className="w-1/2 mx-auto mt-4">
                    <img className="w-full object-cover rounded-md" src={blog.thumbnail}/>
                </div>
                <div className="w-1/2 text-start mx-auto mt-4" dangerouslySetInnerHTML={{__html: blog.content}} />
            </div>}
        </div>
    )
}
export default BlogDetail