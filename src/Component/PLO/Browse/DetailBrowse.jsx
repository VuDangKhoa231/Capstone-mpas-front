import { Box, Breadcrumbs, Button, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DialogCustom from '../../../Layout/DialogCustom'
import { getDetailBrowse } from '../../../api/browse'
import themes from '../../../theme/themes'
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
  const user = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const browseDetail = useSelector((state) => state.browse.detailBrowse)
  console.log("chekc check", browseDetail);
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
    console.log(id);
    getDetailBrowse(id, dispatch, user?.login.accessToken)
    if (browseDetail?.browse.status === 200) {
      setItem(browseDetail?.browse?.data)
    } else {
      setItem([])
    }
    console.log(browseDetail);
  }, [])


  const handleClickConfirm = () => {
    console.log('log');
    navigate('/browse')
  }

  return (
    <>
      {browseDetail?.isFetching ?
        <Box sx={{ display: 'flex', width: '100%', height: '80vh', justifyContent: 'center', alignItems: 'center' }}>
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
              {item?.fullName}
            </Typography>
          </Breadcrumbs>


          {/* Content */}
          <Grid container px={'20px'} spacing={1}>
            <Grid item xs={5}>
              <Stack direction={'column'} spacing={1.5}>
                <Typography variant='h4' fontWeight={'bold'}> Chi tiết chủ bãi xe</Typography>
                <Typography variant='h5' fontWeight={'bold'}>Tên: {item?.fullName}</Typography>
                <Typography variant='h6'>Số điện thoại: {item?.phoneNumber}</Typography>
                <Typography variant='h6'>Thời đăng ký : {item?.registerContract}</Typography>

              </Stack>
            </Grid>
            {/* Parking Area */}
            <Grid item xs={0.5} />
            <Grid item xs={6}>
              <Stack direction={'column'} spacing={1}>
                <Typography variant='h4' fontWeight={'bold'}> Thông tin bãi xe </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant='h5' mr='10px' fontWeight={'bold'}>Tên bãi: {item?.parkingName}</Typography>

                </Box>
                <Typography variant='h6'>Địa chỉ: {item?.address}</Typography>


                <Box>
                  <Box display={'flex'} justifyContent={'space-around'} mt={'30px '}>

                    <Paper elevation={3} square={false} sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium, width: '22%', height: '100px' }}>
                      <Typography variant='h5'>Chiều dài (m)</Typography>
                      <Typography variant='h4' fontWeight={'bold'} mt={'20px'}>{item?.width}</Typography>
                    </Paper>


                    <Paper elevation={3} square={false} sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium, width: '22%', height: '100px' }}>
                      <Typography variant='h5'>Chiều rộng (m)</Typography>
                      <Typography variant='h4' fontWeight={'bold'} mt={'20px'}>{item?.length}</Typography>
                    </Paper>

                    <Paper elevation={3} square={false} sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium, width: '22%', height: '100px' }}>
                      <Typography variant='h5'>Số chỗ</Typography>
                      <Typography variant='h4' fontWeight={'bold'} mt={'20px'}>{item?.slot}</Typography>
                    </Paper>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Box px={'20px'} maxWidth={'1540px'} mt={''}>
            <Typography variant='h4' fontWeight={'bold'}> Hình ảnh bãi xe </Typography>
            {item?.images ? (
              item?.images.map((image) => (
                <img key={image.id} src={`${image.img}`} style={{ margin: '10px 30px 10px 0px' }} />
              ))
            ) : (
              // Hiển thị một thông báo hoặc phản hồi khác nếu item.images là null hoặc undefined
              <Typography variant='h6'>Không có hình ảnh</Typography>
            )}
          </Box>
          <Box px={'20px'}>
            <Typography variant='h4' mt={'40px'} fontWeight={'bold'}> Mô tả</Typography>
            <Box sx={{ backgroundColor: themes.palette.grey.light, borderRadius: '10px', p: '20px', mt: '20px' }} >
              <Typography variant='h6'>{item?.description}</Typography>
            </Box>
          </Box>

          <Box display={'flex'} justifyContent={'center'}>
            <Box mt={'30px'} p={'30px'} textAlign={'center'}>
              <Typography variant='h4' mb={'40px'} fontWeight={'bold'}>Phê duyệt hoạt động?</Typography>
              <Button variant='contained' sx={{ p: '15px', width: '300px', backgroundColor: '#E8C300' }} onClick={handleClickOpen}>
                Xem hợp đồng
              </Button>
            </Box>
          </Box>
          <DialogCustom confirm={true} data={item} handleClose={handleCloseDialog} open={openDialog} status={1} handleConfirm={handleClickConfirm} />
        </Stack>
      }
    </>
  )
}
