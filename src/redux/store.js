import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counterSlice";
import { dashboardData } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    [dashboardData.reducerPath]: dashboardData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardData.middleware),
});
