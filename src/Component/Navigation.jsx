import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, Badge, Box, Divider, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { deleteCookie } from 'cookies-next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutSuccess } from '../redux/authSlice';




export default function Navigation() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const user = useSelector((state) => state.auth?.login.currentUser)
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleLogout = () => {
        dispatch(logoutSuccess());  
        deleteCookie('token');
        navigate('/login');
    }

    
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu 
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}>
            <Typography sx={{ backgroundColor: '#E6E6E6' }} padding='10px'> {user?.fullName}</Typography>
            <Divider />
            <MenuItem onClick={() => handleLogout()}>
                <Stack direction='row' spacing={2}>
                    <LogoutIcon />
                    <Typography>Đăng Xuất</Typography>
                </Stack>
            </MenuItem>
        </Menu>
    );
    return (
        <AppBar position="static" sx={{ backgroundColor: '#F5F5F5' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsNoneIcon sx={{ color: 'black' }} />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <Avatar />
                    </IconButton>
                </Box>
                
            </Toolbar>
            {renderMenu}
        </AppBar>
    )
}