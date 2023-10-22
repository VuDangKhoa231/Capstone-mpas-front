import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/vi';
import React, { useEffect, useState } from 'react';
import themes from '../../theme/themes';
import dayjs from 'dayjs';
import Chart from 'react-google-charts';
import { getDashboardPLO, getDashboardPLOParking, getDashboardPLOTop5ParkingRevenue } from '../../api/dashboard';
import { useSelector } from 'react-redux';



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
        id: 1, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: 25000000
    },
    {
        id: 2, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: 22000000
    },
    {
        id: 3, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: 19000000
    },
    {
        id: 4, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: 10000000
    },
    {
        id: 5, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: 9000000
    },
]

export default function DashboardPLO({dispatch, accessToken}) {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const dashboardPLOParking = useSelector((state) => state.dashboard.ploParking)
    const dashboardPLOParkingRevenue = useSelector((state) => state.dashboard.ploParkingRevenue)
    console.log(dashboardPLOParking);
    console.log('ok nè', dashboardPLOParkingRevenue);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    //chart
    const dataChart = [
        [
            { type: 'string', label: 'Tuần' },
            { type: 'number', label: 'Tổng lượt đăng ký' },
        ],
        ["Tuần 1", 19],
        ["Tuần 2", 8],
        ["Tuần 3", 3],
        ["Tuần 4", 9],
    ];
    
    const dataMax = Math.max(...dataChart.slice(1).map(row => row[1]));
    const vAxisMax = dataMax + 5;

    const options = {
        title: ` Sơ đồ lượng đăng ký bãi đỗ  tháng ${selectedDate.format('MM/YYYY')}`,
        titleTextStyle: {
            fontSize: 30, 
        },
        hAxis: { title: `Các tuần tháng ${selectedDate.format('MM/YYYY')}`,titleTextStyle: { fontSize: 20} },
        vAxis: { title: "Số lượng người đăng ký" ,    format: '0',viewWindow: { min: 0, max: vAxisMax }, titleTextStyle: { fontSize: 20}},
        bar: { groupWidth: '20%' },
        legend: 'none'
    };

    useEffect(() => {
        const data = {
            month: selectedDate.get('month') + 1,
            year: selectedDate.get('year')
        }
     getDashboardPLOParking(data, dispatch, accessToken )
     getDashboardPLOTop5ParkingRevenue(data, dispatch, accessToken)
    }, [selectedDate])

    return (
        <>
            <Typography variant='h4' sx={{ fontWeight: 'bold', m: '50px 0px' }}>Chủ bãi đỗ</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                    label="Tháng"
                    views={['month', 'year']}
                    onChange={handleDateChange}
                    value={selectedDate}
                />
            </LocalizationProvider>
             
            <Chart
                width='100%'
                height={'800px'}
                chartType="ColumnChart"
                data={dataChart}
                options={options}
                loader={<div>Loading Chart...</div>}
            />

            <Grid container spacing={3} mt={'3px'} mb={'10px'} >
                <Grid item xs={6}>
                    <Paper elevation={6} sx={{ borderRadius: '10px', p: '20px' }} >
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Top 5 most booked parking areas</Typography>
                        {dashboardPLOParking?.data?.map((item, index) => (
                            <Grid container key={index} sx={{ backgroundColor: themes.palette.grey.light, p: '5px 10px', borderRadius: '10px', mt: '10px', ':hover': { backgroundColor: themes.palette.red.light } }}>
                                <Grid item xs={6} display={'flex'}>
                                    <Typography variant='h6' mr={'20px'}>{index + 1}</Typography>
                                    <Typography variant='h6'>{item.parkingName}</Typography>
                                </Grid>
                                <Grid item xs={5} display={'flex'} alignItems={'center'}>
                                    <AccountCircleIcon fontSize='medium' />
                                    <Typography variant='h6' ml={'5px'}> {item.fullName}</Typography>
                                </Grid>
                                <Grid item xs={1} display={'flex'} alignItems={'center'}>
                                    <WorkspacePremiumIcon fontSize='medium' />
                                    <Typography variant='h6' ml={'5px'}> {item.total}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                        {dashboardPLOParking?.data?.length === 0 &&
                            <Stack justifyContent={'center'} p={'20px'} textAlign={'center'}>
                                <img src='../image/no-results.png' style={{ width: '27%' }} />
                                <Typography variant='h5'>NOT FOUND DATA!</Typography>
                            </Stack>
                        }
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={6} sx={{ borderRadius: '10px', p: '20px' }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Top 5 parking lots with the highest revenue</Typography>
                        {dashboardPLOParkingRevenue?.data?.map((item, index) => (
                            <Grid container key={index} display={'flex'} justifyContent={'space-between'} sx={{ backgroundColor: themes.palette.grey.light, p: '5px 10px', borderRadius: '10px', mt: '10px', ':hover': { backgroundColor: themes.palette.red.light } }}>
                                <Grid item xs={5} display={'flex'} sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                                    <Typography variant='h6' mr={'20px'}>{index + 1}</Typography>
                                    <Typography variant='h6'>{item.parkingName}</Typography>
                                </Grid>
                                <Grid item xs={4} display={'flex'} alignItems={'center'} sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                                    <AccountCircleIcon fontSize='medium' />
                                    <Typography variant='h6' ml={'5px'}> {item.fullName}</Typography>
                                </Grid>
                                <Grid item xs={3} display={'flex'} alignItems={'center'} sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                                    <LocalAtmIcon fontSize='medium' />
                                    <Typography variant='h6' ml={'5px'}> {item.revenue}VNĐ</Typography>
                                </Grid>
                            </Grid>
                        ))}
                        {dashboardPLOParkingRevenue?.data?.length === 0 &&
                            <Stack justifyContent={'center'} p={'20px'} alignItems={'center'}>
                                <img src='../image/no-results.png' style={{ width: '27%' }} />
                                <Typography variant='h5'>NOT FOUND DATA!</Typography>
                            </Stack>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
