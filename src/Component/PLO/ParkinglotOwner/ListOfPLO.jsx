import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchBar from '../../../Layout/SearchBar'

import { useGridApiRef } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ChipCustom from '../../../Layout/ChipCustom'
import TableCustom from '../../../Layout/TableCustom'

import themes from '../../../theme/themes'

const data = [
  {
    id: "PLO1", fullName: "Mai Hoàng Tâm", phoneNumber: '0872812111', parkingName: 'Bãi Hoàng Tâm', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', status: 'Đang hoạt động',
  },
  {
    id: "PLO2", fullName: "Mai Hoàng Tâm", phoneNumber: '0872812111', parkingName: 'Bãi Hoàng Tâm', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', status: 'Đang hoạt động',
  },
  {
    id: "PLO3", fullName: "Mai Hoàng Tâm", phoneNumber: '0872812111', parkingName: 'Bãi Hoàng Tâm', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', status: 'Dừng hoạt động',
  },
  {
    id: "PLO4", fullName: "Mai Hoàng Tâm", phoneNumber: '0872812111', parkingName: 'Bãi Hoàng Tâm', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', status: 'Dừng hoạt động',
  },
  {
    id: "PLO5", fullName: "Mai Hoàng Tâm", phoneNumber: '0872812111', parkingName: 'Bãi Hoàng Tâm', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', status: 'Dừng hoạt động',
  },
  
]


export default function ListOfPLO() {
  const [page, setPage] = useState(1)
  const [rowPerPage, setRowPerPage] = useState(5);
  const [selectTab, setSelectTab] = useState(0);
  const user = useSelector((state) => state.auth)
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  

  const title = [
    // { field: 'count', headerName: <Typography variant='h5' fontWeight={'bold'}>ID</Typography>, width: 60, hideable: false, valueGetter: (params) => params.rowIndex + 1, },
    { field: 'fullName', headerName: (<div> <Typography variant='h5' fontWeight={'bold'}> Tên  </Typography> </div>), width: 300, hideable: false, },
    { field: 'phoneNumber', headerName: <Typography variant='h5' fontWeight={'bold'}>Số điện thoại</Typography>, width: 240,headerAlign: 'center', align: 'center' },
    { field: 'parkingName', headerName: (<div> <Typography variant='h5' fontWeight={'bold'}>Tên bãi đỗ</Typography> </div>), width: 300 },
    {
      field: 'status', headerName: <Typography variant='h5' fontWeight={'bold'} >Trạng thái</Typography>, headerAlign: 'center', align: 'center', width: 200, renderCell: (params) => {
        const status = params.row.status;
        let label, variant, color;
        if (status === 'Đang hoạt động') {
          label = status;
          variant = 'filled';
          color = 'success';
        } else {
          label = status;
          variant = 'filled';
          color = 'error';
        }

        return (
          <Box width={'100%'} display={'flex'} justifyContent={'center'}>
            <ChipCustom label={label} variant={variant} color={color} />
          </Box>
        );
      },
    },
    {
      field: 'address', headerName: <Typography variant='h5' fontWeight={'bold'}>Địa chỉ bãi xe</Typography>, headerAlign: 'center' ,width: 340, renderCell: (params) => (
        <div style={{ whiteSpace: 'normal', wordWrap: 'break-word', textAlign: 'start' }}>
          {params.value}
        </div>
      ),
    },

    {
      field: 'id', headerName: <Typography variant='h5' fontWeight={'bold'}>Trạng thái</Typography>, type: 'actions',width: 190, getActions: (params) => [
        <Link to={`/PLO/${params.row.id}`}>
          <Typography sx={{ p: '10px 25px', borderRadius: '10px', backgroundColor: 'green', color: 'white',textDecoration: 'none' }}  >
            Xem
          </Typography>
        </Link>
      ],
    },
  ];

  const handleSelectTab = (e) => {
    setSelectTab(e)
    setPage(1)
    setRowPerPage(5)
  }


  useEffect(() => {
    console.log('Chạy này');
    console.log("Page", page , "Row" , rowPerPage, 'status:' ,selectTab);
    if (user.login?.accessToken) {
      // getPLOlist(data, dispatch, user?.login?.accessToken) 
    }
  }, [page, rowPerPage,selectTab])

  return (

    <Stack direction='column' p='10px' spacing={5}>
      <Typography variant='h2'>Danh sách khách hàng</Typography>
      <Box width={'35%'}>
        <SearchBar  searchValue={searchValue} setSearchValue={setSearchValue}/>
      </Box>

      <Box justifyContent={'stretch'} width={'100%'} display={'flex'}>
      <Button sx={{ mr: '30px', px: '50px', backgroundColor: selectTab === 0 ? themes.backgroundColor : themes.palette.grey.light, color: selectTab === 0 ? 'white' : 'black', border: '1px solid transparent', ':hover': { borderColor: themes.backgroundColor, color: themes.backgroundColor } }} onClick={() => handleSelectTab(0)}>
      <Typography variant='body1' textTransform={'none'}> Còn hợp đồng </Typography>
      </Button>                    
      <Button sx={{ mr: '30px', px: '50px', backgroundColor: selectTab === 1 ? themes.backgroundColor : themes.palette.grey.light, color: selectTab === 1 ? 'white' : 'black', border: '1px solid transparent', ':hover': { borderColor: themes.backgroundColor, color: themes.backgroundColor } }} onClick={() => handleSelectTab(1)}>
      <Typography variant='body1' textTransform={'none'}> Hết hạn hợp đồng </Typography>
         </Button>                    
      <Button sx={{ mr: '30px', px: '50px', backgroundColor: selectTab === 2 ? themes.backgroundColor : themes.palette.grey.light, color: selectTab === 2 ? 'white' : 'black', border: '1px solid transparent', ':hover': { borderColor: themes.backgroundColor, color: themes.backgroundColor } }} onClick={() => handleSelectTab(2)}> 
      <Typography variant='body1' textTransform={'none'}> Tất cả </Typography>
      </Button>                    

       
      </Box>
    
      <TableCustom rows={data} columns={title} m={'0px 15px 0px 0px'}   fontSize={'20px'} rowHeight={150} sizeOption={[3, 5, 10]} defaultPageSize={3} height={'400px'} page={page} rowPerPage={rowPerPage} setPage={setPage} setRowPerPage={setRowPerPage} totalPage={10}/>
    </Stack>

  )
}
