import React from "react";
import { Box, Grid } from "@mui/material";
import { useGetGeneralDataQuery } from "../redux/slices/apiSlice";
import Pie from "../components/chart/Pie";
import BarGroup from "../components/chart/BarGroup";
import Bar from "../components/chart/Bar";
import { reformatData } from "../utilities/reformatData";
// To count how many for the 'AgentSatisfaction' are rated: 1 out of 5, 2 out of 5, ..., 5 out of 5
// To count how many for the 'ServiceSatisfaction' are rated: 1 out of 5, 2 out of 5, ..., 5 out of 5

const ChartsPage = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetGeneralDataQuery({
    startdatetime: "01/05/2023 20:00",
    enddatetime: "31/05/2023 04:00",
    agents: "*",
  });
  let serAgentSatisfactionOverall;
  let serServiceSatisfactionOverall;
  let serServiceSatisfaction;
  let serAgentSatisfaction;
  let generalLabels;
  let timeDataset;
  if (!error && data) {
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
  }

  let content = <h3>Loading</h3>;
  if (!error && data) {
    content = data.success.map((d) => (
      <div key={d.surveyId}>
        <h3>surveyCallerId: {d.surveyCallerId}</h3>
        <p>{d.conversationLink}</p>
        <p>{d.ServiceSatisfaction}</p>
        <p>{d.AgentSatisfaction}</p>
        <p>{d.agentName}</p>
        <p>{d.createdDate}</p>
      </div>
    ));
  }
  console.log(content);
  console.log("timeDataset: ", timeDataset);

  return (
    <Box m={2} sx={{ flexGrow: 1 }}>
      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <Grid container spacing={2}>
            {/* <p>Hello !</p> */}
            <Grid item xs={6} md={4}>
              <Pie series={serAgentSatisfactionOverall} />
            </Grid>
            <Grid item xs={6} md={4}>
              <BarGroup series={serAgentSatisfaction} data={generalLabels} />
            </Grid>
            <Grid item xs={6} md={4}>
              <Bar dataset={timeDataset} />
            </Grid>
            <Grid item xs={6} md={4}>
              <Pie series={serServiceSatisfactionOverall} />
            </Grid>
            <Grid item xs={6} md={4}>
              <BarGroup series={serServiceSatisfaction} data={generalLabels} />
            </Grid>
            <Grid item xs={6} md={4}>
              <Bar dataset={timeDataset} />
            </Grid>
          </Grid>
        ) : null}
      </div>
    </Box>
  );
};

export default ChartsPage;

/**
const m = new Map();
x.forEach(e => {
    if(m.has(e.agentName)){
        const t = m.get(e.agentName);
        t[e.ServiceSatisfaction]++;
        m.set(e.agentName, t);
    } else {
        const t = new Array(6).fill(0);
        t[e.ServiceSatisfaction]++;
        m.set(e.agentName, t);
    }
});
m.forEach((v, k)=>{
    console.log(`k=${k}, v=${v}`)
})
* */
