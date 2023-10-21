import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FaceIcon from '@mui/icons-material/Face';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Button, CircularProgress, Grid, Paper, Typography } from '@mui/material';
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
import Chart from 'react-google-charts';
import { getDashboard } from '../../api/dashboard';
const data = [
  {
    id: 1, total: 40, name: 'Customer', icon: <SupportAgentIcon fontSize='large' />
  },
  {
    id: 2, total: 20, name: 'Parking lot owner', icon: <FaceIcon fontSize='large' />
  }
]



dayjs.locale('vi');
export default function Dashboard() {
  const user = useSelector((state) => state.auth)
  const dashboard = useSelector((state) => state.dashboard.dashboard)
  const dispatch = useDispatch();


  useEffect(() => {
    console.log(dashboard);
    getDashboard(dispatch, user?.login.data)
  }, [])








  return (
    <>
      {dashboard?.isFetching ? (
        <Box sx={{ display: 'flex', width: '100%', height: '80vh', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      ) :
        (
          <Box p={'10px'}>
            <Typography variant='h2'>Trang chủ</Typography >
            <Box display={'flex'} justifyContent={'space-around'} mt={'20px'}>
              <Paper elevation={6} sx={{ p: '20px 40px 20px 40px', minWidth: '400px' }}>
                <Box display={'flex'} justifyContent={'center'}>
                  <SupportAgentIcon fontSize='large' />
                  <Typography variant='h4' sx={{ fontWeight: 'bold', ml: '20px' }}> Khách hàng</Typography>
                </Box>
                <Typography variant='h3' textAlign={'center'} mt={'20px'}> {dashboard?.data?.data.totalCustomer}</Typography>
              </Paper>
              <Paper elevation={6} sx={{ p: '20px 40px 20px 40px', minWidth: '400px' }} >
                <Box display={'flex'} justifyContent={'center'}>
                  <FaceIcon fontSize='large' />
                  <Typography variant='h4' sx={{ fontWeight: 'bold', ml: '20px' }}> Chủ bãi xe</Typography>
                </Box>
                <Typography variant='h3' textAlign={'center'} mt={'20px'}>  {dashboard?.data?.data.totalPlo}</Typography>
              </Paper>
            </Box>
            <DashboardCustom />
            <DashboardPLO />
          </Box >
        )
      }
    </>
  )
}
