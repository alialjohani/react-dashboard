import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DateTime from "./DateTime";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, Toolbar } from "@mui/material";
import { color } from "../const/color";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Navbar = ({ toggleDrawer }) => {
  return (
    <AppBar position="static" sx={{ padding: 1 }}>
      <StyledToolBar>
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton
            flex={1}
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            sx={{ fontSize: "20px", color: color.blueDegree }}
            onClick={() => {
              toggleDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            flex={1}
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            sx={{
              fontSize: "20px",
            }}
            variant="text"
            color="primary"
            startIcon={<ScreenRotationAltIcon />}
          >
            Switch To Table
          </Button>
        </Box>
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: 2,
          }}
        >
          <DateTime flex={2} label="Show data from:" />
          <DateTime flex={2} label="Show data until:" />
          <Button flex={1} variant="contained" color="primary" text="secondary">
            Show
          </Button>
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

Navbar.propTypes = {
  toggleDrawer: PropTypes.func,
};

export default Navbar;
