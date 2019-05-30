import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "./style.runningtotal";
import { withStyles } from "@material-ui/core/styles";

const RunningTotal = props => {
  const { classes } = props;

  useEffect(() => {
    if (props.runningTotal < 0)
      document.querySelector("#run-total").classList.add(classes.neg);
    else document.querySelector("#run-total").classList.remove(classes.neg);

    if (props.monthlyTotal < 0)
      document.querySelector("#monthly-total").classList.add(classes.neg);
    else document.querySelector("#monthly-total").classList.remove(classes.neg);
  });

  return (
    <Paper className={classes.container}>
      <Grid className={classes["trans-date"]}>
        <Typography
          variant="body1"
          color="primary"
          className={classes["total-head"]}
        >
          Total
        </Typography>
      </Grid>

      <Grid container className={classes.total} justify="space-between">
        <Typography variant="body1" inline>
          Monthly Total
        </Typography>

        <Typography
          id="monthly-total"
          variant="body1"
          inline
          className={classes["total-value"]}
        >
          ${props.monthlyTotal.toFixed(2)}
        </Typography>
      </Grid>
      <Divider />

      <Grid container justify="space-between" className={classes.total}>
        <Typography variant="body1" inline>
          Running Total
        </Typography>

        <Typography
          id="run-total"
          variant="body1"
          inline
          className={classes["total-value"]}
        >
          ${props.runningTotal.toFixed(2)}
        </Typography>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(RunningTotal);
