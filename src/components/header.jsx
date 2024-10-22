import { useState }  from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
const Header = () => {
    const {authUser} = useAuthContext()
    const [inputValue, setInputValue] = useState('');
    const location = useLocation()
    // Hàm xử lý khi giá trị của TextField thay đổi
    const handleChange = (e) => {
        setInputValue(e.target.value); // Cập nhật state với giá trị mới
    };
    return (
        <header className='w-full'>
            <div className=" p-4 w-full flex items-center justify-between">
                <Link to='/' className="pl-7 font-sofadi text-xl text-customBlue">
                    Vitaléa
                </Link>
                <ul className='flex'>
                    <li className={`list-none ` + (location.pathname === '/' ? 'font-bold border-b-4 border-customBlue' : '')}><Link to='/'>TRANG CHỦ</Link></li>
                    <li className={`list-none ` + (location.pathname === '/news' ? 'font-bold border-b-4 border-customBlue' : '')}><Link to='/news'>TIN TỨC</Link></li>
                    <li className={`list-none ` + (location.pathname === '/doctors' ? 'font-bold border-b-4 border-customBlue' : '')}><Link to='/doctors'>DANH SÁCH BÁC SĨ</Link></li>
                </ul>
                <div className="flex items-center pr-7">
                    <button>
                        <img src="../src/assets/notiIcon.svg" className="w-7 h-7 mr-3" />
                    </button>
                    {authUser ? <Link to='/user/order'><img src={`http://localhost:3000/${authUser.image}`} className="w-7 h-7 rounded-full object-cover" /></Link> : <Link
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