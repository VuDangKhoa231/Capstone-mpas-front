import { Box, Button, CircularProgress, Grid, Popover, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../../../Layout/SearchBar'
import themes from '../../../theme/themes'
import PropTypes from 'prop-types';
import DialogCustom from '../../../Layout/DialogCustom'
import { useGridApiRef } from '@mui/x-data-grid';
import TableCustom from '../../../Layout/TableCustom';
import { Link } from 'react-router-dom';
import Main from '../../Main';
import { getBrowselist } from '../../../api/browse';
import { useDispatch, useSelector } from 'react-redux';


const title = [
  { field: 'id', headerName: <Typography variant='h5' fontWeight={'bold'}>ID</Typography>, width: 60, hideable: false },
  {
    field: 'parkingName',
    headerName: (
      <div>
        <Typography variant='h5' fontWeight={'bold'} >
          Tên bãi
        </Typography>
      </div>
    ),
    width: 400,
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
    width: 380,
    hideable: false,
  },
  { field: 'phoneNumber', headerName: <Typography variant='h5' fontWeight={'bold'}>Số điện thoại</Typography>, width: 310,headerAlign: 'center', align: 'center' },
  {
    field: 'registrationDate', headerName: <Typography variant='h5' fontWeight={'bold'}>Ngày gửi</Typography>, type: 'Date', width: 250, headerAlign: 'center', align: 'center',valueFormatter: (params) => {
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
    field: 'approval', headerName: <Typography variant='h5' fontWeight={'bold'}>Trạng thái</Typography>, type: 'actions', width: 180, getActions: (params) => [
      <Link to={`/Browse/${params.row.ploID}`} >
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

  const user = useSelector((state) => state.auth)
  const browseList = useSelector((state) => state.browse.browseList)
  console.log('list', browseList);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      searchValue: searchValue,
      pageNum: rowPerPageChanged ? 1 : page,
      pageSize: rowPerPage,
    }
    getBrowselist(data, dispatch, user?.login.accessToken)

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
    <Stack mt={5} direction={'column'} spacing={3}>
      <Box display={'flex'}>
        <SearchBar setDebounceSearchValue={setSearchValue} />
        <Button sx={{ ml: '26px', px: '50px', backgroundColor: themes.palette.grey.light, color: 'black' }}> <Typography variant='body1' textTransform={'none'}> Tất cả</Typography></Button>
      </Box>
      {browseList?.isFetching ? (
        <Box sx={{ display: 'flex', width: '100%', height: '50vh', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box mt={5}>
          <TableCustom rows={browseList?.list?.data?.content} columns={title} m={'0px 15px 0px 0px'} page={page} setPage={setPage} rowPerPage={rowPerPage} setRowPerPage={setRowPerPage} totalPage={browseList?.list?.data?.totalPages} fontSize={'20px'} rowHeight={110} sizeOption={[5, 10, 15]} defaultPageSize={5} />
        </Box>
      )}
    </Stack>

  )
}






