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
  return (
    <Box sx={{ width: '100%' }} textAlign={'center'} justifyContent={'center'}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{ fontSize, m}}
        pageSizeOptions={sizeOption}
        disableRowSelectionOnClick
        rowHeight={rowHeight}
        experimentalFeatures={{ columnGrouping: true }}
        components={{
          Footer: (props) => <FooterCustom {...props} page={page} rowPerPage={rowPerPage} setPage={setPage} setRowPerPage={setRowPerPage} totalPage={totalPage} />
        }}
        
      />
    </Box>
  );
}

export default TableCustom;