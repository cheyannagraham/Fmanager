import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = withStyles((theme) => ({
  title: {
    "font-size": "1.2rem",
  },
  total: {
    "font-size": "1.1rem",
  },
}));

const RunningTotal = useStyles((props) => {
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

  const Total = (props) => (
    <Box
      width="100%"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      className={props.classes.outer}
    >
      <Typography className={props.classes.title}>{props.title}</Typography>
      <Typography className={props.classes.total}>
        {new Intl.NumberFormat("en", {
          style: "currency",
          currency: "USD",
        }).format(props.value)}
      </Typography>
      {props.children}
    </Box>
  );

  return (
    <Box display="flex" flexWrap="wrap" width="100%" m={1}>
      <Total title="Current Total" value={currentTotal} {...props} />
      <Total title="Running Total" value={runningTotal} {...props} />
    </Box>
  );
});

export default RunningTotal;
