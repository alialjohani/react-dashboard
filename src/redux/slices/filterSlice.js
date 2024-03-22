import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { CHATRTS_LAYOUTS } from "../../constants/general";

// startdatetime: "01/05/2023 20:00",
//     enddatetime: "31/05/2023 04:00",
const initialState = {
  fromDatetime: dayjs().format().substring(0, 19).replace("T", " "),
  toDatetime: dayjs().format().substring(0, 19).replace("T", " "),
  agents: [],
  selectedAgent: "*",
  selectedLayout: CHATRTS_LAYOUTS[2],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFromDatetime: (state, action) => {
      state.fromDatetime = action.payload;
    },
    setToDatetime: (state, action) => {
      state.toDatetime = action.payload;
    },
    setAgents: (state, action) => {
      // Only add on first time.
      if (action.payload.length > state.agents.length) {
        state.agents = action.payload;
      }
    },
    setSelectedAgent: (state, action) => {
      state.selectedAgent = action.payload === "All" ? "*" : action.payload;
    },
    setSelectedChartLayout: (state, action) => {
      state.selectedLayout = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFromDatetime,
  setToDatetime,
  setAgents,
  setSelectedAgent,
  setSelectedChartLayout,
} = filterSlice.actions;

export default filterSlice.reducer;
