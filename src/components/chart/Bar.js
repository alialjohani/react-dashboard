import React from "react";
import PropTypes from "prop-types";
import { BarChart } from "@mui/x-charts/BarChart";

const Bar = ({ series, data, type, dataset }) => {
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
      onItemClick={(event, d) => console.log(d)}
      onAxisClick={(event, d) => console.log(d)}
    />
  );
  if (type === "group") {
    content = (
      <BarChart
        series={series}
        height={290}
        xAxis={[
          { data: data, scaleType: "band", id: "axis1", label: "Agents" },
        ]}
        yAxis={[{ label: "Number of Calls" }]}
        onItemClick={(event, d) => console.log(d)}
        onAxisClick={(event, d) => console.log(d)}
      />
    );
  }
  return <>{content}</>;
};

Bar.propTypes = {
  series: PropTypes.array,
  data: PropTypes.array,
  dataset: PropTypes.array,
  type: PropTypes.string,
};

export default Bar;
