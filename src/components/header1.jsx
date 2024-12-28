import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import AccountMenu from './avatar';
import { Button } from '@mui/material';

const Header1 = () => {
    const { authUser } = useAuthContext();
    return (
        <header className="w-full bg-customBlue1 ">
            <div className="p-4 w-full flex items-center justify-between">
                <Link to="/" className="pl-7 text-white font-sofadi text-xl ">
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

export default Header1;
