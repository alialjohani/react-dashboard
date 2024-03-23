import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import Stack from "@mui/material/Stack";
import { createSearchParams, useNavigate } from "react-router-dom";

const Pie = ({ series, title }) => {
  const navigate = useNavigate();

  const handleClick = function (d) {
    console.log("handleClick: ", d);
    console.log("handleClick: series", series[0].data[d.dataIndex]);
    const primary = series[0].data[d.dataIndex].type;
    const primaryValue = series[0].data[d.dataIndex].id + 1;
    navigate({
      pathname: "table",
      search: createSearchParams({
        primary: primary,
        primaryValue: primaryValue,
      }).toString(),
    });
  };
  // eslint-disable-next-line no-unused-vars
  return (
    <Stack direction="column">
      <Typography align="center">{title}</Typography>
      <PieChart
        series={series}
        width={400}
        height={200}
        onItemClick={(event, d) => {
          handleClick(d);
        }}
        onAxisClick={(event, d) => console.log(d)}
      />
    </Stack>
  );
};

Pie.propTypes = {
  series: PropTypes.array,
  title: PropTypes.string,
};

export default Pie;
