import React, { useState, useEffect, useContext } from "react";
import RunningTotal from "../../Components/RunningTotal/RunningTotal";
import MonthHeader from "../MonthHeader/MonthHeader";
import TodayButton from "../TodayButton/TodayButton";
import TransactionList from "../TransactionList/TransactionList";
import Grid from "@material-ui/core/Grid";
import styles from "./style.main";
import { withStyles } from "@material-ui/core/styles";
import AddButton from "../AddButton/AddButton";
import GoToDateButton from "../GoToDateButton/GoToDateButton"
import moment from "moment";
import { TransContext } from "../../App/App";

const Main = props => {
  const [transactions] = useContext(TransContext);
  const [month, setMonth] = useState(Number(moment().format("MM")));
  const [year, setYear] = useState(Number(moment().format("YYYY")));
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);

  const { classes } = props;

  // Get Monthly Transactions when year, month or transactions array changes
  useEffect(() => {
    setMonthlyTransactions(transactions.filter(trans =>
      Number(moment(trans.date).format("YYYY")) === Number(year) &&
      Number(moment(trans.date).format("MM")) === Number(month)));
  },[month, year, transactions]);

  return (
    <Grid component="main" container className={classes.main}>
      <Grid container className={classes.top}>
        <Grid container>
          <MonthHeader month={month} year={year} setMonth={setMonth} setYear={setYear} />
          <TransactionList transactions={monthlyTransactions} />
        </Grid>
        
        <RunningTotal month={month} year={year} monthlyTransactions={monthlyTransactions} transactions={transactions} />
      </Grid>
      
      <Grid container justify='flex-end'>
        <TodayButton setMonth={setMonth} setYear={setYear}>Today</TodayButton>
        <GoToDateButton setMonth={setMonth} setYear={setYear}>GoTo</GoToDateButton>
        <AddButton />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Main);