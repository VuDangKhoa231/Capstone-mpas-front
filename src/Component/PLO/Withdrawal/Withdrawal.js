import { Box, Button, Chip, Divider, Grid, Popover, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchBar from '../../../Layout/SearchBar'

import themes from '../../../theme/themes'
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DialogCustom from '../../../Layout/DialogCustom'
import TableCustom from '../../../Layout/TableCustom';
import ChipCustom from '../../../Layout/ChipCustom';
import { useGridApiRef } from '@mui/x-data-grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Main from '../../Main';
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, item) => {
    setSelectItem(item)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //Dialog
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpen = () => {
    console.log(selectedItem);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [selectedItem, setSelectItem] = useState(null);
  const [confirm, setConfirm] = useState(true)



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
      width: 300,
      hideable: false,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
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
      width: 270,
      hideable: false,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
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
      field: 'requestedAmount', headerName: <Typography variant='h5' fontWeight={'bold'} color={'red'}>Yêu cầu</Typography>, type: 'number', width: 170, valueFormatter: (params) => {
        const amount = params.value;
        return `${amount} VNĐ`;
      },
    },
    {
      field: 'balanceInTheAccount', headerName: <Typography variant='h5' fontWeight={'bold'} color={'red'}>Số dư</Typography>, type: 'number', width: 170, valueFormatter: (params) => {
        const amount = params.value;
        return `${amount} VNĐ`;
      },
    },
    {
      field: 'infor',
      headerName: <Typography variant='h5' fontWeight={'bold'}>Thông tin</Typography>,
      width: 200,
      disableSort: true,
      renderCell: (params) => (
        <div>
          {params.value.map((item) => (
            <div key={item.id} style={{ marginBottom: '8px' }}>
              <Typography variant='h6'>{item.bankNumber}</Typography>
              <Typography variant='h6' color={themes.palette.grey.dark} >{item.bankName}</Typography>
            </div>
          ))}
        </div>
      ),
    },
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
        <div>
          <Button
            variant="contained"
            aria-describedby={id}
            sx={{ p: '10px 25px', borderRadius: '10px', backgroundColor: themes.backgroundColor }}
            onClick={(event) => handleClick(event, params.row)}
          >
            Chờ phê duyệt
          </Button>
        </div>
      ],
    },
  ];

  const apiRef = useGridApiRef();

  return (
    <Box mt={5}>
      <TableCustom rows={data} columns={title} m={'0px 15px 0px 0px'} apiRef={apiRef} fontSize={'20px'} rowHeight={150} sizeOption={[3, 5, 10]} defaultPageSize={3} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableAutoFocus={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Stack direction={'column'} sx={{ backgroundColor: themes.backgroundColor }}>
          <Button onClick={() => { handleClickOpen(); setConfirm(true); handleClose(); }} >
            <Chip sx={{ width: '155px', justifyContent: 'start' }} color='success' icon={<CheckCircleIcon />} label='Chấp nhận' variant="outlined" />
          </Button>
          <Divider color={themes.palette.grey.light} />
          <Button onClick={() => { handleClickOpen(); setConfirm(false); handleClose(); }}>
            <Chip color='error' sx={{ width: '155px', justifyContent: 'start' }} icon={<CancelIcon />} label="Từ chối" variant="outlined" />
          </Button>
        </Stack>
      </Popover>
      <DialogCustom open={openDialog} handleClose={handleCloseDialog} status={2} confirm={confirm} data={selectedItem} />
    </Box>
  )
}


function TabBrowseHistory(props) {
  const apiRef = useGridApiRef();

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
      width: 320,
      hideable: false,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
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
      width: 320,
      hideable: false,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
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
      width: 230,
      disableSort: true,
      renderCell: (params) => (
        <div>
          {params.value.map((item) => (
            <div key={item.id} style={{ marginBottom: '8px' }}>
              <Typography variant='h6'>{item.bankNumber}</Typography>
              <Typography variant='h6' color={themes.palette.grey.dark} >{item.bankName}</Typography>
            </div>
          ))}
        </div>
      ),
    },
    {
      field: 'approveDate', headerName: <Typography variant='h5' fontWeight={'bold'}>Ngày duyệt</Typography>, type: 'Date', width: 220, valueFormatter: (params) => {
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
      field: 'registrationDate', headerName: <Typography variant='h5' fontWeight={'bold'}>Ngày đăng ký</Typography>, type: 'Date', width: 230, valueFormatter: (params) => {
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
      field: 'status', headerName: <Typography variant='h5' fontWeight={'bold'} >Trạng thái</Typography>, type: '', width: 200, renderCell: (params) => {
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
  return (
    <Box mt={5}>

      <TableCustom rows={data} columns={title} m={'0px 15px 0px 0px'} apiRef={apiRef} fontSize={'20px'} rowHeight={150} sizeOption={[3, 5, 10]} defaultPageSize={3} />
    </Box>
  )
}

export default function Withdrawal() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    
      <Stack direction='column' p='10px' spacing={4}>
        {/* Header */}
        <Typography variant='h2'>Yêu cầu rút tiền</Typography>
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
            <TabBrowse />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TabBrowseHistory />
          </CustomTabPanel>
        </Box>
      </Stack>
  
  )
}
