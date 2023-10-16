import { Box, Button, Grid, Popover, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchBar from '../../../Layout/SearchBar'
import themes from '../../../theme/themes'
import PropTypes from 'prop-types';
import DialogCustom from '../../../Layout/DialogCustom'
import { useGridApiRef } from '@mui/x-data-grid';
import TableCustom from '../../../Layout/TableCustom';
import { Link } from 'react-router-dom';
import Main from '../../Main';
const data = [
  {
    id: 1, parkingName: 'Khách sạn Romantic', fullName: 'Mai Hoàng Tâm', phoneNumber: '0357280619', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/02/2023', approveDate: '12/02/2023'
  },
  {
    id: 2, parkingName: 'Khách sạn Romantic', fullName: 'Mai Hoàng Tâm 2', phoneNumber: '0357280619', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/02/2023', approveDate: '12/02/2023'
  },
  {
    id: 3, parkingName: 'Khách sạn Romantic', fullName: 'Mai Hoàng Tâm 3', phoneNumber: '0357280619', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/02/2023', approveDate: '12/02/2023'
  },
  {
    id: 4, parkingName: 'Khách sạn Romantic', fullName: 'Mai Hoàng Tâm 4', phoneNumber: '0357280619', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/02/2023', approveDate: '12/02/2023'
  },
  {
    id: 5, parkingName: 'Khách sạn Romantic', fullName: 'Mai Hoàng Tâm 5', phoneNumber: '0357280619', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/02/2023', approveDate: '12/02/2023'
  },
  {
    id: 6, parkingName: 'Khách sạn Romantic', fullName: 'Mai Hoàng Tâm 6', phoneNumber: '0357280619', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/02/2023', approveDate: '12/02/2023'
  }
]

const title = [
  { field: 'id', headerName: <Typography variant='h5' fontWeight={'bold'}>ID</Typography>, width: 60, hideable: false },
  {
    field: 'parkingName',
    headerName: (
      <div>
        <Typography variant='h5' fontWeight={'bold'}>
          Tên
        </Typography>
      </div>
    ),
    width: 300,
    hideable: false,
  },
  {
    field: 'fullName',
    headerName: (
      <div>
        <Typography variant='h5' fontWeight={'bold'}>
          Chủ bãi
        </Typography>
      </div>
    ),
    width: 270,
    hideable: false,
  },
  { field: 'phoneNumber', headerName: <Typography variant='h5' fontWeight={'bold'}>Số điện thoại</Typography>, width: 310 },
  {
    field: 'registrationDate', headerName: <Typography variant='h5' fontWeight={'bold'}>Ngày gửi</Typography>, type: 'Date', width: 210, valueFormatter: (params) => {
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
    field: 'approval', headerName: <Typography variant='h5' fontWeight={'bold'}>Trạng thái</Typography>, type: 'actions', width: 190, getActions: (params) => [
      <Link to={`/Browse/${params.row.id}`} >
        <Typography sx={{ p: '10px 25px', borderRadius: '10px', backgroundColor: 'green', color: 'white', textDecoration: 'none' }}  >
          Xem
        </Typography>
      </Link>
    ],
  },
];

export function BrowseList(props) {


  const [page, setPage] = useState(1)
  const [rowPerPage, setRowPerPage] = useState(5)
  const [searchValue, setSearchValue] = useState("")


  return (
    <Stack mt={5} direction={'column'} spacing={3}>
      <Box display={'flex'}>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Button sx={{ ml: '26px', px: '50px', backgroundColor: themes.palette.grey.light, color: 'black' }}> <Typography variant='body1' textTransform={'none'}> Tất cả</Typography></Button>
      </Box>
      <Box mt={5}>
        <TableCustom rows={data} columns={title} m={'0px 15px 0px 0px'} page={page} setPage={setPage} rowPerPage={rowPerPage} setRowPerPage={setRowPerPage} totalPage={10} fontSize={'20px'} rowHeight={110} sizeOption={[5, 10, 15]} defaultPageSize={5} />
      </Box>
    </Stack>

  )
}






