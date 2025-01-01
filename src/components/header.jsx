import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import AccountMenu from './avatar';

const Header = () => {
    const { authUser } = useAuthContext();
    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: 'none',
                backgroundColor: 'transparent',
                px: 3,
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                {/* Logo */}
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: 'none',
                        color: '#000',
                        fontWeight: 'bold',
                        fontFamily: 'Arial, sans-serif',
                    }}
                >
                    Vitalea
                </Typography>

                {/* Navigation Links */}
                {authUser?.role === 'USER' && <Box sx={{ display: 'flex', gap: 4 }}>
                    <Button
                        component={Link}
                        to="/doctors"
                        sx={{
                            textTransform: 'none',
                            color: '#fff',
                            fontWeight: 'normal',
                            fontSize: '16px',
                        }}
                    >
                        Danh sách bác sĩ
                    </Button>
                    <Button
                        component={Link}
                        to="/news"
                        sx={{
                            textTransform: 'none',
                            color: '#fff',
                            fontWeight: 'normal',
                            fontSize: '16px',
                        }}
                    >
                        Tin y tế
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        sx={{
                            textTransform: 'none',
                            color: '#fff',
                            fontWeight: 'normal',
                            fontSize: '16px',
                        }}
                    >
                        Về chúng tôi
                    </Button>
                </Box>}
                

                {/* Call to Action Button */}
                <div className="flex items-center pr-7">
                    {!authUser ? (
                        <Link to="/login">
                            <Button variant="contained">Login</Button>
                        </Link>
                    ) : (
                        <AccountMenu />
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
