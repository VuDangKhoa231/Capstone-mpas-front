import { Box, Breadcrumbs, Button, Chip, CircularProgress, Grid, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import themes from '../../../theme/themes';
import Rating from '../../../Layout/Rating';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PaginationCustom from '../../../Layout/PaginationCustom';
import { getDetailPLO } from '../../../api/plo';
import { useDispatch, useSelector } from 'react-redux';
// const data = [
//     {
//         id: 'PLO1', name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', contractTerm: '1 năm', contractClosingTime: '30/12/2023', realtime: { totalNumber: '1', totalMorning: '0', totalEvening: '2', overNight: '1', revenue: '12k' }, images: [
//             { id: 1, img: '../image/anh.png' },
//             { id: 2, img: '../image/anh.png' },
//             { id: 3, img: '../image/anh.png' },
//             { id: 4, img: '../image/anh.png' },
//             { id: 5, img: '../image/anh.png' },
//             { id: 6, img: '../image/anh.png' },
//         ], rating: 4, locationMap: { latitude: '10.889706636010411', longitude: '106.79495520906106' }, status: 'Đang hoạt động', morningFee: '3.000VNĐ', eveningFee: '4.000VNĐ', overNightFee: '12.000VNĐ', feedback: [
//             {
//                 id: '1.1', customer: 'Mai Hoàng Tâm', rating: 1, content: ' Đang stress'
//             },
//             {
//                 id: '1.2', customer: 'Mai Hoàng Tâm', rating: 2, content: ' Đang stress tìm '
//             },
//             {
//                 id: '1.3', customer: 'Mai Hoàng Tâm', rating: 3, content: ' Đang stress tìm chỗ '
//             },
//             {
//                 id: '1.4', customer: 'Mai Hoàng Tâm', rating: 5, content: ' Đang stress tìm chỗ mà đặt được chỗ '
//             },
//             {
//                 id: '1.5', customer: 'Mai Hoàng Tâm', rating: 4, content: ' Đang stress tìm chỗ mà đặt được chỗ ưng ghê'
//             },
//         ]
//     },
//     {
//         id: 'PLO2', name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', contractTerm: '1 năm', contractClosingTime: '30/12/2023', realtime: { totalNumber: '1', totalMorning: '0', totalEvening: '2', overNight: '1', revenue: '12k' }, images: [
//             { id: 1, img: '../image/anh.png' },
//             { id: 2, img: '../image/anh.png' },
//             { id: 3, img: '../image/anh.png' },
//         ], rating: 4, locationMap: { latitude: '10.889706636010411', longitude: '106.79495520906106' }, status: 'Đang hoạt động', morningFee: '3.000VNĐ', eveningFee: '4.000VNĐ', overNightFee: '12.000VNĐ', feedback: [
//             {
//                 id: '1.1', customer: 'Mai Hoàng Tâm', rating: 1, content: ' Đang stress'
//             },
//             {
//                 id: '1.2', customer: 'Mai Hoàng Tâm', rating: 2, content: ' Đang stress tìm '
//             },
//             {
//                 id: '1.3', customer: 'Mai Hoàng Tâm', rating: 3, content: ' Đang stress tìm chỗ '
//             },
//             {
//                 id: '1.4', customer: 'Mai Hoàng Tâm', rating: 5, content: ' Đang stress tìm chỗ mà đặt được chỗ '
//             },
//             {
//                 id: '1.5', customer: 'Mai Hoàng Tâm', rating: 4, content: ' Đang stress tìm chỗ mà đặt được chỗ ưng ghê'
//             },
//         ]
//     },
//     {
//         id: 'PLO3', name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', contractTerm: '1 năm', contractClosingTime: '30/12/2023', realtime: { totalNumber: '1', totalMorning: '0', totalEvening: '2', overNight: '1', revenue: '12k' }, images: [
//             { id: 1, img: '../image/anh.png' },
//             { id: 2, img: '../image/anh.png' },
//             { id: 3, img: '../image/anh.png' },
//             { id: 4, img: '../image/anh.png' },
//         ], rating: 4, locationMap: { latitude: '10.889706636010411', longitude: '106.79495520906106' }, status: 'Dừng hoạt động', morningFee: '3.000VNĐ', eveningFee: '4.000VNĐ', overNightFee: '12.000VNĐ', feedback: [
//             {
//                 id: '1.1', customer: 'Mai Hoàng Tâm', rating: 1, content: ' Đang stress'
//             },
//             {
//                 id: '1.2', customer: 'Mai Hoàng Tâm', rating: 2, content: ' Đang stress tìm '
//             },
//             {
//                 id: '1.3', customer: 'Mai Hoàng Tâm', rating: 3, content: ' Đang stress tìm chỗ '
//             },
//             {
//                 id: '1.4', customer: 'Mai Hoàng Tâm', rating: 5, content: ' Đang stress tìm chỗ mà đặt được chỗ '
//             },
//             {
//                 id: '1.5', customer: 'Mai Hoàng Tâm', rating: 4, content: ' Đang stress tìm chỗ mà đặt được chỗ ưng ghê'
//             },
//         ]
//     },
//     {
//         id: 'PLO4', name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', contractTerm: '1 năm', contractClosingTime: '30/12/2023', realtime: { totalNumber: '1', totalMorning: '0', totalEvening: '2', overNight: '1', revenue: '12k' }, images: [
//             { id: 1, img: '../image/anh.png' },
//             { id: 2, img: '../image/anh.png' },
//             { id: 3, img: '../image/anh.png' },
//             { id: 4, img: '../image/anh.png' },
//         ], rating: 4, locationMap: { latitude: '10.889706636010411', longitude: '106.79495520906106' }, status: 'Dừng hoạt động', morningFee: '3.000VNĐ', eveningFee: '4.000VNĐ', overNightFee: '12.000VNĐ', feedback: [
//             {
//                 id: '1.1', customer: 'Mai Hoàng Tâm', rating: 1, content: ' Đang stress'
//             },
//             {
//                 id: '1.2', customer: 'Mai Hoàng Tâm', rating: 2, content: ' Đang stress tìm '
//             },
//             {
//                 id: '1.3', customer: 'Mai Hoàng Tâm', rating: 3, content: ' Đang stress tìm chỗ '
//             },
//             {
//                 id: '1.4', customer: 'Mai Hoàng Tâm', rating: 5, content: ' Đang stress tìm chỗ mà đặt được chỗ '
//             },
//             {
//                 id: '1.5', customer: 'Mai Hoàng Tâm', rating: 4, content: ' Đang stress tìm chỗ mà đặt được chỗ ưng ghê'
//             },
//         ]
//     },
//     {
//         id: 'PLO5', name: "Mai Hoàng Tâm", phone: '0872812111', NameOfParkingLot: 'Bãi Hoàng Tâm', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', contractTerm: '1 năm', contractClosingTime: '30/12/2023', realtime: { totalNumber: '1', totalMorning: '0', totalEvening: '2', overNight: '1', revenue: '12k' }, images: [
//             { id: 1, img: '../image/anh.png' },
//             { id: 2, img: '../image/anh.png' },
//             { id: 3, img: '../image/anh.png' },
//             { id: 4, img: '../image/anh.png' },
//         ], rating: 4, locationMap: { latitude: '10.889706636010411', longitude: '106.79495520906106' }, status: 'Dừng hoạt động', morningFee: '3.000VNĐ', eveningFee: '4.000VNĐ', overNightFee: '12.000VNĐ', feedback: [
//             {
//                 id: '1.1', customer: 'Mai Hoàng Tâm', rating: 1, content: ' Đang stress'
//             },
//             {
//                 id: '1.2', customer: 'Mai Hoàng Tâm', rating: 2, content: ' Đang stress tìm '
//             },
//             {
//                 id: '1.3', customer: 'Mai Hoàng Tâm', rating: 3, content: ' Đang stress tìm chỗ '
//             },
//             {
//                 id: '1.4', customer: 'Mai Hoàng Tâm', rating: 5, content: ' Đang stress tìm chỗ mà đặt được chỗ '
//             },
//             {
//                 id: '1.5', customer: 'Mai Hoàng Tâm', rating: 4, content: ' Đang stress tìm chỗ mà đặt được chỗ ưng ghê'
//             },
//         ]
//     },

// ]


export default function DetailPLO() {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth)
    const plo = useSelector((state) => state.plo.detailPLO)

    useEffect(() => {
        getDetailPLO(id, dispatch, user?.login?.accessToken)
        if (plo?.plo?.status === 200) {
            setItem(plo?.plo.data)
        } else {
            setItem([])
        }
    }, []);

    //Feedback pagination
    const [page, setPage] = useState(1);
    const [rowPerPage, setRowPerPage] = useState(5);

    useEffect(() => {
        console.log(page, '+', rowPerPage);

    }, [page, rowPerPage])

    // gg map
    const openGoogleMaps = () => {
        if (item.latitude && item.longtitude) {
            // Tạo URL Google Maps với kinh độ và vĩ độ từ item.locationMap
            const googleMapsUrl = `https://www.google.com/maps?q=${item.latitude},${item.longtitude}`;

            // Mở Google Maps trong một tab mới
            window.open(googleMapsUrl, '_blank');
        }
    };

    const contractLink = () => {
        if (item.contractLink) {
            window.open(item.contractLink, '_blank');
        }
    };






    return (
        <>
            {plo?.isFetching ?
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
                        <Link underline="hover" key="1" color="inherit" to="/PLO" style={{ textDecoration: 'none', color: themes.palette.primary, fontWeight: 'bold' }}>
                            Danh sách chủ bãi xe
                        </Link>,
                        <Typography key="3" color="text.primary" fontWeight={'bold'}>
                            {item.fullName}
                        </Typography>
                    </Breadcrumbs>

                    {/* detail PLO */}
                    <Grid container px={'20px'} spacing={1}>
                        <Grid item xs={6}>
                            <Stack direction={'column'} spacing={1.5}>
                                <Typography variant='h4' fontWeight={'bold'}> Chi tiết chủ bãi xe</Typography>
                                <Typography variant='h5' fontWeight={'bold'}>Tên: {item.fullName}</Typography>
                                <Typography variant='h6'>Số điện thoại: {item.phoneNumber}</Typography>
                                {item.email ?
                                    <Typography variant='h6'>Email: {item.email}</Typography>
                                    : <></>}
                                {/* <Typography variant='h6'>Thời hạn hợp đồng : {item.contractTerm}</Typography> */}
                                <Typography variant='h6'>Thời gian kết thúc: {item.contractDuration}</Typography>
                                <Box pt={'20px'}>
                                    <Button variant='contained' sx={{ p: '15px', width: '300px', backgroundColor: themes.backgroundColor }} onClick={contractLink}>
                                        Xem hợp đồng
                                    </Button>
                                </Box>
                                {/* realtime */}
                                <Box>
                                    <Box display={'flex'} justifyContent={'space-around'} mt={'100px'}>

                                        <Paper elevation={3} square={false} sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium, width: '22%', height: '100px' }}>
                                            <Typography variant='h5'>Chiều dài (m)</Typography>
                                            <Typography variant='h4' fontWeight={'bold'} mt={'20px'}>{item.width}</Typography>
                                        </Paper>


                                        <Paper elevation={3} square={false} sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium, width: '22%', height: '100px' }}>
                                            <Typography variant='h5'>Chiều rộng (m)</Typography>
                                            <Typography variant='h4' fontWeight={'bold'} mt={'20px'}>{item.length}</Typography>
                                        </Paper>

                                        <Paper elevation={3} square={false} sx={{ p: '20px', textAlign: 'center', backgroundColor: themes.palette.grey.medium, width: '22%', height: '100px' }}>
                                            <Typography variant='h5'>Số chỗ</Typography>
                                            <Typography variant='h4' fontWeight={'bold'} mt={'20px'}>{item.slot}</Typography>
                                        </Paper>
                                    </Box>
                                </Box>
                            </Stack>
                        </Grid>
                        {/* Parking Area */}
                        <Grid item xs={1} />
                        <Grid item xs={5}>
                            <Stack direction={'column'} spacing={1.5}>
                                <Typography variant='h4' fontWeight={'bold'}> Thông tin bãi xe </Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography variant='h5' mr='10px' fontWeight={'bold'}>{item.parkingName}</Typography>
                                    <Rating props={item.star} />
                                </Box>
                                <Typography variant='h6'>Địa chỉ: {item.address}</Typography>
                                <Box display={'flex'}>
                                    <PersonPinCircleIcon fontSize='large' />
                                    <Button variant="text" color="primary" onClick={openGoogleMaps}>
                                        <Typography variant='h6'>
                                            {item.latitude}, {item.longtitude}
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
                                        <Typography> {item.overNightFee}</Typography>
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
                            {item.images ? (
                                item.images.map((image) => (
                                    <img key={image.id} src={`${image.img}`} style={{ margin: '10px 30px 10px 0px' }} />
                                ))
                            ) : (
                                // Hiển thị một thông báo hoặc phản hồi khác nếu item.images là null hoặc undefined
                                <Typography variant='h6'>Không có hình ảnh</Typography>
                            )}
                        </Box>
                    </Box>
                    <Box px={'20px'}>
                        <Typography variant='h4' fontWeight={'bold'}> Phản hồi và đánh giá</Typography>

                        {/* {item.feedback.map((item) => (
                            <Box key={item.id} sx={{ backgroundColor: themes.palette.grey.light, borderRadius: '10px', p: '20px', mt: '20px' }} >
                                <Box display={'flex'} flexDirection={'row'}>
                                    <Typography variant='h6' mr={'10px'} fontWeight={'bold'}>{item.customer} </Typography>
                                    <Rating props={item.rating} />
                                </Box>
                                <Box display={'flex'} flexDirection={'row'}>
                                    <Typography variant='h6' mr={'10px'}>Nội dung:</Typography>
                                    <Typography variant='h6' color={themes.palette.grey.dark}>{item.content}</Typography>
                                </Box>
                            </Box>
                        ))} */}
                        <PaginationCustom page={page} setPage={setPage} rowPerPage={rowPerPage} setRowPerPage={setRowPerPage} totalPage={10} />
                    </Box>
                </Stack>
            }
        </>
    )
}
