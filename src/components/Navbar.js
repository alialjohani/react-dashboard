import * as React from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DateTime from "./DateTime";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, Toolbar } from "@mui/material";
import { color } from "../const/color";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import { getDateTimeUX } from "../utilities/reformatData";
import { setFromDatetime, setToDatetime } from "../redux/slices/filterSlice";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const VIEWS = {
  CHARTS_VIEW: {
    label: "CHARTS",
    path: "/",
  },
  TABLE_VIEW: {
    label: "TABLE",
    path: "/table",
  },
};

const Navbar = ({ toggleDrawer }) => {
  const { pathname } = useLocation();
  const fromDatetime = useSelector((state) => state.filter.fromDatetime);
  const toDatetime = useSelector((state) => state.filter.toDatetime);
  const [localFromDatetime, setLocalFromDatetime] = React.useState(
    dayjs(fromDatetime),
  );
  const [localToDatetime, setLocalToDatetime] = React.useState(
    dayjs(toDatetime),
  );
  const dispatch = useDispatch();
  const mainLabelView =
    pathname === VIEWS.TABLE_VIEW.path
      ? VIEWS.CHARTS_VIEW.label
      : VIEWS.TABLE_VIEW.label;
  const navigate = useNavigate();
  const handleSwitchPage = () => {
    if (pathname === VIEWS.TABLE_VIEW.path) {
      navigate(VIEWS.CHARTS_VIEW.path);
    } else {
      navigate(VIEWS.TABLE_VIEW.path);
    }
  };
  const handleShowButoonClick = () => {
    console.log(">> clicked");
    // update datetime (from, to), dispatch
    dispatch(setFromDatetime(getDateTimeUX(localFromDatetime)));
    dispatch(setToDatetime(getDateTimeUX(localToDatetime)));
    // update charts by making new request
  };

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
            onClick={(e) => handleSwitchPage(e.target.value)}
          >
            Switch To {mainLabelView}
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
          <DateTime
            flex={2}
            label="Show data from:"
            datetimeValue={localFromDatetime}
            onChange={setLocalFromDatetime}
          />
          <DateTime
            flex={2}
            label="Show data until:"
            datetimeValue={localToDatetime}
            onChange={setLocalToDatetime}
          />
          <Button
            flex={1}
            variant="contained"
            color="primary"
            text="secondary"
            onClick={handleShowButoonClick}
          >
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
