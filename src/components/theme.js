import { createTheme } from "@mui/material/styles";
import { color } from "../constants/color";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: color.grayDegree,
    },
    text: {
      primary: color.whiteDegree,
    },
    primary: {
      main: color.blueDegree,
    },
  },
});
