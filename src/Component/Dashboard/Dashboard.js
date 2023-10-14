import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FaceIcon from '@mui/icons-material/Face';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import themes from '../../theme/themes';
import { useDispatch, useSelector } from 'react-redux';
import { getPLOlist } from '../../redux/apiRequest';
import { useNavigate } from 'react-router';
import { getCookie } from 'cookies-next';
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
export default function Dashboard() {
  const user = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.login.accessToken) {
      navigate('/login')
    }
    const token  = getCookie('token');
  }, [])
  
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
      <Typography variant='h4' sx={{ fontWeight: 'bold', mt: '50px' }}>Customer</Typography>
      <Box m={'50px'} display={'flex'} justifyContent={'center'}>
        <Paper elevation={6} sx={{ borderRadius: '10px', p: '20px', width: '70%' }}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Top 5 customers with the most reservations</Typography>
            <Button>Click here</Button>
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
      </Box>
      <Typography variant='h4' sx={{ fontWeight: 'bold', m: '50px 0px' }}>Parking lot owner</Typography>
      <Button> Click here</Button>
      <Grid container spacing={5} >
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
      </Grid>
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
