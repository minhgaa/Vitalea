import {Link, useLocation} from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
const Header = () => {
    const {authUser} = useAuthContext()
    const location = useLocation()
    // Hàm xử lý khi giá trị của TextField thay đổi
    return (
        <header className='w-full'>
            <div className=" p-4 w-full flex items-center justify-between">
                <Link to='/' className="pl-7 font-sofadi text-xl text-customBlue">
                    Vitaléa
                </Link>
                {authUser?.role === 'USER' && <ul className='flex'>
                    <li className={`list-none p-2 text-[12px] ` + (location.pathname === '/' ? 'bg-customBlue rounded-sm text-white font-bold' : '')}><Link to='/'>TRANG CHỦ</Link></li>
                    <li className={`list-none p-2 text-[12px] ` + (location.pathname === '/news' ? 'bg-customBlue rounded-sm text-white font-bold' : '')}><Link to='/news'>TIN TỨC</Link></li>
                    <li className={`list-none p-2 text-[12px] ` + (location.pathname === '/doctors' ? 'bg-customBlue rounded-sm text-white font-bold' : '')}><Link to='/doctors'>DANH SÁCH BÁC SĨ</Link></li>
                </ul>}
                <div className="flex items-center pr-7">
                    {authUser ? <Link to={authUser?.role === 'USER' ? '/user/order' : '/mainpage'}><img src={`http://localhost:3000/${authUser.image}`} className="w-7 h-7 rounded-full object-cover" /></Link> : <Link
                                to="/login"
                                type="button"
                                className="px-6 py-2 bg-customBlue rounded-md text-white text-l flex justify-center items-center"
                            >
                                Log in
                            </Link>}
                </div>
            </div>
        </header>
    )
}

export default Header