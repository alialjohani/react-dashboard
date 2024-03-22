import React from "react";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const ChartsLayout = ({ charts }) => {
  const selectedLayout = useSelector((state) => state.filter.selectedLayout);
  let chartsPerRow = Number(selectedLayout[0]);
  if (chartsPerRow === 1) {
    return charts.map((chart, key) => {
      return (
        <Stack
          key={key}
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mr={5}
          ml={5}
          mt={4}
        >
          {chart}
        </Stack>
      );
    });
  } else if (chartsPerRow === 2) {
    return (
      <>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mr={2}
          ml={2}
        >
          {charts[0]}
          {charts[3]}
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mr={2}
          ml={2}
        >
          {charts[1]}
          {charts[4]}
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mr={2}
          ml={2}
        >
          {charts[2]}
          {charts[5]}
        </Stack>
      </>
    );
  }

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        mr={2}
        ml={2}
      >
        {charts[0]}
        {charts[1]}
        {charts[2]}
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        mr={2}
        ml={2}
      >
        {charts[3]}
        {charts[4]}
        {charts[5]}
      </Stack>
    </>
  );
};

ChartsLayout.propTypes = {
  charts: PropTypes.array,
};

export default ChartsLayout;
