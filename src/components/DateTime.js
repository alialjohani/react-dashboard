import * as React from "react";
import PropTypes from "prop-types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { color } from "../const/color";

const DateTime = ({ label, datetimeValue, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        sx={{
          ".MuiFormLabel-root": {
            color: color.blueDegree,
          },
        }}
        label={label}
        value={datetimeValue}
        onChange={(newValue) => onChange(newValue)}
      />
    </LocalizationProvider>
  );
};

DateTime.propTypes = {
  label: PropTypes.string,
  datetimeValue: PropTypes.object,
  onChange: PropTypes.func,
};

export default DateTime;
