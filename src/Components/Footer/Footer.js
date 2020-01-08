import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.footer";

const Footer = props => {
  const { classes } = props;

  return (
    <Grid container justify="center" color="primary" className={classes.footer}>
      <Typography className={classes.p}>
        <Link
          target="_blank"
          color="primary"
          href="https://github.com/cheyannagraham"
          rel="noreferrer"
        >
          Developed By Cheyanna Graham
        </Link>
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
