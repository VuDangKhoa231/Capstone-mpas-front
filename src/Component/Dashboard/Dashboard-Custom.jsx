import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import React, { useState } from 'react'
import dayjs from 'dayjs';
import PhoneIcon from '@mui/icons-material/Phone';
import themes from '../../theme/themes';


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


export default function DashboardCustom() {
    const [selectedDate, setSelectedDate] = useState(dayjs());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date.format('MM/YYYY'));
    };
    return (
        <>
            <Typography variant='h4' sx={{ fontWeight: 'bold', m: '50px 0px 20px 0px' }}>Customer</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                    label="Tháng"
                    views={['month', 'year']}
                    onChange={handleDateChange}
                    value={selectedDate}
                />
            </LocalizationProvider>
            <Box m={'50px'} display={'flex'} justifyContent={'center'}>
                <Paper elevation={6} sx={{ borderRadius: '10px', p: '20px', width: '70%' }}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Top 5 customers with the most reservations</Typography>
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
