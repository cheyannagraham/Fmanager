import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = withStyles({
  bottom: {
    top: "auto",
    bottom: 0,
  },
});

const BottomBar = useStyles((props) => {
  return (
    <AppBar position="fixed" className={props.classes.bottom} component="div">
      <Toolbar variant="dense" disableGutters>
        {props.children}
      </Toolbar>
    </AppBar>
  );
});

export default BottomBar;
