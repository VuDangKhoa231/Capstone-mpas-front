import { Box, Typography } from '@mui/material'
import React from 'react'
import DashboardCustom from './Dashboard-Customer'
import DashboardPLO from './Dashboard-PLO'
import { useDispatch, useSelector } from 'react-redux'
import DashboardTotal from './DashboardTotal'

export default function Index() {
    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    return (
        <Box p={'10px'}>
            <Typography variant='h2'>Trang chủ</Typography >
            <DashboardTotal dispatch={dispatch} accessToken={user?.login.accessToken}/>
            <DashboardCustom dispatch={dispatch} accessToken={user?.login.accessToken}/>
            <DashboardPLO dispatch={dispatch} accessToken={user?.login.accessToken}/>
        </Box>
    )
}
