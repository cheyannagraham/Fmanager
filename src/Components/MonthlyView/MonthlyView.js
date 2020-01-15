import React, { useState, useEffect, useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import MonthHeader from "../MonthHeader/MonthHeader";
import TransactionList from "../TransactionList/TransactionList";
import { TransContext } from "../../App/App";
import RunningTotal from "../../Components/RunningTotal/RunningTotal";
import styles from "./styles.monthlyview";
import moment from "moment";

const MonthlyView = props => {
  const [transactions] = useContext(TransContext);
  const [month, setMonth] = useState(Number(moment().format("MM")));
  const [year, setYear] = useState(Number(moment().format("YYYY")));
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);

  const { classes } = props;

  // Get Monthly Transactions when year, month or transactions array changes
  useEffect(() => {
    setMonthlyTransactions(
      transactions.filter(
        trans =>
          Number(moment(trans.date).format("YYYY")) === Number(year) &&
          Number(moment(trans.date).format("MM")) === Number(month)
      )
    );
  }, [month, year, transactions]);

  return (
    <Grid container>
      <Grid container>
        <MonthHeader
          month={month}
          year={year}
          setMonth={setMonth}
          setYear={setYear}
        />
        <TransactionList transactions={monthlyTransactions} />
      </Grid>

      <RunningTotal
        currentTransactions={monthlyTransactions}
        transactions={transactions}
      />
    </Grid>
  );
};

export default withStyles(styles)(MonthlyView);
