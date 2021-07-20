// Play around with spacing
// https://material-ui.com/system/spacing/

import React from "react";
import logo from "../logo.png";

import {
  Typography,
  AppBar,
  Toolbar,
  ButtonBase,
  Button,
} from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";

const Navbar = () => {
  return (
    <AppBar position="relative" color="transparent">
      <Toolbar>
        <ButtonBase>
          <img src={logo} className="App-logo" alt="logo" />
        </ButtonBase>
        <Button>Discover</Button>
        <Button>Home</Button>
        <Button>Live</Button>
        <Button>Become a Partner</Button>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          variant="outlined"
        >
          <div>
            <MenuIcon />
            <AccountCircleIcon />
          </div>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
