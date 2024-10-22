import Header from "../components/header"
import Nav from "../components/Nav/nav"

const ChangePassword = () => {
    const item = [
        { label: 'Lịch khám', icon: "../src/assets/app.svg", link: "/user/order" },
        { label: 'Lịch sử thanh toán', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Hồ sơ', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Tin nhắn', icon: "../src/assets/app.svg", link: "/user/messages" },
        { label: 'Tài khoản', icon: "../src/assets/app.svg", active: true, link: "/user/settings" },
        { label: 'Đăng xuất', icon: "../src/assets/app.svg", link: "/mainpage" },
    ]
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
                    <h1 className="text-[32px] font-bold">Thay đổi mật khẩu</h1>
                    <div className="bg-white rounded-md p-4 w-1/4 mx-auto">
                        <form>
                            <div className="w-full">
                                <label htmlFor="pw1" className="block">Mật khẩu hiện tại:</label>
                                <div className="border border-[#B3B3B3] p-2 mt-1 rounded-md">
                                    <input id="pw1" className="w-full outline-none border-none" type="text" placeholder="Nhập mật khẩu hiện tại của bạn" />
                                </div>
                            </div>
                            <div className="w-full mt-4">
                                <label htmlFor="pw2" className="block">Mật khẩu mới:</label>
                                <div className="border border-[#B3B3B3] p-2 mt-1 rounded-md">
                                    <input id="pw2" className="w-full outline-none border-none" type="text" placeholder="Nhập mật khẩu mớicủa bạn" />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="bg-customBlue p-2 rounded-md text-white font-bold mt-4 w-full">Xác nhận</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangePassword