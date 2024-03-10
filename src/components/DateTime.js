import * as React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { color } from "../const/color";
export default function DateTime({ label }) {
  const [value, setValue] = React.useState(dayjs("2022-04-17T15:30"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        sx={{
          ".MuiFormLabel-root": {
            color: color.blueDegree,
          },
        }}
        label={label}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
}

DateTime.propTypes = {
  label: PropTypes.string,
};
