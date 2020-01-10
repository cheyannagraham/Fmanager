import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.runningtotal";

const RunningTotal = props => {
  const { classes } = props;

  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [runningTotal, setRunningTotal] = useState(0);

  // Calculate Monthly Total
  useEffect(() => {
    setMonthlyTotal(
      props.monthlyTransactions.reduce(
        (acc, val) => Number(acc) + Number(val.amount),
        0
      )
    );
  }, [props.month, props.year, props.monthlyTransactions]);

  // Calculate Running Total
  useEffect(() => {
    setRunningTotal(
      props.transactions.reduce(
        (acc, val) => Number(acc) + Number(val.amount),
        0
      )
    );
  }, [props.transactions]);

  // Color Positive & Negative Totals
  useEffect(() => {
    if (runningTotal < 0)
      document.querySelector("#run-total").classList.add(classes.neg);
    else document.querySelector("#run-total").classList.remove(classes.neg);

    if (monthlyTotal < 0)
      document.querySelector("#monthly-total").classList.add(classes.neg);
    else document.querySelector("#monthly-total").classList.remove(classes.neg);
  }, [runningTotal, monthlyTotal]);

  return (
    <Paper className={classes.container}>
      <Grid className={classes["trans-date"]}>
        <Typography color="secondary" className={classes["total-head"]}>
          Total
        </Typography>
      </Grid>

      <Grid container spacing={1} className={classes.total}>
        <Grid item xs={9}>
          <Typography color="primary">Monthly Total</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography
            id="monthly-total"
            align="right"
            className={classes["total-value"]}
          >
            ${monthlyTotal.toFixed(2)}
          </Typography>
        </Grid>
      </Grid>

      <Divider />

      <Grid container spacing={1} className={classes.total}>
        <Grid item xs={9}>
          <Typography color="primary">Running Total</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography
            id="run-total"
            align="right"
            className={classes["total-value"]}
          >
            ${runningTotal.toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(RunningTotal);
