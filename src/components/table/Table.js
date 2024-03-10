import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
  { id: 4, col1: "Hello", col2: "World" },
  { id: 5, col1: "DataGridPro", col2: "is Awesome" },
  { id: 6, col1: "MUI", col2: "is Amazing" },
  { id: 7, col1: "Hello", col2: "World" },
  { id: 8, col1: "DataGridPro", col2: "is Awesome" },
  { id: 9, col1: "MUI", col2: "is Amazing" },
  { id: 10, col1: "Hello", col2: "World" },
  { id: 11, col1: "DataGridPro", col2: "is Awesome" },
  { id: 12, col1: "MUI", col2: "is Amazing" },
  { id: 13, col1: "Hello", col2: "World" },
  { id: 14, col1: "DataGridPro", col2: "is Awesome" },
  { id: 15, col1: "MUI", col2: "is Amazing" },
  { id: 16, col1: "Hello", col2: "World" },
  { id: 17, col1: "DataGridPro", col2: "is Awesome" },
  { id: 18, col1: "MUI", col2: "is Amazing" },
  { id: 19, col1: "Hello", col2: "World" },
  { id: 20, col1: "DataGridPro", col2: "is Awesome" },
  { id: 21, col1: "MUI", col2: "is Amazing" },
  { id: 22, col1: "Hello", col2: "World" },
  { id: 23, col1: "DataGridPro", col2: "is Awesome" },
  { id: 24, col1: "MUI", col2: "is Amazing" },
  { id: 25, col1: "Hello", col2: "World" },
  { id: 26, col1: "DataGridPro", col2: "is Awesome" },
  { id: 27, col1: "MUI", col2: "is Amazing" },
  { id: 28, col1: "Hello", col2: "World" },
  { id: 29, col1: "DataGridPro", col2: "is Awesome" },
  { id: 30, col1: "MUI", col2: "is Amazing" },
];

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "col1", headerName: "Column 1", width: 200 },
  { field: "col2", headerName: "Column 2", width: 200 },
];

const initialState = {
  sorting: {
    sortModel: [{ field: "id", sort: "desc" }],
  },
};
const Table = () => {
  return (
    <Box m={4}>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          initialState={initialState}
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </div>
    </Box>
  );
};

export default Table;
