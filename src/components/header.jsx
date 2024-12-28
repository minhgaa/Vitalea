import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import AccountMenu from './avatar';
import { Button } from '@mui/material';
import { matchPath } from 'react-router-dom';

const Header = () => {
    const { authUser } = useAuthContext();
    const location = useLocation();

    const whitePaths = [ '/news'];
    const isBlogDetail = matchPath('/blog-detail/:id', location.pathname);
    const textColor = whitePaths.includes(location.pathname) || isBlogDetail
        ? 'text-white'
        : 'text-[#737CF5]';
    const bgColor = location.pathname === '/news' || isBlogDetail
    ? 'bg-customBlue' : 'bg-white';

  
    return (
        <header className={`w-full h-[100%] ${bgColor} `}>
            <div className="p-4 pt-2 w-full flex items-center  justify-between">
                <Link to="/" className={`pl-7 font-sofadi text-xl ${textColor}`}>
                    Vitaléa
                </Link>
                {authUser?.role === 'USER' && (
                    <ul className="flex">
                        <li className="list-none p-2 text-[12px] text-white font-bold">
                            <Link to="/">TRANG CHỦ</Link>
                        </li>
                        <li className="list-none p-2 text-[12px] text-white font-bold">
                            <Link to="/news">TIN TỨC</Link>
                        </li>
                        <li className="list-none p-2 text-[12px] text-white font-bold">
                            <Link to="/doctors">DANH SÁCH BÁC SĨ</Link>
                        </li>
                    </ul>
                )}
                <div className="flex items-center pr-7">
                    {!authUser ? (
                        <Link to="/login">
                            <Button variant="contained">Login</Button>
                        </Link>
                    ) : (
                        <AccountMenu />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
