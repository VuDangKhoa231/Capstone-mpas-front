import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, Badge, Box, Divider, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { deleteCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutSuccess } from '../redux/authSlice';
import Notifications from './Notication';
import { getNotification } from '../api/notification';
import { deleteToken, getMessaging, getToken } from '@firebase/messaging';




export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const user = useSelector((state) => state.auth?.login.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const noti = useSelector((state) => state.notification.list)
    const [isNotificationDrawerOpen, setNotificationDrawerOpen] = useState(false);

    const isMenuOpen = Boolean(anchorEl);
    //Menu
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logoutSuccess());
        deleteCookie('token');
        navigate('/login');

        const messaging = getMessaging();

        getToken(messaging)
            .then((currentToken) => {
                if (currentToken) {
                    // Xóa device token
                    deleteToken(messaging, currentToken)
                        .then(() => {
                            console.log('Device Token deleted');
                        })
                        .catch((error) => {
                            console.error('Error deleting device token:', error);
                        });
                }
            })
            .catch((error) => {
                console.error('Error getting current device token:', error);
            });
    }

    //Noti
    const handleNotificationClick = () => {
        setNotificationDrawerOpen(!isNotificationDrawerOpen);
        if(!isNotificationDrawerOpen){
            getNotification(dispatch, user?.login?.accessToken);
        }
    };

    useEffect(() => {
        getNotification(dispatch, user?.login?.accessToken);
    }, [])

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
            <Typography padding='10px'> {user?.fullName}</Typography>
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
                        onClick={handleNotificationClick}
                    >
                        <Badge badgeContent={noti?.data?.length} color="error">
                            <NotificationsNoneIcon sx={{ color: 'black' }} fontSize='medium' />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        <Avatar />
                    </IconButton>
                </Box>
            </Toolbar>
            {renderMenu}
            <Notifications openNoti={isNotificationDrawerOpen} onClose={handleNotificationClick} data={noti?.data} />
        </AppBar>
    )
}