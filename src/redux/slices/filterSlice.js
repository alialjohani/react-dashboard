import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

// startdatetime: "01/05/2023 20:00",
//     enddatetime: "31/05/2023 04:00",
const initialState = {
  fromDatetime: dayjs().format().substring(0, 19).replace("T", " "),
  toDatetime: dayjs().format().substring(0, 19).replace("T", " "),
  agents: [],
  selectedAgent: "*",
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
      state.agents = action.payload;
    },
    setSelectedAgent: (state, action) => {
      state.selectedAgent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFromDatetime, setToDatetime, setAgents, setSelectedAgent } =
  filterSlice.actions;

export default filterSlice.reducer;
