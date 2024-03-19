import * as React from "react";
import PropTypes from "prop-types";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
  { field: "surveyId", headerName: "Survey Id", width: 80 },
  { field: "surveyCallerId", headerName: "Phone Number", width: 150 },
  { field: "conversationLink", headerName: "Conversation Link", width: 200 },
  {
    field: "ServiceSatisfaction",
    headerName: "Service Satisfaction (out of 5)",
    width: 200,
  },
  {
    field: "AgentSatisfaction",
    headerName: "Agent Satisfaction (out of 5)",
    width: 200,
  },
  { field: "agentName", headerName: "Agent Name", width: 200 },
  {
    field: "createdDate",
    headerName: "Date/Time",
    width: 200,
    valueFormatter: ({ value }) =>
      value.replace("T", " ").replace(/.(\d{3})Z/, ""),
  },
];

const initialState = {
  sorting: {
    sortModel: [{ field: "surveyId", sort: "desc" }],
  },
};
const Table = ({ rows }) => {
  return (
    <Box m={4}>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          initialState={initialState}
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          getRowId={(row) => row.surveyId}
        />
      </div>
    </Box>
  );
};

Table.propTypes = {
  rows: PropTypes.array,
};

export default Table;
