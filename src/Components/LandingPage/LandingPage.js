import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/styles/withStyles";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import styles from "./styles.landingpage";

const LandingPage = props => {
  const { classes } = props;

  return (
    <Grid>
      <Grid component="header" className={classes.header}>
        <Typography
          noWrap={true}
          variant="h1"
          color="primary"
          align="center"
          className={classes["header-text"]}
        >
          MY BUDGET
        </Typography>
      </Grid>

      <Grid
        container
        component="main"
        className={classes.main}
        justify="center"
        alignItems="center"
      >
        <Login />
        <Signup />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LandingPage);
