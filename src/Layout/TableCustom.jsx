import { Box, Pagination } from "@mui/material";
import { DataGrid, GridPagination, gridPageCountSelector, useGridApiContext, useGridSelector } from "@mui/x-data-grid";
import PaginationCustom from "./PaginationCustom";



function TableCustom({ rows, apiRef, columns, m, fontSize, rowHeight, sizeOption, height, page, totalPage, rowPerPage, setPage, setRowPerPage }) {


  return (
    <Box style={{ width: '100%' }}  textAlign={'center'}>
      <DataGrid
        rows={rows}
        apiRef={apiRef}
        columns={columns}
        sx={{ fontSize, m, minHeight: height }}
        pageSizeOptions={sizeOption}
        disableRowSelectionOnClick
        rowHeight={rowHeight}
        experimentalFeatures={{ columnGrouping: true }}
        pagination={false}
      />
      
      <PaginationCustom
        page={page}
        rowPerPage={rowPerPage}
        setPage={setPage}
        setRowRowPerPage={setRowPerPage}
        totalPage={totalPage}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}

export default TableCustom;