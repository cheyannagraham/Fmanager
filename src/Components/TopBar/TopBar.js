import React, { useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Face from "@material-ui/icons/Face";
import styles from "./styles.topbar";
import { UserContext } from "../../App/App";
import SideDrawerMenuButton from "../SideDrawerMenuButton/SideDrawerMenuButton";

const TopBar = props => {
  const user = useContext(UserContext);
  const { classes } = props;

  return (
    <AppBar position="fixed" className={classes.top}>
      <Toolbar variant="dense" disableGutters>
        <Box width="70%">
          <Grid wrap="nowrap" container alignItems="center">
            <Box m="0.6rem">
              <Avatar className={classes.avatar}>
                <Face fontSize="large" color="secondary" />
              </Avatar>
            </Box>
            <Typography noWrap variant="h6" color="secondary">
              {user.displayName}
            </Typography>
          </Grid>
        </Box>
        <Box width="30%" align="right" m={1}>
          <SideDrawerMenuButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);

