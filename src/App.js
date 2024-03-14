import React from "react";
// import Counter from "./Counter";
// import TestApi from "./TestApi";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ChartsPage from "./pages/ChartsPage";
import TablePage from "./pages/TablePage";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="table" element={<TablePage />} />
      <Route path="/" element={<ChartsPage />} />
    </Route>,
  ),
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route element={<MainLayout />}>
    //         <Route path="table" element={<TablePage />} />
    //         <Route path="/" element={<ChartsPage />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
