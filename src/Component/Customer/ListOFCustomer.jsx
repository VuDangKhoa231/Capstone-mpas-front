import { Box, Button, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

import { useGridApiRef } from '@mui/x-data-grid'
import ChipCustom from '../../Layout/ChipCustom'
import SearchBar from '../../Layout/SearchBar'
import TableCustom from '../../Layout/TableCustom'
import themes from '../../theme/themes'
import PaginationCustom from '../../Layout/PaginationCustom'
import { getCusList } from '../../api/customer'
import { useDispatch, useSelector } from 'react-redux'

// const data = [
//   {
//     id: 1, fullName: "Mai Hoàng Tâm 1", phoneNumber: '0872812111', registrationDate: '02/12/2023', totalNumber: 2, status: 'Online',
//   }, {
//     id: 2, fullName: "Mai Hoàng Tâm 2", phoneNumber: '0872812112', registrationDate: '02/13/2023', totalNumber: 3, status: 'Offline',
//   }, {
//     id: 3, fullName: "Mai Hoàng Tâm 3", phoneNumber: '0872812113', registrationDate: '02/14/2023', totalNumber: 2, status: 'Online',
//   }, {
//     id: 4, fullName: "Mai Hoàng Tâm 4", phoneNumber: '0872812114', registrationDate: '02/15/2023', totalNumber: 5, status: 'Online',
//   }, {
//     id: 5, fullName: "Mai Hoàng Tâm 5", phoneNumber: '0872812115', registrationDate: '02/16/2023', totalNumber: 2, status: 'Offline',
//   }, {
//     id: 6, fullName: "Mai Hoàng Tâm 6", phoneNumber: '0872812116', registrationDate: '04/12/2023', totalNumber: 4, status: 'Online',
//   }, {
//     id: 7, fullName: "Mai Hoàng Tâm 7", phoneNumber: '0872812117', registrationDate: '04/11/2023', totalNumber: 2, status: 'Online',
//   }, {
//     id: 8, fullName: "Mai Hoàng Tâm 8", phoneNumber: '0872812118', registrationDate: '04/13/2023', totalNumber: 5, status: 'Offline',
//   }, {
//     id: 9, fullName: "Mai Hoàng Tâm 9", phoneNumber: '0872812119', registrationDate: '12/12/2022', totalNumber: 2, status: 'Online',
//   }, {
//     id: 10, fullName: "Mai Hoàng Tâm 10", phoneNumber: '0872812110', registrationDate: '12/13/2022', totalNumber: 10, status: 'Online',
//   }, {
//     id: 11, fullName: "Mai Hoàng Tâm 11", phoneNumber: '0872812111', registrationDate: '02/12/2022', totalNumber: 2, status: 'Offline',
//   }, {
//     id: 12, fullName: "Mai Hoàng Tâm 12", phoneNumber: '0872812111', registrationDate: '02/12/2022', totalNumber: 2, status: 'Online',
//   },

// ]

const CustomColumnTitle = ({ title }) => {
  return (
    <Typography variant="h5" fontWeight="bold">
      {title}
    </Typography>
  );
};


const title = [
  { field: 'id', headerName: <CustomColumnTitle title={"ID"} />, width: 100, hideable: false },
  { field: 'fullName', headerName: <Typography variant='h5' fontWeight={'bold'}>Tên</Typography>, width: 415, hideable: false },
  { field: 'phoneNumber', headerName: <Typography variant='h5' fontWeight={'bold'}>Số điện thoại</Typography>, width: 310, headerAlign: 'center', align: 'center' },
  {
    field: 'registrationDate', headerName: <Typography variant='h5' fontWeight={'bold'}>Ngày đăng ký</Typography>, type: 'Date', width: 310, headerAlign: 'center', align: 'center', valueFormatter: (params) => {
      const date = new Date(params.value);
      return date.toLocaleDateString('en-GB');
    },
    sortComparator: (v1, v2, cellParams1, cellParams2) => {
      const date1 = new Date(v1);
      const date2 = new Date(v2);
      return date1.getTime() - date2.getTime();
    },
  },
  { field: 'totalNumber', headerName: <Typography variant='h5' fontWeight={'bold'}>Số xe</Typography>, type: 'number', width: 250, headerAlign: 'center', align: 'center' },
  {
    field: 'status', headerName: <Typography variant='h5' fontWeight={'bold'} >Trạng thái</Typography>, type: '', width: 190, headerAlign: 'center', align: 'center', renderCell: (params) => {
      const status = params.row.status;
      let label, variant, backgroundColor, color;
      if (status === 'Online') {
        label = status;
        variant = 'filled';
        color = '#00cc66';
      } else {
        label = status;
        variant = 'filled';
        color = '#e74c3c';
      }

      return (
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
          <ChipCustom label={label} variant={variant} color={color} />
        </Box>
      );
    },
  },
];


export default function ListOFCustomer() {
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState('');

  const user = useSelector((state) => state.auth)
  const customer = useSelector((state) => state.customer)
  const dispatch = useDispatch();



  useEffect(() => {
    const data = {
      pageNum: rowPerPageChanged ? 1 : page,
      pageSize: rowPerPage,
      searchValue: searchValue
    }
    getCusList(data, dispatch, user?.login?.accessToken);
  }, [page, rowPerPage, searchValue])
  
  const rowPerPageChanged = useRef(false);
  useEffect(() => {
      if (rowPerPageChanged.current) {
          rowPerPageChanged.current = false;
      } else {
          rowPerPageChanged.current = true;
      }
  }, [rowPerPage]);

  return (
    <>
      <Stack direction='column' p='10px' spacing={5}>
        {/* Header */}
        <Typography variant='h2'>Danh sách khách hàng</Typography>

        <Box display={'flex'}>
          <SearchBar setDebounceSearchValue={setSearchValue} />
          <Button sx={{ ml: '26px', px: '50px', backgroundColor: themes.palette.grey.light, color: 'black' }} onClick={() => setSearchValue("")}> <Typography variant='body1' textTransform={'none'}> Tất cả</Typography></Button>
        </Box>
        {/* Content */}
        {customer?.customerList?.isFetching ? (
          <Box sx={{ display: 'flex', width: '100%', height: '80vh', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <TableCustom columns={title} rows={customer?.customerList?.customers?.data?.content} m={'0px 15px 0px 0px'} fontSize={'25px'} height={'1000px'} rowHeight={80} sizeOption={[5, 10, 15]} defaultPageSize={5} page={page} setPage={setPage} rowPerPage={rowPerPage} setRowPerPage={setRowPerPage} totalPage={customer?.customerList?.customers?.data?.totalPages} />
          </Box>
        )}
      </Stack >
    </>

  )
}

