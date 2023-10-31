import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import ChipCustom from '../../Layout/ChipCustom'


import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import themes from '../../theme/themes';
const data = [

  {
    "notiID": 4,
    "recipient_type": "CUSTOMER",
    "recipient_id": "CU0934328813",
    "sender_type": "PLO",
    "senderName": "Nguyen Thinh",
    "content": "to cus1",
    "created_at": "2023-10-18T10:11:49.000+00:00"
  },
  {
    "notiID": 5,
    "recipient_type": "CUSTOMER",
    "recipient_id": "CU0934328813",
    "sender_type": "Cus",
    "senderName": "Nguyen Thinh",
    "content": "to cus2",
    "created_at": "2023-10-18T10:11:49.000+00:00"
  },
  {
    "notiID": 6,
    "recipient_type": "CUSTOMER",
    "recipient_id": "CU0934328813",
    "sender_type": "PLO",
    "senderName": "Nguyen Thinh",
    "content": "to cus3",
    "created_at": "2023-10-18T10:11:49.000+00:00"
  }

]
export default function NotiCard({ item }) {
  const dayjs = require('dayjs');
  const formattedDate = dayjs(item.created_at).format("HH:mm:ss - DD/MM/YYYY");
  return (
    <Paper elevation={3} sx={{ my: '5px', p: '10px' }}>
      <Grid container spacing={0.5}>
        <Grid item xs={2}>
          {item.sender_type === "PLO" ?
            <>
              <img src='../../image/motorcycle-black.png' style={{ width: '35px' }} />
            </>
            :
            <>
              <PeopleAltIcon fontSize='large' />
            </>}
        </Grid>

        <Grid item xs={10}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant='h6' fontWeight={'bold'}>{item.senderName}</Typography>
            <ChipCustom label={`${item.sender_type === "PLO" ? "PLO" : "CUS"}`} backgroundColor={item.sender_type === "PLO" ? '#f39c12': '#00cc66'} />
          </Box>
        </Grid>
      </Grid>
      <Typography>{item.content}</Typography>
      <Typography textAlign={'end'} color={themes.palette.grey.dark}>{formattedDate}</Typography>

    </Paper>
  )
}
