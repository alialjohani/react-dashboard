import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counterSlice";
import { dashboardData } from "./slices/apiSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    filter: filterSlice,
    [dashboardData.reducerPath]: dashboardData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardData.middleware),
});
