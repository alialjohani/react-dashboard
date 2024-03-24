import React from "react";
import { useGetSpecificDataQuery } from "../redux/slices/apiSlice";
import { useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";
import Table from "../components/table/Table";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import Alert from "@mui/material/Alert";

const TablePage = () => {
  const fromDatetime = useSelector((state) => state.filter.fromDatetime);
  const toDatetime = useSelector((state) => state.filter.toDatetime);
  const selectedAgent = useSelector((state) => state.filter.selectedAgent);
  let isContentReady = false;
  let [searchParams] = useSearchParams();
  const primary = searchParams.get("primary");
  const primaryValue = searchParams.get("primaryValue");
  const secondary = searchParams.get("secondary");
  const secondaryValue = searchParams.get("secondaryValue");
  const { data, error, isLoading } = useGetSpecificDataQuery({
    startdatetime: fromDatetime,
    enddatetime: toDatetime,
    agents: selectedAgent,
    primary: primary,
    primaryvalue: primaryValue,
    secondry: secondary,
    secondryvalue: secondaryValue,
  });
  console.log("**** data *****: ", data);
  // const { data, error, isLoading } = useGetGeneralDataQuery({
  //   startdatetime: fromDatetime,
  //   enddatetime: toDatetime,
  //   agents: selectedAgent,
  // });

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
        <Alert severity="error" sx={{ marginTop: "-17px" }}>
          There was an error while fetching data from server. Please try again
          later.
        </Alert>
      ) : isLoading ? (
        <Loading />
      ) : isContentReady ? (
        <Table rows={data.success} />
      ) : null}
    </Box>
  );
};

export default TablePage;
