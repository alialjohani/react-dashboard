import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
