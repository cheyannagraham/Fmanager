import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = withStyles({
  title: {
    "font-size": "1.1rem",
    "font-weight": 400,
  },
  total: {
    "font-size": "1.3rem",
  },
});
const RunningTotal = useStyles((props) => {
  const { classes } = props;
  const [currentTotal, setCurrentTotal] = useState(0);
  const [runningTotal, setRunningTotal] = useState(0);

  const calcTotal = (data) => {
    return data.reduce((acc, val) => Number(acc) + Number(val.amount), 0);
  };

  // Calculate Current Total
  useEffect(() => {
    setCurrentTotal(calcTotal(props.currentTransactions));
  }, [props.currentTransactions, props.transactions]);

  // Calculate Running Total
  useEffect(() => {
    setRunningTotal(calcTotal(props.transactions));
  }, [props.transactions]);

  return (
    <Box
      display="flex"
      width="100%"
      align="right"
      mt={1}
      mr={1}
      mb={0.5}
    >
      <Box width="50%">
        <Typography className={classes.total}>
          {new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD",
          }).format(currentTotal)}
        </Typography>
        <Typography className={classes.title}>Current Total</Typography>
      </Box>

      <Box width="50%">
        <Typography className={classes.total}>
          {new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD",
          }).format(runningTotal)}
        </Typography>
        <Typography className={classes.title}>Running Total</Typography>
      </Box>
    </Box>
  );
});

export default RunningTotal;
