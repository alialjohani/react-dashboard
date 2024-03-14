import * as React from "react";
import PropTypes from "prop-types";
import { PieChart } from "@mui/x-charts/PieChart";

const Pie = ({ series }) => {
  return <PieChart series={series} width={400} height={200} />;
};

Pie.propTypes = {
  series: PropTypes.array,
};

export default Pie;
