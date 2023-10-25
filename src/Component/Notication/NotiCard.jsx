import { Box, Paper } from '@mui/material'
import React from 'react'

export default function NotiCard({item}) {
  return (
    <Paper elevation={3} sx={{my: '5px'}}>NotiCard {item.recipient_type}</Paper>
  )
}
