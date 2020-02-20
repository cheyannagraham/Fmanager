import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { UserContext } from "../../App/App";
import SideDrawerMenuButton from "../SideDrawerMenuButton/SideDrawerMenuButton";

const TopBar = props => {
  const user = useContext(UserContext);

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense" disableGutters>
        <Box
          width=" 100%"
          display="flex"
          wrap="noWrap"
          justifyContent="space-between"
          alignItems="center"
          pl={1.5}
        >
          <Typography noWrap variant="h6">
            {user.displayName}
          </Typography>
          <SideDrawerMenuButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
