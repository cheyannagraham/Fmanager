import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "./styles.bottombar";

const BottomBar = props => {
  const { classes } = props;

  return (
    <AppBar position="fixed" className={classes.bottom}>
      <Toolbar variant="dense" disableGutters>
        {props.children}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(BottomBar);

