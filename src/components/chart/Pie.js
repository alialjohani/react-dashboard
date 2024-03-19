import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import Stack from "@mui/material/Stack";

const Pie = ({ series, title }) => {
  return (
    <Stack direction="column">
      <Typography align="center">{title}</Typography>
      <PieChart series={series} width={400} height={200} />
    </Stack>
  );
};

Pie.propTypes = {
  series: PropTypes.array,
  title: PropTypes.string,
};

export default Pie;
