import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import { useSelector } from "react-redux";

const NUMBERS = {
  ones: 1,
  twos: 2,
  threes: 3,
  fours: 4,
  fives: 5,
};
const Bar = ({ series, data, type, dataset, questionType, label, title }) => {
  const navigate = useNavigate();
  const allAgents = useSelector((state) => state.filter.agents);
  const handleClick = (d) => {
    if (d.seriesId.includes("auto")) {
      // Time Bar
      console.log("TIME-BAR"); //timeOnly&primaryvalue=14
      navigate({
        pathname: "table",
        search: createSearchParams({
          primary: "timeOnly",
          primaryValue: d.dataIndex,
        }).toString(),
      });
    } else {
      // Agents Bar
      navigate({
        pathname: "table",
        search: createSearchParams({
          primary: "agentName",
          primaryValue: allAgents[d.dataIndex],
          secondary: questionType,
          secondaryValue: NUMBERS[d.seriesId],
        }).toString(),
      });
    }

    console.log(d.dataIndex);
    console.log(d.seriesId);
  };
  let content = (
    <BarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "hourLabel",
          label: "Time (Hours)",
        },
      ]}
      yAxis={[{ label: "Number of Calls" }]}
      height={290}
      series={[{ dataKey: "hourCount", label: "Calls Per Hour" }]}
      onItemClick={(event, d) => handleClick(d)}
    />
  );
  if (type === "group") {
    content = (
      <BarChart
        series={series}
        height={290}
        xAxis={[{ data: data, scaleType: "band", id: "axis1", label: label }]}
        yAxis={[{ label: "Number of Calls" }]}
        onItemClick={(event, d) => handleClick(d)}
      />
    );
  }
  return (
    <Stack direction="column" width="100%">
      <Typography align="center">{title}</Typography>
      {content}
    </Stack>
  );
};

Bar.propTypes = {
  series: PropTypes.array,
  data: PropTypes.array,
  dataset: PropTypes.array,
  type: PropTypes.string,
  questionType: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
};

export default Bar;
