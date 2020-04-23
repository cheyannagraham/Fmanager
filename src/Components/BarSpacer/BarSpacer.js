import React from "react";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/styles/withStyles";

const useStyles = withStyles(theme => ({
  spacer: theme.mixins.toolbar
}));

const BarSpacer = useStyles(props => {
  return <Box className={props.classes.spacer} {...props} />;
});

export default BarSpacer;
