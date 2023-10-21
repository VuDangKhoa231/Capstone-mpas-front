import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import PhoneIcon from '@mui/icons-material/Phone';
import themes from '../../theme/themes';
import Chart from 'react-google-charts';


const data = [
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


const dataOrigin = [
    {
        fullname: 'Tuần 1', total: 19
    },
    {
        fullname: 'Tuần 2', total: 8
    },
    {
        fullname: 'Tuần 3', total: 3
    },
    {
        fullname: 'Tuần 4', total: 9
    },
]

const dataChart = dataOrigin.map(item => [item.fullname, item.total]);

dataChart.unshift([
    { type: 'string', label: 'Tuần' },
    { type: 'number', label: 'Tổng lượt đăng ký' },
]);


const dataMax = Math.max(...dataChart.slice(1).map(row => row[1]));
const vAxisMax = dataMax + 5;

export default function DashboardCustom() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const options = {
        title: ` Sơ đồ lượng khách hàng đăng ký tháng ${selectedDate.format('MM/YYYY')}`,
        titleTextStyle: {
            fontSize: 30,
        },
        hAxis: { title: `Các tuần tháng ${selectedDate.format('MM/YYYY')}`, titleTextStyle: { fontSize: 20 } },
        vAxis: { title: "Số lượng người đăng ký", format: '0', viewWindow: { min: 0, max: vAxisMax }, titleTextStyle: { fontSize: 20 } },
        bar: { groupWidth: '20%' },
        legend: 'none'
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        const date = {
            month: selectedDate.get('month') + 1,
            year: selectedDate.get('year')
        }

     
    }, [selectedDate])

    return (
        <> 
            <Typography variant='h4' sx={{ fontWeight: 'bold', m: '50px 0px 20px 0px' }}>Khách hàng</Typography>
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

            <Box m={'50px'} display={'flex'} justifyContent={'center'}>
                <Paper elevation={6} sx={{ borderRadius: '10px', p: '20px', width: '70%' }}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Top 5 khách hàng có nhiều lượt đặt chỗ nhiều nhất {selectedDate.format('MM/YYYY')}</Typography>
                    </Box>
                    {data.map((item, index) => (
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
                    {data.length === 0 &&
                        <Stack p={'20px'} alignItems={'center'}>
                            <img src='../image/no-results.png' style={{ width: '27%' }} />
                            <Typography variant='h5'>NOT FOUND DATA!</Typography>
                        </Stack>
                    }
                </Paper>
            </Box>
        </>
    )
}
