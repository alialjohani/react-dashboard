import * as React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function DateTime({ label }) {
  const [value, setValue] = React.useState(dayjs("2022-04-17T15:30"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        // sx={{
        //   ".MuiInputBase-colorPrimary": { backgroundColor: "red" },
        //   ".MuiInputBase-inputAdornedEnd": {
        //     color: "#b9b2b2",
        //     height: "30px",
        //     width: "100%",
        //   },
        // }}
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
