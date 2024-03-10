import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DropdownList from "./DropdownList";
import { color } from "../const/color";
const drawerWidth = 240;

const optionsAgents = [
  "All Agents",
  "Agent Name 2",
  "Agent Name 3",
  "Agent Name and Famil Name 4",
];

const optionsLayouts = [
  "1 Chart Per Row",
  "2 Charts Per Row",
  "3 Charts Per Row",
  "4 Charts Per Row",
];

export default function LeftDrawer({ isOpen, toggleDrawer }) {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <DrawerHeader>
        <IconButton
          sx={{ color: color.blueDegree }}
          onClick={() => {
            console.log("clicked");
            toggleDrawer(false);
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <DropdownList label="Select Agent" options={optionsAgents} />
      </List>
      <Divider />
      <List>
        <DropdownList label="Change Layout" options={optionsLayouts} />
      </List>
    </Drawer>
  );
}

LeftDrawer.propTypes = {
  isOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};
