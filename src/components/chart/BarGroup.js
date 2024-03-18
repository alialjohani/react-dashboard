import React from "react";
import PropTypes from "prop-types";
import { BarChart } from "@mui/x-charts/BarChart";

const BarGroup = ({ series, data }) => {
  return (
    <BarChart
      series={series}
      height={290}
      xAxis={[{ data: data, scaleType: "band", id: "axis1" }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      onItemClick={(event, d) => console.log(d)}
      onAxisClick={(event, d) => console.log(d)}
    />
  );
};

BarGroup.propTypes = {
  series: PropTypes.array,
  data: PropTypes.array,
};

export default BarGroup;
