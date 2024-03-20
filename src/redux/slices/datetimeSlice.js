import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  fromDatetime: dayjs().format().substring(0, 19).replace("T", " "),
  toDatetime: dayjs().format().substring(0, 19).replace("T", " "),
};

export const datetimeSlice = createSlice({
  name: "datetime",
  initialState,
  reducers: {
    setFromDatetime: (state, action) => {
      state.fromDatetime = action.payload;
    },
    setToDatetime: (state, action) => {
      state.toDatetime = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFromDatetime, setToDatetime } = datetimeSlice.actions;

export default datetimeSlice.reducer;
