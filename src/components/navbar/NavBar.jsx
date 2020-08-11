import React from "react";

import "./navbar.css";
import {
  Grid,
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import { StylesProvider } from "@material-ui/styles";
import imagen from "../images/VICOSERTRA.png";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <StylesProvider injectFirst>
        <Grid container className="navbar">
          <Grid item xs={12}>
            <AppBar position="static">
              <Toolbar className="toolbar">
                <div className="logotipo">
                  <img className=" logo" src={imagen} alt="" />
                </div>

                <div className="search">
                  <div className="searchicon">
                    <SearchIcon />
                  </div>

                  <InputBase
                    type="search"
                    placeholder="Buscar"
                    className="input"
                  />
                </div>
                <div className="iconos">
                  <IconButton>
                    <Badge badgeContent={5} color="primary">
                      <NotificationsNoneIcon className="notificacion" />
                    </Badge>
                  </IconButton>

                  <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <SettingsIcon className="notificacion" />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
      </StylesProvider>
    </React.Fragment>
  );
};

export default NavBar;
