import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counterSlice";
import { dashboardData } from "./slices/apiSlice";
import datetimeReducer from "./slices/datetimeSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    datetime: datetimeReducer,
    [dashboardData.reducerPath]: dashboardData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardData.middleware),
});
