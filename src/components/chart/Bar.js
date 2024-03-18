import React from "react";
import PropTypes from "prop-types";
import { BarChart } from "@mui/x-charts/BarChart";

const Bar = ({ dataset }) => {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "hourLabel",
          label: "Time (Hours)",
        },
      ]}
      height={290}
      series={[{ dataKey: "hourCount", label: "Calls Per Hour" }]}
    />
  );
};

Bar.propTypes = {
  dataset: PropTypes.array,
};

export default Bar;
