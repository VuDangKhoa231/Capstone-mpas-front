import { Box, Breadcrumbs, Button, CircularProgress, Dialog, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchBar from '../../../Layout/SearchBar'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle'
import { Chip, Paper } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import Rating from '../../../Layout/Rating'
import themes from '../../../theme/themes'
import DialogCustom from '../../../Layout/DialogCustom'
const data = [
  {
    id: 1, fullname: "Mai Hoàng Tâm", phone: '0872812111', parkingName: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', width: '30', longth: '30', slot: '30', registrationDate: '30/12/2023', images: [
      { id: 1, img: '../image/anh.png' },
      { id: 2, img: '../image/anh.png' },
      { id: 3, img: '../image/anh.png' },
      { id: 4, img: '../image/anh.png' },
      { id: 5, img: '../image/anh.png' },
      { id: 6, img: '../image/anh.png' },
    ], description: 'Chất lượng tốt, khu vực bao an ninh, không lo mất cắp',
  },
  {
    id: 2, fullname: "Mai Hoàng Tâm 2", phone: '0872812111', parkingName: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', width: '30', longth: '30', slot: '30', registrationDate: '30/12/2023', images: [
      { id: 1, img: '../image/anh.png' },
      { id: 2, img: '../image/anh.png' },
      { id: 3, img: '../image/anh.png' },
    ], description: 'Chất lượng tốt, khu vực bao an ninh, không lo mất cắp',
  },
  {
    id: 3, fullname: "Mai Hoàng Tâm 3", phone: '0872812111', parkingName: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', width: '30', longth: '30', slot: '30', registrationDate: '30/12/2023', images: [
      { id: 1, img: '../image/anh.png' },
      { id: 2, img: '../image/anh.png' },
      { id: 3, img: '../image/anh.png' },
      { id: 4, img: '../image/anh.png' },
    ], description: 'Chất lượng tốt, khu vực bao an ninh, không lo mất cắp',
  },
  {
    id: 4, fullname: "Mai Hoàng Tâm 4", phone: '0872812111', parkingName: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', width: '30', longth: '30', slot: '30', registrationDate: '30/12/2023', images: [
      { id: 1, img: '../image/anh.png' },
      { id: 2, img: '../image/anh.png' },
      { id: 3, img: '../image/anh.png' },
      { id: 4, img: '../image/anh.png' },
    ], description: 'Chất lượng tốt, khu vực bao an ninh, không lo mất cắp',
  },
  {
    id: 5, fullname: "Mai Hoàng Tâm 5", phone: '0872812111', parkingName: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', width: '30', longth: '30', slot: '30', registrationDate: '30/12/2023', images: [
      { id: 1, img: '../image/anh.png' },
      { id: 2, img: '../image/anh.png' },
      { id: 3, img: '../image/anh.png' },
      { id: 4, img: '../image/anh.png' },
    ], description: 'Chất lượng tốt, khu vực bao an ninh, không lo mất cắp',
  },

]
export default function DetailBrowse() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  //search
  const [searchValue, setSearchValue] = useState();

  //Dialog
  const [openDialog, setOpenDialog] = useState(false);
 
  const handleClickOpen = () => {
    console.log(item);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  useEffect(() => {
    const selectedItem = data.find(itemData => itemData.id.toString() === id);
    setItem(selectedItem);
    console.log(selectedItem);
  }, []);

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue])


  const handleClickConfirm = () => {
    console.log('log');
  }
  return (
    <>
      {item === null ?
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        :
        <Stack direction='column' p='10px' spacing={2}>
          {/* Header */}
          <Typography variant='h2'>Thông tin chi tiết</Typography>
          {/* Breadcrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="medium" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" key="1" color="inherit" to="/Browse" style={{ textDecoration: 'none', color: themes.palette.primary, fontWeight: 'bold' }}>
              Danh sách kiểm duyệt
            </Link>,
            <Typography key="3" color="text.primary" fontWeight={'bold'}>
              {item?.name}
            </Typography>
          </Breadcrumbs>


          {/* Content */}
          <Grid container px={'20px'} spacing={1}>
            <Grid item xs={5}>
              <Stack direction={'column'} spacing={1.5}>
                <Typography variant='h4' fontWeight={'bold'}> Chi tiết chủ bãi xe</Typography>
                <Typography variant='h5' fontWeight={'bold'}>{item.name}</Typography>
                <Typography variant='h6'>Số điện thoại: {item.phone}</Typography>
                <Typography variant='h6'>Thời đăng ký : {item.registrationDate}</Typography>

              </Stack>
            </Grid>
            {/* Parking Area */}
            <Grid item xs={0.5} />
            <Grid item xs={6}>
              <Stack direction={'column'} spacing={1}>
                <Typography variant='h4' fontWeight={'bold'}> Thông tin bãi xe </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant='h5' mr='10px' fontWeight={'bold'}>{item.NameOfParkingLot}</Typography>

                </Box>
                <Typography variant='h6'>Địa chỉ: {item.location}</Typography>


                <Box>
                  <Box display={'flex'} justifyContent={'space-around'} mt={'30px '}>

                    <Paper elevation={3} square={false} sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium, width: '22%', height: '100px' }}>
                      <Typography variant='h5'>Chiều dài (m)</Typography>
                      <Typography variant='h4' fontWeight={'bold'} mt={'20px'}>{item.width}</Typography>
                    </Paper>


                    <Paper elevation={3} square={false} sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium, width: '22%', height: '100px' }}>
                      <Typography variant='h5'>Chiều rộng (m)</Typography>
                      <Typography variant='h4' fontWeight={'bold'} mt={'20px'}>{item.longth}</Typography>
                    </Paper>

                    <Paper elevation={3} square={false} sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium, width: '22%', height: '100px' }}>
                      <Typography variant='h5'>Số chỗ</Typography>
                      <Typography variant='h4' fontWeight={'bold'} mt={'20px'}>{item.slot}</Typography>
                    </Paper>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Box px={'20px'} maxWidth={'1540px'} mt={''}>
            <Typography variant='h4' fontWeight={'bold'}> Hình ảnh bãi xe </Typography>
            <Box display={'flex'} flexDirection={'row'} sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
              {item.images.map((item) => (
                <img key={item.id} src={`${item.img}`} style={{ margin: '10px 30px 10px 0px' }} />
              ))}
            </Box>

          </Box>
          <Box px={'20px'}>
            <Typography variant='h4' mt={'40px'} fontWeight={'bold'}> Mô tả</Typography>
            <Box key={item.id} sx={{ backgroundColor: themes.palette.grey.light, borderRadius: '10px', p: '20px', mt: '20px' }} >

              <Typography variant='h6'>{item.description}</Typography>
            </Box>
          </Box>

          <Box display={'flex'} justifyContent={'center'}>
            <Box mt={'30px'} p={'30px'} textAlign={'center'}>
              <Typography variant='h4' mb={'40px'} fontWeight={'bold'}>Phê duyệt hoạt động?</Typography>
              <Button variant='contained' sx={{ p: '15px', width: '300px', backgroundColor: '#E8C300'}} onClick={handleClickOpen}>
                Xem hợp đồng
              </Button>
            </Box>
          </Box>
          <DialogCustom confirm={true} data={item} handleClose={handleCloseDialog} open={openDialog} status={1}  handleConfirm={handleClickConfirm} />
        </Stack>
      }
    </>
  )
}
