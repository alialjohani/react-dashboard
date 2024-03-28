import * as React from "react";
import { useGetGeneralDataQuery } from "../../redux/slices/apiSlice";
import Pie from "./Pie";

// To count how many for the 'AgentSatisfaction' are rated: 1 out of 5, 2 out of 5, ..., 5 out of 5
// To count how many for the 'ServiceSatisfaction' are rated: 1 out of 5, 2 out of 5, ..., 5 out of 5
const counter = {
  AgentSatisfaction: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
  ServiceSatisfaction: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
};

const TestApi = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetGeneralDataQuery({
    startdatetime: "01/05/2023 20:00",
    enddatetime: "31/05/2023 04:00",
    agents: "*",
  });

  let seriesAgentSatisfaction;
  let seriesServiceSatisfaction;
  if (!error && data) {
    data.success.forEach((e) => {
      counter.AgentSatisfaction[Number(e.AgentSatisfaction)]++;
      counter.ServiceSatisfaction[Number(e.ServiceSatisfaction)]++;
    });
    console.log("counter=", counter);
    seriesAgentSatisfaction = [
      {
        data: [
          {
            id: 0,
            value: counter.AgentSatisfaction[1],
            label: "1 out of 5",
          },
          {
            id: 1,
            value: counter.AgentSatisfaction[2],
            label: "2 out of 5",
          },
          {
            id: 2,
            value: counter.AgentSatisfaction[3],
            label: "3 out of 5",
          },
          {
            id: 3,
            value: counter.AgentSatisfaction[4],
            label: "4 out of 5",
          },
          {
            id: 4,
            value: counter.AgentSatisfaction[5],
            label: "5 out of 5",
          },
        ],
      },
    ];
    seriesServiceSatisfaction = [
      {
        data: [
          {
            id: 0,
            value: counter.ServiceSatisfaction[1],
            label: "1 out of 5",
          },
          {
            id: 1,
            value: counter.ServiceSatisfaction[2],
            label: "2 out of 5",
          },
          {
            id: 2,
            value: counter.ServiceSatisfaction[3],
            label: "3 out of 5",
          },
          {
            id: 3,
            value: counter.ServiceSatisfaction[4],
            label: "4 out of 5",
          },
          {
            id: 4,
            value: counter.ServiceSatisfaction[5],
            label: "5 out of 5",
          },
        ],
      },
    ];
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
  console.log("data: ", data);

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Pie series={seriesAgentSatisfaction} />
          <Pie series={seriesServiceSatisfaction} />
        </>
      ) : null}
    </div>
  );
};

export default TestApi;
