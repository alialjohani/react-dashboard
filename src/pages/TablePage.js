import React from "react";
import { useGetGeneralDataQuery } from "../redux/slices/apiSlice";
import { Box } from "@mui/material";
import Table from "../components/table/Table";

const TablePage = () => {
  const { data, error, isLoading } = useGetGeneralDataQuery({
    startdatetime: "01/05/2023 20:00",
    enddatetime: "31/05/2023 04:00",
    agents: "*",
  });

  return (
    <Box mt={2} sx={{ flexGrow: 1 }}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Table rows={data.success} />
      ) : null}
    </Box>
  );
};

export default TablePage;
