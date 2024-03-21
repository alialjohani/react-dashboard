import React from "react";
import { useGetGeneralDataQuery } from "../redux/slices/apiSlice";
import { Box } from "@mui/material";
import Table from "../components/table/Table";
import { useSelector } from "react-redux";

const TablePage = () => {
  const fromDatetime = useSelector((state) => state.filter.fromDatetime);
  const toDatetime = useSelector((state) => state.filter.toDatetime);
  const selectedAgent = useSelector((state) => state.filter.selectedAgent);
  let isContentReady = false;

  const { data, error, isLoading } = useGetGeneralDataQuery({
    startdatetime: fromDatetime,
    enddatetime: toDatetime,
    agents: selectedAgent,
  });

  if (
    !error &&
    data &&
    (data.length > 0 || Object.prototype.hasOwnProperty.call(data, "success"))
  ) {
    isContentReady = true;
  }
  return (
    <Box mt={2} sx={{ flexGrow: 1 }}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : isContentReady ? (
        <Table rows={data.success} />
      ) : null}
    </Box>
  );
};

export default TablePage;
