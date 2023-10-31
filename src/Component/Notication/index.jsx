import { Drawer, Stack, Typography } from '@mui/material'
import React from 'react'
import NotiCard from './NotiCard'



const dataFake = [

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
        "sender_type": "CUS",
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
export default function Index({ openNoti, onClose , data}) {

    return (
        <Drawer anchor="right" open={openNoti} onClose={onClose}>
            <div style={{ width: 300, padding: 16 }}>
                <Typography variant='h4'>Thông báo</Typography>
                <Stack>
                    {data?.map((item,index) => (
                        <NotiCard key={index} item={item}/>
                    ))}
                </Stack>
            </div>
        </Drawer>
    )
}
