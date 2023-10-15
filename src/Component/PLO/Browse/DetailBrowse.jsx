import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchBar from '../../../Layout/SearchBar'

import themes from '../../../theme/themes'
import { Link } from 'react-router-dom'
import Main from '../../Main'

const data = [
  {
    id: 1, name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM'
  },
  {
    id: 2, name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM'
  },
  {
    id: 3, name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM'
  },

]
export default function DetailBrowse() {
  return (
 
      <Stack direction='column' p='10px' spacing={5}>
        {/* Header */}
        <Typography variant='h2'>Thông tin chi tiết</Typography>
        <Grid container>
          <Grid item xs={4}>
            <SearchBar />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4}>
          </Grid>
        </Grid>
        <Box justifyContent={'end'} width={'100%'} display={'flex'}>
          <Button sx={{ mr: '30px', px: '50px', backgroundColor: themes.palette.grey.light, color: 'black' }}> <Typography variant='body1' textTransform={'none'}> Tất cả</Typography></Button>
        </Box>
        {/* Content */}
        {/* <Box >
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Tên</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Số điện thoại</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Tên bãi đỗ</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>SĐịa chỉ bãi xe</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Trạng thái</Typography>
          </Grid>
        </Grid>
        <Box mx={'20px'}>
          {data.map((item) => (
            <Grid container spacing={3} key={item.id} py={'60px'} borderBottom={`1px solid ${themes.palette.grey.light}`}>
              <Grid item xs={3}>
                <Typography variant='h5' sx={{ fontWeight: '16px' }}>{item.name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5' sx={{ fontWeight: '16px', textAlign: 'center' }}>{item.phone}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5' sx={{ fontWeight: '16px', }}>{item.NameOfParkingLot}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='h5' sx={{ fontWeight: '16px', textAlign: 'left' }}>{item.location}</Typography>
              </Grid>
              <Grid item xs={2} textAlign={'center'}>
                <Link to={`/PLO/${item.id}`}>
                  <Button variant="contained" color="success" sx={{ p: '10px 25px' }}>
                    Xem
                  </Button>
                </Link>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box> */}
      </Stack>
   
  )
}
