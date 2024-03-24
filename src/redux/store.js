import { configureStore } from "@reduxjs/toolkit";
import { dashboardData } from "./slices/apiSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [dashboardData.reducerPath]: dashboardData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardData.middleware),
});
