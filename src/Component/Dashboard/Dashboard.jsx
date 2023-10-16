import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FaceIcon from '@mui/icons-material/Face';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { getCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import themes from '../../theme/themes';
import 'dayjs/locale/vi';
import dayjs from 'dayjs';

import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import DashboardCustom from './Dashboard-Custom';
import DashboardPLO from './Dashboard-PLO';
import PaginationCustom from '../../Layout/PaginationCustom';
import { getPLOlist } from '../../api/plo';
const data = [
  {
    id: 1, total: 40, name: 'Customer', icon: <SupportAgentIcon fontSize='large' />
  },
  {
    id: 2, total: 20, name: 'Parking lot owner', icon: <FaceIcon fontSize='large' />
  }
]

const data2 = [
  {
    id: 1, name: 'Nguyễn Văn Tâm', phone: '0987654321', reservations: 20
  },
  {
    id: 2, name: 'Nguyễn Văn Tâm', phone: '0987654321', reservations: 19
  },
  {
    id: 3, name: 'Nguyễn Văn Tâm', phone: '0987654321', reservations: 18
  },
  {
    id: 4, name: 'Nguyễn Văn Tâm', phone: '0987654321', reservations: 10
  },
  {
    id: 5, name: 'Nguyễn Văn Tâm', phone: '0987654321', reservations: 10
  },
]

const data3 = [
  {
    id: 1, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', books: 200
  },
  {
    id: 2, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', books: 190
  },
  {
    id: 3, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', books: 180
  },
  {
    id: 4, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', books: 90
  },
  {
    id: 5, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', books: 70
  },
]

const data4 = [
  {
    id: 1, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: '25,000,000VNĐ'
  },
  {
    id: 2, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: '22,000,000VNĐ'
  },
  {
    id: 3, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: '19,000,000VNĐ'
  },
  {
    id: 4, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: '10,000,000VNĐ'
  },
  {
    id: 5, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: '9,000,000VNĐ'
  },
]

dayjs.locale('vi');
export default function Dashboard() {
  const user = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOKClick = () => {
    if (selectedDate) {
      // Xử lý khi người dùng xác nhận chọn tháng
      console.log('Ngày đã chọn:', selectedDate.format('MMMM YYYY'));
    }
  };

  useEffect(() => {
    if (!user.login.accessToken) {
      navigate('/login')
    }
    const token = getCookie('token');

    // getPLOlist(selectedDate,dispatch,token);
  }, [])




  useEffect(() => {
    console.log('date', selectedDate);
  }, [selectedDate])
  //Date and time 

 

  //test
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowRowPerPage] = useState(5);
  
  useEffect(() => {
    console.log('Page', page, "RpP", rowPerPage);
  }, [page, rowPerPage])
  return (
    <Box p={'10px'}>
      <Typography variant='h2'>Trang chủ</Typography>
      <Box display={'flex'} justifyContent={'space-around'} mt={'20px'}>
        {data.map((item) => (
          <Paper elevation={6} sx={{ p: '20px 40px 20px 40px', minWidth: '400px' }} key={item.id} >
            <Box display={'flex'} justifyContent={'center'}>
              {item.icon}
              <Typography variant='h4' sx={{ fontWeight: 'bold', ml: '20px' }}> {item.name}</Typography>
            </Box>
            <Typography variant='h3' textAlign={'center'} mt={'20px'}>  {item.total}</Typography>
          </Paper>
        ))}
      </Box>
      <DashboardCustom/>
      <DashboardPLO/>
      <Paper elevation={5}>
        <Typography display='flex' variant='h4' mt={6} justifyContent='center'> Student Join The Club Each Campus </Typography>
        {/* <Chart
          width='100%'
          height={'400px'}
          chartType="ColumnChart"
          data={data}
          options={options}
          loader={<div>Loading Chart...</div>}
        /> */}
      </Paper>

    </Box>

  )
}
