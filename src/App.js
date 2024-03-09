import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartsPage from "./pages/ChartsPage";
import TablePage from "./pages/TablePage";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="table" element={<TablePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
