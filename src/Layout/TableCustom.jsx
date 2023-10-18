import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PaginationCustom from "./PaginationCustom";
import PropTypes from 'prop-types';




function FooterCustom({ page, rowPerPage, setPage, setRowPerPage, totalPage }) {
  return (
    <Box width={'100%'}  >
      <PaginationCustom page={page} setPage={setPage} rowPerPage={rowPerPage} setRowPerPage={setRowPerPage} totalPage={totalPage} />
    </Box>
  );
}

function TableCustom({ rows, columns, m, fontSize, rowHeight, sizeOption, page, totalPage, rowPerPage, setPage, setRowPerPage }) {
  console.log('check', rows);
  const data = rows || [];
  let dataWithId = [];
  if (data && data.length > 0) {
    dataWithId = data.map((record, index) => ({
      ...record,
      id: (page - 1) * rowPerPage + index + 1, 
    }));
  }
  console.log('checkDataa', data);
  console.log('check DatawwithID', dataWithId)
  console.log('check totalPage', totalPage)
  return (
    <Box sx={{ width: '100%' }} textAlign={'center'} justifyContent={'center'}>
      <DataGrid
        rows={dataWithId}
        columns={columns}
        sx={{
          fontSize, m, '.MuiDataGrid-overlayWrapper': {
            height: '400px', // Đặt chiều cao tại đây
            // Thêm bất kỳ thuộc tính CSS khác theo nhu cầu của bạn
          },
        }}
        pageSizeOptions={sizeOption}
        disableRowSelectionOnClick
        rowHeight={rowHeight}
        localeText={{ noRowsLabel: 'Không có thông tin' }}
        experimentalFeatures={{ columnGrouping: true }}
        components={{
          Footer: (props) => <FooterCustom {...props} page={page} rowPerPage={rowPerPage} setPage={setPage} setRowPerPage={setRowPerPage} totalPage={totalPage || 0} />
        }}
      />
    </Box>
  );
}

export default TableCustom;