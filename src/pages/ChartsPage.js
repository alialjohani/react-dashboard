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

const ChartsPage = () => {
  const dispatch = useDispatch();
  const fromDatetime = useSelector((state) => state.filter.fromDatetime);
  const toDatetime = useSelector((state) => state.filter.toDatetime);
  const selectedAgent = useSelector((state) => state.filter.selectedAgent);

  let isContentReady = false;

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetGeneralDataQuery({
    startdatetime: fromDatetime,
    enddatetime: toDatetime,
    agents: selectedAgent,
  });

  let serAgentSatisfactionOverall;
  let serServiceSatisfactionOverall;
  let serServiceSatisfaction;
  let serAgentSatisfaction;
  let generalLabels;
  let timeDataset;
  if (
    !error &&
    data &&
    (data.length > 0 || Object.prototype.hasOwnProperty.call(data, "success"))
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
    <Pie key={0} series={serAgentSatisfactionOverall} title="Agents Rate" />,
    <Bar
      key={1}
      type="group"
      series={serAgentSatisfaction}
      data={generalLabels}
    />,
    <Bar key={2} dataset={timeDataset} />,
    <Pie
      key={3}
      series={serServiceSatisfactionOverall}
      title="Services Rate"
    />,
    <Bar
      key={4}
      type="group"
      series={serServiceSatisfaction}
      data={generalLabels}
    />,
    <Bar key={5} dataset={timeDataset} />,
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
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
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
// ON CLICK ->  TABLE
// BREAK POINT HANDLING
// BAR CHART (CLEAR TITLES)
// LOADING, ERROR HANDLING!

// eslint-disable-next-line no-unused-vars
// return (
//   <Box
//     mt={2}
//     sx={{ flexGrow: 1 }}
//     justifyContent="center"
//     alignItems="center"
//   >
//     <div className="App">
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : isContentReady ? (
//         <Grid
//           container
//           spacing={1}
//           justifyContent="center"
//           alignItems="center"
//           direction="row"
//           m="auto"
//         >
//           <Grid item xs={6} md={mdsize} sx={{ flexGrow: 1 }}>
//             <Pie series={serAgentSatisfactionOverall} title="Agents Rate" />
//           </Grid>
//           <Grid item xs={6} md={mdsize}>
//             <Bar
//               type="group"
//               series={serAgentSatisfaction}
//               data={generalLabels}
//             />
//           </Grid>
//           <Grid item xs={6} md={mdsize}>
//             <Bar dataset={timeDataset} />
//           </Grid>
//           <Grid item xs={6} md={mdsize}>
//             <Pie
//               series={serServiceSatisfactionOverall}
//               title="Services Rate"
//             />
//           </Grid>
//           <Grid item xs={6} md={mdsize}>
//             <Bar
//               type="group"
//               series={serServiceSatisfaction}
//               data={generalLabels}
//             />
//           </Grid>
//           <Grid item xs={6} md={mdsize}>
//             <Bar dataset={timeDataset} />
//           </Grid>
//         </Grid>
//       ) : null}
//     </div>
//   </Box>
// );
