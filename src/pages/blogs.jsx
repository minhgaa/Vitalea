import { Link } from 'react-router-dom';
import Header from '../components/header';
import Nav from '../components/Nav/nav';
import { IoMdAdd } from "react-icons/io";
import { useCallback, useEffect, useState } from 'react';
import axiosInstance from '../config/api';
import { useAuthContext } from '../context/AuthContext';
import Spinner from '../custom/spinner';
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const {authUser} = useAuthContext()
    const [loading, setLoading] = useState(false)
    const getBlogs = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axiosInstance.post('/blog/getblog', {
                doctorId: authUser.id
            })
            setBlogs(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [authUser.id])

    useEffect(() => {
        getBlogs()
    }, [getBlogs])

    const item = [
        { label: 'Dashboard', icon: "src/assets/das.svg", link: "/mainpage" },
        { label: 'Appointments', icon: "src/assets/app.svg", link: "/appointments" },
        { label: 'Patients', icon: "src/assets/pat.svg", link: "/patients" },
        { label: 'Blogs', icon: "src/assets/blogb.png", active: true, link: "/blogs" },
        { label: 'Messages', icon: "src/assets/mes.svg", link: "/messages" },
        { label: 'Working Schedule', icon: "src/assets/rep.svg", link: "/working-schedule" },
        { label: 'Settings', icon: "src/assets/set.svg", link: "/settings" },
    ];

    return (

        <div className="w-screen h-screen">
            {/* Header */}
            {loading ? <div className='w-screen h-screen fixed top-0 left-0'>
                <Spinner/>
            </div> : <>
                <div className='w-full h-[7.5%] flex items-center border-b border-gray-300'>
                <Header />
            </div>
            <div className='grid grid-cols-6 h-[92.5%]'>
                <div className='border-r border-gray-300 col-span-1 flex justify-center items-start'>
                    <Nav items={item} />
                </div>
                <div className='p-4 col-span-5'>
                    <Link to='/blog-editor' className='opacity-60 hover:opacity-100 duration-150 w-fit ml-auto flex items-center my-4 px-4 py-2 rounded-md bg-customBlue'>
                        <p className='text-white font-bold'>Tạo bài viết mới</p>
                        <IoMdAdd className='text-white text-[18px] ml-2' />
                    </Link>
                    <table className="h-fit min-w-[98.5%] bg-white">
                        <thead>
                            <tr className="text-xs">
                                <th className="py-2 px-4 text-start">Số thứ tự</th>
                                <th className="py-2 px-4 text-start">Bài viết</th>
                                <th className="py-2 px-4 text-start">Số lượt xem</th>
                                <th className="py-2 px-4 text-start">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(blogs) && blogs.map((blog, index) => (
                                <tr key={index} className="border-b h-14 text-xs hover:bg-gray-100 transition duration-200">
                                    <td className="py-2 px-4 text-start">{index + 1}</td>
                                    <td className="py-2 px-4 text-start">{blog.title}</td>
                                    <td className="py-2 px-4 text-start">{blog.totalView}</td>
                                    <td className="py-2 px-4 text-start">
                                        <Link to={blog.link + blog.id}>Link</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div></>}
        </div>
    )
}

export default Blogs