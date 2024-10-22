import { useState } from "react"
import Header from "../components/header"
import Nav from "../components/Nav/nav"
import axios from "axios"
import { useAuthContext } from "../context/AuthContext"

const Profile = () => {

    const [file, setFile] = useState()
    const {authUser} = useAuthContext()
    const item = [
        { label: 'Lịch khám', icon: "../src/assets/app.svg", link: "/user/order" },
        { label: 'Lịch sử thanh toán', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Hồ sơ', icon: "../src/assets/app.svg", active: true, link: "/user/profile" },
        { label: 'Tin nhắn', icon: "../src/assets/app.svg", link: "/user/messages" },
        { label: 'Tài khoản', icon: "../src/assets/app.svg", link: "/user/settings" },
        { label: 'Đăng xuất', icon: "../src/assets/app.svg", link: "/login" },
    ]

    const handleChangeAvatar = async (e) => {
        if(e.target.files){
            setFile(URL.createObjectURL(e.target.files[0]))
            const data = new FormData()
            data.append('file', e.target.files[0])
            data.append('userId', authUser?.accountId)
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:3000/api/auth/update',
                data,
                headers: {'Content-Type': 'multipart/form-data'}
            })
            const user = JSON.parse(localStorage.getItem('user'))
            user.image = response.data.image 
            localStorage.setItem('user', JSON.stringify(user))
        }
    }

    return (

        <div className="w-screen h-screen">
            <div className='w-full h-[7.5%] flex items-center border-b border-gray-300'>
                <Header />
                
            </div>
            <div className='flex h-[92.5%]'>
                <div className='border-r border-gray-300 col-span-1 flex justify-center items-start'>
                    <Nav items={item} />
                </div>
                <div className="p-8 bg-[#F3F4F6] w-full">
                    <h1 className="text-[32px] font-bold">Hồ sơ cá nhân</h1>
                    <div className="w-2/4 mx-auto bg-white rounded-md h-[70vh] p-4 overflow-y-scroll">
                        <div className="flex flex-col items-center">
                            <label htmlFor="img"><img className="w-[80px] h-[80px] rounded-full cursor-pointer" src={(file || `http://localhost:3000/${authUser.image}`)}/></label>
                            <input onChange={e => handleChangeAvatar(e)} className="hidden" id="img" type="file" />
                            <p className="mt-1 font-bold">Nguyễn Phi Học</p>
                            <p className="mt-1 font-bold text-gray-500">Mã BN: YMP241972776</p>
                        </div>
                        <div className="px-6">
                            <h3 className="font-bold text-[18px]">Thông tin cơ bản</h3>
                            <div className="flex justify-between mb-4 mt-4">
                                <p>Họ và tên</p>
                                <p>Nguyễn Phi Học</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p>Điện thoại</p>
                                <p>0865562334</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p>Ngày sinh</p>
                                <p>20/02/2004</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p>Giới tính</p>
                                <p>Nam</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p>Địa chỉ</p>
                                <p className="w-1/2 text-end">1276, tỉnh lộ 7, ấp xóm Trại, xã An Nhơn Tây, TPHCM</p>
                            </div>
                        </div>
                        <div className="px-6">
                            <h3 className="font-bold text-[18px]">Thông tin bổ sung</h3>
                            <div className="flex justify-between mb-4 mt-4">
                                <p>Email</p>
                                <p>ng.phihoc123@gmail.com</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p>Nghề nghiệp</p>
                                <p>Sinh viên</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Profile