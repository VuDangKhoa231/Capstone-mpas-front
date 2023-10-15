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
    id: 4, parkingName: 'Khách sạn Romantic', fullName: 'Mai Hoàng Tâm 3', phoneNumber: '0357280619', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/02/2023', approveDate: '12/02/2023'
  },
  {
    id: 5, parkingName: 'Khách sạn Romantic', fullName: 'Mai Hoàng Tâm 3', phoneNumber: '0357280619', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/02/2023', approveDate: '12/02/2023'
  },
  {
    id: 6, parkingName: 'Khách sạn Romantic', fullName: 'Mai Hoàng Tâm 3', phoneNumber: '0357280619', address: '681A Đ. Nguyễn Huệ, Bến Nghé, Quận 1, TP HCM', registrationDate: '12/02/2023', approveDate: '12/02/2023'
  }
]


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function TabBrowse(props) {
  //Dialog



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
        <Link >
          <Typography sx={{ p: '10px 25px', borderRadius: '10px', backgroundColor: 'green', color: 'white', textDecoration: 'none' }}  >
            Xem
          </Typography>
        </Link>
      ],
    },
  ];

  const apiRef = useGridApiRef();

  const [selectedItem, setSelectItem] = useState(null);
  return (
    <Box mt={5}>
      {/* <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Tên</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Chủ bãi</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Số điển thoại</Typography>
        </Grid>
        <Grid item xs={2.5}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Địa chỉ</Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Ngày gửi</Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Trạng thái</Typography>
        </Grid>
      </Grid>
      <Box mr={'20px'}>
        {props.value.map((item) => (
          <Grid container spacing={2} key={item.id} py={'50px'} borderBottom={`1px solid ${themes.palette.grey.light}`}>
            <Grid item xs={2.5}>
              <Typography variant='h5' sx={{ fontWeight: '16px' }}>{item.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h5' sx={{ fontWeight: '16px' }}>{item.owner}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h5' sx={{ fontWeight: '16px', textAlign: 'center' }}>{item.phone}</Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant='h5' sx={{ fontWeight: '16px', textAlign: 'left' }}>{item.location}</Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant='h5' sx={{ fontWeight: '16px', textAlign: 'center' }}>{item.registrationDate}</Typography>
            </Grid>
            <Grid item xs={1.5} textAlign={'center'}>
              <Button variant="contained" color="warning" sx={{ p: '10px 25px' }} onClick={() => {setSelectItem(item); handleClickOpen();}} >
                Phê duyệt
              </Button>
            </Grid>
          </Grid>
        ))}
      </Box> */}
      <TableCustom rows={data} columns={title} m={'0px 15px 0px 0px'} apiRef={apiRef} fontSize={'20px'} rowHeight={110} sizeOption={[5, 10, 15]} defaultPageSize={5} />
    </Box>
  )
}


function TabBrowseHistory(props) {
  return (
    <Box mt={5}>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Tên</Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Chủ bãi</Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Ngày gửi</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Số điện thoại</Typography>
        </Grid>
        <Grid item xs={2.5}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Địa chỉ</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Ngày duyệt</Typography>
        </Grid>
      </Grid>
      <Box mr={'20px'}>
        {data.map((item) => (
          <Grid container spacing={2} key={item.id} py={'50px'} borderBottom={`1px solid ${themes.palette.grey.light}`}>
            <Grid item xs={2.5}>
              <Typography variant='h5' sx={{ fontWeight: '16px' }}>{item.name}</Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant='h5' sx={{ fontWeight: '16px' }}>{item.owner}</Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant='h5' sx={{ fontWeight: '16px', textAlign: 'center' }}>{item.registrationDate}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h5' sx={{ fontWeight: '16px', textAlign: 'center' }}>{item.phone}</Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant='h5' sx={{ fontWeight: '16px', textAlign: 'left' }}>{item.location}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h5' sx={{ fontWeight: '16px', textAlign: 'center' }}>{item.approveDate}</Typography>
            </Grid>
          </Grid>
        ))}
      </Box>

    </Box>
  )
}


export default function Browse() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (

      <Stack direction='column' p='10px' spacing={5}>
        {/* Header */}
        <Typography variant='h2'>Hồ sơ chờ kiểm duyệt</Typography>
        <Grid container>
          <Grid item xs={4}>
            <SearchBar />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4}>

          </Grid>
        </Grid>
        {/* Content */}
        <Box width={'100%'}>
          <Grid container>
            <Grid item xs={3}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Chờ ngày phê duyệt" {...a11yProps(0)} />
                  <Tab label="Lịch sử phê duyệt" {...a11yProps(1)} />
                </Tabs>
              </Box>
            </Grid>
            <Grid item xs={7.5} />
            <Grid item xs={1.5}>
              <Button sx={{ ml: '26px', px: '50px', backgroundColor: themes.palette.grey.light, color: 'black' }}> <Typography variant='body1' textTransform={'none'}> Tất cả</Typography></Button>
            </Grid>
          </Grid>
          <CustomTabPanel value={value} index={0}>
            <TabBrowse value={data} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TabBrowseHistory />
          </CustomTabPanel>
        </Box>


      </Stack>

  )
}

