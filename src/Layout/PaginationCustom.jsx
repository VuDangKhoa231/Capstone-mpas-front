import { Box, FormControl, InputLabel, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material';
import React from 'react'
import themes from '../theme/themes';

export default function PaginationCustom({ totalPage, page, setPage, rowPerPage, setRowRowPerPage }) {

  const handleChangePagination = (event, value) => {
    setPage(value);
  };

  const handleChange = (event) => {
    setRowRowPerPage(event.target.value);
  };

  return (
    <Stack direction={'row'} spacing={3} mt={'50px'} alignItems={'center'}>
      <Typography variant='h6'>Số records mỗi hàng</Typography>
      <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rowPerPage}
          label="Age"
          onChange={handleChange}
          defaultValue={rowPerPage}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
      <Pagination size='large' color='primary' count={totalPage} page={page} onChange={handleChangePagination} showFirstButton  showLastButton/>
    </Stack>

  )
}
