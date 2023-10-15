import { Box, Breadcrumbs, Button, Chip, CircularProgress, Grid, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import themes from '../../../theme/themes';
import Rating from '../../../Layout/Rating';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const data = [
    {
        id: 'PLO1', name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', contractTerm: '1 năm', contractClosingTime: '30/12/2023', realtime: { totalNumber: '1', totalMorning: '0', totalEvening: '2', overNight: '1', revenue: '12k' }, images: [
            { id: 1, img: '../image/anh.png' },
            { id: 2, img: '../image/anh.png' },
            { id: 3, img: '../image/anh.png' },
            { id: 4, img: '../image/anh.png' },
            { id: 5, img: '../image/anh.png' },
            { id: 6, img: '../image/anh.png' },
        ], rating: 4, locationMap: { latitude: '10.889706636010411', longitude: '106.79495520906106' }, status: 'Đang hoạt động', morningFee: '3.000VNĐ', eveningFee: '4.000VNĐ', overNightFee: '12.000VNĐ', feedback: [
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 1, content: ' Đang stress'
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 2, content: ' Đang stress tìm '
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 3, content: ' Đang stress tìm chỗ '
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 5, content: ' Đang stress tìm chỗ mà đặt được chỗ '
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 4, content: ' Đang stress tìm chỗ mà đặt được chỗ ưng ghê'
            },
        ]
    },
    {
        id: 'PLO2', name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', contractTerm: '1 năm', contractClosingTime: '30/12/2023', realtime: { totalNumber: '1', totalMorning: '0', totalEvening: '2', overNight: '1', revenue: '12k' }, images: [
            { id: 1, img: '../image/anh.png' },
            { id: 2, img: '../image/anh.png' },
            { id: 3, img: '../image/anh.png' },
        ], rating: 4, locationMap: { latitude: '10.889706636010411', longitude: '106.79495520906106' }, status: 'Đang hoạt động', morningFee: '3.000VNĐ', eveningFee: '4.000VNĐ', overNightFee: '12.000VNĐ', feedback: [
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 1, content: ' Đang stress'
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 2, content: ' Đang stress tìm '
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 3, content: ' Đang stress tìm chỗ '
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 5, content: ' Đang stress tìm chỗ mà đặt được chỗ '
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 4, content: ' Đang stress tìm chỗ mà đặt được chỗ ưng ghê'
            },
        ]
    },
    {
        id: 'PLO3', name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', contractTerm: '1 năm', contractClosingTime: '30/12/2023', realtime: { totalNumber: '1', totalMorning: '0', totalEvening: '2', overNight: '1', revenue: '12k' }, images: [
            { id: 1, img: '../image/anh.png' },
            { id: 2, img: '../image/anh.png' },
            { id: 3, img: '../image/anh.png' },
            { id: 4, img: '../image/anh.png' },
        ], rating: 4, locationMap: { latitude: '10.889706636010411', longitude: '106.79495520906106' }, status: 'Dừng hoạt động', morningFee: '3.000VNĐ', eveningFee: '4.000VNĐ', overNightFee: '12.000VNĐ', feedback: [
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 1, content: ' Đang stress'
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 2, content: ' Đang stress tìm '
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 3, content: ' Đang stress tìm chỗ '
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 5, content: ' Đang stress tìm chỗ mà đặt được chỗ '
            },
            {
                id: '1.1', customer: 'Mai Hoàng Tâm', rating: 4, content: ' Đang stress tìm chỗ mà đặt được chỗ ưng ghê'
            },
        ]
    },

]


export default function DetailPLO() {
    const { id } = useParams();
    console.log(id);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const selectedItem = data.find(itemData => itemData.id === id);
        setItem(selectedItem);
    }, []);


    // gg map
    const openGoogleMaps = () => {
        if (item.locationMap) {
            // Tạo URL Google Maps với kinh độ và vĩ độ từ item.locationMap
            const googleMapsUrl = `https://www.google.com/maps?q=${item.locationMap.latitude},${item.locationMap.longitude}`;

            // Mở Google Maps trong một tab mới
            window.open(googleMapsUrl, '_blank');
        }
    };
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
                        <Link underline="hover" key="1" color="inherit" to="/PLO" style={{ textDecoration: 'none', color: themes.palette.primary, fontWeight: 'bold' }}>
                            Danh sách
                        </Link>,
                        <Typography key="3" color="text.primary" fontWeight={'bold'}>
                            {item.name}
                        </Typography>
                    </Breadcrumbs>

                    {/* detail PLO */}
                    <Grid container px={'20px'} spacing={1}>
                        <Grid item xs={6}>
                            <Stack direction={'column'} spacing={1.5}>
                                <Typography variant='h4' fontWeight={'bold'}> Chi tiết chủ bãi xe</Typography>
                                <Typography variant='h5' fontWeight={'bold'}>{item.name}</Typography>
                                <Typography variant='h6'>Số điện thoại: {item.phone}</Typography>
                                <Typography variant='h6'>Thời hạn hợp đồng : {item.contractTerm}</Typography>
                                <Typography variant='h6'>Thời gian kết thúc: {item.contractClosingTime}</Typography>
                                <Box pt={'20px'}>
                                    <Button variant='contained' sx={{ p: '15px', width: '300px', backgroundColor: themes.backgroundColor }}>
                                        Xem hợp đồng
                                    </Button>
                                </Box>
                                {/* realtime */}
                                <Box p={'50px 0px 40px 0px'}>
                                    <Typography variant='h4' fontWeight={'bold'}> Thời gian thực</Typography>
                                </Box>
                                <Grid container spacing={1.5} >
                                    <Grid item xs={2}>
                                        <Paper elevation={1} square sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium }}>
                                            <Typography>Số lượng</Typography>
                                            <Typography variant='h5' fontWeight={'bold'}>{item.realtime.totalNumber}</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Paper elevation={1} square sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium }}>
                                            <Typography>Ban ngày</Typography>
                                            <Typography variant='h5' fontWeight={'bold'}>{item.realtime.totalMorning}</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Paper elevation={1} square sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium }}>
                                            <Typography>Ban tối</Typography>
                                            <Typography variant='h5' fontWeight={'bold'}>{item.realtime.totalEvening}</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Paper elevation={1} square sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium }}>
                                            <Typography>Qua đêm</Typography>
                                            <Typography variant='h5' fontWeight={'bold'}>{item.realtime.overNight}</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Paper elevation={1} square sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium }}>
                                            <Typography>Doanh thu</Typography>
                                            <Typography variant='h5' fontWeight={'bold'}>{item.realtime.revenue}</Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Grid>
                        {/* Parking Area */}
                        <Grid item xs={1}/>
                        <Grid item xs={5}>
                            <Stack direction={'column'} spacing={1.5}>
                                <Typography variant='h4' fontWeight={'bold'}> Thông tin bãi xe </Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography variant='h5' mr='10px' fontWeight={'bold'}>{item.NameOfParkingLot}</Typography>
                                    <Rating props={item.rating} />
                                </Box>
                                <Typography variant='h6'>Địa chỉ: {item.location}</Typography>
                                <Box display={'flex'}>
                                    <PersonPinCircleIcon fontSize='large' />
                                    <Button variant="text" color="primary" onClick={openGoogleMaps}>
                                        <Typography variant='h6'>
                                            {item.locationMap.latitude}, {item.locationMap.longitude}
                                        </Typography>
                                    </Button>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Typography variant='h6' marginRight={'10px'}>Trạng thái bãi xe: </Typography>

                                    {item.status === 'Đang hoạt động' ? <Typography variant='h6' color='green' fontWeight={'bold'}> {item.status} </Typography> : (item.status === 'Dừng hoạt động' ? <Chip label={`${item.status}`} color='error' variant="filled" /> : <Typography color='red' fontWeight={'bold'}> {item.status} </Typography>)}
                                </Box>

                                {/* Fee Information  */}
                                <Typography variant='h4' paddingTop={'50px'} fontWeight={'bold'}> Thông tin phí và phương thức đỗ xe  </Typography>
                                <Box>
                                    <Typography variant='h5' > Ban ngày</Typography>
                                    <Box display={'flex'} justifyContent={'space-between'} paddingRight={'200px'} mt={'25px'}>
                                        <Typography> Mức phí</Typography>
                                        <Typography> {item.morningFee}</Typography>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddingRight={'200px'}>
                                        <Typography> Thời gian hoạt động</Typography>
                                        <Typography>6 AM </Typography>
                                        <ArrowRightAltIcon fontSize='large' />
                                        <Typography>18 PM </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant='h5' > Ban đêm</Typography>
                                    <Box display={'flex'} justifyContent={'space-between'} paddingRight={'200px'} mt={'25px'}>
                                        <Typography> Mức phí</Typography>
                                        <Typography> {item.eveningFee}</Typography>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddingRight={'200px'}>
                                        <Typography> Thời gian hoạt động</Typography>
                                        <Typography>18 PM </Typography>
                                        <ArrowRightAltIcon fontSize='large' />
                                        <Typography>6 AM </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant='h5' > Qua đêm</Typography>
                                    <Box display={'flex'} justifyContent={'space-between'} paddingRight={'200px'} mt={'25px'}>
                                        <Typography> Mức phí</Typography>
                                        <Typography> {item.morningFee}</Typography>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddingRight={'200px'}>
                                        <Typography> Thời gian hoạt động</Typography>
                                        <Typography>24h </Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box px={'20px'} maxWidth={'1540px'}>
                        <Typography variant='h4' fontWeight={'bold'}> Hình ảnh bãi xe </Typography>
                        <Box display={'flex'} flexDirection={'row'} sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                            {item.images.map((item) => (
                                <img src={`${item.img}`} style={{ margin: '10px 30px 10px 0px' }} />
                            ))}
                        </Box>

                    </Box>
                    <Box px={'20px'}>
                        <Typography variant='h4' fontWeight={'bold'}> Phản hồi và đánh giá</Typography>

                        {item.feedback.map((item) => (
                            <Box sx={{ backgroundColor: themes.palette.grey.light, borderRadius: '10px', p: '20px', mt: '20px' }} >
                                <Box display={'flex'} flexDirection={'row'}>
                                    <Typography variant='h6' mr={'10px'} fontWeight={'bold'}>{item.customer} </Typography>
                                    <Rating props={item.rating} />
                                </Box>
                                <Box display={'flex'} flexDirection={'row'}>
                                    <Typography variant='h6' mr={'10px'}>Nội dung:</Typography>
                                    <Typography  variant='h6' color={themes.palette.grey.dark}>{item.content}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Stack>}
        </>
    )
}
