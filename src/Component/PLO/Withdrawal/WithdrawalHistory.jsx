import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useGridApiRef } from '@mui/x-data-grid';
import ChipCustom from '../../../Layout/ChipCustom';
import TableCustom from '../../../Layout/TableCustom';
import themes from '../../../theme/themes';
import SearchBar from '../../../Layout/SearchBar';
const data = [
    {
        id: 1, name: 'Khách sạn Romantic 1', owner: 'Mai Hoàng Tâm 1', requestedAmount: 1200000, balanceInTheAccount: 6000000, phone: '0357280619', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/02/2023', approveDate: '12/20/2023', status: 'Chấp nhận', infor: [
            {
                id: 1.1, bankName: 'BIV', bankNumber: '093023323233'
            },
            {
                id: 1.2, bankName: 'Momo', bankNumber: '093023323233'
            }
        ]
    },
    {
        id: 2, name: 'Khách sạn Romantic 2', owner: 'Mai Hoàng Tâm 2', requestedAmount: 1500000, balanceInTheAccount: 5000000, phone: '0357280619', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/12/2023', approveDate: '11/02/2023', status: 'từ chối', infor: [
            {
                id: 1.1, bankName: 'BIV', bankNumber: '093023323233'
            },
            {
                id: 1.2, bankName: 'Momo', bankNumber: '093023323233'
            }
        ]
    },
    {
        id: 3, name: 'Khách sạn Romantic 3', owner: 'Mai Hoàng Tâm 3', requestedAmount: 2000000, balanceInTheAccount: 6000000, phone: '0357280619', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '13/22/2023', approveDate: '12/02/2023', status: 'Chấp nhận', infor: [
            {
                id: 1.1, bankName: 'BIV', bankNumber: '093023323233'
            },
            {
                id: 1.2, bankName: 'Momo', bankNumber: '093023323233'
            }
        ]
    },
    {
        id: 4, name: 'Khách sạn Romantic 3', owner: 'Mai Hoàng Tâm 3', requestedAmount: 2000000, balanceInTheAccount: 6000000, phone: '0357280619', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/20/2023', approveDate: '12/02/2023', status: 'Chấp nhận', infor: [
            {
                id: 1.1, bankName: 'BIV', bankNumber: '093023323233'
            },
            {
                id: 1.2, bankName: 'Momo', bankNumber: '093023323233'
            }
        ]
    },
    {
        id: 5, name: 'Khách sạn Romantic 3', owner: 'Mai Hoàng Tâm 3', requestedAmount: 2000000, balanceInTheAccount: 6000000, phone: '0357280619', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/05/2023', approveDate: '12/02/2023', status: 'Chấp nhận', infor: [
            {
                id: 1.1, bankName: 'BIV', bankNumber: '093023323233'
            },
            {
                id: 1.2, bankName: 'Momo', bankNumber: '093023323233'
            }
        ]
    },
    {
        id: 6, name: 'Khách sạn Romantic 3', owner: 'Mai Hoàng Tâm 3', requestedAmount: 2000000, balanceInTheAccount: 6000000, phone: '0357280619', location: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/22/2023', approveDate: '12/02/2023', status: 'Chấp nhận', infor: [
            {
                id: 1.1, bankName: 'BIV', bankNumber: '093023323233'
            },
            {
                id: 1.2, bankName: 'Momo', bankNumber: '093023323233'
            }
        ]
    }
]


const title = [
    { field: 'id', headerName: <Typography variant='h5' fontWeight={'bold'}>ID</Typography>, width: 60, hideable: false },
    {
        field: 'owner_location',
        headerName: (
            <div>
                <Typography variant='h5' fontWeight={'bold'}>
                    Tên
                </Typography>
            </div>
        ),
        width: 335,
        hideable: false,
        renderCell: (params) => (
            <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' , textAlign: 'start'}}>
                <Typography variant='h6'>{params.row.name}</Typography>
                <Typography variant='body1' color={themes.palette.grey.dark}>{params.row.location}</Typography>
            </div>
        ),
        sortComparator: (v1, v2, cellParams1, cellParams2) => {
            if (cellParams1.row && cellParams1.row.name && cellParams2.row && cellParams2.row.name) {
                return cellParams1.row.name.localeCompare(cellParams2.row.name);
            }
            return 0;
        },
    },
    {
        field: 'name_phone',
        headerName: (
            <div>
                <Typography variant='h5' fontWeight={'bold'}>
                    Chủ bãi
                </Typography>
            </div>
        ),
        width: 335,
        hideable: false,
        renderCell: (params) => (
            <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', textAlign: 'start' }}>
                <Typography variant='h6'>{params.row.owner}</Typography>
                <Typography variant='body1' color={themes.palette.grey.dark}>{params.row.phone}</Typography>
            </div>
        ),
        sortComparator: (v1, v2, cellParams1, cellParams2) => {
            if (cellParams1.row && cellParams1.row.owner && cellParams2.row && cellParams2.row.owner) {
                return cellParams1.row.name.localeCompare(cellParams2.row.name);
            }
            return 0;
        },
    },
    {
        field: 'infor',
        headerName: <Typography variant='h5' fontWeight={'bold'}>Thông tin</Typography>,
        width: 190,
        headerAlign: 'center',
        disableSort: true,
        renderCell: (params) => (
            <div>
                {params.value.map((item) => (
                    <div key={item.id} style={{ marginBottom: '8px', textAlign: 'start' }}>
                        <Typography variant='h6'>{item.bankNumber}</Typography>
                        <Typography variant='h6' color={themes.palette.grey.dark} >{item.bankName}</Typography>
                    </div>
                ))}
            </div>
        ),
    },
    {
        field: 'approveDate', headerName: <Typography variant='h5' fontWeight={'bold'}>Ngày duyệt</Typography>, type: 'Date', headerAlign: 'center', align: 'center',width: 220, valueFormatter: (params) => {
            const date = new Date(params.value);
            return date.toLocaleDateString('en-GB');
        },
        sortComparator: (v1, v2, cellParams1, cellParams2) => {
            const date1 = new Date(v1);
            const date2 = new Date(v2);
            return date1.getTime() - date2.getTime();
        },
    },
    {
        field: 'registrationDate', headerName: <Typography variant='h5' fontWeight={'bold'}>Ngày đăng ký</Typography>, type: 'Date',headerAlign: 'center', align: 'center', width: 230, valueFormatter: (params) => {
            const date = new Date(params.value);
            return date.toLocaleDateString('en-GB');
        },
        sortComparator: (v1, v2, cellParams1, cellParams2) => {
            const date1 = new Date(v1);
            const date2 = new Date(v2);
            return date1.getTime() - date2.getTime();
        },
    },
    {
        field: 'status', headerName: <Typography variant='h5' fontWeight={'bold'} >Trạng thái</Typography>, type: '', width: 200, headerAlign: 'center', align: 'center',renderCell: (params) => {
            const status = params.row.status;
            let label, variant, color, icon;
            if (status === 'Chấp nhận') {
                label = status;
                icon = <CheckCircleOutlineIcon color='success' />;
                variant = 'outlined';
                color = 'success';
            } else {
                label = status;
                icon = <CancelOutlinedIcon color='error' />;
                variant = 'outlined';
                color = 'error';
            }

            return (
                <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                    <ChipCustom label={label} variant={variant} width={'120px'} color={color} icon={icon} />
                </Box>
            );
        },
    },
];

export default function WithdrawalHistory() {

    const apiRef = useGridApiRef();

    const [page, setPage] = useState(1);
    const [rowPerPage, setRowPerPage] = useState(5);

    const [searchValue, setSearchValue] = useState("");
   
    return (
        <Stack mt={5} direction={'column'} spacing={3}>
            <Box display={'flex'}>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Button sx={{ ml: '26px', px: '50px', backgroundColor: themes.palette.grey.light, color: 'black' }}> <Typography variant='body1' textTransform={'none'}> Tất cả</Typography></Button>
            </Box>
            <TableCustom rows={data} columns={title} m={'0px 15px 0px 0px'} height={'30px'} fontSize={'20px'} rowHeight={150} sizeOption={[3, 5, 10]} defaultPageSize={3} page={page} setPage={setPage} rowPerPage={rowPerPage} setRowPerPage={setRowPerPage}/>
        </Stack>
    )
}


