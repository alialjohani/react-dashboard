import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DateTime from "./DateTime";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import MenuIcon from "@mui/icons-material/Menu";
import LeftDrawer from "./LeftDrawer";
import { styled, Toolbar } from "@mui/material";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Navbar = () => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    console.log("here");
    setIsLeftDrawerOpen(newOpen);
  };

  return (
    <AppBar position="static" sx={{ padding: 1 }}>
      <StyledToolBar>
        <Box
          flex={1}
          sx={{
            backgroundColor: "green",
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
            color="black"
            sx={{ fontSize: "20px" }}
            onClick={() => {
              setIsLeftDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          {isLeftDrawerOpen && (
            <LeftDrawer
              flex={3}
              isOpen={isLeftDrawerOpen}
              toggleDrawer={toggleDrawer}
            />
          )}
          <Button
            flex={1}
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            sx={{
              color: "black",
              fontSize: "20px",
            }}
            variant="text"
            startIcon={<ScreenRotationAltIcon />}
          >
            Switch To Table
          </Button>
        </Box>
        <Box
          flex={1}
          sx={{
            backgroundColor: "red",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: 2,
          }}
        >
          <DateTime flex={2} label="Show data from:" />
          <DateTime flex={2} label="Show data until:" />
          <Button flex={1} variant="contained" color="secondary">
            Show
          </Button>
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};
export default Navbar;
