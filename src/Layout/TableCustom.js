import { Pagination } from "@mui/material";
import { DataGrid, GridPagination, gridPageCountSelector, useGridApiContext, useGridSelector } from "@mui/x-data-grid";

function TablePagination({ page, onPageChange, className }) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color="primary"
        className={className}
        count={pageCount}
        page={page + 1}
        showFirstButton
        showLastButton
        onChange={(event, newPage) => {
          onPageChange(event, newPage - 1);
        }}
      />
    );
  }
  
  function CustomPagination(props) {
    return <GridPagination  ActionsComponent={TablePagination} {...props} />;
  }
  
  function TableCustom({ rows, apiRef, columns,m,fontSize,rowHeight, sizeOption, defaultPageSize, height }) {
   
    
    return (
      <div style={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          apiRef={apiRef}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: defaultPageSize, minHeight: height },
            },
          }}
          sx={{fontSize, m, minHeight: height}}
          slots={{
            pagination: CustomPagination,
          }}
          pageSizeOptions={sizeOption}
          disableRowSelectionOnClick
          rowHeight={rowHeight}
          experimentalFeatures={{columnGrouping: true}}
         
          
        />
      </div>
    );
  }
  
  export default TableCustom;