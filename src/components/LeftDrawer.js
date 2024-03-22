import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DropdownList from "./DropdownList";
import { color } from "../constants/color";
import { useSelector, useDispatch } from "react-redux";
import { CHATRTS_LAYOUTS, DROPDOWN_TYPE } from "../constants/general";
import {
  setSelectedAgent,
  setSelectedChartLayout,
} from "../redux/slices/filterSlice";
const drawerWidth = 240;

export default function LeftDrawer({ isOpen, toggleDrawer }) {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const dispatch = useDispatch();
  let optionsAgents = ["All", ...useSelector((state) => state.filter.agents)];
  const selectedAgent = useSelector((state) => state.filter.selectedAgent);
  const selectedLayout = useSelector((state) => state.filter.selectedLayout);
  const indexSelectedAgent = optionsAgents.indexOf(selectedAgent);
  const indexSelectedLayout = CHATRTS_LAYOUTS.indexOf(selectedLayout);

  const handleSelection = (index, type) => {
    if (type === DROPDOWN_TYPE.AGENTS_DROPDOWN) {
      console.log(">>>>>>>>>optionsAgents>>", optionsAgents[index]);
      dispatch(setSelectedAgent(optionsAgents[index]));
    } else if (type === DROPDOWN_TYPE.LAYOUT_DROPDOWN) {
      //
      dispatch(setSelectedChartLayout(CHATRTS_LAYOUTS[index]));
    }
  };
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
        <DropdownList
          label="Select Agent"
          options={optionsAgents}
          handleSelection={handleSelection}
          type={DROPDOWN_TYPE.AGENTS_DROPDOWN}
          selectedOption={indexSelectedAgent > -1 ? indexSelectedAgent : 0}
        />
      </List>
      <Divider />
      <List>
        <DropdownList
          label="Change Layout"
          options={CHATRTS_LAYOUTS}
          handleSelection={handleSelection}
          type={DROPDOWN_TYPE.LAYOUT_DROPDOWN}
          selectedOption={indexSelectedLayout}
        />
      </List>
    </Drawer>
  );
}

LeftDrawer.propTypes = {
  isOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};
