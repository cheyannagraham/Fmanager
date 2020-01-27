import React from "react";
import Fab from "@material-ui/core/Fab";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.fabhoc";

const FabHOC = props => {
  const { classes } = props;

  return (
    <Fab
      className={classes["fab-container"]}
      size={props.size || "small"}
      color={props.color || "primary"}
      title={props.title}
      aria-label={props.arialabel}
      onClick={props.handleClick}
    >
      {props.children}
    </Fab>
  );
};

export default withStyles(styles)(FabHOC);
