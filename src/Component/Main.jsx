import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import Navigation from './Navigation';
import SideBar from './SideBar';

export default function Main() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null); // Mục đang được chọn
 
    useEffect(() => {
        const pathname = window.location.pathname;
        // Kiểm tra đường dẫn và thiết lập giá trị selectedMenuItem tương ứng
        if (pathname === '/') {
            setSelectedMenuItem(1);
        } else if (pathname.includes('/PLO')) {
            setSelectedMenuItem(2.1);
        } else if (pathname .includes('/Browse')) {
            setSelectedMenuItem(2.2);
        } else if (pathname.includes('/Withdrawal')) {
            setSelectedMenuItem(2.3);
        } else if (pathname.includes('/Customer')) {
            setSelectedMenuItem(3);
        }
    }, []);


    return (
        <div style={{ display: 'flex' }}>
            <SideBar selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
            <div style={{ flex: 1, marginLeft: '290px' }}>
                <Navigation />
                <Outlet />
            </div>
        </div>
    )
}
