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
    getPLOlist(selectedDate,dispatch,token);
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
      {/* <Typography variant='h4' sx={{ fontWeight: 'bold', mt: '50px' }}>Customer</Typography>
      <Box m={'50px'} display={'flex'} justifyContent={'center'}>
        <Paper elevation={6} sx={{ borderRadius: '10px', p: '20px', width: '70%' }}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Top 5 customers with the most reservations</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker
                label="Tháng"
                views={['month', 'year']}
                onChange={handleDateChange}
                value={selectedDate}
              />
            </LocalizationProvider>
          </Box>
          {data2.map((item, index) => (
            <Grid container key={index} sx={{ backgroundColor: themes.palette.grey.light, p: '5px 10px', borderRadius: '10px', mt: '10px', ':hover': { backgroundColor: themes.palette.green.light } }}>
              <Grid item xs={6} display={'flex'}>
                <Typography variant='h5' mr={'20px'}>{index + 1}</Typography>
                <Typography variant='h5'>{item.name}</Typography>
              </Grid>
              <Grid item xs={5} display={'flex'}>
                <PhoneIcon fontSize='medium' />
                <Typography variant='h5' ml={'5px'}> {item.phone}</Typography>
              </Grid>
              <Grid item xs={1} display={'flex'}>
                <WorkspacePremiumIcon fontSize='medium' />
                <Typography variant='h5' ml={'5px'}> {item.reservations}</Typography>
              </Grid>
            </Grid>
          ))}
        </Paper>
      </Box> */}
      {/* <DashboardCustom/>
      <DashboardPLO/> */}

      <PaginationCustom totalPage={10} page={page} setPage={setPage} rowPerPage={rowPerPage} setRowRowPerPage={setRowRowPerPage} />
      {/* <Typography variant='h4' sx={{ fontWeight: 'bold', m: '50px 0px' }}>Parking lot owner</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DatePicker
          label="Tháng"
          views={['month', 'year']}
          onChange={handleDateChange}
          value={selectedDate}
        />
      </LocalizationProvider>
      <Grid container spacing={5} mt={'3px'}>
        <Grid item xs={6}>
          <Paper elevation={6} sx={{ borderRadius: '10px', p: '20px' }} >
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Top 5 most booked parking areas</Typography>
            {data3.map((item, index) => (
              <Grid container key={index} sx={{ backgroundColor: themes.palette.grey.light, p: '5px 10px', borderRadius: '10px', mt: '10px', ':hover': { backgroundColor: themes.palette.red.light } }}>
                <Grid item xs={6} display={'flex'}>
                  <Typography variant='h6' mr={'20px'}>{index + 1}</Typography>
                  <Typography variant='h6'>{item.name}</Typography>
                </Grid>
                <Grid item xs={5} display={'flex'}>
                  <AccountCircleIcon fontSize='medium' />
                  <Typography variant='h6' ml={'5px'}> {item.owner}</Typography>
                </Grid>
                <Grid item xs={1} display={'flex'}>
                  <WorkspacePremiumIcon fontSize='medium' />
                  <Typography variant='h6' ml={'5px'}> {item.books}</Typography>
                </Grid>
              </Grid>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={6} sx={{ borderRadius: '10px', p: '20px' }} >
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Top 5 parking lots with the highest revenue</Typography>
            {data4.map((item, index) => (
              <Grid container key={index} display={'flex'} justifyContent={'space-between'} sx={{ backgroundColor: themes.palette.grey.light, p: '5px 10px', borderRadius: '10px', mt: '10px', ':hover': { backgroundColor: themes.palette.red.light } }}>
                <Grid item xs={5} display={'flex'}>
                  <Typography variant='h6' mr={'20px'}>{index + 1}</Typography>
                  <Typography variant='h6'>{item.name}</Typography>
                </Grid>
                <Grid item xs={4} display={'flex'}>
                  <AccountCircleIcon fontSize='medium' />
                  <Typography variant='h6' ml={'5px'}> {item.owner}</Typography>
                </Grid>
                <Grid item xs={3} display={'flex'}>
                  <LocalAtmIcon fontSize='medium' />
                  <Typography variant='h6' ml={'5px'}> {item.revenue}</Typography>
                </Grid>
              </Grid>
            ))}

          </Paper>
        </Grid>
      </Grid> */}
      <Paper elevation={5}>
        {/* <Typography display='flex' variant='h4' mt={6} justifyContent='center'> Student Join The Club Each Campus </Typography>
        <Chart
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
