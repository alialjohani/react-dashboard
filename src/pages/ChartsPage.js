import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useGetGeneralDataQuery } from "../redux/slices/apiSlice";
import Pie from "../components/chart/Pie";
import Bar from "../components/chart/Bar";
import { reformatData } from "../utilities/reformatData";
import { useSelector, useDispatch } from "react-redux";
import { setAgents } from "../redux/slices/filterSlice";
// To count how many for the 'AgentSatisfaction' are rated: 1 out of 5, 2 out of 5, ..., 5 out of 5
// To count how many for the 'ServiceSatisfaction' are rated: 1 out of 5, 2 out of 5, ..., 5 out of 5
import ChartsLayout from "../components/ChartsLayout";
import Loading from "../components/Loading";
import Alert from "@mui/material/Alert";

const TITLES = ["Rate of Service Satisfaction", "Rate of Agent Satisfaction"];
const ChartsPage = () => {
  const dispatch = useDispatch();
  const fromDatetime = useSelector((state) => state.filter.fromDatetime);
  const toDatetime = useSelector((state) => state.filter.toDatetime);
  const selectedAgent = useSelector((state) => state.filter.selectedAgent);

  let isContentReady = false;
  // Using a query hook fetches data and returns query values
  const { data, error, isLoading } = useGetGeneralDataQuery({
    startdatetime: fromDatetime,
    enddatetime: toDatetime,
    agents: selectedAgent,
  });
  console.log("data >>> ", data);
  console.log("error >>> ", error);
  console.log("isLoading >>> ", isLoading);
  let serAgentSatisfactionOverall;
  let serServiceSatisfactionOverall;
  let serServiceSatisfaction;
  let serAgentSatisfaction;
  let generalLabels;
  let timeDataset;
  if (
    !error &&
    data &&
    (data.length > 0 ||
      (Object.prototype.hasOwnProperty.call(data, "success") &&
        data.success.length > 0))
  ) {
    const {
      seriesAgentSatisfactionOverall,
      seriesServiceSatisfactionOverall,
      seriesServiceSatisfaction,
      seriesAgentSatisfaction,
      labels,
      timeData,
    } = reformatData(data.success);
    serAgentSatisfactionOverall = seriesAgentSatisfactionOverall;
    serServiceSatisfactionOverall = seriesServiceSatisfactionOverall;
    serServiceSatisfaction = seriesServiceSatisfaction;
    serAgentSatisfaction = seriesAgentSatisfaction;
    generalLabels = labels;
    timeDataset = timeData;
    isContentReady = true;
  }

  useEffect(() => {
    if (generalLabels) {
      dispatch(setAgents(generalLabels));
    }
  }, [generalLabels]);

  const CHARTS = [
    <Pie key={0} series={serAgentSatisfactionOverall} title={TITLES[0]} />,
    <Bar
      key={1}
      type="group"
      series={serAgentSatisfaction}
      data={generalLabels}
      questionType="AgentSatisfaction"
      label="Agent Names"
      title={TITLES[0]}
    />,
    <Pie key={3} series={serServiceSatisfactionOverall} title={TITLES[1]} />,
    <Bar
      key={4}
      type="group"
      series={serServiceSatisfaction}
      data={generalLabels}
      questionType="ServiceSatisfaction"
      label="Agent Names"
      title={TITLES[1]}
    />,
    <Bar
      key={2}
      dataset={timeDataset}
      questionType=""
      title="Total Calls Per Hour"
    />,
  ];

  return (
    <Box
      mt={2}
      sx={{ flexGrow: 1 }}
      justifyContent="center"
      alignItems="center"
    >
      <div className="App">
        {error ? (
          <Alert severity="error" sx={{ marginTop: "-17px" }}>
            There was an error while fetching data from server. Please try again
            later.
          </Alert>
        ) : isLoading ? (
          <Loading />
        ) : isContentReady ? (
          <>
            <ChartsLayout charts={CHARTS} />
          </>
        ) : null}
      </div>
    </Box>
  );
};

export default ChartsPage;
// look & test
// publish
// add more data (dif time)
