import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.runningtotal";

const RunningTotal = props => {
  const { classes } = props;

  const [currentTotal, setCurrentTotal] = useState(0);
  const [runningTotal, setRunningTotal] = useState(0);

  // Calculate current Total
  useEffect(() => {
    setCurrentTotal(
      props.currentTransactions.reduce(
        (acc, val) => Number(acc) + Number(val.amount),
        0
      )
    );
  }, [props.currentTransactions]);

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
  // use refs!!
  useEffect(() => {
    if (runningTotal < 0)
      document.querySelector("#run-total").classList.add(classes.neg);
    else document.querySelector("#run-total").classList.remove(classes.neg);

    if (currentTotal < 0)
      document.querySelector("#current-total").classList.add(classes.neg);
    else document.querySelector("#current-total").classList.remove(classes.neg);
  }, [runningTotal, currentTotal]);

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width="100%">
      
      <Box>
        <Typography color="secondary">Current Total</Typography>
        <Typography
          id="current-total"
          align="right"
          className={classes["total-value"]}>
          ${currentTotal.toFixed(2)}
        </Typography>
      </Box>
      
      <Box>
        <Typography color="secondary">Running Total</Typography>
        <Typography
          id="run-total"
          align="right"
          className={classes["total-value"]}>
          ${runningTotal.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(RunningTotal);
