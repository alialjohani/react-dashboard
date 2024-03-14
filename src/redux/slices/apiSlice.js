// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const dashboardData = createApi({
  reducerPath: "dashboardData",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dashboard.alialjohani.com/company/survey/",
  }),
  endpoints: (builder) => ({
    getGeneralData: builder.query({
      query: ({ startdatetime, enddatetime, agents }) =>
        `/query/?startdatetime=${startdatetime} &enddatetime=${enddatetime}&agents=${agents}`,
    }),
    getSpecificData: builder.query({
      query: ({
        startdatetime,
        enddatetime,
        agents,
        primary,
        primaryvalue,
        secondry,
        secondryvalue,
      }) => {
        if (secondry && secondryvalue) {
          return `/click_query/?primary=${primary}&primaryvalue=${primaryvalue}&secondry=${secondry}&secondryvalue=${secondryvalue}&startdatetime=${startdatetime}&enddatetime=${enddatetime}&agents=${agents}`;
        }
        return `/click_query/?primary=${primary}&primaryvalue=${primaryvalue}&startdatetime=${startdatetime}&enddatetime=${enddatetime}&agents=${agents}`;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGeneralDataQuery } = dashboardData;
export const { useGetSpecificDataQuery } = dashboardData;
// Clear Console From Old version
// https://dashboard.alialjohani.com/company/survey/query/?startdatetime=01/05/2023 20:00 &enddatetime= 31/05/2023 04:00&agents=*
// https://dashboard.alialjohani.com/company/survey/query/?startdatetime=01/05/2023 20:00 &enddatetime= 31/05/2023 04:00&agents=AgentA
// https://dashboard.alialjohani.com/company/survey/click_query/?primary=agentName&primaryvalue=AgentA&secondry=ServiceSatisfaction&secondryvalue=5&startdatetime=01/05/2023 20:00 &enddatetime= 31/05/2023 04:00&agents=AgentA
// https://dashboard.alialjohani.com/company/survey/click_query/?primary=ServiceSatisfaction&primaryvalue=1&startdatetime=01/05/2023 20:00 &enddatetime= 31/05/2023 04:00&agents=AgentA
// https://dashboard.alialjohani.com/company/survey/click_query/?primary=timeOnly&primaryvalue=14&secondry=ServiceSatisfaction&secondryvalue=5&startdatetime=01/05/2023 20:00 &enddatetime= 31/05/2023 04:00&agents=*
// https://dashboard.alialjohani.com/company/survey/click_query/?primary=AgentSatisfaction&primaryvalue=2&startdatetime=01/05/2023 20:00 &enddatetime= 31/05/2023 04:00&agents=*

// const { data, error, isLoading } = useGetSpecificDataQuery({
//   primary: "agentName",
//   primaryvalue: "AgentA",
//   startdatetime: "01/05/2023 20:00",
//   enddatetime: "31/05/2023 04:00",
//   agents: "*",
// });
