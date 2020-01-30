import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.runningtotal";

const RunningTotal = props => {
  const { classes } = props;

  const [currentTotal, setCurrentTotal] = useState(0);
  const [runningTotal, setRunningTotal] = useState(0);

  const calcTotal = data => {
    return data.reduce((acc, val) => Number(acc) + Number(val.amount), 0);
  };

  // Calculate current Total
  useEffect(() => {
    setCurrentTotal(calcTotal(props.currentTransactions));
  }, [props.currentTransactions]);

  // Calculate Running Total
  useEffect(() => {
    setRunningTotal(calcTotal(props.transactions));
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
      width="100%"
    >
      <Box>
        <Typography color="secondary">Current Total</Typography>
        <Typography
          id="current-total"
          align="right"
          className={classes["total-value"]}
        >
          ${currentTotal.toFixed(2)}
        </Typography>
      </Box>

      <Box>
        <Typography color="secondary">Running Total</Typography>
        <Typography
          id="run-total"
          align="right"
          className={classes["total-value"]}
        >
          ${runningTotal.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(RunningTotal);
