import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  transition: {
    transition: "height .250s ease-in-out"
  }
};

const SnackbarContainer = props => {
  const { classes } = props;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(props.snackbars.length * 60);
  }, [props.snackbars]);

  return (
    <Box
      zIndex={1400}
      width="100%"
      position="fixed"
      bottom={0}
      left={0}
      height={height}
      overflow="hidden"
      className={classes.transition}
    >
      {props.snackbars}
    </Box>
  );
};

export default withStyles(styles)(SnackbarContainer);
