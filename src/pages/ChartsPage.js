import React from "react";
import { Box } from "@mui/material";
// import Bar from "../components/chart/Bar";
// import Pie from "../components/chart/Pie";
// import Line from "../components/chart/Line";
import TestApi from "../components/chart/TestApi";

const ChartsPage = () => {
  return (
    <Box m={2}>
      <TestApi />
      {/* <Bar />
      <Pie />
      <Line /> */}
    </Box>
  );
};

export default ChartsPage;
