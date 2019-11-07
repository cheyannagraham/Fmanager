import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style.footer";
import Typography from "@material-ui/core/Typography";

const Footer = props => {
  const { classes } = props;

  return (
    <Grid container justify="center" color="primary" className={classes.footer}>
      <Typography className={classes.p} >
        Cheyanna Graham
      </Typography>

      <Typography className={classes.p}>
        Material UI
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
