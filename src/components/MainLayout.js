import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import LeftDrawer from "./LeftDrawer";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

function MainLayout() {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    console.log("here");
    setIsLeftDrawerOpen(newOpen);
  };

  return (
    <Grid container>
      <StyledBox>
        {isLeftDrawerOpen && (
          <LeftDrawer
            flex={1}
            isOpen={isLeftDrawerOpen}
            toggleDrawer={toggleDrawer}
          />
        )}
        <Box
          flex={1}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar flex={1} toggleDrawer={toggleDrawer} />
          <Outlet flex={1} />
        </Box>
      </StyledBox>
    </Grid>
  );
}

export default MainLayout;
