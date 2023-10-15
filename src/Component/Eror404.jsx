import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
export default function Eror404() {

    const history = useHistory();

    // Khi bạn muốn quay lại trang trước
    const goBack = () => {
      history.goBack();
    }

    return (
        <Box sx={{ backgroundColor: "#6EC2F7", width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            
            <Typography>Không tìm thấy địa chỉ phù hợp</Typography>
            <Link to={'/login'}>

            </Link>
        </Box>

    )
}
