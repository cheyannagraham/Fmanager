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
  const [month, setMonth] = useState(moment().format("M"));
  const [year, setYear] = useState(moment().format("YYYY"));
  const [transactions] = useContext(TransContext);
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);

  
  const { classes } = props;

  // Filter Monthly Transactions
  useEffect(() => {
    setMonthlyTransactions(transactions.filter(trans => 
      moment(trans.date).format("YYYY") === year &&
      moment(trans.date).format("M") === month));
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